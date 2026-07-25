<?php

namespace App\Filament\Widgets;

use App\Models\Teaching;
use Filament\Tables;
use Filament\Tables\Table;
use Filament\Widgets\TableWidget;
use Illuminate\Database\Eloquent\Builder;

class LatestTeachingsWidget extends TableWidget
{
    protected static ?string $heading = 'Derniers enseignements';

    protected int|string|array $columnSpan = 'full';

    public function table(Table $table): Table
    {
        return $table
            ->query(
                fn (): Builder => Teaching::query()
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

                Tables\Columns\TextColumn::make('orateur')
                    ->icon('heroicon-o-microphone'),

                Tables\Columns\TextColumn::make('categorie')
                    ->badge()
                    ->color('primary'),

                Tables\Columns\TextColumn::make('date')
                    ->date('d/m/Y'),

                Tables\Columns\IconColumn::make('video_url')
                    ->label('Vidéo')
                    ->boolean(fn (Teaching $record) => filled($record->video_url)),

                Tables\Columns\IconColumn::make('audio_url')
                    ->label('Audio')
                    ->boolean(fn (Teaching $record) => filled($record->audio_url)),

                Tables\Columns\IconColumn::make('document_url')
                    ->label('PDF')
                    ->boolean(fn (Teaching $record) => filled($record->document_url)),
            ])
            ->paginated(false);
    }
}