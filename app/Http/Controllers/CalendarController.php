<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CalendarController extends Controller
{

    public function index(): \Illuminate\Http\JsonResponse
    {
        $calendar = DB::table('days')
            ->join('day_has_hours', 'days.id', '=', 'day_has_hours.day_id')
            ->join('hours', 'day_has_hours.hour_id', '=', 'hours.id')
            ->select('hours.name as time', 'days.name as day')
            ->get()
            ->groupBy('day');
        return response()->json($calendar);
    }

    public function addHourToDay(Request $request)
    {
        if($request->isMethod('post')) {
            $day = $request->input('day');
            $hour = $request->input('hour');

            DB::insert('insert into day_has_hours (day_id, hour_id) values (?, ?)', [$day, $hour]);

            return response()->json(['success' => 'heure ajoutée'], 200);
        }
    }

    public function removeHourFromDay(Request $request)
    {
        if($request->isMethod('post')) {
            $day = $request->input('day_id');
            $hour = $request->input('hour');
            $hourId = DB::table('hours')->where('name', $hour)->value('id');


            DB::delete('delete from day_has_hours where day_id = ? and hour_id = ?', [$day, $hourId]);

            return response()->json(['success' => 'heure supprimée'], 200);
        }
    }
}
