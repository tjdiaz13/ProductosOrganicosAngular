import { Injectable } from '@angular/core';
import { Model } from '../models/client';
import { Register } from '../models/register';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  model: Model;
  register: Register;

  constructor() {

    this.model = {
      roles: [
        { id: 1, nombre: 'Cliente' },
        { id: 2, nombre: 'Productor' },
        { id: 3, nombre: 'Administrador' },
      ]
    };

    this.register = {
      rol: this.model.roles[0],
    };
  }
}
