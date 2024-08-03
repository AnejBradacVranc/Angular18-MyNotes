import { Component } from '@angular/core';
import { OrderListModule } from 'primeng/orderlist';
import { Note } from '../../../types';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [OrderListModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  notes: Note[] = [{ title: 'Dada' }, { title: 'Mama' }];
}
