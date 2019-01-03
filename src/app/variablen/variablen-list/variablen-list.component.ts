import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Variable } from "../variable.model";
import { VariablenService } from "../variablen.service";


@Component({
  selector: 'app-variablen-list',
  templateUrl: './variablen-list.component.html',
  styleUrls: ['./variablen-list.component.css']
})
export class VariablenListComponent implements OnInit {
  variablen: Variable[];

  constructor(private variablenService: VariablenService, private router: Router) { }

  ngOnInit() {
    this.variablen = this.variablenService.getVariablen();
    this.variablenService.variableChanged.subscribe(
      (variablen: Variable[]) => this.variablen = variablen
    );
  }

  onNewVariable() {
    this.router.navigate(['/variablen', 'neu']);
  }

}


  
