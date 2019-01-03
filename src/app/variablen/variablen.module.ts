import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { VariablenRouting } from "./variablen.routing";
import { SharedModule } from "../shared/shared.module";

import { VariablenComponent } from "./variablen.component";
import { VariableStartComponent } from "./variable-start.component";
import { VariablenListComponent } from './variablen-list/variablen-list.component';
import { VariablenItemComponent } from './variablen-list/variablen-item.component';
import { VariablenEditComponent } from './variablen-edit/variablen-edit.component';
import { VariablenDetailComponent } from './variablen-detail/variablen-detail.component';



@NgModule({
  declarations: [
    VariablenComponent,
    VariableStartComponent,
    VariablenListComponent,
    VariablenEditComponent,
    VariablenDetailComponent,
    VariablenItemComponent
  ],
  imports: [
    ReactiveFormsModule,
    VariablenRouting,
    SharedModule
  ]
})
export class VariablenModule { }
