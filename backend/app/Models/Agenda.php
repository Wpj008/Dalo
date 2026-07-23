<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Agenda extends Model
{
    use HasFactory;

    protected $fillable = [
        'titre',
        'description',
        'date_debut',
        'date_fin',
        'lieu',
        'agenda_type_id',
        'statut',
        'is_public',
        'created_by'
    ];

    protected $casts = [
        'date_debut' => 'datetime',
        'date_fin' => 'datetime',
        'is_public' => 'boolean',
    ];

    /**
     * Le type du rendez-vous.
     */
    public function agendaType(): BelongsTo
    {
        return $this->belongsTo(AgendaType::class);
    }

    /**
     * L'utilisateur qui a créé le rendez-vous.
     */
    public function creator(): BelongsTo
    {
        return $this->belongsTo(User::class, 'created_by');
    }
}