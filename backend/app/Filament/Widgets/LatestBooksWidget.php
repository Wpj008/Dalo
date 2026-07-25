<?php

namespace App\Filament\Widgets;

use App\Models\Book;
use Filament\Tables;
use Filament\Tables\Table;
use Filament\Widgets\TableWidget;
use Illuminate\Database\Eloquent\Builder;

class LatestBooksWidget extends TableWidget
{
    protected static ?string $heading = 'Derniers livres';

    protected int|string|array $columnSpan = 'full';

    public function table(Table $table): Table
    {
        return $table
            ->query(
                fn (): Builder => Book::query()
                    ->latest()
                    ->limit(5)
            )

            ->columns([
                Tables\Columns\ImageColumn::make('image')
                    ->label('')
                    ->circular(),

                Tables\Columns\TextColumn::make('titre')
                    ->searchable()
                    ->weight('bold'),

                Tables\Columns\TextColumn::make('auteur')
                    ->icon('heroicon-o-user'),

                Tables\Columns\TextColumn::make('prix')
                    ->money(fn (Book $record) => strtolower($record->devise))
                    ->alignEnd(),

                Tables\Columns\IconColumn::make('disponible')
                    ->label('Disponible')
                    ->boolean(),

                Tables\Columns\TextColumn::make('created_at')
                    ->label('Ajouté')
                    ->since(),
            ])
            ->paginated(false);
    }
}