<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class sendContact extends Mailable
{
    use Queueable, SerializesModels;
    public $date;
    public $hour;
    public $name;
    public $email;
    public $employee;
    public $subject;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($date, $hour, $name, $email, $employee, $subject)
    {
        $this->date = $date;
        $this->hour = $hour;
        $this->name = $name;
        $this->email = $email;
        $this->employee = $employee;
        $this->subject = $subject;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->from('info@booking.be', "Booking")->view('emails.contact')->subject($this->subject);

    }
}
