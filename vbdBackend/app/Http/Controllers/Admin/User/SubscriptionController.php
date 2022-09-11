<?php

namespace App\Http\Controllers\Admin\User;

use App\Http\Controllers\Controller;
use App\Models\Subscription;
use Carbon\Carbon;
use Illuminate\Http\Request;

class SubscriptionController extends Controller
{
    public function allSubs()
    {
        try {
            switch (request('status')) {
                case 'requested':
                    $subs = Subscription::where('status', '!=', 2)->get();
                    break;
                case 'confirmed':
                    $subs = Subscription::where('status', 2)->get();
                    break;
                default:
                    $subs = Subscription::all();
                    break;
            }
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

    public function show(Subscription $subscription)
    {
        try {
            $subscription->update(['status' => 1]);
            return response()->json([
                'status' => true,
                'subscription' => $subscription
            ], 200);
        } catch (\Throwable $e) {
            return response()->json([
                'message' => $e->getMessage()
            ]);
        }
    }

    public function update(Request $request, Subscription $subscription)
    {
        try {
            // Update subscription
            $subscription->update([
                'schedule' => Carbon::parse($request->schedule),
                'status' => 2
            ]);

            return response()->json([
                'message' => 'Subscription Confirmed'
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
