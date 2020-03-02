import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Error404Component } from './core/components/error404/error404.component';
import { WorkComponent } from './work/work.component';


const routes: Routes = [
  { path: '', component: WorkComponent},
  { path: 'works', component: WorkComponent},
  { path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
