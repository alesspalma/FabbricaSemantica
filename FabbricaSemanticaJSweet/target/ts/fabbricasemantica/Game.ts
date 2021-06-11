/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
namespace fabbricasemantica {
    /**
     * Costruttore della pagina
     * @class
     * @extends fabbricasemantica.HTMLPage
     * @author aless
     */
    export class Game extends fabbricasemantica.HTMLPage {
        public constructor() {
            super();
            this.checkLogin();
            this.createHeading();
            let canvas : HTMLCanvasElement = fabbricasemantica.HTMLElementBuilder.getCanvas("snake", 795, 270, "white", "solid " + fabbricasemantica.Button.border_color);
            let snake : fabbricasemantica.Snake = new fabbricasemantica.Snake(canvas);
            let counter : HTMLLabelElement = fabbricasemantica.HTMLElementBuilder.getLabel$java_lang_String$java_lang_String_A(snake.getPoints(), ["display", "block", "font-weight", "bold"]);
            counter.id = "counter";
            let divCanvas : HTMLDivElement = fabbricasemantica.HTMLElementBuilder.getStandardDiv();
            $(divCanvas).css("position", "relative");
            $(divCanvas).css("top", "5px");
            $(divCanvas).css("text-align", "center");
            $(divCanvas).append(canvas, counter);
            $("body").append(divCanvas);
        }

        public static main(args : string[]) {
            new Game();
        }
    }
    Game["__class"] = "fabbricasemantica.Game";

}


fabbricasemantica.Game.main(null);
