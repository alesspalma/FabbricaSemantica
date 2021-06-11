/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
var fabbricasemantica;
(function (fabbricasemantica) {
    /**
     * Costruttore
     * @param {number} x coordinata x
     * @param {number} y coordinata y
     * @class
     * @extends fabbricasemantica.DisplayElement
     * @author aless
     */
    class Square extends fabbricasemantica.DisplayElement {
        constructor(x, y) {
            super(x, y);
            if (this.back === undefined)
                this.back = null;
            this.back = null;
        }
        /**
         * Disegna il quadrato e la sua coda
         * @param {CanvasRenderingContext2D} cxt contesto del canvas su cui disegnare
         */
        draw(cxt) {
            cxt.fillStyle = ("black");
            cxt.fillRect(this.x, this.y, fabbricasemantica.DisplayElement.SIDE, fabbricasemantica.DisplayElement.SIDE);
            if (this.hasBack())
                this.back.draw(cxt);
        }
        /**
         * Aggiunge un quadrato alla coda
         */
        addSquare() {
            if (this.hasBack()) {
                this.back.addSquare();
                return;
            }
            this.back = new Square(this.x, this.y);
        }
        /**
         * Controlla se il quadrato si e' sovrapposto con uno dei quadrati della sua coda
         * @param {fabbricasemantica.Square} square2 un quadrato della coda di questa istanza di quadrato
         * @return {boolean} true se c'e' una sovrapposizione, false altrimenti
         */
        hit(square2) {
            if (this === square2)
                return this.back.hit(square2);
            if (this.hasBack())
                return Square.collisionCheck(this, square2) || this.back.hit(square2);
            return Square.collisionCheck(this, square2);
        }
        /**
         * Metodo statico che controlla se due quadrati siano in collisione o no
         * @param {fabbricasemantica.Square} square1 primo quadrato
         * @param {fabbricasemantica.Square} square2 secondo quadrato
         * @return {boolean} true se i due quadrati si scontrano, false altrimenti
         */
        static collisionCheck(square1, square2) {
            return square1.x === square2.x && square1.y === square2.y;
        }
        /**
         * Muove il quadrato a destra
         */
        right() {
            this.movCopy();
            this.x += 15;
        }
        /**
         * Muove il quadrato a sinistra
         */
        left() {
            this.movCopy();
            this.x -= 15;
        }
        /**
         * Muove il quadrato in su
         */
        up() {
            this.movCopy();
            this.y -= 15;
        }
        /**
         * Muove il quadrato in giu
         */
        down() {
            this.movCopy();
            this.y += 15;
        }
        /**
         * Propaga il movimento a tutti i quadrati in coda
         */
        movCopy() {
            if (this.hasBack()) {
                this.back.movCopy();
                this.back.x = this.x;
                this.back.y = this.y;
            }
        }
        /**
         * Metodo che ci dice se il quadrato ha una coda
         * @return {boolean} true se ha la coda, false altrimenti
         */
        hasBack() {
            return this.back != null;
        }
    }
    fabbricasemantica.Square = Square;
    Square["__class"] = "fabbricasemantica.Square";
})(fabbricasemantica || (fabbricasemantica = {}));
