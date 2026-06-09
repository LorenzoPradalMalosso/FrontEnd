import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Curriculo } from '../model/curriculo.model';

@Injectable({
  providedIn: 'root',
})
export class CurriculoService {
  // Atributo
  private apiUrl = 'http://localhost:3024/curriculos'; // Caminho da API

  constructor(private http: HttpClient) {} // Ao criar um obj da API estabelece a conexão com HttpCliente

  // Métodos de Conexão com API (GET, POST, PUT, DELETE)

  // Get - Read
  // Pega todos os curriculos
  getCurriculos(): Observable<Curriculo[]> { // Observable => Permite conexões assíncronas com a API
    return this.http.get<Curriculo[]>(this.apiUrl);
  }

  getCurriculoById(id: number): Observable<Curriculo> { // Pega o curriculo pelo ID do curriculo
    return this.http.get<Curriculo>(`${this.apiUrl}/${id}`);
  }

  getCurriculoByUsuarioId(usuarioId: number): Observable<Curriculo[]> { // Pega o curriculo pelo ID do usuário que está no currículo
    return this.http.get<Curriculo[]>(`${this.apiUrl}?usuarioId=${usuarioId}`);
  }


  // Post - Create
  postCurriculo(curriculo: Curriculo): Observable<Curriculo> {
    return this.http.post<Curriculo>(this.apiUrl, curriculo.toMap()); // Passo link da API + o OBJ
  }


  // Put - Update
  putCurriculo(curriculo: Curriculo): Observable<Curriculo> {
    return this.http.put<Curriculo>(`${this.apiUrl}/${curriculo.id}`, curriculo.toMap());
  }


  // Delete - Delete
  deleteCurriculo(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
