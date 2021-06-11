/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
var fabbricasemantica;
(function (fabbricasemantica) {
    /**
     * Costruttore completo
     * @param {string} name nome
     * @param {string} left spiazzamento a sinistra
     * @param {Array} options Array di stringhe "proprieta'" -- "valore" che verranno usati come parametri css
     * @class
     * @extends fabbricasemantica.SiteElement
     * @author aless
     */
    class DropdownMenu extends fabbricasemantica.SiteElement {
        constructor(name, left, ...options) {
            super();
            if (this.menu === undefined)
                this.menu = null;
            this.menu = new fabbricasemantica.HTMLElementBuilder().assignElement(fabbricasemantica.HTMLTags.SELECT).setClassName("dropdown").setName(name).css(["border-radius", DropdownMenu.border_radius, "border-color", fabbricasemantica.SiteElement.border_color, "box-shadow", "none", "position", "relative", "left", left]).build();
            for (let index121 = 0; index121 < options.length; index121++) {
                let s = options[index121];
                {
                    let opt = document.createElement("option");
                    opt.textContent = s;
                    $(this.menu).append(opt);
                }
            }
        }
        /**
         * Ritorna l'elemento html
         * @return {HTMLSelectElement}
         */
        get() {
            return this.menu;
        }
    }
    /**
     * Parametro css di decoro utile per far apparire i bordi smussati
     */
    DropdownMenu.border_radius = "3px";
    fabbricasemantica.DropdownMenu = DropdownMenu;
    DropdownMenu["__class"] = "fabbricasemantica.DropdownMenu";
})(fabbricasemantica || (fabbricasemantica = {}));
