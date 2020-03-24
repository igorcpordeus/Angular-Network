import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdutoListComponent } from './produto-list.component';
import { CreateProdutoComponent } from './create-produto/create-produto.component';
import { UpdateProdutoComponent } from './update-produto/update-produto.component';
import { ProdutoDetailsComponent } from './produto-details/produto-details.component';
import { ContentComponent } from './content/content.component';


const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: ContentComponent },
  { path: 'produtos', component: ProdutoListComponent },
  { path: 'add', component: CreateProdutoComponent },
  { path: 'update/:id', component: UpdateProdutoComponent },
  { path: 'details/:id', component: ProdutoDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
