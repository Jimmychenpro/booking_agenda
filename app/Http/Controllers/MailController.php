<?php

namespace App\Http\Controllers;

use App\Mail\sendContact;
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
            $receiverEmailAddress = "test.booking.lpw2@gmail.com";
            Mail::to($receiverEmailAddress)->send(new sendContact($date, $hour, $name, $mail));
            return response()->json(['success' => 'Réservation créée'], 200);
        }
        return response()->json(['success' => 'Réservation créée'], 200);
    }
}
