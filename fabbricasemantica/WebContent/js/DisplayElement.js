/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
var fabbricasemantica;
(function (fabbricasemantica) {
    /**
     * Costruttore
     * @param {number} x coordinata x
     * @param {number} y coordinata y
     * @class
     * @author aless
     */
    class DisplayElement {
        constructor(x, y) {
            if (this.x === undefined)
                this.x = 0;
            if (this.y === undefined)
                this.y = 0;
            this.x = x;
            this.y = y;
        }
    }
    /**
     * Lunghezza del lato dell'elemento visibile a schermo
     */
    DisplayElement.SIDE = 15;
    fabbricasemantica.DisplayElement = DisplayElement;
    DisplayElement["__class"] = "fabbricasemantica.DisplayElement";
})(fabbricasemantica || (fabbricasemantica = {}));
