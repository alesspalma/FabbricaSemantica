/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
var fabbricasemantica;
(function (fabbricasemantica) {
    /**
     * Costruttore del pulsante
     * @param {string} value testo da visualizzare
     * @param {string} width larghezza
     * @param {string} left spiazzamento sinistra
     * @param {string} margin_top spiazzamento top
     * @class
     * @extends fabbricasemantica.Button
     * @author aless
     */
    class SignupButton extends fabbricasemantica.Button {
        constructor(value, width, left, margin_top) {
            if (((typeof value === 'string') || value === null) && ((typeof width === 'string') || width === null) && ((typeof left === 'string') || left === null) && ((typeof margin_top === 'string') || margin_top === null)) {
                let __args = arguments;
                super(SignupButton.btnName, value, width, left, margin_top);
            }
            else if (((typeof value === 'string') || value === null) && ((typeof width === 'string') || width === null) && ((typeof left === 'string') || left === null) && margin_top === undefined) {
                let __args = arguments;
                super(SignupButton.btnName, value, width, left);
            }
            else
                throw new Error('invalid overload');
        }
    }
    /**
     * Nome dell'elemento html
     */
    SignupButton.btnName = "register_button";
    fabbricasemantica.SignupButton = SignupButton;
    SignupButton["__class"] = "fabbricasemantica.SignupButton";
})(fabbricasemantica || (fabbricasemantica = {}));
