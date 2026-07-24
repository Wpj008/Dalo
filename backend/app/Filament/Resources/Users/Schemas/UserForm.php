<?php

namespace App\Filament\Resources\Users\Schemas;

use App\Models\Role;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Schema;

class UserForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([

                TextInput::make('nom')
                    ->label('Nom')
                    ->required()
                    ->maxLength(100),

                TextInput::make('prenom')
                    ->label('Prénom')
                    ->required()
                    ->maxLength(100),

                TextInput::make('email')
                    ->label('Adresse e-mail')
                    ->email()
                    ->required()
                    ->unique(ignoreRecord: true)
                    ->maxLength(255),

                TextInput::make('password')
                    ->label('Mot de passe')
                    ->password()
                    ->required(fn (string $operation): bool => $operation === 'create')
                    ->dehydrated(fn ($state) => filled($state))
                    ->dehydrateStateUsing(fn ($state) => bcrypt($state))
                    ->maxLength(255),

                Select::make('role_id')
                    ->label('Rôle')
                    ->relationship('role', 'nom')
                    ->searchable()
                    ->preload()
                    ->required(),

                Toggle::make('actif')
                    ->label('Compte actif')
                    ->default(true),

            ]);
    }
}