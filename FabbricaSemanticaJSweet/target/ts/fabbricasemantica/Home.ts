/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
namespace fabbricasemantica {
    /**
     * Costruttore della pagina
     * @class
     * @extends fabbricasemantica.HTMLPage
     * @author aless
     */
    export class Home extends fabbricasemantica.HTMLPage {
        /**
         * URL della pagina del gioco
         */
        public static PLAY_URL : string = "snake.html";

        public constructor() {
            super();
            this.checkLogin();
            this.createHeading();
            let formPlay : HTMLFormElement = fabbricasemantica.HTMLElementBuilder.getForm$java_lang_String$java_lang_String(Home.PLAY_URL, "6em");
            let divPlay : HTMLDivElement = fabbricasemantica.HTMLElementBuilder.getStandardDiv();
            $(divPlay).css("text-align", "center");
            let snakeLabel : HTMLLabelElement = fabbricasemantica.HTMLElementBuilder.getLabel$java_lang_String$java_lang_String_A("Gioca ora a Snake: word validation", ["font-weight", "bold", "font-size", "x-large", "display", "block"]);
            let playButton : HTMLInputElement = new fabbricasemantica.ImageButton("play.png", "3.5em", "25%").get();
            $(divPlay).append(snakeLabel, playButton);
            $(formPlay).append(divPlay);
            $("body").append(formPlay);
        }

        public static main(args : string[]) {
            new Home();
        }
    }
    Home["__class"] = "fabbricasemantica.Home";

}


fabbricasemantica.Home.main(null);
