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
    // Role routes
    Route::get('/roles', [\App\Http\Controllers\Auth\RoleController::class, 'allRoles'])->name('role.all');
    Route::post('/role/create', [\App\Http\Controllers\Auth\RoleController::class, 'createRole'])->name('role.create');
    Route::get('/role/{id}', [\App\Http\Controllers\Auth\RoleController::class, 'edit'])->name('role.edit');
    Route::put('/role/update/{id}', [\App\Http\Controllers\Auth\RoleController::class, 'updateRole'])->name('role.update');
    Route::post('/role/destroy/{id}', [\App\Http\Controllers\Auth\RoleController::class, 'destroy'])->name('role.destroy');

    // Permission routes
    Route::get('/permissions', [\App\Http\Controllers\Auth\PermissionController::class, 'allPermissions'])->name('permission.all');
    Route::post('/permission/create', [\App\Http\Controllers\Auth\PermissionController::class, 'createPermission'])->name('permission.create');
    Route::get('/permission/{id}',[\App\Http\Controllers\Auth\PermissionController::class, 'edit'])->name('permission.edit');
    Route::put('/permission/update/{id}', [\App\Http\Controllers\Auth\PermissionController::class, 'updatePermission'])->name('permission.update');
    Route::post('/permission/destroy/{id}', [\App\Http\Controllers\Auth\PermissionController::class, 'destroy'])->name('permission.destroy');
});
