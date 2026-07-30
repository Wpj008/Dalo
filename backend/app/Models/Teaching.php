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

    protected $appends = [
        'thumbnail',
    ];

    public function getThumbnailAttribute(): string
    {
        // Image d'affiche
        if ($this->image) {
            return asset('storage/' . $this->image);
        }

        // Miniature YouTube
        if ($this->video_url) {
            $videoId = $this->extractYoutubeId($this->video_url);

            if ($videoId) {
                return "https://img.youtube.com/vi/{$videoId}/hqdefault.jpg";
            }
        }

        // Document PDF (temporaire)
        if ($this->document_url) {
            return asset('images/pdf-placeholder.jpg');
        }

        //Image par défaut
        return asset('images/default-teaching.jpg');
    }

    private function extractYoutubeId(string $url): ?string
    {
        preg_match(
            '/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/',
            $url,
            $matches
        );

        return $matches[1] ?? null;
    }
}