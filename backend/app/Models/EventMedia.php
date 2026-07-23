<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class EventMedia extends Model
{
    use HasFactory;

    protected $table = 'event_media';

    protected $fillable = [
        'event_id',
        'type',
        'nom',
        'fichier',
        'description'
    ];

    /**
     * Événement auquel appartient le média.
     */
    public function event(): BelongsTo
    {
        return $this->belongsTo(Event::class);
    }
}