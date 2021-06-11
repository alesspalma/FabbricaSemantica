package fabbricasemantica;

import static jsweet.util.Lang.union;

import java.util.ArrayList;
import java.util.List;

import def.dom.CanvasRenderingContext2D;
import def.dom.HTMLCanvasElement;

/**
 * Classe che rappresenta il cibo mangiabile dallo snake, ogni cibo in realta' corrisponde ad una possibile risposta
 * alla domanda che apparira' sulla pagina HTML del task
 * @author aless
 *
 */
public class Food extends DisplayElement
{
	/**
	 * colore del cibo
	 */
	private String color;
	
	/**
	 * booleano che indica se il cibo e' la risposta corretta alla domanda che appare sullo schermo
	 */
	private boolean answer;
	
	/**
	 * Costruttore privato
	 * @param x coordinata x
	 * @param y coordinata y
	 * @param color colore
	 */
	private Food(int x, int y, String color)
	{
		super(x,y);
		this.color=color;
		answer=false;
	}
	
	/**
	 * Ritorna una lista di oggetti Food, lunga tanto quanti sono i colori dell'array
	 * colors passato in input.
	 * @param canvas elemento canvas su cui saranno istanziati i cibi
	 * @param colors colori dei singoli cibi da istanziare
	 * @return lista di cibi
	 */
	public static List<Food> getInstances(HTMLCanvasElement canvas, String[] colors)
	{
		List<Food> foods = new ArrayList<>();
		for(String col: colors)
			foods.add(new Food(RandomNumber.get((int)canvas.width-SIDE), RandomNumber.get((int)canvas.height-SIDE), col));
		return foods;
	}
	
	/**
	 * Disegna il cibo sul canvas
	 * @param cxt contesto del canvas su cui disegnare
	 */
	public void draw(CanvasRenderingContext2D cxt) { cxt.fillStyle=union(color); cxt.fillRect(x, y, SIDE, SIDE); }
	
	/**
	 * Setta il cibo in modo che e' la risposta corretta
	 */
	public void setAnswer() { answer=true; }
	
	/**
	 * Verifica se e' la risposta corretta
	 * @return booleano che ci indica se e' la risposta corretta
	 */
	public boolean isAnswer() { return answer; }
}
