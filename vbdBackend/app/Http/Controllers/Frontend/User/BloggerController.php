<?php

namespace App\Http\Controllers\Frontend\User;

use App\Http\Controllers\Controller;
use App\Models\Blogger;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class BloggerController extends Controller
{
    public function create(Request $request)
    {
        try {
            // validate data
            $data = $request->validate([
                'name' => 'required',
                'subject' => 'required|string',
                'expertise' => 'required',
                'description' => 'required'
            ]);

            // Create blogger
            $blogger = Blogger::create([
                'user_id' => Auth::user()->id,
                'name' => $data['name'],
                'subject' => $data['subject'],
                'expertise' => $data['expertise'],
                'description' => $data['description']
            ]);

            return response()->json([
                'message' => 'Application sent Successfully'
            ], 200);
        } catch (\Throwable $e) {
            return response()->json([
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function update(Request $request, Subscription $subscription)
    {
        try {
            // validate data
            $data = $request->validate([
                'service_id' => 'required',
                'subject' => 'required|string',
                'description' => 'required',
                'schedule' => 'required'
            ]);

            $file = '';
            if ($request->hasFile('attachment')) {
                $old_path = public_path('/uploads/attachment/').$subscription->attachment;
                $path = public_path('/uploads/attachment');
                $file = fileUpload($request->file('attachment'), $path, $old_path);
            }

            // Update subscription
            $subscription->update([
                'user_id' => Auth::user()->id,
                'service_id' => $data['service_id'],
                'subject' => $data['subject'],
                'description' => $data['description'],
                'schedule' => Carbon::parse($data['schedule']),
                'attachment' => $file ?: $subscription->attachment,
                'status' => 0
            ]);

            return response()->json([
                'message' => 'Subscription updated Successfully'
            ], 200);
        } catch (\Throwable $e) {
            return response()->json([
                'error' => $e->getMessage()
            ], 500);
        }
    }


    public function destroy(Subscription $subscription)
    {
        try {
            $old_path = public_path('/uploads/attachment/').$subscription->attachment;
            
            if (file_exists($old_path)) {
                unlink($old_path);
            }

            $subscription->delete();

            return response()->json([
                'status' => true,
                'message' => 'Subscription deleted successfully'
            ], 200);
        } catch (\Throwable $e) {
            return response()->json([
                'status' => false,
                'message' => $e->getMessage()
            ], 500);
        }
    }
}
