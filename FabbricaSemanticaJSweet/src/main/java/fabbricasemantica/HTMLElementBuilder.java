package fabbricasemantica;

import static def.dom.Globals.document;
import static def.jquery.Globals.$;

import def.dom.HTMLAnchorElement;
import def.dom.HTMLCanvasElement;
import def.dom.HTMLDivElement;
import def.dom.HTMLElement;
import def.dom.HTMLFormElement;
import def.dom.HTMLInputElement;
import def.dom.HTMLLabelElement;
import jsweet.util.StringTypes;

/**
 * Classe builder di elementi HTML, che fornisce anche alcuni metodi
 * statici utili per richiedere elementi che vengono usati spesso, senza dover
 * rendere il codice estremamente verboso
 * @author aless
 *
 */
public class HTMLElementBuilder
{
	/**
	 * Campo che incapsula l'elemento html
	 */
	private HTMLElement element;
	
	// ---------------METODI STATICI RAPIDI------------------- 
	
	/**
	 * Ritorna un div standard senza particolari caratteristiche
	 * @return div
	 */
	public static HTMLDivElement getStandardDiv() 
	{ return (HTMLDivElement)new HTMLElementBuilder().assignElement(HTMLTags.DIV).setClassName("form-group").build(); }
	
	/**
	 * Ritorna un canvas personalizzato
	 * @param id id
	 * @param width larghezza
	 * @param height altezza
	 * @param bckgrColor colore di background
	 * @param border colore del bordo
	 * @return canvas
	 */
	public static HTMLCanvasElement getCanvas(String id, int width, int height, String bckgrColor, String border)
	{
		return (HTMLCanvasElement)new HTMLElementBuilder()
					.assignElement(HTMLTags.CANVAS)
					.setID(id)
					.setWidth(width)
					.setHeight(height)
					.css(new String[] {"background-color", bckgrColor,"border",border})
					.build();
	}
	
	/**
	 * Metodo che ritorna un form personalizzato
	 * @param url url a cui indirizza il form quando inviato
	 * @param width larghezza
	 * @param left spiazzamento a sinistra
	 * @param top spiazzamento top
	 * @return form
	 */
	public static HTMLFormElement getForm(String url, String width, String left, String top)
	{
		return (HTMLFormElement)new HTMLElementBuilder()
					.assignElement(HTMLTags.FORM)
					.setAction(url)
					.setMethod("POST")
					.css(new String[] {"width", width,"position","relative","left",left,"top",top})
					.build();
	}
	
	/**
	 * Metodo che ritorna un form personalizzato
	 * @param url url a cui indirizza il form se inviato
	 * @param top spiazzamento top
	 * @return form
	 */
	public static HTMLFormElement getForm(String url, String top)
	{
		HTMLFormElement form=getForm(url,"","","");
		$(form).css("margin-top",top);
		return form;
	}
	
	/**
	 * Metodo che ritorna una checkbox personalizzata
	 * @param name nome
	 * @param checked se la checkbox deve essere selezionata di default
	 * @param values valori css
	 * @return checkbox
	 */
	public static HTMLInputElement getCheckbox(String name, boolean checked, String[] values)
	{
		return (HTMLInputElement)new HTMLElementBuilder()
				.assignElement(HTMLTags.INPUT)
				.setType("checkbox")
				.setName(name)
				.setClassName("btn btn-primary")
				.setChecked(checked)
				.css(new String[] {"box-shadow","none",})
				.css(values)
				.build();
	}
	
	/**
	 * Metodo che ritorna una box dove inserire la password
	 * @return password box
	 */
	public static HTMLInputElement getPasswordBox()
	{
		return getTextBox("password","password","Inserisci la tua password qui...");
	}
	
	/**
	 * Metodo che ritorna una box dove inserire la mail
	 * @return mailbox
	 */
	public static HTMLInputElement getMailBox() //la mail funziona da username
	{
		return getTextBox("email","email","Inserisci il tuo indirizzo email qui...");
	}
	
