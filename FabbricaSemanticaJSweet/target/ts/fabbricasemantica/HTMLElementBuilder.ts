/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
namespace fabbricasemantica {
    /**
     * Classe builder di elementi HTML, che fornisce anche alcuni metodi
     * statici utili per richiedere elementi che vengono usati spesso, senza dover
     * rendere il codice estremamente verboso
     * @author aless
     * @class
     */
    export class HTMLElementBuilder {
        /**
         * Campo che incapsula l'elemento html
         */
        /*private*/ element : HTMLElement;

        /**
         * Ritorna un div standard senza particolari caratteristiche
         * @return {HTMLDivElement} div
         */
        public static getStandardDiv() : HTMLDivElement {
            return <HTMLDivElement>new HTMLElementBuilder().assignElement(fabbricasemantica.HTMLTags.DIV).setClassName("form-group").build();
        }

        /**
         * Ritorna un canvas personalizzato
         * @param {string} id id
         * @param {number} width larghezza
         * @param {number} height altezza
         * @param {string} bckgrColor colore di background
         * @param {string} border colore del bordo
         * @return {HTMLCanvasElement} canvas
         */
        public static getCanvas(id : string, width : number, height : number, bckgrColor : string, border : string) : HTMLCanvasElement {
            return <HTMLCanvasElement>new HTMLElementBuilder().assignElement(fabbricasemantica.HTMLTags.CANVAS).setID(id).setWidth(width).setHeight(height).css(["background-color", bckgrColor, "border", border]).build();
        }

        public static getForm$java_lang_String$java_lang_String$java_lang_String$java_lang_String(url : string, width : string, left : string, top : string) : HTMLFormElement {
            return <HTMLFormElement>new HTMLElementBuilder().assignElement(fabbricasemantica.HTMLTags.FORM).setAction(url).setMethod("POST").css(["width", width, "position", "relative", "left", left, "top", top]).build();
        }

        /**
         * Metodo che ritorna un form personalizzato
         * @param {string} url url a cui indirizza il form quando inviato
         * @param {string} width larghezza
         * @param {string} left spiazzamento a sinistra
         * @param {string} top spiazzamento top
         * @return {HTMLFormElement} form
         */
        public static getForm(url? : any, width? : any, left? : any, top? : any) : any {
            if(((typeof url === 'string') || url === null) && ((typeof width === 'string') || width === null) && ((typeof left === 'string') || left === null) && ((typeof top === 'string') || top === null)) {
                return <any>fabbricasemantica.HTMLElementBuilder.getForm$java_lang_String$java_lang_String$java_lang_String$java_lang_String(url, width, left, top);
            } else if(((typeof url === 'string') || url === null) && ((typeof width === 'string') || width === null) && left === undefined && top === undefined) {
                return <any>fabbricasemantica.HTMLElementBuilder.getForm$java_lang_String$java_lang_String(url, width);
            } else throw new Error('invalid overload');
        }

        public static getForm$java_lang_String$java_lang_String(url : string, top : string) : HTMLFormElement {
            let form : HTMLFormElement = HTMLElementBuilder.getForm$java_lang_String$java_lang_String$java_lang_String$java_lang_String(url, "", "", "");
            $(form).css("margin-top", top);
            return form;
        }

        /**
         * Metodo che ritorna una checkbox personalizzata
         * @param {string} name nome
         * @param {boolean} checked se la checkbox deve essere selezionata di default
         * @param {Array} values valori css
         * @return {HTMLInputElement} checkbox
         */
        public static getCheckbox(name : string, checked : boolean, values : string[]) : HTMLInputElement {
            return <HTMLInputElement>new HTMLElementBuilder().assignElement(fabbricasemantica.HTMLTags.INPUT).setType("checkbox").setName(name).setClassName("btn btn-primary").setChecked(checked).css(["box-shadow", "none"]).css(values).build();
        }

        /**
         * Metodo che ritorna una box dove inserire la password
         * @return {HTMLInputElement} password box
         */
        public static getPasswordBox() : HTMLInputElement {
            return HTMLElementBuilder.getTextBox$java_lang_String$java_lang_String$java_lang_String("password", "password", "Inserisci la tua password qui...");
        }

        /**
         * Metodo che ritorna una box dove inserire la mail
         * @return {HTMLInputElement} mailbox
         */
        public static getMailBox() : HTMLInputElement {
            return HTMLElementBuilder.getTextBox$java_lang_String$java_lang_String$java_lang_String("email", "email", "Inserisci il tuo indirizzo email qui...");
        }

        public static getTextBox$java_lang_String$java_lang_String$java_lang_String(type : string, name : string, placeholder : string) : HTMLInputElement {
            return <HTMLInputElement>new HTMLElementBuilder().assignElement(fabbricasemantica.HTMLTags.INPUT).setType(type).setName(name).setID(name).setClassName("form-control").setPlaceholder(placeholder).build();
        }

