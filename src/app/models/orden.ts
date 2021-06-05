import { Carrito } from './carrito';

export class Orden {
   id: number;
   fecha_compra: string;
   fecha_entrega: string;
   direccion_entrega: string;
   metodo_pago: string; 
   numero_tarjeta: string;
   numero_cuota: string; 
   carrito: string;
}