<?php

namespace App\RealWorld\Transformers;

class PlayersTransformer extends Transformer
{
    protected $resourceName = 'players';

    public function transform($data)
    {
        return [
            'image' => $data['image'],
            'username' => $data['username'],
            'experience' => $data['experience'],
        ];
    }
}