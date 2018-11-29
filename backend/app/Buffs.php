<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Buffs extends Model
{
    public $timestamps = false;
    /**
     * Get the key name for route model binding.
     *
     * @return string
     */
    public function getRouteKeyName()
    {
        return 'name';
    }
}