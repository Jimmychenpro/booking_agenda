<?php

namespace App\Http\Controllers;

use App\Models\Hours;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class HoursController extends Controller
{
    public function index()
    {
        $hours = Hours::all();
        return response()->json($hours);
    }

    public function addHour(Request $request)
    {
        if($request->isMethod('post')) {
            $hour = $request->input('hour');

            DB::insert('insert into hours (name) values (?)', [$hour]);

            return response()->json(['success' => 'Réservation créée'], 200);
        }
    }

    public function removeHour(Request $request)
    {
        if($request->isMethod('post')) {
            $id = $request->input('id');

            DB::delete('delete from hours where id = ?', [$id]);
            DB::delete('delete from day_has_hours where hour_id = ?', [$id]);

            return response()->json(['success' => 'Réservation supprimée', 'id' => $id], 200);
        }
    }

    public function updateHour(Request $request)
    {
        if($request->isMethod('post')) {
            $hour = $request->input('hour');
            $id = $request->input('id');

            DB::update('update hours set name = ? where id = ?', [$hour, $id]);

            return response()->json(['success' => 'Réservation modifiée', 'hour' => $hour, 'id' => $id], 200);
        }
    }
}
