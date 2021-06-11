package fabbricasemantica;

import def.dom.HTMLInputElement;
import static def.jquery.Globals.$;

/**
 * Classe che serve a costruire un bottone qualsiasi
 * @author aless
 *
 */
public class Button extends SiteElement
{
	/**
	 * Campo che incapsula l'elemento HTML
	 */
	private HTMLInputElement button;
	
	/**
	 * Costruttore completo del bottone
	 * @param name nome 
	 * @param value testo visibile sul sito
	 * @param width larghezza
	 * @param left spiazzamento a sinistra
	 * @param margin_top spiazzamento superiore
	 */
	public Button(String name,String value, String width, String left, String margin_top)
	{
		button= (HTMLInputElement)new HTMLElementBuilder()
					.assignElement(HTMLTags.INPUT)
					.setType("button")
					.setName(name)
					.setClassName("btn btn-primary")
					.setValue(value)
					.css(new String[] {"background",button_color,"border-color",border_color,"position","relative","width", width,
							"left",left,"margin-top",margin_top})
					.build();
	}
	
	/**
	 * Costruttore semplificato
	 * @param name nome
	 * @param value testo visibile sul sito
	 * @param width larghezza
	 * @param left spiazzamento a sinistra
	 */
	public Button(String name,String value, String width, String left)
	{ this(name,value,width,left,""); }
	
	/**
	 * Costruttore semplificato
	 * @param name nome
	 * @param value testo visibile sul sito
	 * @param cssValues array di valori css personalizzati
	 */
	public Button(String name,String value, String[] cssValues)
	{ 
		this(name,value,"","","");
		for(int i=0; i < cssValues.length; i+=2)
			$(button).css(cssValues[i],cssValues[i+1]);
	}
	
	/**
	 * Restituisce l'elemento HTML
	 */
	public HTMLInputElement get() { return button; }
	
}
