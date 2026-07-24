<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Filament\Models\Contracts\FilamentUser;
use Filament\Panel;

class User extends Authenticatable implements FilamentUser
{
    use HasFactory, Notifiable;

    protected $fillable = [
        'nom',
        'prenom',
        'email',
        'password',
        'role_id',
        'actif'
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected function casts(): array
    {
        return [
            'password' => 'hashed',
            'actif' => 'boolean',
        ];
    }

    /**
     * Un utilisateur appartient à un rôle.
     */
    public function role(): BelongsTo
    {
        return $this->belongsTo(Role::class);
    }

    /**
     * Un utilisateur peut créer plusieurs rendez-vous.
     */
    public function agendas(): HasMany
    {
        return $this->hasMany(Agenda::class, 'created_by');
    }

    public function getNameAttribute(): string
    {
        return trim("{$this->prenom} {$this->nom}");
    }

    public function canAccessPanel(Panel $panel): bool
    {
        return $this->actif;
    }
}