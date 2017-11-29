import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
  // , outputs: ['mudouValor']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor = 10;

  @Output() mudouValor = new EventEmitter();

  incrementa() {
    this.valor++;
    this.mudouValor.emit({novoValor: this.valor});
  }
  decrementa() {
    if (this.valor > 0) {
      this.valor--;
    }
    this.mudouValor.emit({novoValor: this.valor});
  }
  constructor() { }

  ngOnInit() {
  }

}
