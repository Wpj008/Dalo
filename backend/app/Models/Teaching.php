<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Teaching extends Model
{
    use HasFactory;

    protected $fillable = [
        'titre',
        'description',
        'date',
        'orateur',
        'categorie',
        'image',
        'video_url',
        'audio_url',
        'document_url'
    ];

    protected $casts = [
        'date' => 'date',
    ];
}