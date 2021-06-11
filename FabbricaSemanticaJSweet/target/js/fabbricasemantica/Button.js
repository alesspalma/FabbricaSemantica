/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
var fabbricasemantica;
(function (fabbricasemantica) {
    /**
     * Costruttore completo del bottone
     * @param {string} name nome
     * @param {string} value testo visibile sul sito
     * @param {string} width larghezza
     * @param {string} left spiazzamento a sinistra
     * @param {string} margin_top spiazzamento superiore
     * @class
     * @extends fabbricasemantica.SiteElement
     * @author aless
     */
    class Button extends fabbricasemantica.SiteElement {
        constructor(name, value, width, left, margin_top) {
            if (((typeof name === 'string') || name === null) && ((typeof value === 'string') || value === null) && ((typeof width === 'string') || width === null) && ((typeof left === 'string') || left === null) && ((typeof margin_top === 'string') || margin_top === null)) {
                let __args = arguments;
                super();
                if (this.button === undefined)
                    this.button = null;
                if (this.button === undefined)
                    this.button = null;
                (() => {
                    this.button = new fabbricasemantica.HTMLElementBuilder().assignElement(fabbricasemantica.HTMLTags.INPUT).setType("button").setName(name).setClassName("btn btn-primary").setValue(value).css(["background", fabbricasemantica.SiteElement.button_color, "border-color", fabbricasemantica.SiteElement.border_color, "position", "relative", "width", width, "left", left, "margin-top", margin_top]).build();
                })();
            }
            else if (((typeof name === 'string') || name === null) && ((typeof value === 'string') || value === null) && ((typeof width === 'string') || width === null) && ((typeof left === 'string') || left === null) && margin_top === undefined) {
                let __args = arguments;
                {
                    let __args = arguments;
                    let margin_top = "";
                    super();
                    if (this.button === undefined)
                        this.button = null;
                    if (this.button === undefined)
                        this.button = null;
                    (() => {
                        this.button = new fabbricasemantica.HTMLElementBuilder().assignElement(fabbricasemantica.HTMLTags.INPUT).setType("button").setName(name).setClassName("btn btn-primary").setValue(value).css(["background", fabbricasemantica.SiteElement.button_color, "border-color", fabbricasemantica.SiteElement.border_color, "position", "relative", "width", width, "left", left, "margin-top", margin_top]).build();
                    })();
                }
            }
            else if (((typeof name === 'string') || name === null) && ((typeof value === 'string') || value === null) && ((width != null && width instanceof Array && (width.length == 0 || width[0] == null || (typeof width[0] === 'string'))) || width === null) && left === undefined && margin_top === undefined) {
                let __args = arguments;
                let cssValues = __args[2];
                {
                    let __args = arguments;
                    let width = "";
                    let left = "";
                    let margin_top = "";
                    super();
                    if (this.button === undefined)
                        this.button = null;
                    if (this.button === undefined)
                        this.button = null;
                    (() => {
                        this.button = new fabbricasemantica.HTMLElementBuilder().assignElement(fabbricasemantica.HTMLTags.INPUT).setType("button").setName(name).setClassName("btn btn-primary").setValue(value).css(["background", fabbricasemantica.SiteElement.button_color, "border-color", fabbricasemantica.SiteElement.border_color, "position", "relative", "width", width, "left", left, "margin-top", margin_top]).build();
                    })();
                }
                (() => {
                    for (let i = 0; i < cssValues.length; i += 2) {
                        $(this.button).css(cssValues[i], cssValues[i + 1]);
                    }
                })();
            }
            else
                throw new Error('invalid overload');
        }
        /**
         * Restituisce l'elemento HTML
         * @return {HTMLInputElement}
         */
        get() {
            return this.button;
        }
    }
    fabbricasemantica.Button = Button;
    Button["__class"] = "fabbricasemantica.Button";
})(fabbricasemantica || (fabbricasemantica = {}));
