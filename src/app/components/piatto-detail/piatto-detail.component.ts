import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PiattoService } from '../../services/piatto.service';
import { Piatto } from '../../models/piatto.model';

@Component({
  selector: 'app-piatto-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './piatto-detail.component.html',
  styles: []
})
export class PiattoDetailComponent implements OnInit {
  piatto?: Piatto;
  categoria: string = '';

  constructor(
    private route: ActivatedRoute,
    private piattoService: PiattoService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.piattoService.getById(id).subscribe(p => this.piatto = p);
    }

    // Recupera la categoria dai query params
    const cat = this.route.snapshot.queryParamMap.get('categoria');
    if (cat) {
      this.categoria = cat;
    }
  }
}