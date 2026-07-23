<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('books', function (Blueprint $table) {

            $table->id();

            $table->string('titre');

            $table->text('description')->nullable();

            $table->string('auteur');

            $table->string('image')->nullable();

            $table->decimal('prix',10,2);

            $table->string('devise',10)->default('EUR');

            $table->string('lien_achat')->nullable();

            $table->boolean('disponible')->default(true);

            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('books');
    }
};