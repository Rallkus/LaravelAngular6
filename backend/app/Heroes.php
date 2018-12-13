<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Heroes extends Model
{

    protected $fillable = [
        'heroname', 'players_id', 'levels_id', 'image'
    ];
    /**
     * Get the guild of a hero.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function guild()
    {
        return $this->belongsTo(Guilds::class);
    }
    /**
     * Get the user that owns the article.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function player()
    {
        return $this->belongsTo(Players::class);
    }
    /**
     * Get the level of a hero.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function levels()
    {
        return $this->hasOne(Levels::class);
    }
    /**
     * Get the level of a hero.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function stats()
    {
        return $this->hasOne(Heroesstats::class);
    }
    /**
     * Get the level of a hero.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function baseStats()
    {
        return $this->hasOne(Heroesbasestats::class);
    }

    /**
     * Get the key name for route model binding.
     *
     * @return string
     */
    public function getRouteKeyName()
    {
        return 'heroname';
    }

    /**
     * Get the attribute name to slugify.
     *
     * @return string
     */
    public function getSlugSourceColumn()
    {
        return 'heroname';
    }
}
