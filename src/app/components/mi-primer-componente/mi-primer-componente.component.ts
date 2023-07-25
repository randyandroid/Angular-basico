
//importo desde Angular core componet
import { Component } from "@angular/core";

//decorador e iniciadp0
@Component({
selector: 'mi-primer-componente',
template: `
<h1>Mi primer componente</h1>
<p>Este es el primer componente</p>
`


})

//creo la clase
export class miprimercomponente{

    constructor(){
    
        console.log("Hola desde mi primer componente");
        }

}//fin de la clase