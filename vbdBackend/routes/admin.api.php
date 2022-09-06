<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::group(['middleware' => ['auth:sanctum', 'role:admin'], 'as' => 'admin.'], function () {
    // Role permission routes
    Route::get('/roles', [\App\Http\Controllers\Auth\RolePermissionController::class, 'allRoles'])->name('role.all');

    Route::get('/permissions', [\App\Http\Controllers\Auth\RolePermissionController::class, 'allPermissions'])->name('permission.all');

    Route::post('/role/create', [\App\Http\Controllers\Auth\RolePermissionController::class, 'createRole'])->name('role.create');

    Route::put('/role/update/{id}', [\App\Http\Controllers\Auth\RolePermissionController::class, 'updateRole'])->name('role.update');

});
