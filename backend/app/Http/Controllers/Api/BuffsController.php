<?php

namespace App\Http\Controllers\Api;

use App\Buffs;
use App\RealWorld\Transformers\BuffsTransformer;

class BuffsController extends ApiController
{

    public function __construct(BuffsTransformer $transformer)
    {
        $this->transformer = $transformer;
    }

    public function index()
    {
        $buffs = Buffs::all()->pluck('id', 'name', 'initialValueReputation', 'initialValueGold');
        return $this->respondWithTransformer($buffs);
    }
}