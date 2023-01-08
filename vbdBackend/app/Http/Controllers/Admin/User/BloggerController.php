<?php

namespace App\Http\Controllers\Admin\User;

use App\Http\Controllers\Controller;
use App\Models\Blogger;
use Illuminate\Http\Request;

class BloggerController extends Controller
{
    public function allblogs()
    {
        try {
            switch (request('status')) {
                case 'requested':
                    $bloggers = Blogger::where('status', 0)->get();
                    break;
                case 'confirmed':
                    $bloggers = Blogger::where('status', 1)->get();
                    break;
                default:
                    $bloggers = Blogger::all();
                    break;
            }
            return response()->json([
                'status' => true,
                'blogger' => $bloggers
            ], 200);
        } catch (\Throwable $e) {
            return response()->json([
                'message' => $e->getMessage()
            ]);
        }
    }

    public function show(Blogger $blogger)
    {
        try {
            return response()->json([
                'status' => true,
                'blogger' => $blogger
            ], 200);
        } catch (\Throwable $e) {
            return response()->json([
                'message' => $e->getMessage()
            ]);
        }
    }

    public function update(Request $request, Blogger $blogger)
    {
        try {
            $blogger->update(['status' => $request->status]);

            return response()->json([
                'message' => $request->status == 1 ? 'Request Confirmed Successfully':'Request Cancelled'
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
