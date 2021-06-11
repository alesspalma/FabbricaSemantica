package fabbricasemantica;

import def.dom.HTMLAnchorElement;

/**
 * Tipo di logo cliccabile, che reindirizza ad un url a scelta
 * @author aless
 *
 */
public class ClickableLogo extends Logo
{
	/**
	 * Campo che incapsula l'elemento html
	 */
	private HTMLAnchorElement logo;
	
	/**
	 * Costruttore completo
	 * @param font_size dimensione font
	 * @param width larghezza elemento
	 * @param left spiazzamento a sinistra
	 * @param url url a cui reindirizzare
	 */
	public ClickableLogo(String font_size, String width, String left, String url)
	{
		logo= (HTMLAnchorElement) new HTMLElementBuilder()
				.assignElement(HTMLTags.ANCHOR)
				.setText(siteName)
				.setHref(url)
				.css(new String[] {"font-family",font_family,"font-size",font_size,"text-decoration","none",
						"font-style",font_style,"color",border_color,"position","relative","width",width,"left",left}).build();
	}
	
	/**
	 * Costruttore semplificato del logo che reindirizza alla home del sito
	 * @param font_size dimensione font
	 * @param left spiazzamento a sinistra
	 */
	public ClickableLogo(String font_size, String left)
	{
		this(font_size,"",left,HTMLPage.HOME_URL);
	}
	
	/**
	 * Costruttore semplificato del logo che reindirizza alla home del sito
	 * @param font_size dimensione font
	 */
	public ClickableLogo(String font_size)
	{
		this(font_size,"","",HTMLPage.HOME_URL);
	}
	
	/**
	 * Ritorna l'elemento HTML
	 */
	public HTMLAnchorElement get() { return logo; }
	
}
