<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Role extends Model
{
    /**
     * Les champs autorisés au remplissage.
     */
    protected $fillable = [
        'nom',
        'description'
    ];

    /**
     * Un rôle possède plusieurs utilisateurs.
     */
    public function users(): HasMany
    {
        return $this->hasMany(User::class);
    }
}