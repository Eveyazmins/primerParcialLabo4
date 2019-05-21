export class Producto {
  constructor(
      public idProducto: string,
      public descripcion: string,
      public tipo: string,
      public fechaDeVencimiento: string,
      public precio: number,
      public rutaDeFoto: string
  ) { }
}
