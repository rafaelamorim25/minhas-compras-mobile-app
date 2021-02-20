import { BaseResourceDTO } from "./base-resource.dto";

export interface FormaPagamentoDTO extends BaseResourceDTO<number>{
    id?: number,
    formaPagamento?:string,
}