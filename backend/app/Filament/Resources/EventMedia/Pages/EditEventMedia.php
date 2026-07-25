<?php

namespace App\Filament\Resources\EventMedia\Pages;

use App\Filament\Resources\EventMedia\EventMediaResource;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;

class EditEventMedia extends EditRecord
{
    protected static string $resource = EventMediaResource::class;

    protected function getHeaderActions(): array
    {
        return [
            DeleteAction::make(),
        ];
    }
}
