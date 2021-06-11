/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
namespace fabbricasemantica {
    /**
     * Classe che rappresenta il cibo mangiabile dallo snake, ogni cibo in realta' corrisponde ad una possibile risposta
     * alla domanda che apparira' sulla pagina HTML del task
     * @author aless
     * @extends fabbricasemantica.DisplayElement
     * @class
     */
    export class Food extends fabbricasemantica.DisplayElement {
        /**
         * colore del cibo
         */
        /*private*/ color : string;

        /**
         * booleano che indica se il cibo e' la risposta corretta alla domanda che appare sullo schermo
         */
        /*private*/ answer : boolean;

        constructor(x : number, y : number, color : string) {
            super(x, y);
            if(this.color===undefined) this.color = null;
            if(this.answer===undefined) this.answer = false;
            this.color = color;
            this.answer = false;
        }

        /**
         * Ritorna una lista di oggetti Food, lunga tanto quanti sono i colori dell'array
         * colors passato in input.
         * @param {HTMLCanvasElement} canvas elemento canvas su cui saranno istanziati i cibi
         * @param {Array} colors colori dei singoli cibi da istanziare
         * @return {fabbricasemantica.Food[]} lista di cibi
         */
        public static getInstances(canvas : HTMLCanvasElement, colors : string[]) : Array<Food> {
            let foods : Array<Food> = <any>([]);
            for(let index122=0; index122 < colors.length; index122++) {
                let col = colors[index122];
                /* add */(foods.push(new Food(fabbricasemantica.RandomNumber.get((<number>canvas.width|0) - fabbricasemantica.DisplayElement.SIDE), fabbricasemantica.RandomNumber.get((<number>canvas.height|0) - fabbricasemantica.DisplayElement.SIDE), col))>0)
            }
            return foods;
        }

        /**
         * Disegna il cibo sul canvas
         * @param {CanvasRenderingContext2D} cxt contesto del canvas su cui disegnare
         */
        public draw(cxt : CanvasRenderingContext2D) {
            cxt.fillStyle = <any>((<any>this.color));
            cxt.fillRect(this.x, this.y, fabbricasemantica.DisplayElement.SIDE, fabbricasemantica.DisplayElement.SIDE);
        }

        /**
         * Setta il cibo in modo che e' la risposta corretta
         */
        public setAnswer() {
            this.answer = true;
        }

        /**
         * Verifica se e' la risposta corretta
         * @return {boolean} booleano che ci indica se e' la risposta corretta
         */
        public isAnswer() : boolean {
            return this.answer;
        }
    }
    Food["__class"] = "fabbricasemantica.Food";

}

