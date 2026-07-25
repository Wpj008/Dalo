<?php

namespace App\Filament\Resources\EventMedia;

use App\Filament\Resources\EventMedia\Pages\CreateEventMedia;
use App\Filament\Resources\EventMedia\Pages\EditEventMedia;
use App\Filament\Resources\EventMedia\Pages\ListEventMedia;
use App\Filament\Resources\EventMedia\Schemas\EventMediaForm;
use App\Filament\Resources\EventMedia\Tables\EventMediaTable;
use App\Models\EventMedia;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;

class EventMediaResource extends Resource
{
    protected static ?string $model = EventMedia::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedPhoto;

    protected static ?string $navigationLabel = 'Médias';

    protected static ?string $modelLabel = 'Média';

    protected static ?string $pluralModelLabel = 'Médias';

    protected static string|\UnitEnum|null $navigationGroup = 'Évènements';

    protected static ?int $navigationSort = 3;

    protected static ?string $recordTitleAttribute = 'nom';

    public static function form(Schema $schema): Schema
    {
        return EventMediaForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return EventMediaTable::configure($table);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => ListEventMedia::route('/'),
            'create' => CreateEventMedia::route('/create'),
            'edit' => EditEventMedia::route('/{record}/edit'),
        ];
    }
}