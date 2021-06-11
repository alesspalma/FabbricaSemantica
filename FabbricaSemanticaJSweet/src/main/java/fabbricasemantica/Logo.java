package fabbricasemantica;

/**
 * Classe astratta che rappresenta il logo del sito
 * @author aless
 *
 */
public abstract class Logo extends SiteElement
{
	/**
	 * Nome del sito, sara' il testo inserito dentro l'elemento
	 * che rappresenta il logo
	 */
	protected static String siteName="Fabbrica Semantica";
	
	/**
	 * Font utilizzato per il logo
	 */
	protected static String font_family="Georgia";
	
	/**
	 * Stile di font utilizzato per il logo
	 */
	protected static String font_style="italic";
	
	/**
	 * Setta il nome del sito
	 * @param s stringa
	 */
	public void setSiteName(String s) { siteName=s; }
	
	/**
	 * Setta il font
	 * @param s stringa font
	 */
	public void setFontFamily(String s) { font_family=s; }
	
	/**
	 * Setta lo stile del font
	 * @param s stringa stile
	 */
	public void setFontStyle(String s) { font_style=s; }
	
}
