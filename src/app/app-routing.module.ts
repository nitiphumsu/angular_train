import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Parent001Component } from './parent001/parent001.component';
import { Child001Component } from './child001/child001.component';

const routes: Routes = [
  { path: 'child', component: Child001Component },
  { path: 'parent', component: Parent001Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
