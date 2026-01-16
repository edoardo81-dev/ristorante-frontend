import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartService } from '../../services/cart.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-conto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './conto.component.html',
  styleUrls: ['./conto.component.css']
})
export class ContoComponent {
  private cart = inject(CartService);

  items$ = this.cart.items$;

  total$ = this.cart.items$.pipe(
    map(items => items.reduce((sum, it) => sum + it.piatto.prezzo * it.quantity, 0))
  );

  inc(it: any) {
    this.cart.updateQuantity(it.piatto.id!, it.quantity + 1);
  }

  dec(it: any) {
    this.cart.updateQuantity(it.piatto.id!, it.quantity - 1);
  }

  remove(it: any) {
    this.cart.remove(it.piatto.id!);
  }

  clear() {
    this.cart.clear();
  }
}
