import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, shareReplay, take} from 'rxjs';

import { Piatto } from '../models/piatto.model';
import { API_BASE } from '../config/api';

@Injectable({
  providedIn: 'root'
})
export class PiattoService {
  private http = inject(HttpClient);

  private baseUrl = `${API_BASE}/piatti`;

  // ✅ cache inizializzata "lazy" per evitare http undefined nei field initializer
  private menuCache$?: Observable<Piatto[]>;

  /** Tutti i piatti (non garantito ordinamento lato BE) */
  getAll(): Observable<Piatto[]> {
    return this.http.get<Piatto[]>(this.baseUrl);
  }

  /** Tutti i piatti ordinati */
  getOrdered(): Observable<Piatto[]> {
    return this.http.get<Piatto[]>(this.baseUrl).pipe(
      map(list => this.sortMenu(list))
    );
  }

  /** ✅ Metodo usato dal PiattiListComponent (con cache) */
  getMenu(): Observable<Piatto[]> {
    if (!this.menuCache$) {
      this.menuCache$ = this.getOrdered().pipe(
        shareReplay({ bufferSize: 1, refCount: false })
      );
    }
    return this.menuCache$;
  }

  /** Warmup opzionale */
  preload(): void {
    this.getMenu().pipe(take(1)).subscribe({
      next: () => {},
      error: () => {}
    });
  }

  getById(id: number): Observable<Piatto> {
    return this.http.get<Piatto>(`${this.baseUrl}/${id}`);
  }

  getByCategoria(categoria: string): Observable<Piatto[]> {
    return this.getMenu().pipe(
      map(list => list.filter(p => p.categoria === categoria))
    );
  }

  private sortMenu(list: Piatto[]): Piatto[] {
    const order = ['Primi', 'Secondi', 'Dolci', 'Bevande'];
    const idx = (c: string) => {
      const i = order.indexOf(c);
      return i === -1 ? 999 : i;
    };

    return [...list].sort((a, b) => {
      const d = idx(a.categoria) - idx(b.categoria);
      if (d !== 0) return d;
      return a.nome.localeCompare(b.nome, undefined, { sensitivity: 'base' });
    });
  }
}
