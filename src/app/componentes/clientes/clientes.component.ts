import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/servicios/cliente.service';
import { Cliente } from 'src/app/modelo/cliente.model';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes?: Cliente[];

  constructor(private clientesServicio: ClienteService) { }

  ngOnInit(): void {

    this.clientesServicio.getCLientes().subscribe(
      clientes => {
        this.clientes = clientes;
      }
    )
  }

  getPagoTotal(){
    let pagoTotal: number = 0 ;
    if(this.clientes){
      this.clientes.forEach( cliente =>{
        pagoTotal += cliente.pagomembrecia;
      })
    }
    return pagoTotal;
  }

}
