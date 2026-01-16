import { Component, inject } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

import { PiattoService } from '../../services/piatto.service';
import { CartService } from '../../services/cart.service';
import { switchMap } from 'rxjs';
import { Piatto } from '../../models/piatto.model';

@Component({
  selector: 'app-piatto-detail',
  standalone: true,
  imports: [CommonModule, NgIf, RouterModule],
  templateUrl: './piatto-detail.component.html',
  styleUrls: ['./piatto-detail.component.css']
})
export class PiattoDetailComponent {
  private route = inject(ActivatedRoute);
  private piattoService = inject(PiattoService);
  private cart = inject(CartService);

  piatto$ = this.route.paramMap.pipe(
    switchMap(params => this.piattoService.getById(Number(params.get('id'))))
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
