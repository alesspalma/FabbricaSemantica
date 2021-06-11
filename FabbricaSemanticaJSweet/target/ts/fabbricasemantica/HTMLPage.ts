/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
namespace fabbricasemantica {
    /**
     * Costruttore che inizializza il colore di sfondo
     * @class
     * @author aless
     */
    export class HTMLPage {
        /**
         * Colore di sfondo
         */
        static colore : string = "#FFFAED";

        /**
         * URL servlet che controlla lo stato di log dell'utente
         */
        public static LOGGED_SRV : string = "isLoggedIn.jsp";

        /**
         * URL pagina login
         */
        public static LOGIN_URL : string = "login.html";

        /**
         * URL pagina home
         */
        public static HOME_URL : string = "home.html";

        /**
         * URL servlet di logout
         */
        public static LOGOUT_SRV : string = "logout.jsp";

        public constructor() {
            $("body").css("background", HTMLPage.colore);
        }

        /**
         * Setta il colore di sfondo
         * @param {string} s colore in esadecimale
         */
        public setWebsiteColor(s : string) {
            HTMLPage.colore = s;
        }

        /**
         * Crea l'intestazione delle pagine del sito web una volta effettuato il login
         */
        public createHeading() {
            let titolo : HTMLAnchorElement = new fabbricasemantica.ClickableLogo("30px", "2%").get();
            let logout : HTMLAnchorElement = new fabbricasemantica.Link("Logout", HTMLPage.LOGOUT_SRV, "6%", "-2%", "0.25em").get();
            $(logout).css("float", "right");
            let divLogout : HTMLDivElement = fabbricasemantica.HTMLElementBuilder.getStandardDiv();
            $(divLogout).append(titolo, logout);
            $(divLogout).css("margin-top", "1em");
            $("body").append(divLogout);
        }

        /**
         * Controlla che l'utente abbia effettuato il login, altrimenti
         * lo reindirizza alla pagina di login
         */
        public checkLogin() {
            $.get(HTMLPage.LOGGED_SRV, (result, a, ctx) => {
                let ris : string = <string>result;
                if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(ris,"false"))) new fabbricasemantica.RedirectingPage(HTMLPage.LOGIN_URL);
                return null;
            });
        }

        /**
         * Controlla che l'utente abbia effettuato il logout, altrimenti
         * lo reindirizza alla home
         */
        public checkLogout() {
            $.get(HTMLPage.LOGGED_SRV, (result, a, ctx) => {
                let ris : string = <string>result;
                if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(ris,"true"))) new fabbricasemantica.RedirectingPage(HTMLPage.HOME_URL);
                return null;
            });
        }
    }
    HTMLPage["__class"] = "fabbricasemantica.HTMLPage";

}

