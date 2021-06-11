package fabbricasemantica;

import static def.jquery.Globals.$;

import def.dom.HTMLDivElement;
import def.dom.HTMLFormElement;
import def.dom.HTMLInputElement;
import def.dom.HTMLLabelElement;

/**
 * Classe che costruisce la pagina home
 * @author aless
 *
 */
public class Home extends HTMLPage
{
	/**
	 * URL della pagina del gioco
	 */
	public static final String PLAY_URL ="snake.html";
	
	/**
	 * Costruttore della pagina
	 */
	public Home()
	{
		checkLogin();
		createHeading();
		
		//crea la form che contiene il pulsante play
		HTMLFormElement formPlay= HTMLElementBuilder.getForm(PLAY_URL, "6em");
		
		HTMLDivElement divPlay= HTMLElementBuilder.getStandardDiv();
		$(divPlay).css("text-align","center");
		
		//etichetta testuale
		HTMLLabelElement snakeLabel= HTMLElementBuilder.getLabel("Gioca ora a Snake: word validation",
				new String[] {"font-weight","bold","font-size","x-large","display","block"});
		
		//bottone che porta alla pagina del gioco
		HTMLInputElement playButton = new ImageButton("play.png","3.5em","25%").get();
		
		//appendo tutto
		$(divPlay).append(snakeLabel,playButton);
		$(formPlay).append(divPlay);
		
		$("body").append(formPlay);
	}
	
	public static void main(String[] args) { new Home(); }
}
