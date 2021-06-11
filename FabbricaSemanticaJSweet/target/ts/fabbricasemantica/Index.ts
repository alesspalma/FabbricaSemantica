/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
namespace fabbricasemantica {
    /**
     * Costruttore
     * @param {string} addr URL a cui reindirizza
     * @class
     * @extends fabbricasemantica.RedirectingPage
     * @author aless
     */
    export class Index extends fabbricasemantica.RedirectingPage {
        public constructor(addr : string) {
            super(addr);
        }

        public static main(args : string[]) {
            new Index(fabbricasemantica.HTMLPage.LOGIN_URL);
        }
    }
    Index["__class"] = "fabbricasemantica.Index";

}


fabbricasemantica.Index.main(null);
