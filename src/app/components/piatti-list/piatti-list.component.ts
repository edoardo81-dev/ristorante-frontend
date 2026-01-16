import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { combineLatest, map } from 'rxjs';

import { PiattoService } from '../../services/piatto.service';
import { CartService } from '../../services/cart.service';
import { Piatto } from '../../models/piatto.model';

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

  // menu (cache) dal service
  piatti$ = this.piattoService.getMenu();

  // ✅ categoria dalla URL: /categoria/:categoria
  selectedCat$ = this.route.paramMap.pipe(
    map(params => params.get('categoria'))
  );

  categorie$ = this.piatti$.pipe(
    map(list => Array.from(new Set(list.map(p => p.categoria))))
  );

  filtered$ = combineLatest([this.piatti$, this.selectedCat$]).pipe(
    map(([list, cat]) => {
      if (!cat) return list; // non dovrebbe mai servire ora, ma lo lasciamo safe
      return list.filter(p => p.categoria === cat);
    })
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
