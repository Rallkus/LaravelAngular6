<?php

namespace App\RealWorld\Transformers;

class BuffsTransformer extends Transformer
{
    protected $resourceName = 'buffs';

    public function transform($data)
    {
        return [
            'id' => $data['id'],
            'image' => $data['image'],
            'name' => $data['name'],
            'description' => $data['description'],
            'initialValueReputation' => $data['initialValueReputation'],
            'initialValueGold' => $data['initialValueGold'],
            'valueType' => $data['valueType'],
        ];
    }
}