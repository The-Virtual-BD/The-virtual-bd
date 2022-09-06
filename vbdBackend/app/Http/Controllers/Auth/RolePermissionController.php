<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RolePermissionController extends Controller
{
    public function allRoles()
    {
        try {
            return response()->json([
                'status' => true,
                'roles' => Role::all()
            ], 200);
            
        } catch (\Throwable $e) {
            return response()->json([
                'error' => $e->getMessage()
            ], 500);
        }
    }


    public function allPermissions()
    {
        try {
            return response()->json([
                'status' => true,
                'permissions' => Permission::all()
            ], 200);

        } catch (\Throwable $e) {
            return response()->json([
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function createRole(Request $request)
    {
        try {
            $request->validate([
                'name' => 'required|unique:roles,name',
                'permissions' => 'required',
            ]);
    
            $role = Role::create(['name' => $request->name]);
            $role->syncPermissions($request->permissions);

            return response()->json([
                'status' => true,
                'message' => 'Role created successfully'
            ]);

        } catch (\Throwable $e) {
            return response()->json([
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function updateRole(Request $request, $id)
    {
        try {
            $role = Role::find($id);

            $request->validate([
                'name' => 'required',
                'permissions' => 'required',
            ]);
    
            $role->update(['name' => $request->name]);
            $role->syncPermissions($request->permissions);

            return response()->json([
                'status' => true,
                'message' => 'Role updated successfully'
            ]);

        } catch (\Throwable $e) {
            return response()->json([
                'error' => $e->getMessage()
            ], 500);
        }
    }
}
