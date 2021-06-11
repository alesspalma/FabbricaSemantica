package fabbricasemantica;

import def.dom.CanvasRenderingContext2D;
import static jsweet.util.Lang.union;

/**
 * Classe che rappresenta un quadrato di cui e' composto lo snake
 * @author aless
 *
 */
public class Square extends DisplayElement
{
	/**
	 * Quadrato che segue questo quadrato, se presente e' la sua coda
	 */
	protected Square back;
	
	/**
	 * Costruttore
	 * @param x coordinata x
	 * @param y coordinata y
	 */
	public Square(int x, int y)
	{
		super(x,y);
		back=null;
	}
	
	/**
	 * Disegna il quadrato e la sua coda
	 * @param cxt contesto del canvas su cui disegnare
	 */
	public void draw(CanvasRenderingContext2D cxt) 
	{ 
		cxt.fillStyle=union("black");
		cxt.fillRect(x, y, SIDE, SIDE); 
		if(hasBack())
			back.draw(cxt);
	}
	
	/**
	 * Aggiunge un quadrato alla coda
	 */
	public void addSquare() 
	{ 
		if(hasBack()) { back.addSquare(); return; }
		back= new Square(x,y); 
	}
	
	/**
	 * Controlla se il quadrato si e' sovrapposto con uno dei quadrati della sua coda
	 * @param square2 un quadrato della coda di questa istanza di quadrato
	 * @return true se c'e' una sovrapposizione, false altrimenti
	 */
	public boolean hit(Square square2)
	{
		//se sto controllando un hit dello stesso quadrato (cio' non e' possibile)
		//chiamo hit sulla coda di uno dei due
		if(this==square2) return back.hit(square2);
		
		//se ha una coda ritorno collisionCheck tra quel quadrato e square2 e tra tutti
		//i quadrati della coda e square2
		if(hasBack()) return collisionCheck(this,square2) || back.hit(square2);
		
		//se non ha una coda ritorno collisionCheck tra quel quadrato e square2
		return collisionCheck(this,square2);
	}
	
	/**
	 * Metodo statico che controlla se due quadrati siano in collisione o no
	 * @param square1 primo quadrato
	 * @param square2 secondo quadrato
	 * @return true se i due quadrati si scontrano, false altrimenti
	 */
	public static boolean collisionCheck(Square square1, Square square2)
	{
		return square1.x == square2.x && square1.y == square2.y;
	}
	
	/**
	 * Muove il quadrato a destra
	 */
	public void right() { movCopy(); x+=15; }
	
	/**
	 * Muove il quadrato a sinistra
	 */
	public void left() { movCopy(); x-=15; }
	
	/**
	 * Muove il quadrato in su
	 */
	public void up() { movCopy(); y-=15; }
	
	/**
	 * Muove il quadrato in giu
	 */
	public void down() { movCopy(); y+=15; }
	
	/**
	 * Propaga il movimento a tutti i quadrati in coda
	 */
	public void movCopy()
	{
		if(hasBack())
		{
			back.movCopy();
			back.x=x;
			back.y=y;
		}
	}
	
	/**
	 * Metodo che ci dice se il quadrato ha una coda
	 * @return true se ha la coda, false altrimenti
	 */
	public boolean hasBack() { return back!=null; }
}
