<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\RealWorld\Slug\HasSlug;

class Guilds extends Model
{
    use HasSlug;
    /**
     * Get the guild of a hero.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function players()
    {
        return $this->hasMany(Players::class);
    }
    public function getSlugSourceColumn()
    {
        return 'name';
    }
    public function scopeLoadRelations($query)
    {
        return $query->orderBy('id', 'ASC');
    }
}
