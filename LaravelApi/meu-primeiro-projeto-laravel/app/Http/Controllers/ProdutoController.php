<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Produto;

class ProdutoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    // GET => /api/produtos - Listar todos os produtos
    public function index()
    {
        return response()->json(Produto::all(), 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    // POST => /api/produtos
    public function store(Request $request)
    {
        $request -> validate([
            "nome" => "required|string",
            "preco" => "required|numeric",
            "quantidade" => "required|integer"
        ]);
        $produto = Produto::create($request -> all());
        return   response() -> json($produto, 201);
    }

    /**
     * Display the specified resource.
     */
    // GET => /api/produtos/{id}
    public function show(string $id)
    {
        $produto = Produto::find($id);

        if (!$produto) {
            return response() -> json(["message" => "Produto não encontrado"], 404);
        }
        return  response()->json($produto, 200);
    }

    /**
     * Update the specified resource in storage.
     */
    // PUT => /api/produtos{id}
    public function update(Request $request, string $id)
    {
        $produto = Produto::find($id);
        if (!$produto) {
            return response()->json(["message"=>"Produtos não enconrados"], 404);

        }
        $produto->update($request->all()); // Atualizando o produto encontrado
        return response()->json($produto, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    // DELETE /api/produtos/{id}
    public function destroy(string $id)
    {
        $produto = Produto::find($id);
        if(!$produto){
            return response()->json(["message"=>"Produtos não Encontrado"],404);
        }
        $produto->delete();//Deletando o produto encontrado
        return response()->json($produto,200);
    }
}
