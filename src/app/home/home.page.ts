import { Component } from '@angular/core';
import { PrinterService } from '../services/printer.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    public PrinterService : PrinterService
  ) {}

  imprimir() {
    let data = {
      ModeloEquipamento: "POS_A9X0",
      PortaEquipamento: "",
      TextoImp: "teste de impressao\n<cond>teste condensado</cond>\n<expandido>Teste expandido</expandido>\n<n>teste em negrito</n>\n<direita>A direita\n<centro>Centralizado\n<esquerda>A Esquerda\n<gigante>XYZ</gigante>\n<grande>SAURUS TECNOLOGIA</grande>\n<qrCODE>www.saurus.com.br</qrCODE>\n"
    };
    this.PrinterService.imprimir(data).then();
  }
}
