export class RecebimentoDTO{
    constructor(
      public data?: Date,
      public valor?: number,
      public estornada?: boolean,
      public id?: number,
    ) {
    }
  
    static fromJson(jsonData: any): RecebimentoDTO{
      return Object.assign(new RecebimentoDTO(), jsonData);
    }
}