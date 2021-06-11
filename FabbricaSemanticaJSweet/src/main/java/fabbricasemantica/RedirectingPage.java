package fabbricasemantica;

import static def.dom.Globals.document;

/**
 * Classe che rappresenta una qualsiasi pagina di reindirizzamento
 * @author aless
 *
 */
public class RedirectingPage extends HTMLPage
{
	/**
	 * Costruttore che reindirizza immediatamente
	 * @param addr URL pagina a cui reindirizzare
	 */
	public RedirectingPage(String addr) { document.location.href = addr; }
}
