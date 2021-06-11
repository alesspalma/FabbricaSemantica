/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
namespace fabbricasemantica {
    /**
     * Costruttore completo
     * @param {string} font_size grandezza font
     * @param {string} width larghezza
     * @param {string} left spiazzamento a sinistra
     * @class
     * @extends fabbricasemantica.Logo
     * @author aless
     */
    export class StaticLogo extends fabbricasemantica.Logo {
        /**
         * Campo che incapsula l'elemento HTML
         */
        /*private*/ logo : HTMLLabelElement;

        public constructor(font_size? : any, width? : any, left? : any) {
            if(((typeof font_size === 'string') || font_size === null) && ((typeof width === 'string') || width === null) && ((typeof left === 'string') || left === null)) {
                let __args = arguments;
                super();
                if(this.logo===undefined) this.logo = null;
                if(this.logo===undefined) this.logo = null;
                (() => {
                    this.logo = <HTMLLabelElement>new fabbricasemantica.HTMLElementBuilder().assignElement(fabbricasemantica.HTMLTags.LABEL).setTextContent(fabbricasemantica.Logo.siteName).css(["font-family", fabbricasemantica.Logo.font_family, "font-size", font_size, "font-style", fabbricasemantica.Logo.font_style, "color", fabbricasemantica.SiteElement.border_color, "position", "relative", "width", width, "left", left]).build();
                })();
            } else if(((typeof font_size === 'string') || font_size === null) && ((typeof width === 'string') || width === null) && left === undefined) {
                let __args = arguments;
                let left : any = __args[1];
                {
                    let __args = arguments;
                    let width : any = "";
                    super();
                    if(this.logo===undefined) this.logo = null;
                    if(this.logo===undefined) this.logo = null;
                    (() => {
                        this.logo = <HTMLLabelElement>new fabbricasemantica.HTMLElementBuilder().assignElement(fabbricasemantica.HTMLTags.LABEL).setTextContent(fabbricasemantica.Logo.siteName).css(["font-family", fabbricasemantica.Logo.font_family, "font-size", font_size, "font-style", fabbricasemantica.Logo.font_style, "color", fabbricasemantica.SiteElement.border_color, "position", "relative", "width", width, "left", left]).build();
                    })();
                }
            } else if(((typeof font_size === 'string') || font_size === null) && width === undefined && left === undefined) {
                let __args = arguments;
                {
                    let __args = arguments;
                    let width : any = "";
                    let left : any = "";
                    super();
                    if(this.logo===undefined) this.logo = null;
                    if(this.logo===undefined) this.logo = null;
                    (() => {
                        this.logo = <HTMLLabelElement>new fabbricasemantica.HTMLElementBuilder().assignElement(fabbricasemantica.HTMLTags.LABEL).setTextContent(fabbricasemantica.Logo.siteName).css(["font-family", fabbricasemantica.Logo.font_family, "font-size", font_size, "font-style", fabbricasemantica.Logo.font_style, "color", fabbricasemantica.SiteElement.border_color, "position", "relative", "width", width, "left", left]).build();
                    })();
                }
            } else throw new Error('invalid overload');
        }

        /**
         * Ritorna l'elemento HTML
         * @return {HTMLLabelElement}
         */
        public get() : HTMLLabelElement {
            return this.logo;
        }
    }
    StaticLogo["__class"] = "fabbricasemantica.StaticLogo";

}

