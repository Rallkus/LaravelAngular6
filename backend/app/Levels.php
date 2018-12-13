<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Levels extends Model
{
    public $timestamps = false;

    /**
     * Get the heroes that are in a same level
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function heroes()
    {
        return $this->belongsToMany(Heroes::class);
    }
}
