<?php

namespace App\Filament\Resources\EventMedia\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class EventMediaForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([

                Select::make('event_id')
                    ->label('Évènement')
                    ->relationship('event', 'titre')
                    ->searchable()
                    ->preload()
                    ->required(),

                Select::make('type')
                    ->label('Type de média')
                    ->options([
                        'PHOTO' => 'Photo',
                        'VIDEO' => 'Vidéo',
                    ])
                    ->required(),

                TextInput::make('nom')
                    ->label('Nom')
                    ->required()
                    ->maxLength(255),

                FileUpload::make('fichier')
                    ->label('Fichier')
                    ->directory('event-media')
                    ->required(),

                Textarea::make('description')
                    ->label('Description')
                    ->rows(4)
                    ->columnSpanFull(),

            ])
            ->columns(2);
    }
}