<?php

namespace App\RealWorld\Transformers;
use App\RealWorld\Transformers\PlayersTransformer;
class GuildsTransformer extends Transformer
{
    protected $resourceName = 'guilds';

    public function transform($data)
    {
        return [
            'id' => $data['id'],
            'name' => $data['name'],
            'slug' => $data['slug'],
            'image' => $data['image'],
            'max_members' => $data['max_members'],
            'created_at' => $data['created_at'],
            'updated_at' => $data['updated_at'],
            'players' => $data['players'],
        ];
    }
}