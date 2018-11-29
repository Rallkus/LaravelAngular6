<?php

namespace App\RealWorld\Transformers;

class BuffsTransformer extends Transformer
{
    protected $resourceName = 'buffs';

    public function transform($data)
    {
        return $data;
    }
}