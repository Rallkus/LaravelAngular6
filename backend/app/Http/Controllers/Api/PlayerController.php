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
        $details = Players::where('slug', $player)->first();
        $guild = Guilds::where('id', $details['guilds_id'])->first();
        $details['guild'] = $guild['name'];
        return $this->respondWithTransformer($details);
    }

}