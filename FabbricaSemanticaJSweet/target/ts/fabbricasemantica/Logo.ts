/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
namespace fabbricasemantica {
    /**
     * Classe astratta che rappresenta il logo del sito
     * @author aless
     * @class
     * @extends fabbricasemantica.SiteElement
     */
    export abstract class Logo extends fabbricasemantica.SiteElement {
        /**
         * Nome del sito, sara' il testo inserito dentro l'elemento
         * che rappresenta il logo
         */
        static siteName : string = "Fabbrica Semantica";

        /**
         * Font utilizzato per il logo
         */
        static font_family : string = "Georgia";

        /**
         * Stile di font utilizzato per il logo
         */
        static font_style : string = "italic";

        /**
         * Setta il nome del sito
         * @param {string} s stringa
         */
        public setSiteName(s : string) {
            Logo.siteName = s;
        }

        /**
         * Setta il font
         * @param {string} s stringa font
         */
        public setFontFamily(s : string) {
            Logo.font_family = s;
        }

        /**
         * Setta lo stile del font
         * @param {string} s stringa stile
         */
        public setFontStyle(s : string) {
            Logo.font_style = s;
        }
    }
    Logo["__class"] = "fabbricasemantica.Logo";

}

