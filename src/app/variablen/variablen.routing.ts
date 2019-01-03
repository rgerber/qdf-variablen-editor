import { Routes, RouterModule } from "@angular/router";

import { VariablenComponent } from "./variablen.component";
import { VariableStartComponent } from "./variable-start.component";
import { VariablenEditComponent } from './variablen-edit/variablen-edit.component';
import { VariablenDetailComponent } from './variablen-detail/variablen-detail.component';


const VARIABLEN_ROUTES: Routes = [
  { path: '', component: VariablenComponent, children: [
    { path: '', component: VariableStartComponent},
    { path: 'neu', component: VariablenEditComponent},
    { path: ':id', component: VariablenDetailComponent},
    { path: ':id/bearbeiten', component: VariablenEditComponent},
  ]}
];

export const VariablenRouting = RouterModule.forChild(VARIABLEN_ROUTES);
