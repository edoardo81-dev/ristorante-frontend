import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService, CartItem } from '../../services/cart.service';
import { PiattoService } from '../../services/piatto.service';
import { Piatto } from '../../models/piatto.model';

@Component({
  selector: 'app-conto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './conto.component.html',
  styles: []
})
export class ContoComponent {
  items: CartItem[] = [];
  piatti: Piatto[] = [];
  selectedPiatto?: Piatto;
  qty: number = 1;

  constructor(private cart: CartService, private piattoService: PiattoService) {
    this.cart.items$.subscribe(items => this.items = items);

    // usa l’endpoint ordinato per popolare la select
    this.piattoService.getOrdered().subscribe(p => this.piatti = p);
  }

  addSelected() {
    if (this.selectedPiatto) {
      this.cart.addToCart(this.selectedPiatto, this.qty);
      this.qty = 1;
    } else {
      alert('Seleziona un piatto');
    }
  }

  updateQuantity(item: CartItem, event: any) {
    const q = Number(event.target.value);
    this.cart.updateQuantity(item.piatto.id!, q);
  }

  remove(item: CartItem) {
    this.cart.remove(item.piatto.id!);
  }

  clear() {
    this.cart.clear();
  }

  get total(): number {
    return this.cart.getTotal();
  }
}
