import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { BaseResourceDTO } from '../models/base-resource.dto';

@Injectable()
export abstract class BaseResourceService<T extends BaseResourceDTO<any>> {

  protected http: HttpClient;

  constructor(
    protected apiPath: string,
    protected injector: Injector
  ) {
    this.http = injector.get(HttpClient);
  }

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(this.apiPath);
  }

  getById(id: number): Observable<T> {
    const url = `${this.apiPath}/${id}`;

    return this.http.get<T>(url);
  }

  create(resource: T): Observable<T> {
    return this.http.post<T>(this.apiPath, resource);
  }

  update(resource: T): Observable<T> {
    const url = `${this.apiPath}`;

    return this.http.put<T>(url, resource);
  }

  delete(id: number): Observable<any> {
    const url = `${this.apiPath}/${id}`;

    return this.http.delete(url);
  }
}
