/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
var fabbricasemantica;
(function (fabbricasemantica) {
    /**
     * Classe che implementa un generatore di numeri casuale, i numeri sono
     * multipli di 15 in modo che il canvas dello snake venga visto come una matrice
     * @author aless
     * @class
     */
    class RandomNumber {
        constructor() {
        }
        /**
         * Metodo che ritorna sempre un numero multiplo di 15 compreso in un intervallo
         * (0,end). Prima il limite end (+1 affinche' sia possibile ottenere anche il numero end se
         * esso e' multiplo di 15) viene moltiplicato per un double random tra 0 e 1, poi esso
         * viene arrotondato per difetto, diviso per 15, arrotondato a intero e moltiplicato per 15.
         * @param {number} end limite numerico
         * @return {number} un multiplo di 15 compreso tra (0,end)
         */
        static get(end) {
            return (((Math.floor(Math.random() * (end + 1))) / fabbricasemantica.DisplayElement.SIDE) | 0) * fabbricasemantica.DisplayElement.SIDE;
        }
    }
    fabbricasemantica.RandomNumber = RandomNumber;
    RandomNumber["__class"] = "fabbricasemantica.RandomNumber";
})(fabbricasemantica || (fabbricasemantica = {}));
