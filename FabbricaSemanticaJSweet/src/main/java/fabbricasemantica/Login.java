package fabbricasemantica;

import static def.dom.Globals.alert;
import static def.jquery.Globals.$;

import def.dom.HTMLAnchorElement;
import def.dom.HTMLDivElement;
import def.dom.HTMLFormElement;
import def.dom.HTMLInputElement;
import def.dom.HTMLLabelElement;

/**
 * Costruttore della pagina di login
 * @author aless
 *
 */
public class Login extends HTMLPage
{
	/**
	 * URL servlet di login
	 */
	public static final String LOGIN_SRV = "login.jsp";
	
	/**
	 * URL pagina di registrazione
	 */
	public static final String SIGNUP_URL = "signup.html";
	
	/**
	 * Costruttore
	 */
	public Login()
	{
		checkLogout();
		
		//form login
		HTMLFormElement formLogin= HTMLElementBuilder.getForm(LOGIN_SRV, "40%", "30%", "75px");
		
		//area di testo dove mettere la mail
		HTMLInputElement email = HTMLElementBuilder.getMailBox();
		
		//area di testo dove mettere la password
		HTMLInputElement password = HTMLElementBuilder.getPasswordBox();
		
		//pulsante login
		HTMLInputElement login = new LoginButton("Login","13%","43.5%","0.4em").get();
		login.addEventListener("click", (ev)->
		{
			if(email.value.equals("") || password.value.equals(""))
				alert("Devi compilare tutti i campi.");
			else
				formLogin.submit();
		});
		
		//pulsante registrazione
		HTMLAnchorElement signUp = new Link("Non hai ancora un account? Registrati!",SIGNUP_URL,"24%","5.06em").get();
		
		//titolo fabbricasemantica
		HTMLLabelElement titolo = new StaticLogo("45px", "80%", "10%").get();
		
		//divisori vari
		
		HTMLDivElement divTitolo= HTMLElementBuilder.getStandardDiv();
		$(divTitolo).append(titolo);
		
		HTMLDivElement divMail = HTMLElementBuilder.getStandardDiv();
		
		HTMLLabelElement label = HTMLElementBuilder.getLabel("Indirizzo email:");
		$(divMail).append(label,email);
		
		HTMLDivElement divPassword = HTMLElementBuilder.getStandardDiv();

		HTMLLabelElement label2 = HTMLElementBuilder.getLabel("Password:");
		$(divPassword).append(label2,password);
		
		HTMLDivElement divLogin= HTMLElementBuilder.getStandardDiv();
		$(divLogin).append(login);
		
		HTMLDivElement divRegister= HTMLElementBuilder.getStandardDiv();
		$(divRegister).css("text-align","center");
		$(divRegister).append(signUp);
		
		// aggiungiamo tutto
		$(formLogin).append(divTitolo,divMail,divPassword,divLogin);
		
		$("body").append(formLogin,divRegister);
	}
	
	public static void main(String[] args) { new Login(); }
}
