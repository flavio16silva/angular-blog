import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';

// Quais rotas irão direcionar para um componente
const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'content/:id',
    component:ContentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
