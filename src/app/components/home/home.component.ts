import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PiattoService } from '../../services/piatto.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private piattoService = inject(PiattoService);

  categorie: string[] = ['Primi', 'Secondi', 'Bevande', 'Dolci'];

  ngOnInit(): void {
    // ✅ preload del menu: quando vai in categorie sarà già in cache
    this.piattoService.preload();
  }
}
