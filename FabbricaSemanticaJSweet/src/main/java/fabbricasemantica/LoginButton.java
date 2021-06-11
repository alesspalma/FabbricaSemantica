package fabbricasemantica;

/**
 * Classe che rappresenta il pulsante di login
 * @author aless
 *
 */
public class LoginButton extends Button
{
	/**
	 * Attribbuto nome dell'elemento HTML
	 */
	public static final String btnName="login_button";
	
	/**
	 * Costruttore completo
	 * @param value testo da visualizzare
	 * @param width larghezza
	 * @param left spiazzamento sinistra
	 * @param margin_top spiazzamento top
	 */
	public LoginButton(String value, String width, String left, String margin_top)
	{ super(btnName,value,width,left, margin_top); }
	
	/**
	 * Costruttore semplificato
	 * @param value testo da visualizzare
	 * @param width larghezza
	 * @param left spiazzamento sinistra
	 */
	public LoginButton(String value, String width, String left)
	{ super(btnName,value,width,left); }
}
