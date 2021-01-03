import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ListComponent} from './foo/list/list.component';
import {DetailComponent} from './foo/detail/detail.component';
import {UpdateComponent} from './foo/update/update.component';
import {CreateComponent} from './foo/create/create.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'list', component: ListComponent},
  {path: 'detail/:id', component: DetailComponent},
  {path: 'update/:id', component: UpdateComponent},
  {path: 'create', component: CreateComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
