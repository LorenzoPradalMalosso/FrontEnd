import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vaga } from '../model/vaga.model';

@Injectable({
  providedIn: 'root',
})
export class Apiservice {
  // Atributo
  private apiUrl = "http://localhost:3024/vagas"; // Caminho da API

  constructor(private http:HttpClient) {} // Ao criar um obj da API estabelece a conexão com HttpCliente

  // Métodos de Conexão com API (GET, POST, PUT, DELETE)

  // Get - Read
  getVagas(): Observable<Vaga[]> { // Observable => Permite conexões assíncronas com a API
    return this.http.get<Vaga[]>(this.apiUrl);
  }

  // Post - Create
  postVaga(vaga: Vaga) : Observable<Vaga[]> {
    return this.http.post<Vaga[]>(this.apiUrl, vaga); // Passo link da API + o OBJ
  }

  // Put - Update
  putVaga(id:any, vaga:Vaga): Observable<Vaga[]> { // Precisa passar o ID
    // Modificar o endereço da URL
    const urlUpdate = `${this.apiUrl}/${id}`; // http://localhost:3024/vagas/id
    return this.http.put<Vaga[]>(urlUpdate, vaga);
  }

  // Delete - Delete
  deleteVaga(id:any) : Observable<Vaga[]> {
    const urlDelete = `${this.apiUrl}/${id}`;
    return this.http.delete<Vaga[]>(urlDelete);
  }
}
