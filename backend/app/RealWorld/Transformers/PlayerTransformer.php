<?php

namespace App\RealWorld\Transformers;

class PlayerTransformer extends Transformer
{
    protected $resourceName = 'player';

    public function transform($data)
    {
        return [
            'image' => $data['image'],
            'username' => $data['username'],
            'slug' => $data['slug'],
            'gold' => $data['gold'],
            'reputation' => $data['reputation'],
            'experience' => $data['experience'],
            'guild' => $data['name'],

        ];
    }
}