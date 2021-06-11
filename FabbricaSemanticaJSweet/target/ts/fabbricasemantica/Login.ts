/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
namespace fabbricasemantica {
    /**
     * Costruttore
     * @class
     * @extends fabbricasemantica.HTMLPage
     * @author aless
     */
    export class Login extends fabbricasemantica.HTMLPage {
        /**
         * URL servlet di login
         */
        public static LOGIN_SRV : string = "login.jsp";

        /**
         * URL pagina di registrazione
         */
        public static SIGNUP_URL : string = "signup.html";

        public constructor() {
            super();
            this.checkLogout();
            let formLogin : HTMLFormElement = fabbricasemantica.HTMLElementBuilder.getForm$java_lang_String$java_lang_String$java_lang_String$java_lang_String(Login.LOGIN_SRV, "40%", "30%", "75px");
            let email : HTMLInputElement = fabbricasemantica.HTMLElementBuilder.getMailBox();
            let password : HTMLInputElement = fabbricasemantica.HTMLElementBuilder.getPasswordBox();
            let login : HTMLInputElement = new fabbricasemantica.LoginButton("Login", "13%", "43.5%", "0.4em").get();
            login.addEventListener("click", ((password,formLogin,email) => {
                return (ev) => {
                    if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(email.value,"")) || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(password.value,""))) alert("Devi compilare tutti i campi."); else formLogin.submit();
                }
            })(password,formLogin,email));
            let signUp : HTMLAnchorElement = new fabbricasemantica.Link("Non hai ancora un account? Registrati!", Login.SIGNUP_URL, "24%", "5.06em").get();
            let titolo : HTMLLabelElement = new fabbricasemantica.StaticLogo("45px", "80%", "10%").get();
            let divTitolo : HTMLDivElement = fabbricasemantica.HTMLElementBuilder.getStandardDiv();
            $(divTitolo).append(titolo);
            let divMail : HTMLDivElement = fabbricasemantica.HTMLElementBuilder.getStandardDiv();
            let label : HTMLLabelElement = fabbricasemantica.HTMLElementBuilder.getLabel$java_lang_String("Indirizzo email:");
            $(divMail).append(label, email);
            let divPassword : HTMLDivElement = fabbricasemantica.HTMLElementBuilder.getStandardDiv();
            let label2 : HTMLLabelElement = fabbricasemantica.HTMLElementBuilder.getLabel$java_lang_String("Password:");
            $(divPassword).append(label2, password);
            let divLogin : HTMLDivElement = fabbricasemantica.HTMLElementBuilder.getStandardDiv();
            $(divLogin).append(login);
            let divRegister : HTMLDivElement = fabbricasemantica.HTMLElementBuilder.getStandardDiv();
            $(divRegister).css("text-align", "center");
            $(divRegister).append(signUp);
            $(formLogin).append(divTitolo, divMail, divPassword, divLogin);
            $("body").append(formLogin, divRegister);
        }

        public static main(args : string[]) {
            new Login();
        }
    }
    Login["__class"] = "fabbricasemantica.Login";

}


fabbricasemantica.Login.main(null);
