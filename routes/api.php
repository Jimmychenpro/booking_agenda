<?php

use App\Http\Controllers\CalendarController;
use App\Http\Controllers\HolidaysController;
use App\Http\Controllers\HoursController;
use App\Http\Controllers\ReservationController;
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

Route::apiResource('/calendar', CalendarController::class);
Route::apiResource('/reservations', ReservationController::class);
Route::apiResource('/holidays', HolidaysController::class);
Route::apiResource('/hours', HoursController::class);

Route::post('/calendar/add', [CalendarController::class,'addHourToDay']);
Route::post('/calendar/remove', [CalendarController::class,'removeHourFromDay']);

Route::post('/reservation/update', [ReservationController::class,'update']);
Route::post('/reservation/delete', [ReservationController::class,'delete']);
Route::post('/reservation/create', [ReservationController::class,'create']);

Route::post('/holiday/update', [HolidaysController::class,'update']);
Route::post('/holiday/delete', [HolidaysController::class,'delete']);
Route::post('/holiday/create', [HolidaysController::class,'create']);

Route::post('/hour/create', [HoursController::class,'addHour']);
Route::post('/hour/remove', [HoursController::class,'removeHour']);
Route::post('/hour/update', [HoursController::class,'updateHour']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
