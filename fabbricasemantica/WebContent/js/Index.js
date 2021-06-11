/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
var fabbricasemantica;
(function (fabbricasemantica) {
    /**
     * Costruttore
     * @param {string} addr URL a cui reindirizza
     * @class
     * @extends fabbricasemantica.RedirectingPage
     * @author aless
     */
    class Index extends fabbricasemantica.RedirectingPage {
        constructor(addr) {
            super(addr);
        }
        static main(args) {
            new Index(fabbricasemantica.HTMLPage.LOGIN_URL);
        }
    }
    fabbricasemantica.Index = Index;
    Index["__class"] = "fabbricasemantica.Index";
})(fabbricasemantica || (fabbricasemantica = {}));
fabbricasemantica.Index.main(null);
