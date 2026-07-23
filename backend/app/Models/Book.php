<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    use HasFactory;

    protected $fillable = [
        'titre',
        'description',
        'auteur',
        'image',
        'prix',
        'devise',
        'lien_achat',
        'disponible'
    ];

    protected $casts = [
        'prix' => 'decimal:2',
        'disponible' => 'boolean',
    ];
}