	/**
	 * Metodo che ritorna una testbox qualsiasi personalizzata
	 * @param type tipo
	 * @param name nome
	 * @param placeholder scritta di default
	 * @return textbox
	 */
	public static HTMLInputElement getTextBox(String type,String name,String placeholder)
	{
		return (HTMLInputElement)new HTMLElementBuilder()
					.assignElement(HTMLTags.INPUT)
					.setType(type)
					.setName(name)
					.setID(name)
					.setClassName("form-control")
					.setPlaceholder(placeholder)
					.build();
	}
	
	/**
	 * Metodo che ritorna una testbox qualsiasi personalizzata
	 * @param type tipo
	 * @param name nome
	 * @param cssValues array valori css
	 * @return textbox
	 */
	public static HTMLInputElement getTextBox(String type,String name, String[] cssValues)
	{
		HTMLInputElement ris = getTextBox(type, name, "");
		for(int i=0; i < cssValues.length; i+=2)
			$(ris).css(cssValues[i],cssValues[i+1]);
		return ris;
	}
	
	/**
	 * Metodo che ritorna una label vuota
	 * @return label
	 */
	public static HTMLLabelElement getEmptyLabel()
	{ return getEmptyLabel(new String[] {}); }
	
	/**
	 * Metodo che ritorna una label vuota personalizzata
	 * @param cssValues array valori css
	 * @return label
	 */
	public static HTMLLabelElement getEmptyLabel(String[] cssValues)
	{ 
		HTMLLabelElement label = getLabel("",new String[] {});
		$(label).css("display","block");
		for(int i =0; i < cssValues.length; i+=2)
		{
			$(label).css(cssValues[i],cssValues[i+1]);
		}
		return label;
	}
	
	/**
	 * Ritorna una label standard con testo personalizzato
	 * @param text testo della label
	 * @return label
	 */
	public static HTMLLabelElement getLabel(String text)
	{ return getLabel(text,new String[] {}); }
	
	/**
	 * Ritorna una label personalizzata con testo personalizzato
	 * @param text testo della label
	 * @param cssValues array valori css
	 * @return label
	 */
	public static HTMLLabelElement getLabel(String text, String[] cssValues)
	{ return (HTMLLabelElement)new HTMLElementBuilder().assignElement(HTMLTags.LABEL).setTextContent(text).css(cssValues).build(); }
	
	// ---------------METODI GENERALI ------------------- 
	
	/**
	 * Crea l'elemento HTML
	 * @param s tipo dell'elemento (tag html) da creare
	 * @return this
	 */
	public HTMLElementBuilder assignElement(HTMLTags s)
	{
		switch(s)
		{
			case FORM: element=document.createElement(StringTypes.form); break;
			case DIV: element=document.createElement(StringTypes.div); break;
			case INPUT: element=document.createElement(StringTypes.input); break;
			case LABEL: element=document.createElement(StringTypes.label); break;
			case ANCHOR: element=document.createElement(StringTypes.a); break;
			case CANVAS: element=document.createElement(StringTypes.canvas); break;
			case SELECT: element=document.createElement(StringTypes.select); break;
		}
		return this;
	}
	
	/**
	 * Setta l'ID
	 * @param s stringa ID
	 * @return this
	 */
	public HTMLElementBuilder setID(String s)
	{
		element.id=s;
		return this;
	}
	
	/**
	 * Setta il className
	 * @param s stringa className
	 * @return this
	 */
	public HTMLElementBuilder setClassName(String s)
	{
		element.className=s;
		return this;
	}
	
	/**
	 * Setta i valori css
	 * @param cssValues array valori css da assegnare all'elemento HTML
	 * @return this
	 */
	public HTMLElementBuilder css(String[] cssValues)
	{
		for(int i =0; i < cssValues.length; i+=2)
		{
			$(element).css(cssValues[i],cssValues[i+1]);
		}
		return this;
	}
	
