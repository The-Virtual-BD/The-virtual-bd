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
    
    // User routes
    Route::get('/users', [\App\Http\Controllers\Auth\UserController::class, 'allUser'])->name('user.all');
    Route::post('/user/create', [\App\Http\Controllers\Auth\UserController::class, 'create'])->name('user.create');
    Route::get('/user/{user}',[\App\Http\Controllers\Auth\UserController::class, 'getUser'])->name('user.get');
    Route::put('/user/update/{user}', [\App\Http\Controllers\Auth\UserController::class, 'update'])->name('user.update');
    Route::post('/user/destroy/{user}', [\App\Http\Controllers\Auth\UserController::class, 'destroy'])->name('user.destroy');

    // Service routes
    Route::get('/services', [\App\Http\Controllers\Admin\ServiceController::class, 'allService'])->name('service.all');
    Route::post('/service/create', [\App\Http\Controllers\Admin\ServiceController::class, 'create'])->name('service.create');
    Route::get('/service/{service}',[\App\Http\Controllers\Admin\ServiceController::class, 'getService'])->name('service.get');
    Route::put('/service/update/{service}', [\App\Http\Controllers\Admin\ServiceController::class, 'update'])->name('service.update');
    Route::post('/service/destroy/{service}', [\App\Http\Controllers\Admin\ServiceController::class, 'destroy'])->name('service.destroy');

    // Subscription routes
    Route::get('/subscriptions', [\App\Http\Controllers\Admin\User\SubscriptionController::class, 'allSubs'])->name('subscription.all');
    Route::get('/subscription/{subscription}',[\App\Http\Controllers\Admin\User\SubscriptionController::class, 'show'])->name('subscription.view');
    Route::put('/subscription/update/{subscription}', [\App\Http\Controllers\Admin\User\SubscriptionController::class, 'update'])->name('subscription.update');
    Route::post('/subscription/destroy/{subscription}', [\App\Http\Controllers\Admin\User\SubscriptionController::class, 'destroy'])->name('subscription.destroy');

    // Blogger routes
    Route::get('/bloggers', [\App\Http\Controllers\Admin\User\BloggerController::class, 'allblogs'])->name('blogger.all');
    Route::get('/blogger/{blogger}',[\App\Http\Controllers\Admin\User\BloggerController::class, 'show'])->name('blogger.view');
    Route::put('/blogger/update/{blogger}', [\App\Http\Controllers\Admin\User\BloggerController::class, 'update'])->name('blogger.update');
    Route::post('/blogger/destroy/{blogger}', [\App\Http\Controllers\Admin\User\BloggerController::class, 'destroy'])->name('blogger.destroy');
});
