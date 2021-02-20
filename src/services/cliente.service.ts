import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';

import { ClienteDTO } from '../models/cliente.dto';
import { Compra } from '../models/compra.dto';
import { BaseResourceService } from './base-resource.service';

@Injectable()
export class ClienteService extends BaseResourceService<ClienteDTO> {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(protected injector: Injector) {
    super('http://localhost:8080/cliente', injector);
  }

  getCompras(): Observable<Array<Compra>>{

    const url = this.apiPath + '/compras';

    return this.http.get<Array<Compra>>(url);

  }

  public recuperarSenha(email: String): Observable<HttpResponse<any>>{

    return this.http.post<HttpResponse<any>> (this.apiPath + '/recuperar-senha', '{"email":' + JSON.stringify(email) + '}', this.httpOptions);

  }

  public visualizar(id: number): Observable<HttpResponse<any>>{

    return this.http.put<HttpResponse<any>> (this.apiPath + '/' + id, this.httpOptions);

  }

  public buscar(): Observable<ClienteDTO>{

    return this.http.get<ClienteDTO> (this.apiPath + '/minhaconta', this.httpOptions);

  }

}