import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Piatto } from '../models/piatto.model';

export interface CartItem {
  piatto: Piatto;
  quantity: number;
}

@Injectable({ providedIn: 'root' })
export class CartService {
  private itemsSubject = new BehaviorSubject<CartItem[]>([]);
  items$ = this.itemsSubject.asObservable();

  addToCart(piatto: Piatto, qty = 1) {
    const items = this.itemsSubject.getValue();
    const found = items.find(i => i.piatto.id === piatto.id);
    if (found) found.quantity += qty;
    else items.push({ piatto, quantity: qty });
    this.itemsSubject.next([...items]);
  }

  updateQuantity(piattoId: number, qty: number) {
    const items = this.itemsSubject.getValue();
    const found = items.find(i => i.piatto.id === piattoId);
    if (found) {
      found.quantity = Math.max(0, qty);
      const filtered = items.filter(i => i.quantity > 0);
      this.itemsSubject.next([...filtered]);
    }
  }

  remove(piattoId: number) {
    const items = this.itemsSubject.getValue().filter(i => i.piatto.id !== piattoId);
    this.itemsSubject.next([...items]);
  }

  clear() {
    this.itemsSubject.next([]);
  }

  getItems(): CartItem[] {
    return this.itemsSubject.getValue();
  }

  getTotal(): number {
    return this.getItems().reduce((sum, it) => sum + (it.piatto.prezzo * it.quantity), 0);
  }
}
