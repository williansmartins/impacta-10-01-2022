import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Evento } from '../models/Evento';
@Injectable({
  providedIn: 'root'
})
export class EventosService {

  constructor(private http: HttpClient) { } 

  findAll(){
    return this.http.get<Evento[]>('http://localhost:3200/eventos/');
  }

}
