/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
var fabbricasemantica;
(function (fabbricasemantica) {
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
    class LoginButton extends fabbricasemantica.Button {
        constructor(value, width, left, margin_top) {
            if (((typeof value === 'string') || value === null) && ((typeof width === 'string') || width === null) && ((typeof left === 'string') || left === null) && ((typeof margin_top === 'string') || margin_top === null)) {
                let __args = arguments;
                super(LoginButton.btnName, value, width, left, margin_top);
            }
            else if (((typeof value === 'string') || value === null) && ((typeof width === 'string') || width === null) && ((typeof left === 'string') || left === null) && margin_top === undefined) {
                let __args = arguments;
                super(LoginButton.btnName, value, width, left);
            }
            else
                throw new Error('invalid overload');
        }
    }
    /**
     * Attribbuto nome dell'elemento HTML
     */
    LoginButton.btnName = "login_button";
    fabbricasemantica.LoginButton = LoginButton;
    LoginButton["__class"] = "fabbricasemantica.LoginButton";
})(fabbricasemantica || (fabbricasemantica = {}));
