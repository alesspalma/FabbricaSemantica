/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
namespace fabbricasemantica {
    /**
     * Costruttore
     * @param {number} x coordinata x
     * @param {number} y coordinata y
     * @class
     * @author aless
     */
    export class DisplayElement {
        /**
         * Coordinata x
         */
        x : number;

        /**
         * Coordinata y
         */
        y : number;

        /**
         * Lunghezza del lato dell'elemento visibile a schermo
         */
        static SIDE : number = 15;

        public constructor(x : number, y : number) {
            if(this.x===undefined) this.x = 0;
            if(this.y===undefined) this.y = 0;
            this.x = x;
            this.y = y;
        }
    }
    DisplayElement["__class"] = "fabbricasemantica.DisplayElement";

}

