/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
namespace fabbricasemantica {
    /**
     * Costruttore
     * @param {number} x coordinata x
     * @param {number} y coordinata y
     * @class
     * @extends fabbricasemantica.DisplayElement
     * @author aless
     */
    export class Square extends fabbricasemantica.DisplayElement {
        /**
         * Quadrato che segue questo quadrato, se presente e' la sua coda
         */
        back : Square;

        public constructor(x : number, y : number) {
            super(x, y);
            if(this.back===undefined) this.back = null;
            this.back = null;
        }

        /**
         * Disegna il quadrato e la sua coda
         * @param {CanvasRenderingContext2D} cxt contesto del canvas su cui disegnare
         */
        public draw(cxt : CanvasRenderingContext2D) {
            cxt.fillStyle = <any>((<any>"black"));
            cxt.fillRect(this.x, this.y, fabbricasemantica.DisplayElement.SIDE, fabbricasemantica.DisplayElement.SIDE);
            if(this.hasBack()) this.back.draw(cxt);
        }

        /**
         * Aggiunge un quadrato alla coda
         */
        public addSquare() {
            if(this.hasBack()) {
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
        public hit(square2 : Square) : boolean {
            if(this === square2) return this.back.hit(square2);
            if(this.hasBack()) return Square.collisionCheck(this, square2) || this.back.hit(square2);
            return Square.collisionCheck(this, square2);
        }

        /**
         * Metodo statico che controlla se due quadrati siano in collisione o no
         * @param {fabbricasemantica.Square} square1 primo quadrato
         * @param {fabbricasemantica.Square} square2 secondo quadrato
         * @return {boolean} true se i due quadrati si scontrano, false altrimenti
         */
        public static collisionCheck(square1 : Square, square2 : Square) : boolean {
            return square1.x === square2.x && square1.y === square2.y;
        }

        /**
         * Muove il quadrato a destra
         */
        public right() {
            this.movCopy();
            this.x += 15;
        }

        /**
         * Muove il quadrato a sinistra
         */
        public left() {
            this.movCopy();
            this.x -= 15;
        }

        /**
         * Muove il quadrato in su
         */
        public up() {
            this.movCopy();
            this.y -= 15;
        }

        /**
         * Muove il quadrato in giu
         */
        public down() {
            this.movCopy();
            this.y += 15;
        }

        /**
         * Propaga il movimento a tutti i quadrati in coda
         */
        public movCopy() {
            if(this.hasBack()) {
                this.back.movCopy();
                this.back.x = this.x;
                this.back.y = this.y;
            }
        }

        /**
         * Metodo che ci dice se il quadrato ha una coda
         * @return {boolean} true se ha la coda, false altrimenti
         */
        public hasBack() : boolean {
            return this.back != null;
        }
    }
    Square["__class"] = "fabbricasemantica.Square";

}

