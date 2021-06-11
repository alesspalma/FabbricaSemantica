package fabbricasemantica;

/**
 * Classe che rappresenta un pulsante di registrazione
 * @author aless
 *
 */
public class SignupButton extends Button
{
	/**
	 * Nome dell'elemento html
	 */
	public static final String btnName="register_button";
	
	/**
	 * Costruttore del pulsante
	 * @param value testo da visualizzare
	 * @param width larghezza
	 * @param left spiazzamento sinistra
	 * @param margin_top spiazzamento top
	 */
	public SignupButton(String value, String width, String left, String margin_top)
	{ super(btnName,value,width,left, margin_top); }
	
	/**
	 * Costruttore semplificato
	 * @param value testo da visualizzare
	 * @param width larghezza
	 * @param left spiazzamento sinistra
	 */
	public SignupButton(String value, String width, String left)
	{ super(btnName,value,width,left); }
}
