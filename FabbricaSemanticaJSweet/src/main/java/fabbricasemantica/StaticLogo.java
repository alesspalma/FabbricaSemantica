package fabbricasemantica;

import def.dom.HTMLLabelElement;

/**
 * Classe che costruisce un logo statico per le pagine del sito
 * @author aless
 *
 */
public class StaticLogo extends Logo
{
	/**
	 * Campo che incapsula l'elemento HTML
	 */
	private HTMLLabelElement logo;
	
	/**
	 * Costruttore completo
	 * @param font_size grandezza font
	 * @param width larghezza
	 * @param left spiazzamento a sinistra
	 */
	public StaticLogo(String font_size, String width, String left)
	{
		logo= (HTMLLabelElement) new HTMLElementBuilder()
				.assignElement(HTMLTags.LABEL)
				.setTextContent(siteName)
				.css(new String[] {"font-family",font_family,"font-size",font_size,
						"font-style",font_style,"color",border_color,"position","relative","width",width,"left",left}).build();
	}
	
	/**
	 * Costruttore semplificato
	 * @param font_size grandezza font
	 * @param left spiazzamento sinistra
	 */
	public StaticLogo(String font_size, String left)
	{
		this(font_size,"",left);
	}
	
	/**
	 * Costruttore semplificato
	 * @param font_size grandezza font
	 */
	public StaticLogo(String font_size)
	{
		this(font_size,"","");
	}
	
	/**
	 * Ritorna l'elemento HTML
	 */
	public HTMLLabelElement get() { return logo; }
}
