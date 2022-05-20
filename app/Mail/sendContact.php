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

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($date, $hour, $name)
    {
        $this->date = $date;
        $this->hour = $hour;
        $this->name = $name;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->from('info@booking.be', "Booking")->view('emails.contact')->subject('Rappel de réservation');

    }
}
