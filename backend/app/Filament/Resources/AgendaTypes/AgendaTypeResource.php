<?php

namespace App\Filament\Resources\AgendaTypes;

use App\Filament\Resources\AgendaTypes\Pages\CreateAgendaType;
use App\Filament\Resources\AgendaTypes\Pages\EditAgendaType;
use App\Filament\Resources\AgendaTypes\Pages\ListAgendaTypes;
use App\Filament\Resources\AgendaTypes\Schemas\AgendaTypeForm;
use App\Filament\Resources\AgendaTypes\Tables\AgendaTypesTable;
use App\Models\AgendaType;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;

class AgendaTypeResource extends Resource
{
    protected static ?string $model = AgendaType::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedCalendarDays;

    protected static ?string $navigationLabel = "Types d'agenda";

    protected static ?string $modelLabel = "Type d'agenda";

    protected static ?string $pluralModelLabel = "Types d'agenda";

    protected static string|\UnitEnum|null $navigationGroup = 'Agenda';

    protected static ?int $navigationSort = 1;

    protected static ?string $recordTitleAttribute = 'nom';

    public static function form(Schema $schema): Schema
    {
        return AgendaTypeForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return AgendaTypesTable::configure($table);
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
            'index' => ListAgendaTypes::route('/'),
            'create' => CreateAgendaType::route('/create'),
            'edit' => EditAgendaType::route('/{record}/edit'),
        ];
    }
}