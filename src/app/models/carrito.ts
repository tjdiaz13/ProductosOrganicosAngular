import { ItemCarrito } from './itemCarrito';

export class Carrito {
   id: number;
   usuario_id: number;
   precio_total: string;
   item_compras: ItemCarrito[];
}
