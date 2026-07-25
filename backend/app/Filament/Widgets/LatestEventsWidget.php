<?php

namespace App\Filament\Widgets;

use App\Models\Event;
use Filament\Tables;
use Filament\Tables\Table;
use Filament\Widgets\TableWidget;
use Illuminate\Database\Eloquent\Builder;

class LatestEventsWidget extends TableWidget
{
    protected static ?string $heading = 'Derniers évènements';

    protected int|string|array $columnSpan = 'full';

    public function table(Table $table): Table
    {
        return $table
            ->query(
                fn (): Builder => Event::query()
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

                Tables\Columns\TextColumn::make('eventType.nom')
                    ->label('Type')
                    ->badge(),

                Tables\Columns\TextColumn::make('date_debut')
                    ->label('Début')
                    ->dateTime('d/m/Y H:i'),

                Tables\Columns\TextColumn::make('ville'),

                Tables\Columns\BadgeColumn::make('statut')
                    ->colors([
                        'warning' => 'A_VENIR',
                        'primary' => 'EN_COURS',
                        'success' => 'TERMINE',
                    ]),
            ])
            ->paginated(false);
    }
}