<?php

namespace App\Http\Controllers\Api;
use App\RealWorld\Transformers\GuildsTransformer;
use App\RealWorld\Paginate\Paginate;

use App\Guilds;
use App\Players;
use Illuminate\Http\Request;

class GuildsController extends ApiController
{
    public function __construct(GuildsTransformer $transformer)
    {
        $this->transformer = $transformer;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $guilds = Guilds::with('players')->get();
        return $this->respondWithTransformer($guilds);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function players($guild)
    {
        
        $b = Guilds::where('slug', $guild)->first();
        //print_r($b);
        $a= Guilds::with('players')->get();
        //$players=$guild->select('name')->get();
        //print_r($guild);
        return $this->respondWithTransformer($b);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
