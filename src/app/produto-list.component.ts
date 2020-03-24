import { OnInit, Component } from '@angular/core';
import { Produto } from './produto';
import { Observable } from 'rxjs';
import { ProdutoService } from './service/produtoService.service';
import { Router } from '@angular/router';

@Component({
    selector: 'produtos-list',
    templateUrl: './produto-list.component.html',
    styleUrls: ['./produto-list.component.css']
})

export class ProdutoListComponent implements OnInit{
    
    produtos: Observable<Produto[]>;
    filter: string;
    paginaAtual: number =1;

  constructor(private produtoService: ProdutoService, private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.produtos = this.produtoService.getProdutoList();
  }

  deleteProduto(id: number) {
    this.produtoService.deleteProduto(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  produtoDetails(id: number){
    this.router.navigate(['details', id]);
  }

  updateProduto(id: number){
    this.router.navigate(['update', id]);
  }

}