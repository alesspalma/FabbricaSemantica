package fabbricasemantica;

import static def.jquery.Globals.$;

import def.dom.HTMLCanvasElement;
import def.dom.HTMLDivElement;
import def.dom.HTMLLabelElement;

/**
 * Classe che crea la pagina HTML del gioco che implementa la task
 * @author aless
 *
 */
public class Game extends HTMLPage
{
	/**
	 * Costruttore della pagina
	 */
	public Game()
	{
		checkLogin();
		createHeading();
		
		//crea il canvas
		HTMLCanvasElement canvas= HTMLElementBuilder.getCanvas("snake",795,270,"white","solid "+Button.border_color);
		
		//crea il gioco
		Snake snake=new Snake(canvas);
		
		//contatore punti
		HTMLLabelElement counter = HTMLElementBuilder.getLabel(snake.getPoints(),new String[] {"display","block","font-weight","bold"});
		counter.id="counter";
		
		//appendo tutto al div e al body
		HTMLDivElement divCanvas= HTMLElementBuilder.getStandardDiv();
		$(divCanvas).css("position","relative");
		$(divCanvas).css("top","5px");
		$(divCanvas).css("text-align","center");
		
		$(divCanvas).append(canvas, counter);
		$("body").append(divCanvas);
	}
	
	public static void main(String[] args) { new Game(); }
}
