<?php

namespace App\Http\Controllers\Api;
use App\RealWorld\Transformers\GuildsTransformer;
use App\RealWorld\Paginate\Paginate;
use App\RealWorld\Filters\GuildsFilter;
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
    public function index(GuildsFilter $filter)
    {
        $guilds = new Paginate(Guilds::loadRelations());

        return $this->respondWithPagination($guilds);
    }
   /* public function index()
    {
        $guilds = Guilds::with('players')->get();
        return $this->respondWithTransformer($guilds);
    }*/
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function players($guild)
    {
        
        $guild = Guilds::where('slug', $guild)->first();
        return $this->respondWithTransformer($guild);
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
