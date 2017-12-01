import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  pessoa: any = {
    nome: 'def',
    idade: 30
  };

  url = 'http://loiane.training';
  cursoAngular = true;
  urlImagem = 'https://angular.io/assets/images/logos/angular/angular_solidBlack.svg';
  valorAtual = '';
  valorSalvo = '';
  isMouseOver = false;
  nome = 'abc';
  nomeCurso = 'Angular';
  valorInicial = 15;

  onMudouValor(evento) {
    console.log(evento.novoValor);
  }

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  botaoClicado() {
    alert('Botão clicado!');
  }

  salvarValor(valor) {
    this.valorSalvo = valor;
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }
  constructor() { }

  ngOnInit() {
  }

}
