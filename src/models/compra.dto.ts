import { RecebimentoDTO } from "./recebimento.dto";
import { VendaDTO } from "./venda.dto";

export class Compra{
    constructor(
      public cnpj?: string,
      public nomeFantasia?: string,
      public telefone?: string,
      public divida?: number,
      public visualizar?: boolean,
      public compras?: Array<VendaDTO>,
      public pagamentos?: Array<RecebimentoDTO>,
      public clienteId?: number
    ) {
    }
  
    static fromJson(jsonData: any): Compra{
      return Object.assign(new Compra(), jsonData);
    }
}