package fabbricasemantica;

/**
 * Classe che rappresenta un elemento dinamico qualsiasi da visualizzare a schermo
 * @author aless
 *
 */
public class DisplayElement
{
	/**
	 * Coordinata x
	 */
	protected int x;
	
	/**
	 * Coordinata y
	 */
	protected int y;
	
	/**
	 * Lunghezza del lato dell'elemento visibile a schermo
	 */
	protected static final int SIDE=15;
	
	/**
	 * Costruttore
	 * @param x coordinata x
	 * @param y coordinata y
	 */
	public DisplayElement(int x, int y)
	{
		this.x=x;
		this.y=y;
	}

}
