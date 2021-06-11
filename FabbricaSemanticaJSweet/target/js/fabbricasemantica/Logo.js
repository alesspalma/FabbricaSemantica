/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
var fabbricasemantica;
(function (fabbricasemantica) {
    /**
     * Classe astratta che rappresenta il logo del sito
     * @author aless
     * @class
     * @extends fabbricasemantica.SiteElement
     */
    class Logo extends fabbricasemantica.SiteElement {
        /**
         * Setta il nome del sito
         * @param {string} s stringa
         */
        setSiteName(s) {
            Logo.siteName = s;
        }
        /**
         * Setta il font
         * @param {string} s stringa font
         */
        setFontFamily(s) {
            Logo.font_family = s;
        }
        /**
         * Setta lo stile del font
         * @param {string} s stringa stile
         */
        setFontStyle(s) {
            Logo.font_style = s;
        }
    }
    /**
     * Nome del sito, sara' il testo inserito dentro l'elemento
     * che rappresenta il logo
     */
    Logo.siteName = "Fabbrica Semantica";
    /**
     * Font utilizzato per il logo
     */
    Logo.font_family = "Georgia";
    /**
     * Stile di font utilizzato per il logo
     */
    Logo.font_style = "italic";
    fabbricasemantica.Logo = Logo;
    Logo["__class"] = "fabbricasemantica.Logo";
})(fabbricasemantica || (fabbricasemantica = {}));
