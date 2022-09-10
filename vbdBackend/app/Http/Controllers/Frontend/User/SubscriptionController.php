<?php

namespace App\Http\Controllers\Frontend\User;

use App\Http\Controllers\Controller;
use App\Models\Subscription;
use Carbon\Carbon;
use Illuminate\Http\Request;

class SubscriptionController extends Controller
{
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

            // Create subscription
            $subscription = Subscription::create([
                'service_id' => $data['service_id'],
                'subject' => $data['subject'],
                'description' => $data['description'],
                'schedule' => Carbon::parse($data['schedule']),
                'attachment' => 's',
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

    public function update(Request $request, Service $service)
    {
        try {
            if ($request->name != $service->name) {
                // validate data
                $data = $request->validate([
                    'name' => 'required|string|unique:services,name'
                ]);
            }
            // validate data
            $data = $request->validate([
                'name' => 'required|string',
                'description' => 'required',
            ]);

            // Update service
            $service->update([
                'name' => $data['name'],
                'description' => $data['description']
            ]);

            return response()->json([
                'message' => 'Service updated Successfully'
            ], 200);

        } catch (\Throwable $e) {
            return response()->json([
                'error' => $e->getMessage()
            ], 500);
        }
    }

    
    public function destroy(Service $service)
    {
        try {
            $service->delete();

            return response()->json([
                'status' => true,
                'message' => 'Service deleted successfully'
            ], 200);

        } catch (\Throwable $e) {
            return response()->json([
                'status' => false,
                'message' => $e->getMessage()
            ], 500);
        }
    }
}
