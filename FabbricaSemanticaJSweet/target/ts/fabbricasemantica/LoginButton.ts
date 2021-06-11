/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
namespace fabbricasemantica {
    /**
     * Costruttore completo
     * @param {string} value testo da visualizzare
     * @param {string} width larghezza
     * @param {string} left spiazzamento sinistra
     * @param {string} margin_top spiazzamento top
     * @class
     * @extends fabbricasemantica.Button
     * @author aless
     */
    export class LoginButton extends fabbricasemantica.Button {
        /**
         * Attribbuto nome dell'elemento HTML
         */
        public static btnName : string = "login_button";

        public constructor(value? : any, width? : any, left? : any, margin_top? : any) {
            if(((typeof value === 'string') || value === null) && ((typeof width === 'string') || width === null) && ((typeof left === 'string') || left === null) && ((typeof margin_top === 'string') || margin_top === null)) {
                let __args = arguments;
                super(LoginButton.btnName, value, width, left, margin_top);
            } else if(((typeof value === 'string') || value === null) && ((typeof width === 'string') || width === null) && ((typeof left === 'string') || left === null) && margin_top === undefined) {
                let __args = arguments;
                super(LoginButton.btnName, value, width, left);
            } else throw new Error('invalid overload');
        }
    }
    LoginButton["__class"] = "fabbricasemantica.LoginButton";

}

