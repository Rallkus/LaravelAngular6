<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Guilds extends Model
{
    /**
     * Get the guild of a hero.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function players()
    {
        return $this->hasMany(Players::class);
    }
}
