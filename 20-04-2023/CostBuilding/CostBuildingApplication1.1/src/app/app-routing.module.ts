import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionsComponent } from './components/questions/questions.component';
import { MenuComponent } from './components/menu/menu.component';

const routes: Routes = [
  {
    path: 'question/:id',
    component: QuestionsComponent
  },
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: '',
    redirectTo: 'menu',
    pathMatch: 'full'
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
