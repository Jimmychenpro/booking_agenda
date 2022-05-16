<?php

namespace App\Http\Controllers;

use App\Models\Day_has_hours;
use App\Models\Days;
use Illuminate\Http\Request;

class CalendarController extends Controller
{

    public function calendar(): \Illuminate\Http\JsonResponse
    {
        $calendar = Days::with('hours')->get();
        return response()->json($calendar);
    }

    public function reserved(): \Illuminate\Http\JsonResponse
    {
        $reserved = Day_has_hours::where('reserved', '=', '1')->get();
        return response()->json($reserved);
    }

}
