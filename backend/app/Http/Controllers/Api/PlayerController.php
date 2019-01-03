<?php

namespace App\Http\Controllers\Api;

use App\RealWorld\Transformers\PlayerTransformer;
use App\Players;
use App\Guilds;

class PlayerController extends ApiController
{
    /**
     * PlayersController constructor.
     *
     * @param PlayerTransformer $transformer
     */
    public function __construct(PlayerTransformer $transformer)
    {
        $this->transformer = $transformer;

        //$this->middleware('auth.api');
    }



    public function getPlayerDetails($player)
    {
        $player = Guilds::join('players', 'guilds.id', '=', 'players.guilds_id')->where('players.slug', $player)->first();
        return $this->respondWithTransformer($player);
    }

}