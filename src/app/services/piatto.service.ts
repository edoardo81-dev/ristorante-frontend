import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Piatto } from '../models/piatto.model';

@Injectable({
  providedIn: 'root'
})
export class PiattoService {
  private baseUrl = 'http://localhost:8080/api/piatti';

  constructor(private http: HttpClient) {}

  /** Tutti i piatti (non garantito ordinamento lato BE) */
  getAll(): Observable<Piatto[]> {
    return this.http.get<Piatto[]>(this.baseUrl);
  }

  /** Tutti i piatti già ordinati (categorie: Primi→Secondi→Dolci→Bevande, poi nome) */
  getOrdered(): Observable<Piatto[]> {
    return this.http.get<Piatto[]>(`${this.baseUrl}/ordered`);
  }

  getById(id: number): Observable<Piatto> {
    return this.http.get<Piatto>(`${this.baseUrl}/${id}`);
  }

  /** Piatti di una categoria (se il BE non li ordina, li ordiniamo qui per nome) */
  getByCategoria(categoria: string): Observable<Piatto[]> {
    return this.http.get<Piatto[]>(`${this.baseUrl}/categoria/${encodeURIComponent(categoria)}`)
      .pipe(map(list => [...list].sort((a, b) => a.nome.localeCompare(b.nome, undefined, {sensitivity: 'base'}))));
  }

  /** Estrae le categorie uniche a runtime */
  getCategories(): Observable<string[]> {
    return this.getAll().pipe(
      map(piatti => Array.from(new Set(piatti.map(p => p.categoria))).sort())
    );
  }

  create(piatto: Piatto) {
    return this.http.post<Piatto>(this.baseUrl, piatto);
  }

  delete(id: number) {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
