/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
/**
 * La vostra implementazione delle pagine dovrebbe essere modulare
 * e non un unico grande main()
 * 
 * @class
 */
class ExamplePage {
    public static SERVLET_URL : string = "example.jsp";

    public static REST_URL : string = "nextExample.jsp";

    public static main(args : string[]) {
        console.log("Creating form");
        let form : HTMLFormElement = document.createElement("form");
        form.action = ExamplePage.SERVLET_URL;
        form.method = "POST";
        console.log("Form Done");
        console.log("creating description");
        let description : HTMLLabelElement = document.createElement("label");
        description.className = "form-control-plaintext";
        description.setAttribute("style", "font-weight:bold");
        console.log("creating word");
        let word : HTMLLabelElement = document.createElement("label");
        word.className = "form-control-plaintext";
        console.log("creating translation");
        let translation : HTMLTextAreaElement = document.createElement("textarea");
        translation.name = "translation";
        translation.className = "form-control";
        translation.placeholder = "Scrivi la traduzione qui...";
        let submit : HTMLInputElement = document.createElement("input");
        submit.type = "submit";
        submit.name = "submit_button";
        submit.className = "btn btn-primary";
        submit.value = "Avanti";
        let skip : HTMLInputElement = document.createElement("input");
        skip.type = "submit";
        skip.name = "skip_button";
        skip.className = "btn btn-primary";
        skip.value = "Skip";
        $(skip).css("float", "right");
        $.getJSON(ExamplePage.REST_URL, "task=TRANSLATION_ANNOTATION", ((description,word) => {
            return (result, a, ctx) => {
                let json : JSON = <JSON>result;
                let sWord : string = <any>(json["word"]);
                let sDescription : string = <any>(json["description"]);
                $(word).text(sWord);
                $(description).text(sDescription);
                return null;
            }
        })(description,word));
        let divWord : HTMLDivElement = document.createElement("div");
        divWord.className = "form-group";
        $(divWord).append(word);
        let divDescription : HTMLDivElement = document.createElement("div");
        divDescription.className = "form-group";
        $(divDescription).append(description);
        let divTranslation : HTMLDivElement = document.createElement("div");
        divTranslation.className = "form-group";
        let label : HTMLLabelElement = document.createElement("label");
        label.textContent = "Traduzione:";
        $(divTranslation).append(label);
        $(divTranslation).append(translation);
        let divButtons : HTMLDivElement = document.createElement("div");
        divButtons.className = "form-group";
        $(divButtons).append(submit, skip);
        $(form).css("margin", "0% 1.5%");
        console.log("adding to form");
        $(form).append(divWord);
        $(form).append(divDescription);
        $(form).append(divTranslation);
        $(form).append(divButtons);
        console.log("adding to body");
        $("body").append(form);
    }
}
ExamplePage["__class"] = "ExamplePage";




ExamplePage.main(null);
