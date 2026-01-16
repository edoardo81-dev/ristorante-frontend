import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-mini-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-mini-bar.component.html',
  styleUrls: ['./cart-mini-bar.component.css']
})
export class CartMiniBarComponent {
  private cart = inject(CartService);
  private router = inject(Router);

  itemsCount$ = this.cart.items$.pipe(
    map(items => items.reduce((sum, it) => sum + it.quantity, 0))
  );

  total$ = this.cart.items$.pipe(
    map(items => items.reduce((sum, it) => sum + it.piatto.prezzo * it.quantity, 0))
  );

  goToConto() {
    this.router.navigate(['/conto']);
  }
}

