<?php

namespace App\Http\Controllers\Api;

use App\Contact;
use App\Http\Requests\Api\ContactRequest;
use App\RealWorld\Transformers\ContactTransformer;
use Mail;

class ContactController extends ApiController
{
    /**
     * ContactController constructor.
     *
     * @param ContactTransformer $transformer
     */
    public function __construct(ContactTransformer $transformer)
    {
        $this->transformer = $transformer;
    }

    public function email(ContactRequest $request)
    {   
        $credentials = $request->only('contact.email', 'contact.name', 'contact.subject', 'contact.commentary');
        $credentials = $credentials['contact'];
        Mail::raw('Now I know how to send emails with Laravel', function($message)
        {
            $message->subject('Hi There!!');
            $message->from(config('mail.from.address'), config("app.name"));
            $message->to('serhuegi@gmail.com');
        });

        return $this->respondWithTransformer($credentials);
    }
}