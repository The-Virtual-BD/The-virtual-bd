<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Service;
use Illuminate\Http\Request;

class ServiceController extends Controller
{
    public function allService()
    {
        try {
            $services = Service::all();

            return response()->json([
                'services' => $services
            ], 200);

        } catch (\Throwable $e) {
            return response()->json([
                'message' => $e->getMessage()
            ], 500);
        }
    }
    
    public function getService(Service $service)
    {
        try {
            return response()->json([
                'service' => $service
            ], 200);

        } catch (\Throwable $e) {
            return response()->json([
                'message' => $e->getMessage()
            ], 500);
        }
    }

    public function create(Request $request)
    {
        try {
            // validate data
            $data = $request->validate([
                'name' => 'required|string|unique:services,name',
                'description' => 'required'
            ]);

            // Create service
            $service = Service::create([
                'name' => $data['name'],
                'description' => $data['description'],
            ]);

            return response()->json([
                'message' => 'Service created Successfully'
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
