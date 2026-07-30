<?php

namespace App\Filament\Resources\Teachings\Schemas;

use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class TeachingForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([

                TextInput::make('titre')
                    ->label("Titre de l'enseignement")
                    ->required()
                    ->maxLength(255),

                Textarea::make('description')
                    ->label('Description')
                    ->rows(5)
                    ->columnSpanFull(),

                DatePicker::make('date')
                    ->label("Date d'enseignement"),

                TextInput::make('orateur')
                    ->label('Orateur')
                    ->placeholder('Ex : Pasteur Roland Dalo')
                    ->maxLength(255),

                TextInput::make('categorie')
                    ->label('Catégorie')
                    ->placeholder('Ex : Foi, Prière, Famille...')
                    ->maxLength(100),

                TextInput::make('video_url')
                    ->label('Lien vidéo'),

                TextInput::make('audio_url')
                    ->label('Lien audio'),

                FileUpload::make('document_url')
                    ->label('Document (PDF)')
                    ->directory('teachings/documents')
                    ->acceptedFileTypes([
                        'application/pdf',
                    ]),

                FileUpload::make('image')
                    ->label("Image d'affiche")
                    ->image()
                    ->disk('public')
                    ->directory('events')
                    ->visibility('public')
                    ->imageEditor(),

            ])
            ->columns(2);
    }
}