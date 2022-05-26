<?php

namespace App\Http\Controllers;

use App\Models\Employees;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class EmployeesController extends Controller
{
    public function index()
    {
        $employees = Employees::all();
        return response()->json($employees);
    }

    public function addEmployee(Request $request)
    {
        if($request->isMethod('post')) {
            $name = $request->input('name');
            $desc = $request->input('desc');

            DB::insert('insert into employees (name, description) values (?, ?)', [$name, $desc]);

            return response()->json(['success' => 'Employée créée'], 200);
        }
    }

    public function updateEmployee(Request $request)
    {
        if($request->isMethod('post')) {
            $name = $request->input('name');
            $id = $request->input('id');
            $desc = $request->input('desc');

            DB::update('update employees set name = ? ,description = ? where id = ?', [$name, $desc, $id]);

            return response()->json(['success' => 'Employée modifiée'], 200);
        }
    }

    public function delete(Request $request)
    {
        if($request->isMethod('post')) {
            $id = $request->input('id');

            DB::delete('delete from employees where id = ?', [$id]);

            return response()->json(['success' => 'Employée supprimée'], 200);
        }
    }
}
