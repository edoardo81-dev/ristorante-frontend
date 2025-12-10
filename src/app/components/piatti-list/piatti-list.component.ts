import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PiattoService } from '../../services/piatto.service';
import { Piatto } from '../../models/piatto.model';

@Component({
  selector: 'app-piatti-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './piatti-list.component.html',
  styles: []
})
export class PiattiListComponent implements OnInit {
  categoria: string = '';
  piatti: Piatto[] = [];

  constructor(
    private route: ActivatedRoute,
    private piattoService: PiattoService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const cat = params.get('categoria') || '';
      this.categoria = decodeURIComponent(cat);
      this.loadPiatti();
    });
  }

  loadPiatti() {
    this.piattoService.getByCategoria(this.categoria).subscribe({
      next: (data) => this.piatti = data, // già ordinati per nome nel service
      error: (err) => { 
        console.error(err); 
        this.piatti = []; 
      }
    });
  }
}