        /**
         * Metodo che ritorna una testbox qualsiasi personalizzata
         * @param {string} type tipo
         * @param {string} name nome
         * @param {string} placeholder scritta di default
         * @return {HTMLInputElement} textbox
         */
        public static getTextBox(type? : any, name? : any, placeholder? : any) : any {
            if(((typeof type === 'string') || type === null) && ((typeof name === 'string') || name === null) && ((typeof placeholder === 'string') || placeholder === null)) {
                return <any>fabbricasemantica.HTMLElementBuilder.getTextBox$java_lang_String$java_lang_String$java_lang_String(type, name, placeholder);
            } else if(((typeof type === 'string') || type === null) && ((typeof name === 'string') || name === null) && ((placeholder != null && placeholder instanceof <any>Array && (placeholder.length==0 || placeholder[0] == null ||(typeof placeholder[0] === 'string'))) || placeholder === null)) {
                return <any>fabbricasemantica.HTMLElementBuilder.getTextBox$java_lang_String$java_lang_String$java_lang_String_A(type, name, placeholder);
            } else throw new Error('invalid overload');
        }

        public static getTextBox$java_lang_String$java_lang_String$java_lang_String_A(type : string, name : string, cssValues : string[]) : HTMLInputElement {
            let ris : HTMLInputElement = HTMLElementBuilder.getTextBox$java_lang_String$java_lang_String$java_lang_String(type, name, "");
            for(let i : number = 0; i < cssValues.length; i += 2) {$(ris).css(cssValues[i], cssValues[i + 1]);}
            return ris;
        }

        public static getEmptyLabel$() : HTMLLabelElement {
            return HTMLElementBuilder.getEmptyLabel$java_lang_String_A([]);
        }

        public static getEmptyLabel$java_lang_String_A(cssValues : string[]) : HTMLLabelElement {
            let label : HTMLLabelElement = HTMLElementBuilder.getLabel$java_lang_String$java_lang_String_A("", []);
            $(label).css("display", "block");
            for(let i : number = 0; i < cssValues.length; i += 2) {{
                $(label).css(cssValues[i], cssValues[i + 1]);
            };}
            return label;
        }

        /**
         * Metodo che ritorna una label vuota personalizzata
         * @param {Array} cssValues array valori css
         * @return {HTMLLabelElement} label
         */
        public static getEmptyLabel(cssValues? : any) : any {
            if(((cssValues != null && cssValues instanceof <any>Array && (cssValues.length==0 || cssValues[0] == null ||(typeof cssValues[0] === 'string'))) || cssValues === null)) {
                return <any>fabbricasemantica.HTMLElementBuilder.getEmptyLabel$java_lang_String_A(cssValues);
            } else if(cssValues === undefined) {
                return <any>fabbricasemantica.HTMLElementBuilder.getEmptyLabel$();
            } else throw new Error('invalid overload');
        }

        public static getLabel$java_lang_String(text : string) : HTMLLabelElement {
            return HTMLElementBuilder.getLabel$java_lang_String$java_lang_String_A(text, []);
        }

        public static getLabel$java_lang_String$java_lang_String_A(text : string, cssValues : string[]) : HTMLLabelElement {
            return <HTMLLabelElement>new HTMLElementBuilder().assignElement(fabbricasemantica.HTMLTags.LABEL).setTextContent(text).css(cssValues).build();
        }

        /**
         * Ritorna una label personalizzata con testo personalizzato
         * @param {string} text testo della label
         * @param {Array} cssValues array valori css
         * @return {HTMLLabelElement} label
         */
        public static getLabel(text? : any, cssValues? : any) : any {
            if(((typeof text === 'string') || text === null) && ((cssValues != null && cssValues instanceof <any>Array && (cssValues.length==0 || cssValues[0] == null ||(typeof cssValues[0] === 'string'))) || cssValues === null)) {
                return <any>fabbricasemantica.HTMLElementBuilder.getLabel$java_lang_String$java_lang_String_A(text, cssValues);
            } else if(((typeof text === 'string') || text === null) && cssValues === undefined) {
                return <any>fabbricasemantica.HTMLElementBuilder.getLabel$java_lang_String(text);
            } else throw new Error('invalid overload');
        }

        /**
         * Crea l'elemento HTML
         * @param {fabbricasemantica.HTMLTags} s tipo dell'elemento (tag html) da creare
         * @return {fabbricasemantica.HTMLElementBuilder} this
         */
        public assignElement(s : fabbricasemantica.HTMLTags) : HTMLElementBuilder {
            switch((s)) {
            case fabbricasemantica.HTMLTags.FORM:
                this.element = document.createElement("form");
                break;
            case fabbricasemantica.HTMLTags.DIV:
                this.element = document.createElement("div");
                break;
            case fabbricasemantica.HTMLTags.INPUT:
                this.element = document.createElement("input");
                break;
            case fabbricasemantica.HTMLTags.LABEL:
                this.element = document.createElement("label");
                break;
            case fabbricasemantica.HTMLTags.ANCHOR:
                this.element = document.createElement("a");
                break;
            case fabbricasemantica.HTMLTags.CANVAS:
                this.element = document.createElement("canvas");
                break;
            case fabbricasemantica.HTMLTags.SELECT:
                this.element = document.createElement("select");
                break;
            }
            return this;
        }

