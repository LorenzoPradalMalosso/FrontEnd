<?php

use App\Http\Controllers\ProdutoController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return "Hello, World!";
});

Route::get("/ping", function(){
    return response()->json(['mensagem' => 'Pong! API funcionando'], 200);
});

Route::apiResource("api/produtos", ProdutoController::class);