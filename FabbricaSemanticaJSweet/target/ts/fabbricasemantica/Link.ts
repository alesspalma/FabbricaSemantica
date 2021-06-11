/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
namespace fabbricasemantica {
    /**
     * Costruttore
     * @param {string} text testo del link
     * @param {string} href URL a cui portare
     * @param {string} width larghezza
     * @param {string} left spiazzamento a sinistra
     * @param {string} margin_top spiazzamento top
     * @class
     * @extends fabbricasemantica.SiteElement
     * @author aless
     */
    export class Link extends fabbricasemantica.SiteElement {
        /**
         * Campo che incapsula l'elemento HTML
         */
        /*private*/ link : HTMLAnchorElement;

        public constructor(text? : any, href? : any, width? : any, left? : any, margin_top? : any) {
            if(((typeof text === 'string') || text === null) && ((typeof href === 'string') || href === null) && ((typeof width === 'string') || width === null) && ((typeof left === 'string') || left === null) && ((typeof margin_top === 'string') || margin_top === null)) {
                let __args = arguments;
                super();
                if(this.link===undefined) this.link = null;
                if(this.link===undefined) this.link = null;
                (() => {
                    this.link = <HTMLAnchorElement>new fabbricasemantica.HTMLElementBuilder().assignElement(fabbricasemantica.HTMLTags.ANCHOR).setClassName("btn btn-primary").setText(text).setHref(href).css(["background", fabbricasemantica.SiteElement.button_color, "border-color", fabbricasemantica.SiteElement.border_color, "position", "relative", "width", width, "left", left, "margin-top", margin_top]).build();
                })();
            } else if(((typeof text === 'string') || text === null) && ((typeof href === 'string') || href === null) && ((typeof width === 'string') || width === null) && ((typeof left === 'string') || left === null) && margin_top === undefined) {
                let __args = arguments;
                let margin_top : any = __args[3];
                {
                    let __args = arguments;
                    let left : any = "";
                    super();
                    if(this.link===undefined) this.link = null;
                    if(this.link===undefined) this.link = null;
                    (() => {
                        this.link = <HTMLAnchorElement>new fabbricasemantica.HTMLElementBuilder().assignElement(fabbricasemantica.HTMLTags.ANCHOR).setClassName("btn btn-primary").setText(text).setHref(href).css(["background", fabbricasemantica.SiteElement.button_color, "border-color", fabbricasemantica.SiteElement.border_color, "position", "relative", "width", width, "left", left, "margin-top", margin_top]).build();
                    })();
                }
            } else if(((typeof text === 'string') || text === null) && ((typeof href === 'string') || href === null) && width === undefined && left === undefined && margin_top === undefined) {
                let __args = arguments;
                {
                    let __args = arguments;
                    let width : any = "";
                    let left : any = "";
                    let margin_top : any = "";
                    super();
                    if(this.link===undefined) this.link = null;
                    if(this.link===undefined) this.link = null;
                    (() => {
                        this.link = <HTMLAnchorElement>new fabbricasemantica.HTMLElementBuilder().assignElement(fabbricasemantica.HTMLTags.ANCHOR).setClassName("btn btn-primary").setText(text).setHref(href).css(["background", fabbricasemantica.SiteElement.button_color, "border-color", fabbricasemantica.SiteElement.border_color, "position", "relative", "width", width, "left", left, "margin-top", margin_top]).build();
                    })();
                }
            } else throw new Error('invalid overload');
        }

        /**
         * 
         * @return {HTMLAnchorElement}
         */
        public get() : HTMLAnchorElement {
            return this.link;
        }
    }
    Link["__class"] = "fabbricasemantica.Link";

}

