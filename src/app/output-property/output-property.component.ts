import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
  // , outputs: ['mudouValor']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor = 10;

  @Output() mudouValor = new EventEmitter();

  @ViewChild('campoInput') campoValorInput: ElementRef;

  incrementa() {
    this.campoValorInput.nativeElement.value++;
    this.mudouValor.emit({novoValor: this.valor});
  }
  decrementa() {
    if (this.campoValorInput.nativeElement.value > 0) {
      this.campoValorInput.nativeElement.value--;
    }
    this.mudouValor.emit({novoValor: this.valor});
  }
  constructor() { }

  ngOnInit() {
  }

}
