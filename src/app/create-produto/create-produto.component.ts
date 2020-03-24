import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoService } from '../service/produtoService.service';
import { Router } from '@angular/router';
import { ProdutoListComponent } from '../produto-list.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-produto',
  templateUrl: './create-produto.component.html',
  styleUrls: ['./create-produto.component.css']
})
export class CreateProdutoComponent implements OnInit {

  produto: Produto = new Produto();
  submitted = false;
  formCriar: FormGroup;

  constructor(private produtoService: ProdutoService, 
      private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.formCriarValidate();
  }

  newEmployee(): void {
    this.submitted = false;
    this.produto = new Produto();
  }

  save() {
    this.produtoService.createProduto(this.produto)
      .subscribe(data => console.log(data), error => console.log(error));
    this.produto = new Produto();
    //this.router.navigate(['/produtos']);
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  list(){
    this.router.navigate(['produtos']);
  }

  formCriarValidate(){
    this.formCriar = this.fb.group({
      id: ['', Validators.compose([Validators.required])],
      nome: ['', Validators.compose([Validators.required])],
      marca: ['', Validators.compose([Validators.required])],
      preco: ['', Validators.compose([Validators.required])],
      quantidade: ['', Validators.compose([Validators.required])]
    });
  }

  get id() {
    return this.formCriar.get('id');
  }
  get nome() {
    return this.formCriar.get('nome');
  }
  get marca() {
    return this.formCriar.get('marca');
  }
  get preco() {
    return this.formCriar.get('preco');
  }
  get quantidade() {
    return this.formCriar.get('quantidade');
  }
}
