export class Pelicula {
    constructor(
        public id: number,
        public nombre: string,
        public tipo: string,
        public fechaDeEstreno: string,
        public cantidadPublico: number,
        public rutaDeFoto: string
    ) { }
  }
