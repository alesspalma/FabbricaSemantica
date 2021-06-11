/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
namespace fabbricasemantica {
    /**
     * Costruttore che reindirizza immediatamente
     * @param {string} addr URL pagina a cui reindirizzare
     * @class
     * @extends fabbricasemantica.HTMLPage
     * @author aless
     */
    export class RedirectingPage extends fabbricasemantica.HTMLPage {
        public constructor(addr : string) {
            super();
            document.location.href = addr;
        }
    }
    RedirectingPage["__class"] = "fabbricasemantica.RedirectingPage";

}

