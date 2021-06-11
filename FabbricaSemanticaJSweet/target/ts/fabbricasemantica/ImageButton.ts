/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
namespace fabbricasemantica {
    /**
     * Costruttore
     * @param {string} source indirizzo a cui si trova l'immagine del bottone
     * @param {string} margin_top spiazzamento top
     * @param {string} height altezza
     * @class
     * @extends fabbricasemantica.SiteElement
     * @author aless
     */
    export class ImageButton extends fabbricasemantica.SiteElement {
        /**
         * Nome dell'elemento HTML
         */
        public static btnName : string = "image_button";

        /**
         * Campo che incapsula l'elemento HTML
         */
        /*private*/ button : HTMLInputElement;

        public constructor(source? : any, margin_top? : any, height? : any) {
            if(((typeof source === 'string') || source === null) && ((typeof margin_top === 'string') || margin_top === null) && ((typeof height === 'string') || height === null)) {
                let __args = arguments;
                super();
                if(this.button===undefined) this.button = null;
                if(this.button===undefined) this.button = null;
                (() => {
                    this.button = <HTMLInputElement>new fabbricasemantica.HTMLElementBuilder().assignElement(fabbricasemantica.HTMLTags.INPUT).setType("image").setSrc(source).css(["height", height, "margin-top", margin_top]).build();
                })();
            } else if(((typeof source === 'string') || source === null) && margin_top === undefined && height === undefined) {
                let __args = arguments;
                {
                    let __args = arguments;
                    let margin_top : any = "";
                    let height : any = "";
                    super();
                    if(this.button===undefined) this.button = null;
                    if(this.button===undefined) this.button = null;
                    (() => {
                        this.button = <HTMLInputElement>new fabbricasemantica.HTMLElementBuilder().assignElement(fabbricasemantica.HTMLTags.INPUT).setType("image").setSrc(source).css(["height", height, "margin-top", margin_top]).build();
                    })();
                }
            } else throw new Error('invalid overload');
        }

        /**
         * 
         * @return {HTMLInputElement}
         */
        public get() : HTMLInputElement {
            return this.button;
        }
    }
    ImageButton["__class"] = "fabbricasemantica.ImageButton";

}

