/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
var fabbricasemantica;
(function (fabbricasemantica) {
    /**
     * Costruttore che reindirizza immediatamente
     * @param {string} addr URL pagina a cui reindirizzare
     * @class
     * @extends fabbricasemantica.HTMLPage
     * @author aless
     */
    class RedirectingPage extends fabbricasemantica.HTMLPage {
        constructor(addr) {
            super();
            document.location.href = addr;
        }
    }
    fabbricasemantica.RedirectingPage = RedirectingPage;
    RedirectingPage["__class"] = "fabbricasemantica.RedirectingPage";
})(fabbricasemantica || (fabbricasemantica = {}));
