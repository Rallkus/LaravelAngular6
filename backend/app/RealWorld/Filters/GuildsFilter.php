<?php

namespace App\RealWorld\Filters;

use App\Guilds;

class GuildsFilter extends Filter
{
    /**
     * Filter by author username.
     * Get all the articles by the user with given username.
     *
     * @param $username
     * @return \Illuminate\Database\Eloquent\Builder
     */
    protected function members($number)
    {
        /*$guilds = Guilds::where('max_members', $number)->first();
        $user = User::whereUsername($username)->first();

        $userId = $user ? $user->id : null;*/

        return $this->builder->where('max_members', $number);
    }
}