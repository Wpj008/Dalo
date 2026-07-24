<?php

namespace App\Filament\Resources\AgendaTypes\Pages;

use App\Filament\Resources\AgendaTypes\AgendaTypeResource;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;

class EditAgendaType extends EditRecord
{
    protected static string $resource = AgendaTypeResource::class;

    protected function getHeaderActions(): array
    {
        return [
            DeleteAction::make(),
        ];
    }
}
