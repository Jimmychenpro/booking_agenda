<?php

namespace App\Jobs;

use App\Mail\sendContact;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Mail;

class SendEmailJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    public $date;
    public $hour;
    public $name;
    public $mail;
    public $employee;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($date, $hour, $name, $mail, $employee)
    {
        $this->date = $date;
        $this->hour = $hour;
        $this->name = $name;
        $this->mail = $mail;
        $this->employee = $employee;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        Mail::to('test.booking.lpw2@gmail.com')->send(new sendContact($this->date, $this->hour, $this->name, $this->mail, $this->employee, 'Rappel de réservation'));
    }
}
