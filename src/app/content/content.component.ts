import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';
import { Router } from '@angular/router';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    const options = {
      stringsElement: '#typed-strings',
      strings: ['Sistema de Cadastro de Produtos.', 'Cadastre agora mesmo seus Produtos'],
      typeSpeed: 80,
      backSpeed: 100,
      backDelay: 200,
      smartBackspace: true,
      fadeOut: true,
      showCursor: false,
      startDelay: 1000,
      loop: true
      };

      const typed: any = new Typed('.typing-element', options);
  }

  list(){
    this.router.navigate(['/produtos']);
  }

}
