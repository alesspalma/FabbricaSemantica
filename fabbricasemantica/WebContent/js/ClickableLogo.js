/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
var fabbricasemantica;
(function (fabbricasemantica) {
    /**
     * Costruttore completo
     * @param {string} font_size dimensione font
     * @param {string} width larghezza elemento
     * @param {string} left spiazzamento a sinistra
     * @param {string} url url a cui reindirizzare
     * @class
     * @extends fabbricasemantica.Logo
     * @author aless
     */
    class ClickableLogo extends fabbricasemantica.Logo {
        constructor(font_size, width, left, url) {
            if (((typeof font_size === 'string') || font_size === null) && ((typeof width === 'string') || width === null) && ((typeof left === 'string') || left === null) && ((typeof url === 'string') || url === null)) {
                let __args = arguments;
                super();
                if (this.logo === undefined)
                    this.logo = null;
                if (this.logo === undefined)
                    this.logo = null;
                (() => {
                    this.logo = new fabbricasemantica.HTMLElementBuilder().assignElement(fabbricasemantica.HTMLTags.ANCHOR).setText(fabbricasemantica.Logo.siteName).setHref(url).css(["font-family", fabbricasemantica.Logo.font_family, "font-size", font_size, "text-decoration", "none", "font-style", fabbricasemantica.Logo.font_style, "color", fabbricasemantica.SiteElement.border_color, "position", "relative", "width", width, "left", left]).build();
                })();
            }
            else if (((typeof font_size === 'string') || font_size === null) && ((typeof width === 'string') || width === null) && left === undefined && url === undefined) {
                let __args = arguments;
                let left = __args[1];
                {
                    let __args = arguments;
                    let width = "";
                    let url = fabbricasemantica.HTMLPage.HOME_URL;
                    super();
                    if (this.logo === undefined)
                        this.logo = null;
                    if (this.logo === undefined)
                        this.logo = null;
                    (() => {
                        this.logo = new fabbricasemantica.HTMLElementBuilder().assignElement(fabbricasemantica.HTMLTags.ANCHOR).setText(fabbricasemantica.Logo.siteName).setHref(url).css(["font-family", fabbricasemantica.Logo.font_family, "font-size", font_size, "text-decoration", "none", "font-style", fabbricasemantica.Logo.font_style, "color", fabbricasemantica.SiteElement.border_color, "position", "relative", "width", width, "left", left]).build();
                    })();
                }
            }
            else if (((typeof font_size === 'string') || font_size === null) && width === undefined && left === undefined && url === undefined) {
                let __args = arguments;
                {
                    let __args = arguments;
                    let width = "";
                    let left = "";
                    let url = fabbricasemantica.HTMLPage.HOME_URL;
                    super();
                    if (this.logo === undefined)
                        this.logo = null;
                    if (this.logo === undefined)
                        this.logo = null;
                    (() => {
                        this.logo = new fabbricasemantica.HTMLElementBuilder().assignElement(fabbricasemantica.HTMLTags.ANCHOR).setText(fabbricasemantica.Logo.siteName).setHref(url).css(["font-family", fabbricasemantica.Logo.font_family, "font-size", font_size, "text-decoration", "none", "font-style", fabbricasemantica.Logo.font_style, "color", fabbricasemantica.SiteElement.border_color, "position", "relative", "width", width, "left", left]).build();
                    })();
                }
            }
            else
                throw new Error('invalid overload');
        }
        /**
         * Ritorna l'elemento HTML
         * @return {HTMLAnchorElement}
         */
        get() {
            return this.logo;
        }
    }
    fabbricasemantica.ClickableLogo = ClickableLogo;
    ClickableLogo["__class"] = "fabbricasemantica.ClickableLogo";
})(fabbricasemantica || (fabbricasemantica = {}));
