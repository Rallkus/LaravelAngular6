<?php

namespace App\RealWorld\Transformers;

class BuffsTransformer extends Transformer
{
    protected $resourceName = 'buffs';

    public function transform($data)
    {
        return [
            'id' => $data['id'],
            'name' => $data['name'],
            'initialValueReputation' => $data['initialValueReputation'],
            'initialValueGold' => $data['initialValueGold'],
        ];
    }
}