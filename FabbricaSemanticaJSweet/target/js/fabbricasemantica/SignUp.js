/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
var fabbricasemantica;
(function (fabbricasemantica) {
    /**
     * Costruttore
     * @class
     * @extends fabbricasemantica.HTMLPage
     * @author aless
     */
    class SignUp extends fabbricasemantica.HTMLPage {
        constructor() {
            super();
            this.checkLogout();
            let titolo = new fabbricasemantica.StaticLogo("45px", "81%", "9.5%").get();
            let formSignUp = fabbricasemantica.HTMLElementBuilder.getForm$java_lang_String$java_lang_String$java_lang_String$java_lang_String(SignUp.SIGNUP_URL, "40%", "30%", "46.16px");
            let email = fabbricasemantica.HTMLElementBuilder.getMailBox();
            let password = fabbricasemantica.HTMLElementBuilder.getPasswordBox();
            let passwordConfirm = fabbricasemantica.HTMLElementBuilder.getTextBox$java_lang_String$java_lang_String$java_lang_String("password", "passwordConfirm", "Ripeti la password...");
            let italianCheck = fabbricasemantica.HTMLElementBuilder.getCheckbox("italian_tongue", true, ["position", "relative", "left", "4%"]);
            let italian = fabbricasemantica.HTMLElementBuilder.getLabel$java_lang_String$java_lang_String_A("IT (Italiano)", ["position", "relative", "left", "4%"]);
            let englishCheck = fabbricasemantica.HTMLElementBuilder.getCheckbox("english_tongue", false, ["position", "relative", "left", "8%"]);
            let english = fabbricasemantica.HTMLElementBuilder.getLabel$java_lang_String$java_lang_String_A("EN (Inglese)", ["position", "relative", "left", "8%"]);
            let otherTongue1 = fabbricasemantica.HTMLElementBuilder.getTextBox$java_lang_String$java_lang_String$java_lang_String_A("text", "other_tongue_1", ["width", "50%", "display", "inline-block"]);
            let tongueLevel1 = new fabbricasemantica.DropdownMenu("tongue_level_1", "10%", "A1", "A2", "B1", "B2", "C1", "C2").get();
            let otherTongue2 = fabbricasemantica.HTMLElementBuilder.getTextBox$java_lang_String$java_lang_String$java_lang_String_A("text", "other_tongue_2", ["width", "50%", "display", "inline-block", "margin-top", "1em"]);
            let tongueLevel2 = new fabbricasemantica.DropdownMenu("tongue_level_2", "10%", "A1", "A2", "B1", "B2", "C1", "C2").get();
            let otherTongue3 = fabbricasemantica.HTMLElementBuilder.getTextBox$java_lang_String$java_lang_String$java_lang_String_A("text", "other_tongue_3", ["width", "50%", "display", "inline-block", "margin-top", "1em"]);
            let tongueLevel3 = new fabbricasemantica.DropdownMenu("tongue_level_3", "10%", "A1", "A2", "B1", "B2", "C1", "C2").get();
            let signUp = new fabbricasemantica.SignupButton("Registrati", "20%", "40%", "0.1em").get();
            signUp.addEventListener("click", ((password, passwordConfirm, italianCheck, formSignUp, email, englishCheck) => {
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
                    } })(password.value, "") || ((o1, o2) => { if (o1 && o1.equals) {
                        return o1.equals(o2);
                    }
                    else {
                        return o1 === o2;
                    } })(passwordConfirm.value, "") || (!italianCheck.checked && !englishCheck.checked))
                        alert("Devi compilare tutti i campi");
                    else
                        formSignUp.submit();
                };
            })(password, passwordConfirm, italianCheck, formSignUp, email, englishCheck));
            let login = new fabbricasemantica.Link("Hai gi\u00e0 un account? Accedi!", fabbricasemantica.HTMLPage.LOGIN_URL, "19%", "4.22em").get();
            $(login).css("bottom", "16px");
            let divTitolo = fabbricasemantica.HTMLElementBuilder.getStandardDiv();
            $(divTitolo).append(titolo);
            let divMail = fabbricasemantica.HTMLElementBuilder.getStandardDiv();
            let label = fabbricasemantica.HTMLElementBuilder.getLabel$java_lang_String("* Indirizzo email:");
            $(divMail).append(label, email);
            let divPassword = fabbricasemantica.HTMLElementBuilder.getStandardDiv();
            let label2 = fabbricasemantica.HTMLElementBuilder.getLabel$java_lang_String("* Password:");
            let label3 = fabbricasemantica.HTMLElementBuilder.getLabel$java_lang_String("* Conferma password:");
            $(divPassword).append(label2, password);
            let divPassword2 = fabbricasemantica.HTMLElementBuilder.getStandardDiv();
            $(divPassword2).append(label3, passwordConfirm);
            let divLanguages = fabbricasemantica.HTMLElementBuilder.getStandardDiv();
            let label4 = fabbricasemantica.HTMLElementBuilder.getLabel$java_lang_String("* Madrelingua:");
            $(divLanguages).append(label4, italianCheck, italian, englishCheck, english);
            let etichettaLingue = fabbricasemantica.HTMLElementBuilder.getLabel$java_lang_String$java_lang_String_A("Altre lingue parlate:", ["display", "block"]);
            let divOtherLanguages = fabbricasemantica.HTMLElementBuilder.getStandardDiv();
            $(divOtherLanguages).append(etichettaLingue, otherTongue1, tongueLevel1, otherTongue2, tongueLevel2, otherTongue3, tongueLevel3);
            let divObblig = fabbricasemantica.HTMLElementBuilder.getStandardDiv();
            let etichettaObblig = fabbricasemantica.HTMLElementBuilder.getLabel$java_lang_String$java_lang_String_A("I campi contrassegnati con * sono obbligatori.", ["font-size", "small"]);
            $(divObblig).append(etichettaObblig);
            let divSignup = fabbricasemantica.HTMLElementBuilder.getStandardDiv();
            $(divSignup).append(signUp);
            let divLogin = fabbricasemantica.HTMLElementBuilder.getStandardDiv();
            $(divLogin).css("text-align", "center");
            $(divLogin).append(login);
            $(formSignUp).append(divTitolo, divMail, divPassword, divPassword2, divLanguages, divOtherLanguages, divObblig, divSignup);
            $("body").append(formSignUp, divLogin);
        }
        static main(args) {
            new SignUp();
        }
    }
    /**
     * URL della servlet di registrazione
     */
    SignUp.SIGNUP_URL = "signup.jsp";
    fabbricasemantica.SignUp = SignUp;
    SignUp["__class"] = "fabbricasemantica.SignUp";
})(fabbricasemantica || (fabbricasemantica = {}));
fabbricasemantica.SignUp.main(null);
