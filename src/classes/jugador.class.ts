//decoradores

function imprimirConsola(contructorClases:Function){
    console.log(contructorClases);

}


@imprimirConsola
export class Jugador {

    constructor(
        public nombre  :string,
        public posicion:string
        ){};

        // metodos de la clases
        imprimir(){
            console.log(`${this.nombre } - ${this.posicion}`);
        }

}