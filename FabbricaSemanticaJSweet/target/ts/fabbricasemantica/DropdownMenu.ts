/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
namespace fabbricasemantica {
    /**
     * Costruttore completo
     * @param {string} name nome
     * @param {string} left spiazzamento a sinistra
     * @param {Array} options Array di stringhe "proprieta'" -- "valore" che verranno usati come parametri css
     * @class
     * @extends fabbricasemantica.SiteElement
     * @author aless
     */
    export class DropdownMenu extends fabbricasemantica.SiteElement {
        /**
         * Campo che incapsula l'elemento html
         */
        /*private*/ menu : HTMLSelectElement;

        /**
         * Parametro css di decoro utile per far apparire i bordi smussati
         */
        public static border_radius : string = "3px";

        public constructor(name : string, left : string, ...options : string[]) {
            super();
            if(this.menu===undefined) this.menu = null;
            this.menu = <HTMLSelectElement>new fabbricasemantica.HTMLElementBuilder().assignElement(fabbricasemantica.HTMLTags.SELECT).setClassName("dropdown").setName(name).css(["border-radius", DropdownMenu.border_radius, "border-color", fabbricasemantica.SiteElement.border_color, "box-shadow", "none", "position", "relative", "left", left]).build();
            for(let index121=0; index121 < options.length; index121++) {
                let s = options[index121];
                {
                    let opt : HTMLOptionElement = document.createElement("option");
                    opt.textContent = s;
                    $(this.menu).append(opt);
                }
            }
        }

        /**
         * Ritorna l'elemento html
         * @return {HTMLSelectElement}
         */
        public get() : HTMLSelectElement {
            return this.menu;
        }
    }
    DropdownMenu["__class"] = "fabbricasemantica.DropdownMenu";

}

