package fabbricasemantica;

import static def.jquery.Globals.$;

import def.dom.HTMLAnchorElement;
import def.dom.HTMLDivElement;
import def.jquery.JQueryXHR;

/**
 * Classe di base che rappresenta una qualsiasi pagina HTML del sito
 * @author aless
 *
 */
public class HTMLPage
{
	/**
	 * Colore di sfondo
	 */
	protected static String colore ="#FFFAED";
	
	/**
	 * URL servlet che controlla lo stato di log dell'utente
	 */
	public static final String LOGGED_SRV="isLoggedIn.jsp";
	
	/**
	 * URL pagina login
	 */
	public static final String LOGIN_URL="login.html";
	
	/**
	 * URL pagina home
	 */
	public static final String HOME_URL="home.html";
	
	/**
	 * URL servlet di logout
	 */
	public static final String LOGOUT_SRV ="logout.jsp";
	
	/**
	 * Costruttore che inizializza il colore di sfondo
	 */
	public HTMLPage() { $("body").css("background",colore); }
	
	/**
	 * Setta il colore di sfondo
	 * @param s colore in esadecimale
	 */
	public void setWebsiteColor(String s) { colore=s; }
	
	/**
	 * Crea l'intestazione delle pagine del sito web una volta effettuato il login
	 */
	public void createHeading()
	{
		HTMLAnchorElement titolo = new ClickableLogo("30px","2%").get();
		
		HTMLAnchorElement logout = new Link("Logout",LOGOUT_SRV,"6%","-2%","0.25em").get();
		$(logout).css("float","right");
		
		HTMLDivElement divLogout = HTMLElementBuilder.getStandardDiv();
		$(divLogout).append(titolo,logout);
		$(divLogout).css("margin-top","1em");
		$("body").append(divLogout);
	}
	
	/**
	 * Controlla che l'utente abbia effettuato il login, altrimenti
	 * lo reindirizza alla pagina di login
	 */
	public void checkLogin()
	{
		$.get(LOGGED_SRV, (Object result, String a, JQueryXHR ctx) -> {
			String ris = (String)result;
			if(ris.equals("false")) new RedirectingPage(LOGIN_URL);
			return null;
		});
	}
	
	/**
	 * Controlla che l'utente abbia effettuato il logout, altrimenti
	 * lo reindirizza alla home
	 */
	public void checkLogout()
	{
		$.get(LOGGED_SRV, (Object result, String a, JQueryXHR ctx) -> {
			String ris = (String)result;
			if(ris.equals("true")) new RedirectingPage(HOME_URL);
			return null;
		});
	}
}
