package fabbricasemantica;

/**
 * Costruttore della pagina index
 * @author aless
 *
 */
public class Index extends RedirectingPage
{	
	/**
	 * Costruttore
	 * @param addr URL a cui reindirizza
	 */
	public Index(String addr) { super(addr); }
	
	public static void main(String[] args) { new Index(LOGIN_URL); }
	
}
