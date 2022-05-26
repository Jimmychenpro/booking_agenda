<?php

namespace App\Http\Controllers;

use App\Jobs\SendEmailJob;
use App\Mail\sendContact;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class MailController extends Controller
{
    public function sendEmail(Request $request): string
    {
        if($request->isMethod('post')){
            $date = $request->input('date');
            $hour = $request->input('hour');
            $name = $request->input('name');
            $mail = $request->input('mail');
            $employee = $request->input('employee');

            $dateReminder = Carbon::createFromFormat('d/m/Y', $date);
            $dateReminder->subDay();

            $receiverEmailAddress = "test.booking.lpw2@gmail.com";
            $job2 = (new SendEmailJob($date, $hour, $name, $mail, $employee))->delay(Carbon::createFromDate($dateReminder)->startOfDay()->addHours(10));
            dispatch($job2);

            Mail::to($receiverEmailAddress)->send(new sendContact($date, $hour, $name, $mail, $employee, "Confirmation de réservation"));
        }
        return response()->json(['success' => 'Réservation créée'], 200);
    }
}