        /**
         * Setta l'ID
         * @param {string} s stringa ID
         * @return {fabbricasemantica.HTMLElementBuilder} this
         */
        public setID(s : string) : HTMLElementBuilder {
            this.element.id = s;
            return this;
        }

        /**
         * Setta il className
         * @param {string} s stringa className
         * @return {fabbricasemantica.HTMLElementBuilder} this
         */
        public setClassName(s : string) : HTMLElementBuilder {
            this.element.className = s;
            return this;
        }

        /**
         * Setta i valori css
         * @param {Array} cssValues array valori css da assegnare all'elemento HTML
         * @return {fabbricasemantica.HTMLElementBuilder} this
         */
        public css(cssValues : string[]) : HTMLElementBuilder {
            for(let i : number = 0; i < cssValues.length; i += 2) {{
                $(this.element).css(cssValues[i], cssValues[i + 1]);
            };}
            return this;
        }

        /**
         * Builder
         * @return {HTMLElement} l'elemento HTML creato
         */
        public build() : HTMLElement {
            return this.element;
        }

        /**
         * Setta il method della form
         * @param {string} s stringa method
         * @return {fabbricasemantica.HTMLElementBuilder} this
         */
        public setMethod(s : string) : HTMLElementBuilder {
            (<HTMLFormElement>this.element).method = s;
            return this;
        }

        /**
         * Setta l'action della form
         * @param {string} s stringa URL action
         * @return {fabbricasemantica.HTMLElementBuilder} this
         */
        public setAction(s : string) : HTMLElementBuilder {
            (<HTMLFormElement>this.element).action = s;
            return this;
        }

        /**
         * Setta il tipo dell'input element
         * @param {string} s stringa type
         * @return {fabbricasemantica.HTMLElementBuilder} this
         */
        public setType(s : string) : HTMLElementBuilder {
            (<HTMLInputElement>(this.element)).type = s;
            return this;
        }

        /**
         * Setta il nome dell'input element
         * @param {string} s stringa nome
         * @return {fabbricasemantica.HTMLElementBuilder} this
         */
        public setName(s : string) : HTMLElementBuilder {
            (<HTMLInputElement>(this.element)).name = s;
            return this;
        }

        /**
         * Setta il placeHolder dell'input element
         * @param {string} s stringa placeHolder
         * @return {fabbricasemantica.HTMLElementBuilder} this
         */
        public setPlaceholder(s : string) : HTMLElementBuilder {
            (<HTMLInputElement>(this.element)).placeholder = s;
            return this;
        }

        /**
         * Setta la value dell'input element
         * @param {string} s stringa value
         * @return {fabbricasemantica.HTMLElementBuilder} this
         */
        public setValue(s : string) : HTMLElementBuilder {
            (<HTMLInputElement>(this.element)).value = s;
            return this;
        }

        /**
         * Setta se l'input element e' selezionato di default
         * @param {boolean} checked booleano che ci dice se l'elemento e' selezionato
         * @return {fabbricasemantica.HTMLElementBuilder} this
         */
        public setChecked(checked : boolean) : HTMLElementBuilder {
            (<HTMLInputElement>(this.element)).checked = checked;
            return this;
        }

        /**
         * Setta la source dell'input element
         * @param {string} source stringa source
         * @return {fabbricasemantica.HTMLElementBuilder} this
         */
        public setSrc(source : string) : HTMLElementBuilder {
            (<HTMLInputElement>(this.element)).src = source;
            return this;
        }

        /**
         * Setta il textContent della label
         * @param {string} s stringa textContent
         * @return {fabbricasemantica.HTMLElementBuilder} this
         */
        public setTextContent(s : string) : HTMLElementBuilder {
            (<HTMLLabelElement>(this.element)).textContent = s;
            return this;
        }

        /**
         * Setta il text dell'anchor element
         * @param {string} s stringa text
         * @return {fabbricasemantica.HTMLElementBuilder} this
         */
        public setText(s : string) : HTMLElementBuilder {
            (<HTMLAnchorElement>(this.element)).text = s;
            return this;
        }

        /**
         * Setta l'href dell'anchor element, ovvero
         * l'url a cui ci reindirizza quando cliccato
         * @param {string} s stringa href
         * @return {fabbricasemantica.HTMLElementBuilder} this
         */
        public setHref(s : string) : HTMLElementBuilder {
            (<HTMLAnchorElement>(this.element)).href = s;
            return this;
        }

        /**
         * Setta la larghezza del canvas
         * @param {number} n larghezza
         * @return {fabbricasemantica.HTMLElementBuilder} this
         */
        public setWidth(n : number) : HTMLElementBuilder {
            (<HTMLCanvasElement>(this.element)).width = n;
            return this;
        }

        /**
         * Setta l'altezza del canvas
         * @param {number} n altezza
         * @return {fabbricasemantica.HTMLElementBuilder} this
         */
        public setHeight(n : number) : HTMLElementBuilder {
            (<HTMLCanvasElement>(this.element)).height = n;
            return this;
        }

        constructor() {
            if(this.element===undefined) this.element = null;
        }
    }
    HTMLElementBuilder["__class"] = "fabbricasemantica.HTMLElementBuilder";

}

