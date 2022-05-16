<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\PublicacionesController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\TokenController;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::prefix('publicaciones')->group(function () {
    Route::get('/',[ PublicacionesController::class, 'index']);
    // Route::post('/store',[ PublicacionesController::class, 'store']);
    // Route::delete('/destroy',[ PublicacionesController::class, 'destroy']);
    // Route::get('/{id}',[ PublicacionesController::class, 'show']);
    // Route::put('/update/{id}',[ PublicacionesController::class, 'update']);
});

Route::prefix('auth')->group(function () {
    Route::post('/register',[ AuthController::class, 'register']);
    // Route::post('/store',[ PublicacionesController::class, 'store']);
    // Route::delete('/destroy',[ PublicacionesController::class, 'destroy']);
    // Route::get('/{id}',[ PublicacionesController::class, 'show']);
    // Route::put('/update/{id}',[ PublicacionesController::class, 'update']);
});

Route::prefix('app')->group(function () {
    Route::get('/getToken',[ TokenController::class, 'generateToken']);
    // Route::post('/store',[ PublicacionesController::class, 'store']);
    // Route::delete('/destroy',[ PublicacionesController::class, 'destroy']);
    // Route::get('/{id}',[ PublicacionesController::class, 'show']);
    // Route::put('/update/{id}',[ PublicacionesController::class, 'update']);
});
