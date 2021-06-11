package fabbricasemantica;

import static def.dom.Globals.alert;
import static def.jquery.Globals.$;

import def.dom.HTMLAnchorElement;
import def.dom.HTMLDivElement;
import def.dom.HTMLFormElement;
import def.dom.HTMLInputElement;
import def.dom.HTMLLabelElement;
import def.dom.HTMLSelectElement;

/**
 * Classe che costruisce la pagina di registrazione
 * @author aless
 *
 */
public class SignUp extends HTMLPage
{
	/**
	 * URL della servlet di registrazione
	 */
	public static final String SIGNUP_URL = "signup.jsp";
	
	/**
	 * Costruttore
	 */
	public SignUp()
	{
		checkLogout();
		
		//logo
		HTMLLabelElement titolo = new StaticLogo("45px", "81%", "9.5%").get();
		
		//form registrazione
		HTMLFormElement formSignUp = HTMLElementBuilder.getForm(SIGNUP_URL, "40%", "30%","46.16px");
		
		//area di testo dove mettere la mail
		HTMLInputElement email = HTMLElementBuilder.getMailBox();
		
		//area di testo dove mettere la password
		HTMLInputElement password = HTMLElementBuilder.getPasswordBox();
		
		//area di testo dove confermare la password
		HTMLInputElement passwordConfirm = HTMLElementBuilder.getTextBox("password","passwordConfirm","Ripeti la password...");
		
		//checkbox con relative label
		HTMLInputElement italianCheck = HTMLElementBuilder.getCheckbox("italian_tongue", true,new String[] {"position","relative","left","4%"});
		
		HTMLLabelElement italian = HTMLElementBuilder.getLabel("IT (Italiano)",new String[] {"position","relative","left","4%"});
		
		HTMLInputElement englishCheck = HTMLElementBuilder.getCheckbox("english_tongue", false,new String[] {"position","relative","left","8%"});
		
		HTMLLabelElement english = HTMLElementBuilder.getLabel("EN (Inglese)",new String[] {"position","relative","left","8%"});
		
		HTMLInputElement otherTongue1= HTMLElementBuilder.getTextBox("text","other_tongue_1",new String[] {"width","50%","display","inline-block"});
		HTMLSelectElement tongueLevel1 = new DropdownMenu("tongue_level_1","10%","A1","A2","B1","B2","C1","C2").get();

		HTMLInputElement otherTongue2= HTMLElementBuilder.getTextBox("text","other_tongue_2",new String[] {"width","50%","display","inline-block","margin-top","1em"});
		HTMLSelectElement tongueLevel2 = new DropdownMenu("tongue_level_2","10%","A1","A2","B1","B2","C1","C2").get();

		HTMLInputElement otherTongue3= HTMLElementBuilder.getTextBox("text","other_tongue_3",new String[] {"width","50%","display","inline-block","margin-top","1em"});
		HTMLSelectElement tongueLevel3 = new DropdownMenu("tongue_level_3","10%","A1","A2","B1","B2","C1","C2").get();
		
		//pulsanti
		HTMLInputElement signUp = new SignupButton("Registrati", "20%", "40%", "0.1em").get();
		signUp.addEventListener("click", (ev)->
		{
			if(email.value.equals("") || password.value.equals("") || passwordConfirm.value.equals("")
					|| ( !italianCheck.checked && !englishCheck.checked))
				alert("Devi compilare tutti i campi");
			else
				formSignUp.submit();
		});
		
		HTMLAnchorElement login = new Link("Hai già un account? Accedi!",LOGIN_URL,"19%","4.22em").get();
		$(login).css("bottom","16px"); //aggiungiamo 16 px per una corretta visualizzazione anche su Microsoft Edge
	
		//divisori
		HTMLDivElement divTitolo= HTMLElementBuilder.getStandardDiv();
		$(divTitolo).append(titolo);
		
		HTMLDivElement divMail = HTMLElementBuilder.getStandardDiv();
		
		HTMLLabelElement label = HTMLElementBuilder.getLabel("* Indirizzo email:");
		$(divMail).append(label,email);
		
		HTMLDivElement divPassword = HTMLElementBuilder.getStandardDiv();
		
		HTMLLabelElement label2 = HTMLElementBuilder.getLabel("* Password:");

		HTMLLabelElement label3 = HTMLElementBuilder.getLabel("* Conferma password:");
		$(divPassword).append(label2,password);

		HTMLDivElement divPassword2 = HTMLElementBuilder.getStandardDiv();
		$(divPassword2).append(label3,passwordConfirm);
		
		HTMLDivElement divLanguages = HTMLElementBuilder.getStandardDiv();
		
		HTMLLabelElement label4 = HTMLElementBuilder.getLabel("* Madrelingua:");
		$(divLanguages).append(label4,italianCheck,italian,englishCheck,english);
		
		//divisore con altre lingue parlate formate da un blocco testbox -> menu a tendina
		HTMLLabelElement etichettaLingue = HTMLElementBuilder.getLabel("Altre lingue parlate:",new String[] {"display","block"});
		
		HTMLDivElement divOtherLanguages = HTMLElementBuilder.getStandardDiv();
		$(divOtherLanguages).append(etichettaLingue,otherTongue1,tongueLevel1,otherTongue2,tongueLevel2,otherTongue3,tongueLevel3);
		
		HTMLDivElement divObblig = HTMLElementBuilder.getStandardDiv();
		
		HTMLLabelElement etichettaObblig = HTMLElementBuilder.getLabel("I campi contrassegnati con * sono obbligatori.",new String[] {"font-size","small"});
		$(divObblig).append(etichettaObblig);
		
		HTMLDivElement divSignup= HTMLElementBuilder.getStandardDiv();
		$(divSignup).append(signUp);
		
		HTMLDivElement divLogin= HTMLElementBuilder.getStandardDiv();
		$(divLogin).css("text-align","center");
		$(divLogin).append(login);
		
		// aggiungio tutto alla pagina
		$(formSignUp).append(divTitolo,divMail,divPassword,divPassword2,divLanguages,divOtherLanguages,divObblig,divSignup);
		
		$("body").append(formSignUp,divLogin);
	}
	
	public static void main(String[] args) { new SignUp(); }

}
