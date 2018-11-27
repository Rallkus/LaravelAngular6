<?php

namespace App\RealWorld\Transformers;

class ContactTransformer extends Transformer
{
    protected $resourceName = 'contact';

    public function transform($data)
    {
        return [
            'email' => $data['email'],
            'name' => $data['name'],
            'subject' => $data['subject'],
            'commentary' => $data['commentary'],
        ];
    }
}