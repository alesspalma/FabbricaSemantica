package fabbricasemantica;

import def.dom.HTMLInputElement;

/**
 * Bottone particolare che e' cliccabile tramite un immagine
 * @author aless
 *
 */
public class ImageButton extends SiteElement
{
	/**
	 * Nome dell'elemento HTML
	 */
	public static final String btnName="image_button";
	
	/**
	 * Campo che incapsula l'elemento HTML
	 */
	private HTMLInputElement button;
	
	/**
	 * Costruttore
	 * @param source indirizzo a cui si trova l'immagine del bottone
	 * @param margin_top spiazzamento top
	 * @param height altezza
	 */
	public ImageButton(String source, String margin_top, String height)
	{
		button= (HTMLInputElement)new HTMLElementBuilder()
				.assignElement(HTMLTags.INPUT)
				.setType("image")
				.setSrc(source)
				.css(new String[] {"height",height,"margin-top",margin_top})
				.build();
	}
	
	/**
	 * Costruttore semplificato
	 * @param source indirizzo a cui si trova l'immagine del bottone
	 */
	public ImageButton(String source)
	{ this(source,"",""); }

	@Override
	/**
	 * Ritorna l'elemento HTML
	 */
	public HTMLInputElement get() { return button; }
}
