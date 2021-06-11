/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
namespace fabbricasemantica {
    export abstract class Loghino {
        static name : string = "Fabbrica Semantica";

        static font_family : string = "Georgia";

        static font_style : string = "italic";

        static color : string = "#C11B17";

        public abstract get<T extends HTMLElement>() : T;

        public setName(s : string) {
            Loghino.name = s;
        }

        public setFontFamily(s : string) {
            Loghino.font_family = s;
        }

        public setFontStyle(s : string) {
            Loghino.font_style = s;
        }

        public setColor(s : string) {
            Loghino.color = s;
        }
    }
    Loghino["__class"] = "fabbricasemantica.Loghino";

}