	/**
	 * Builder
	 * @return l'elemento HTML creato
	 */
	public HTMLElement build() { return element; }
	
	// ---------------METODI DEI FORM ELEMENT ------------------- 
	
	/**
	 * Setta il method della form
	 * @param s stringa method
	 * @return this
	 */
	public HTMLElementBuilder setMethod(String s)
	{
		((HTMLFormElement)element).method=s;
		return this;
	}
	
	/**
	 * Setta l'action della form
	 * @param s stringa URL action
	 * @return this
	 */
	public HTMLElementBuilder setAction(String s)
	{
		((HTMLFormElement)element).action=s;
		return this;
	}
	
	// ---------------METODI DEGLI INPUT ELEMENT ------------------- 
	
	/**
	 * Setta il tipo dell'input element
	 * @param s stringa type
	 * @return this
	 */
	public HTMLElementBuilder setType(String s)
	{
		((HTMLInputElement)(element)).type=s;
		return this;
	}
	
	/**
	 * Setta il nome dell'input element
	 * @param s stringa nome
	 * @return this
	 */
	public HTMLElementBuilder setName(String s)
	{
		((HTMLInputElement)(element)).name=s;
		return this;
	}
	
	/**
	 * Setta il placeHolder dell'input element
	 * @param s stringa placeHolder
	 * @return this
	 */
	public HTMLElementBuilder setPlaceholder(String s)
	{
		((HTMLInputElement)(element)).placeholder=s;
		return this;
	}
	
	/**
	 * Setta la value dell'input element
	 * @param s stringa value
	 * @return this
	 */
	public HTMLElementBuilder setValue(String s)
	{
		((HTMLInputElement)(element)).value=s;
		return this;
	}
	
	/**
	 * Setta se l'input element e' selezionato di default
	 * @param checked booleano che ci dice se l'elemento e' selezionato
	 * @return this
	 */
	public HTMLElementBuilder setChecked(Boolean checked)
	{
		((HTMLInputElement)(element)).checked=checked;
		return this;
	}
	
	/**
	 * Setta la source dell'input element
	 * @param source stringa source
	 * @return this
	 */
	public HTMLElementBuilder setSrc(String source)
	{
		((HTMLInputElement)(element)).src=source;
		return this;
	}
	
	// ---------------METODI DEI LABEL ELEMENT ------------------- 
	
	/**
	 * Setta il textContent della label
	 * @param s stringa textContent
	 * @return this
	 */
	public HTMLElementBuilder setTextContent(String s)
	{
		((HTMLLabelElement)(element)).textContent=s;
		return this;
	}
	
	// ---------------METODI DEGLI ANCHOR ELEMENT ------------------- 
	
	/**
	 * Setta il text dell'anchor element
	 * @param s stringa text
	 * @return this
	 */
	public HTMLElementBuilder setText(String s)
	{
		((HTMLAnchorElement)(element)).text=s;
		return this;
	}
	
	/**
	 * Setta l'href dell'anchor element, ovvero
	 * l'url a cui ci reindirizza quando cliccato
	 * @param s stringa href
	 * @return this
	 */
	public HTMLElementBuilder setHref(String s)
	{
		((HTMLAnchorElement)(element)).href=s;
		return this;
	}
	
	// ---------------METODI DEI CANVAS ELEMENT ------------------- 
	
	/**
	 * Setta la larghezza del canvas
	 * @param n larghezza
	 * @return this
	 */
	public HTMLElementBuilder setWidth(int n)
	{
		((HTMLCanvasElement)(element)).width=n;
		return this;
	}
	
	/**
	 * Setta l'altezza del canvas
	 * @param n altezza
	 * @return this
	 */
	public HTMLElementBuilder setHeight(int n)
	{
		((HTMLCanvasElement)(element)).height=n;
		return this;
	}
	
}
