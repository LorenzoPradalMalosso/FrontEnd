<?php

use Illuminate\Support\Facades\Route; // Biblioteca para rotas da APIREST

Route::get("/ping", function(){
    return response()->json(["mensagem" => "Pong! API funcionando"], 200);
});