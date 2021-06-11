/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
var fabbricasemantica;
(function (fabbricasemantica) {
    /**
     * Costruttore che inizializza il colore di sfondo
     * @class
     * @author aless
     */
    class HTMLPage {
        constructor() {
            $("body").css("background", HTMLPage.colore);
        }
        /**
         * Setta il colore di sfondo
         * @param {string} s colore in esadecimale
         */
        setWebsiteColor(s) {
            HTMLPage.colore = s;
        }
        /**
         * Crea l'intestazione delle pagine del sito web una volta effettuato il login
         */
        createHeading() {
            let titolo = new fabbricasemantica.ClickableLogo("30px", "2%").get();
            let logout = new fabbricasemantica.Link("Logout", HTMLPage.LOGOUT_SRV, "6%", "-2%", "0.25em").get();
            $(logout).css("float", "right");
            let divLogout = fabbricasemantica.HTMLElementBuilder.getStandardDiv();
            $(divLogout).append(titolo, logout);
            $(divLogout).css("margin-top", "1em");
            $("body").append(divLogout);
        }
        /**
         * Controlla che l'utente abbia effettuato il login, altrimenti
         * lo reindirizza alla pagina di login
         */
        checkLogin() {
            $.get(HTMLPage.LOGGED_SRV, (result, a, ctx) => {
                let ris = result;
                if (((o1, o2) => { if (o1 && o1.equals) {
                    return o1.equals(o2);
                }
                else {
                    return o1 === o2;
                } })(ris, "false"))
                    new fabbricasemantica.RedirectingPage(HTMLPage.LOGIN_URL);
                return null;
            });
        }
        /**
         * Controlla che l'utente abbia effettuato il logout, altrimenti
         * lo reindirizza alla home
         */
        checkLogout() {
            $.get(HTMLPage.LOGGED_SRV, (result, a, ctx) => {
                let ris = result;
                if (((o1, o2) => { if (o1 && o1.equals) {
                    return o1.equals(o2);
                }
                else {
                    return o1 === o2;
                } })(ris, "true"))
                    new fabbricasemantica.RedirectingPage(HTMLPage.HOME_URL);
                return null;
            });
        }
    }
    /**
     * Colore di sfondo
     */
    HTMLPage.colore = "#FFFAED";
    /**
     * URL servlet che controlla lo stato di log dell'utente
     */
    HTMLPage.LOGGED_SRV = "isLoggedIn.jsp";
    /**
     * URL pagina login
     */
    HTMLPage.LOGIN_URL = "login.html";
    /**
     * URL pagina home
     */
    HTMLPage.HOME_URL = "home.html";
    /**
     * URL servlet di logout
     */
    HTMLPage.LOGOUT_SRV = "logout.jsp";
    fabbricasemantica.HTMLPage = HTMLPage;
    HTMLPage["__class"] = "fabbricasemantica.HTMLPage";
})(fabbricasemantica || (fabbricasemantica = {}));
