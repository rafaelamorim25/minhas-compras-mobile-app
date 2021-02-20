

export class ClienteDTO {

    constructor(
        public nome?: string,
        public cpf?: string,
        public telefone?: string,
        public email?: string,
        public senha?: string,
        public id?: number
    ) {
    }
}