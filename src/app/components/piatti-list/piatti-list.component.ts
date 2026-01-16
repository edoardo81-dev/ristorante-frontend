import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { combineLatest, map, startWith, catchError, of } from 'rxjs';

import { PiattoService } from '../../services/piatto.service';
import { CartService } from '../../services/cart.service';
import { Piatto } from '../../models/piatto.model';

type Vm = {
  piatti: Piatto[];
  currentCat: string | null;
  loading: boolean;
  error: string | null;
};

@Component({
  selector: 'app-piatti-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './piatti-list.component.html',
  styleUrls: ['./piatti-list.component.css']
})
export class PiattiListComponent {
  private piattoService = inject(PiattoService);
  private cart = inject(CartService);
  private route = inject(ActivatedRoute);

  // cache dal service
  piatti$ = this.piattoService.getMenu().pipe(
    catchError(() =>
      of([] as Piatto[])
    )
  );

  selectedCat$ = this.route.paramMap.pipe(
    map(params => params.get('categoria')),
    startWith(null)
  );

  categorie$ = this.piatti$.pipe(
    map(list => Array.from(new Set(list.map(p => p.categoria))))
  );

  // ✅ ViewModel con loader + error
  vm$ = combineLatest([
    this.piatti$.pipe(startWith(null as unknown as Piatto[])),
    this.selectedCat$
  ]).pipe(
    map(([list, cat]): Vm => {
      // finché list è null => loading
      if (list === null) {
        return {
          piatti: [],
          currentCat: cat,
          loading: true,
          error: null
        };
      }

      // se arriva lista vuota potrebbe essere:
      // - backend down
      // - cold start lungo
      // - nessun piatto (improbabile)
      const filtered = cat ? list.filter(p => p.categoria === cat) : list;

      return {
        piatti: filtered,
        currentCat: cat,
        loading: false,
        error: null
      };
    }),
    catchError(() =>
      of({
        piatti: [],
        currentCat: null,
        loading: false,
        error: 'Il backend sta impiegando troppo tempo a rispondere. Riprova tra pochi secondi.'
      } as Vm)
    )
  );

  add(p: Piatto) {
    this.cart.addToCart(p, 1);
  }

  imgSrc(p: Piatto): string | null {
    if (!p.immagine) return null;

    const img = p.immagine.trim();
    if (img.startsWith('http') || img.startsWith('assets/')) return img;

    return `assets/img/${img}`;
  }
}
