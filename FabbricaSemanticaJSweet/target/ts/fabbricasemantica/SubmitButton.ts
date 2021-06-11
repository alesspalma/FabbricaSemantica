/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
namespace fabbricasemantica {
    export class SubmitButton extends fabbricasemantica.SiteElement {
        /*private*/ button : HTMLInputElement;

        public constructor(name? : any, value? : any, width? : any, left? : any, margin_top? : any) {
            if(((typeof name === 'string') || name === null) && ((typeof value === 'string') || value === null) && ((typeof width === 'string') || width === null) && ((typeof left === 'string') || left === null) && ((typeof margin_top === 'string') || margin_top === null)) {
                let __args = arguments;
                super();
                if(this.button===undefined) this.button = null;
                if(this.button===undefined) this.button = null;
                (() => {
                    this.button = <HTMLInputElement>new fabbricasemantica.HTMLElementBuilder().assignElement(fabbricasemantica.HTMLTags.INPUT).setType("submit").setName(name).setClassName("btn btn-primary").setValue(value).css(["background", fabbricasemantica.SiteElement.button_color, "border-color", fabbricasemantica.SiteElement.border_color, "position", "relative", "width", width, "left", left, "margin-top", margin_top]).build();
                })();
            } else if(((typeof name === 'string') || name === null) && ((typeof value === 'string') || value === null) && ((typeof width === 'string') || width === null) && ((typeof left === 'string') || left === null) && margin_top === undefined) {
                let __args = arguments;
                {
                    let __args = arguments;
                    let margin_top : any = "";
                    super();
                    if(this.button===undefined) this.button = null;
                    if(this.button===undefined) this.button = null;
                    (() => {
                        this.button = <HTMLInputElement>new fabbricasemantica.HTMLElementBuilder().assignElement(fabbricasemantica.HTMLTags.INPUT).setType("submit").setName(name).setClassName("btn btn-primary").setValue(value).css(["background", fabbricasemantica.SiteElement.button_color, "border-color", fabbricasemantica.SiteElement.border_color, "position", "relative", "width", width, "left", left, "margin-top", margin_top]).build();
                    })();
                }
            } else if(((typeof name === 'string') || name === null) && ((typeof value === 'string') || value === null) && ((width != null && width instanceof <any>Array && (width.length==0 || width[0] == null ||(typeof width[0] === 'string'))) || width === null) && left === undefined && margin_top === undefined) {
                let __args = arguments;
                let cssValues : any = __args[2];
                {
                    let __args = arguments;
                    let width : any = "";
                    let left : any = "";
                    let margin_top : any = "";
                    super();
                    if(this.button===undefined) this.button = null;
                    if(this.button===undefined) this.button = null;
                    (() => {
                        this.button = <HTMLInputElement>new fabbricasemantica.HTMLElementBuilder().assignElement(fabbricasemantica.HTMLTags.INPUT).setType("submit").setName(name).setClassName("btn btn-primary").setValue(value).css(["background", fabbricasemantica.SiteElement.button_color, "border-color", fabbricasemantica.SiteElement.border_color, "position", "relative", "width", width, "left", left, "margin-top", margin_top]).build();
                    })();
                }
                (() => {
                    for(let i : number = 0; i < cssValues.length; i += 2) {$(this.button).css(cssValues[i], cssValues[i + 1]);}
                })();
            } else throw new Error('invalid overload');
        }

        public get() : HTMLInputElement {
            return this.button;
        }
    }
    SubmitButton["__class"] = "fabbricasemantica.SubmitButton";

}

