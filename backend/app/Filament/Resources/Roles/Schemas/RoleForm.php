<?php

namespace App\Filament\Resources\Roles\Schemas;

use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class RoleForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('nom')
                    ->label('Nom du rôle')
                    ->placeholder('Ex : Administrateur')
                    ->required()
                    ->maxLength(50)
                    ->unique(ignoreRecord: true),

                Textarea::make('description')
                    ->label('Description')
                    ->placeholder('Description du rôle...')
                    ->rows(4)
                    ->maxLength(255)
                    ->columnSpanFull(),
            ]);
    }
}