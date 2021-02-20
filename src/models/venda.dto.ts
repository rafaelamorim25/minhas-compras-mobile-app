export class VendaDTO {
    constructor(
        public descricao?: string,
        public data?: Date,
        public valor?: number,
        public estornada?: boolean,
        public formaPagamento?: FormaPagamento,
        public id?: number,
    ) {
    }

    static fromJson(jsonData: any): VendaDTO {
        return Object.assign(new VendaDTO(), jsonData);
    }
}

export class FormaPagamento {
    constructor(
      public id?: number,
      public descricao?:string,
    ) {
      
    }
  
    static fromJson(jsonData: any): FormaPagamento {
      return Object.assign(new FormaPagamento(), jsonData);
    }
}