<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker; // Importar a biblioteca de Faker
use App\Models\Produto;

class ProdutoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create();
        for ($i=0; $i < 10; $i++) { 
            Produto::create([
                "nome" => $faker->word,
                "descricao" => $faker->sentence,
                "preco" => $faker->randomFloat(2,10, 500), // Peço aleatório com 2 dígitos
                "quantidade" => $faker->numberBetween(1,100)
            ]);
        }
    }
}
