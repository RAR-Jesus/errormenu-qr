import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Cliente } from "../modelo/cliente.model";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  clientesColeccion?: AngularFirestoreCollection<Cliente>;
  clienteDoc?: AngularFirestoreDocument<Cliente> | any;
  clientes: Observable<Cliente[]> | any;
  cliente: Observable<Cliente> | any;

  constructor(private _firestore: AngularFirestore) {
    this.clientesColeccion = _firestore.collection('clientes', ref => ref.orderBy('nombre', 'asc'))
  }

  getCLientes(): Observable<Cliente[]>{
    this.clientes = this.clientesColeccion?.snapshotChanges().pipe(
      map( cambios => {
        return cambios.map( accion => {
          const datos = accion.payload.doc.data() as Cliente;
          datos.id = accion.payload.doc.id;
          return datos;
        })
      })
    );
    return this.clientes;
  }
}
