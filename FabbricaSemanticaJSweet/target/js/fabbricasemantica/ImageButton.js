/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
var fabbricasemantica;
(function (fabbricasemantica) {
    /**
     * Costruttore
     * @param {string} source indirizzo a cui si trova l'immagine del bottone
     * @param {string} margin_top spiazzamento top
     * @param {string} height altezza
     * @class
     * @extends fabbricasemantica.SiteElement
     * @author aless
     */
    class ImageButton extends fabbricasemantica.SiteElement {
        constructor(source, margin_top, height) {
            if (((typeof source === 'string') || source === null) && ((typeof margin_top === 'string') || margin_top === null) && ((typeof height === 'string') || height === null)) {
                let __args = arguments;
                super();
                if (this.button === undefined)
                    this.button = null;
                if (this.button === undefined)
                    this.button = null;
                (() => {
                    this.button = new fabbricasemantica.HTMLElementBuilder().assignElement(fabbricasemantica.HTMLTags.INPUT).setType("image").setSrc(source).css(["height", height, "margin-top", margin_top]).build();
                })();
            }
            else if (((typeof source === 'string') || source === null) && margin_top === undefined && height === undefined) {
                let __args = arguments;
                {
                    let __args = arguments;
                    let margin_top = "";
                    let height = "";
                    super();
                    if (this.button === undefined)
                        this.button = null;
                    if (this.button === undefined)
                        this.button = null;
                    (() => {
                        this.button = new fabbricasemantica.HTMLElementBuilder().assignElement(fabbricasemantica.HTMLTags.INPUT).setType("image").setSrc(source).css(["height", height, "margin-top", margin_top]).build();
                    })();
                }
            }
            else
                throw new Error('invalid overload');
        }
        /**
         *
         * @return {HTMLInputElement}
         */
        get() {
            return this.button;
        }
    }
    /**
     * Nome dell'elemento HTML
     */
    ImageButton.btnName = "image_button";
    fabbricasemantica.ImageButton = ImageButton;
    ImageButton["__class"] = "fabbricasemantica.ImageButton";
})(fabbricasemantica || (fabbricasemantica = {}));
