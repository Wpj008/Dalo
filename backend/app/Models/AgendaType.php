<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class AgendaType extends Model
{
    use HasFactory;

    protected $fillable = [
        'nom',
        'description'
    ];

    /**
     * Un type d'agenda peut être associé à plusieurs rendez-vous.
     */
    public function agendas(): HasMany
    {
        return $this->hasMany(Agenda::class);
    }
}