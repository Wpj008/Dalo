<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class EventType extends Model
{
    use HasFactory;

    protected $fillable = [
        'nom',
        'description'
    ];

    /**
     * Un type d'événement peut être associé à plusieurs événements.
     */
    public function events(): HasMany
    {
        return $this->hasMany(Event::class);
    }
}