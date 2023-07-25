
//importo desde Angular core componet
import { Component } from "@angular/core";

//decorador e iniciadp0
@Component({
selector: 'mi-primer-componente',
templateUrl: './mi-primer-componente.component.html',





})

//creo la clase
export class miprimercomponente{

    public titulo: string;
    public mensaje: string;
    public year: number;


    //defino constructor

    constructor(){
        this.titulo = "Mi primer componente";
        this.mensaje = "Este es el primer componente";
        this.year = new Date().getFullYear();

    
        console.log("Hola desde mi primer componente");
        console.log(this.mensaje,this.titulo,this.year);

        }//fin del constructor

    

}//fin de la clase