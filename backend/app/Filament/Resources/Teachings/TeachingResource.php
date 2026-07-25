<?php

namespace App\Filament\Resources\Teachings;

use App\Filament\Resources\Teachings\Pages\CreateTeaching;
use App\Filament\Resources\Teachings\Pages\EditTeaching;
use App\Filament\Resources\Teachings\Pages\ListTeachings;
use App\Filament\Resources\Teachings\Schemas\TeachingForm;
use App\Filament\Resources\Teachings\Tables\TeachingsTable;
use App\Models\Teaching;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;

class TeachingResource extends Resource
{
    protected static ?string $model = Teaching::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedAcademicCap;

    protected static ?string $navigationLabel = 'Enseignements';

    protected static ?string $modelLabel = 'Enseignement';

    protected static ?string $pluralModelLabel = 'Enseignements';

    protected static string|\UnitEnum|null $navigationGroup = 'Contenus';

    protected static ?int $navigationSort = 1;

    protected static ?string $recordTitleAttribute = 'titre';

    public static function form(Schema $schema): Schema
    {
        return TeachingForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return TeachingsTable::configure($table);
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
            'index' => ListTeachings::route('/'),
            'create' => CreateTeaching::route('/create'),
            'edit' => EditTeaching::route('/{record}/edit'),
        ];
    }
}