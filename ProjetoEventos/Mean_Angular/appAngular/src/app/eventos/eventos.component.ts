import { Component, OnInit } from '@angular/core';
import { EventosService } from '../services/eventos.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.less']
})
export class EventosComponent implements OnInit {

  constructor(private service: EventosService) { }

  ngOnInit(): void {
    this.service.findAll().subscribe(function(resposta){
      console.info(resposta);
    });
  }


}
