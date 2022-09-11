<?php

namespace App\Http\Controllers\Frontend\User;

use App\Http\Controllers\Controller;
use App\Models\Subscription;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SubscriptionController extends Controller
{
    public function allSubs()
    {
        try {
            $subs = Subscription::where('user_id', Auth::user()->id)->get();
            return response()->json([
                'status' => true,
                'subscriptions' => $subs
            ], 200);
        } catch (\Throwable $e) {
            return response()->json([
                'message' => $e->getMessage()
            ]);
        }
    }

    public function create(Request $request)
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
                $path = public_path('/uploads/attachment');
                $file = fileUpload($request->file('attachment'), $path);
            }

            // Create subscription
            $subscription = Subscription::create([
                'user_id' => Auth::user()->id,
                'service_id' => $data['service_id'],
                'subject' => $data['subject'],
                'description' => $data['description'],
                'schedule' => Carbon::parse($data['schedule']),
                'attachment' => $file ?: NULL,
                'status' => 0
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
