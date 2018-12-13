<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Heroesbasestats extends Model
{
    public $timestamps = false;

    /**
     * Get the hero that owns the stats.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function hero()
    {
        return $this->belongsTo(Heroes::class);
    }
}
