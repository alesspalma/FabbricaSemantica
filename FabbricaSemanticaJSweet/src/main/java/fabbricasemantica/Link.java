package fabbricasemantica;

import def.dom.HTMLAnchorElement;

/**
 * Ritorna un link (anchor element) che graficamente viene visualizzato come fosse un pulsante
 * @author aless
 *
 */
public class Link extends SiteElement
{
	/**
	 * Campo che incapsula l'elemento HTML
	 */
	private HTMLAnchorElement link;
	
	/**
	 * Costruttore
	 * @param text testo del link
	 * @param href URL a cui portare
	 * @param width larghezza
	 * @param left spiazzamento a sinistra
	 * @param margin_top spiazzamento top
	 */
	public Link(String text, String href, String width, String left, String margin_top)
	{
		link= (HTMLAnchorElement)new HTMLElementBuilder()
					.assignElement(HTMLTags.ANCHOR)
					.setClassName("btn btn-primary")
					.setText(text)
					.setHref(href)
					.css(new String[] {"background",button_color,"border-color",border_color,"position","relative","width", width,
							"left",left,"margin-top",margin_top})
					.build();
	}
	
	/**
	 * Costruttore semplificato
	 * @param text testo del link
	 * @param href URL a cui portare
	 * @param width larghezza
	 * @param margin_top spiazzamento top
	 */
	public Link(String text, String href,String width, String margin_top)
	{ this(text,href,width,"",margin_top); }
	
	/**
	 * Costruttore semplificato
	 * @param text testo del link
	 * @param href URL a cui portare
	 */
	public Link(String text, String href)
	{ this(text,href,"","",""); }
	
	
	@Override
	/**
	 * Ritorna l'elemento HTML
	 */
	public HTMLAnchorElement get() { return link; }

}
