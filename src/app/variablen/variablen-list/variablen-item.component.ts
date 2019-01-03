import { Component, Input } from '@angular/core';

import { Variable } from '../variable.model';
import { VariablenService } from '../variablen.service';

@Component({
  selector: 'app-variablen-item',
  templateUrl: './variablen-item.component.html',
  styleUrls: ['./variablen-item.component.css']
})
export class VariablenItemComponent {

  @Input() variableObject: Variable;
  @Input() variableObjectId: number;

  constructor(private variablenService: VariablenService ) { }

}


