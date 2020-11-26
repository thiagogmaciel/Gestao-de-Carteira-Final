import { Component, OnInit } from '@angular/core';
import * as Typed from 'typed.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private router: Router) { }
  ngOnInit() {
    const options = {
      stringsElement: '#typed-strings',
      strings: ['Investimentos AlphaVantage', 'Invista até $50,000 e gerencie suas ações!'],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 200,
      smartBackspace: true,
      fadeOut: true,
      showCursor: false,
      startDelay: 1000,
      loop: true
    };

    const typed = new Typed('.typing-element', options);
    localStorage.removeItem('cadastro');
  }

  gotoCadastroClientes() {
    this.router.navigate(['cadastro-clientes']);
   }
}

