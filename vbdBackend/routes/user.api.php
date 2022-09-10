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

Route::group(['middleware' => ['auth:sanctum', 'role:user'], 'as' => 'user.'], function () {
    // Subscription routes
    Route::post('/subscription/create', [\App\Http\Controllers\Frontend\User\SubscriptionController::class, 'create'])->name('subscription.create');
    Route::get('/subscription/{subscription}',[\App\Http\Controllers\Frontend\User\SubscriptionController::class, 'getService'])->name('service.get');
    Route::put('/subscription/update/{subscription}', [\App\Http\Controllers\Frontend\User\SubscriptionController::class, 'update'])->name('subscription.update');
    Route::post('/subscription/destroy/{subscription}', [\App\Http\Controllers\Frontend\User\SubscriptionController::class, 'destroy'])->name('subscription.destroy');
});
