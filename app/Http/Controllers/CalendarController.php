<?php

namespace App\Http\Controllers;

use App\Models\Day_has_hours;
use App\Models\Days;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CalendarController extends Controller
{

    public function index(): \Illuminate\Http\JsonResponse
    {
        $calendar = DB::table('days')
            ->join('day_has_hours', 'days.id', '=', 'day_has_hours.day_id')
            ->join('hours', 'day_has_hours.hour_id', '=', 'hours.id')
            ->select('hours.name as time', 'day_has_hours.reserved', 'days.name as day')
            ->get()
            ->groupBy('day');
        return response()->json($calendar);
    }
}
