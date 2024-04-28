import { Component, Input } from '@angular/core';
import { Funko } from '../../../models/funko';

@Component({
  selector: 'fkl-grid',
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss'
})
export class GridComponent {  
  @Input() funkos: Funko[] = []

  constructor() { }
}
