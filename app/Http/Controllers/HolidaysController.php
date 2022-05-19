<?php

namespace App\Http\Controllers;

use App\Models\Holidays;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class HolidaysController extends Controller
{
    public function index()
    {
        $holidays = Holidays::all();
        return response()->json($holidays);
    }

    public function update(Request $request)
    {
        if($request->isMethod('post')) {
            $date = $request->input('date');
            $id = $request->input('id');

            DB::update('update holidays set date = ? where id = ?', [$date, $id]);

            return response()->json(['success' => 'Congé modifié'], 200);
        }
    }

    public function delete(Request $request)
    {
        if($request->isMethod('post')) {
            $id = $request->input('id');

            DB::delete('delete from holidays where id = ?', [$id]);

            return response()->json(['success' => 'Congé supprimé'], 200);
        }
    }

    public function create(Request $request)
    {
        if($request->isMethod('post')) {
            $date = $request->input('date');

            DB::insert('insert into holidays (date) values (?)', [$date]);

            return response()->json(['success' => 'Congé créée'], 200);
        }
    }
}
