<?php

namespace App\Http\Controllers;

use App\Models\reservation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ReservationController extends Controller
{
    function index()
    {
        $reservation = Reservation::all();
        return response()->json($reservation);
    }
    public function update(Request $request)
    {
        if($request->isMethod('post')) {
            $date = $request->input('date');
            $hour = $request->input('hour');
            $id = $request->input('id');

            DB::update('update reservations set date = ?, hour = ? where id = ?', [$date, $hour, $id]);

            return response()->json(['success' => 'Réservation modifiée'], 200);
        }
    }

    public function delete(Request $request)
    {
        if($request->isMethod('post')) {
            $id = $request->input('id');

            DB::delete('delete from reservations where id = ?', [$id]);

            return response()->json(['success' => 'Réservation supprimée'], 200);
        }
    }

    public function create(Request $request)
    {
        if($request->isMethod('post')) {
            $date = $request->input('date');
            $hour = $request->input('hour');
            $name = $request->input('name');
            $mail = $request->input('mail');
            $employee = $request->input('employee');

            DB::insert('insert into reservations (name, email, date, hour, employee) values (?, ?, ?, ?, ?)', [$name, $mail, $date, $hour, $employee]);

            return response()->json(['success' => 'Réservation créée'], 200);
        }
    }
}
