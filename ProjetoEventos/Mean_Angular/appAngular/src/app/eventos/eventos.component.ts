import { Component, OnInit } from '@angular/core';
import { Evento } from '../models/Evento';
import { EventosService } from '../services/eventos.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.less']
})
export class EventosComponent implements OnInit {

  public eventos: Evento[] = new Array();
  public evento: Evento = new Evento();

  constructor(private service: EventosService) { }

  ngOnInit(): void { 
    this.findAll();
  }

  salvar(){
    if(this.evento._id){
      this.service.update(this.evento).subscribe(resposta => {
        this.findAll();
      });
    }else{
      this.service.create(this.evento).subscribe(resposta => {
        this.findAll();
      });
    }
  }

  findAll(){
    this.service.findAll().subscribe(resposta => {
        this.eventos = resposta;
    });
  }

  delete(id: string){
    this.service.delete(id).subscribe(resposta => {
      alert("item removido com sucesso!");
      this.findAll();
    }, function(resposta){
      alert("erro");
    });
  }

  preencherFormulario(evento: Evento){
    this.evento = evento;
  }

}
