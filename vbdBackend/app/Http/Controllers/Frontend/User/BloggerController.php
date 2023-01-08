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

    public function update(Request $request, Blogger $blogger)
    {
        try {
            // validate data
            $data = $request->validate([
                'name' => 'required',
                'subject' => 'required|string',
                'expertise' => 'required',
                'description' => 'required'
            ]);

            $blogger->update([
                'user_id' => Auth::user()->id,
                'name' => $data['name'],
                'subject' => $data['subject'],
                'expertise' => $data['expertise'],
                'description' => $data['description']
            ]);

            return response()->json([
                'message' => 'Request updated Successfully'
            ], 200);
        } catch (\Throwable $e) {
            return response()->json([
                'error' => $e->getMessage()
            ], 500);
        }
    }


    public function destroy(Blogger $blogger)
    {
        try {
            $blogger->delete();

            return response()->json([
                'status' => true,
                'message' => 'Request cancelled'
            ], 200);
        } catch (\Throwable $e) {
            return response()->json([
                'status' => false,
                'message' => $e->getMessage()
            ], 500);
        }
    }
}
