/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
var fabbricasemantica;
(function (fabbricasemantica) {
    /**
     * Costruttore della pagina
     * @class
     * @extends fabbricasemantica.HTMLPage
     * @author aless
     */
    class Game extends fabbricasemantica.HTMLPage {
        constructor() {
            super();
            this.checkLogin();
            this.createHeading();
            let canvas = fabbricasemantica.HTMLElementBuilder.getCanvas("snake", 795, 270, "white", "solid " + fabbricasemantica.Button.border_color);
            let snake = new fabbricasemantica.Snake(canvas);
            let counter = fabbricasemantica.HTMLElementBuilder.getLabel$java_lang_String$java_lang_String_A(snake.getPoints(), ["display", "block", "font-weight", "bold"]);
            counter.id = "counter";
            let divCanvas = fabbricasemantica.HTMLElementBuilder.getStandardDiv();
            $(divCanvas).css("position", "relative");
            $(divCanvas).css("top", "5px");
            $(divCanvas).css("text-align", "center");
            $(divCanvas).append(canvas, counter);
            $("body").append(divCanvas);
        }
        static main(args) {
            new Game();
        }
    }
    fabbricasemantica.Game = Game;
    Game["__class"] = "fabbricasemantica.Game";
})(fabbricasemantica || (fabbricasemantica = {}));
fabbricasemantica.Game.main(null);
