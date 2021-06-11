/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
namespace fabbricasemantica {
    /**
     * Classe astratta che rapprenseta un qualsiasi elemento caratteristico del sito,
     * che avra' dei colori particolari e specifici per rendere esteticamente coerente il sito.
     * Da questa classe estendono tutti gli elementi particolari e dipendenti da questo sito, mentre la
     * classe HTMLElementBuilder fornisce tutti gli elementi generici che possono servire a qualsiasi
     * sito web
     * @author aless
     * @class
     */
    export abstract class SiteElement {
        /**
         * Colore utilizzato per i bordi e le rifiniture
         */
        static border_color : string = "#C11B17";

        /**
         * Colore di sfondo dei pulsanti
         */
        static button_color : string = "#616D7E";

        /**
         * Setter per cambiare il colore dei bordi e delle rifiniture
         * @param {string} s colore in esadecimale
         */
        public static setBorderColor(s : string) {
            if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(s.charAt(0)) != '#'.charCodeAt(0)) throw Object.defineProperty(new Error("Inserire un colore in esadecimale."), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
            SiteElement.border_color = s;
        }

        /**
         * Setter per cambiare il colore di sfondo dei pulsanti
         * @param {string} s colore in esadecimale
         */
        public static setButtonColor(s : string) {
            if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(s.charAt(0)) != '#'.charCodeAt(0)) throw Object.defineProperty(new Error("Inserire un colore in esadecimale."), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
            SiteElement.button_color = s;
        }

        /**
         * Metodo astratto che ritorna l'elemento HTML incapsulato dalle classi che
         * estenderanno questa classe
         * @param <T> tipo dell'elemento di ritorno, deve estendere HTMLElement
         * @return {HTMLElement} elemento HTML
         */
        public abstract get<T extends HTMLElement>() : T;
    }
    SiteElement["__class"] = "fabbricasemantica.SiteElement";

}

