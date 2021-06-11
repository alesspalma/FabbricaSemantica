/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
var fabbricasemantica;
(function (fabbricasemantica) {
    /**
     * Costruttore
     * @class
     * @extends fabbricasemantica.HTMLPage
     * @author aless
     */
    class Login extends fabbricasemantica.HTMLPage {
        constructor() {
            super();
            this.checkLogout();
            let formLogin = fabbricasemantica.HTMLElementBuilder.getForm$java_lang_String$java_lang_String$java_lang_String$java_lang_String(Login.LOGIN_SRV, "40%", "30%", "75px");
            let email = fabbricasemantica.HTMLElementBuilder.getMailBox();
            let password = fabbricasemantica.HTMLElementBuilder.getPasswordBox();
            let login = new fabbricasemantica.LoginButton("Login", "13%", "43.5%", "0.4em").get();
            login.addEventListener("click", ((password, formLogin, email) => {
                return (ev) => {
                    if (((o1, o2) => { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })(email.value, "") || ((o1, o2) => { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })(password.value, ""))
                        alert("Devi compilare tutti i campi.");
                    else
                        formLogin.submit();
                };
            })(password, formLogin, email));
            let signUp = new fabbricasemantica.Link("Non hai ancora un account? Registrati!", Login.SIGNUP_URL, "24%", "5.06em").get();
            let titolo = new fabbricasemantica.StaticLogo("45px", "80%", "10%").get();
            let divTitolo = fabbricasemantica.HTMLElementBuilder.getStandardDiv();
            $(divTitolo).append(titolo);
            let divMail = fabbricasemantica.HTMLElementBuilder.getStandardDiv();
            let label = fabbricasemantica.HTMLElementBuilder.getLabel$java_lang_String("Indirizzo email:");
            $(divMail).append(label, email);
            let divPassword = fabbricasemantica.HTMLElementBuilder.getStandardDiv();
            let label2 = fabbricasemantica.HTMLElementBuilder.getLabel$java_lang_String("Password:");
            $(divPassword).append(label2, password);
            let divLogin = fabbricasemantica.HTMLElementBuilder.getStandardDiv();
            $(divLogin).append(login);
            let divRegister = fabbricasemantica.HTMLElementBuilder.getStandardDiv();
            $(divRegister).css("text-align", "center");
            $(divRegister).append(signUp);
            $(formLogin).append(divTitolo, divMail, divPassword, divLogin);
            $("body").append(formLogin, divRegister);
        }
        static main(args) {
            new Login();
        }
    }
    /**
     * URL servlet di login
     */
    Login.LOGIN_SRV = "login.jsp";
    /**
     * URL pagina di registrazione
     */
    Login.SIGNUP_URL = "signup.html";
    fabbricasemantica.Login = Login;
    Login["__class"] = "fabbricasemantica.Login";
})(fabbricasemantica || (fabbricasemantica = {}));
fabbricasemantica.Login.main(null);
