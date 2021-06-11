/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
var fabbricasemantica;
(function (fabbricasemantica) {
    /**
     * Costruttore della pagina
     * @class
     * @extends fabbricasemantica.HTMLPage
     * @author aless
     */
    class Home extends fabbricasemantica.HTMLPage {
        constructor() {
            super();
            this.checkLogin();
            this.createHeading();
            let formPlay = fabbricasemantica.HTMLElementBuilder.getForm$java_lang_String$java_lang_String(Home.PLAY_URL, "6em");
            let divPlay = fabbricasemantica.HTMLElementBuilder.getStandardDiv();
            $(divPlay).css("text-align", "center");
            let snakeLabel = fabbricasemantica.HTMLElementBuilder.getLabel$java_lang_String$java_lang_String_A("Gioca ora a Snake: word validation", ["font-weight", "bold", "font-size", "x-large", "display", "block"]);
            let playButton = new fabbricasemantica.ImageButton("play.png", "3.5em", "25%").get();
            $(divPlay).append(snakeLabel, playButton);
            $(formPlay).append(divPlay);
            $("body").append(formPlay);
        }
        static main(args) {
            new Home();
        }
    }
    /**
     * URL della pagina del gioco
     */
    Home.PLAY_URL = "snake.html";
    fabbricasemantica.Home = Home;
    Home["__class"] = "fabbricasemantica.Home";
})(fabbricasemantica || (fabbricasemantica = {}));
fabbricasemantica.Home.main(null);
