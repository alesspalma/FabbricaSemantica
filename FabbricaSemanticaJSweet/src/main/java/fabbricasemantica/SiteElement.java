package fabbricasemantica;

import def.dom.HTMLElement;

/**
 * Classe astratta che rapprenseta un qualsiasi elemento caratteristico del sito,
 * che avra' dei colori particolari e specifici per rendere esteticamente coerente il sito.
 * Da questa classe estendono tutti gli elementi particolari e dipendenti da questo sito, mentre la
 * classe HTMLElementBuilder fornisce tutti gli elementi generici che possono servire a qualsiasi
 * sito web
 * @author aless
 *
 */
public abstract class SiteElement
{
	/**
	 * Colore utilizzato per i bordi e le rifiniture
	 */
	protected static String border_color="#C11B17";
	
	/**
	 * Colore di sfondo dei pulsanti
	 */
	protected static String button_color="#616D7E";
	
	/**
	 * Setter per cambiare il colore dei bordi e delle rifiniture
	 * @param s colore in esadecimale
	 */
	public static void setBorderColor(String s)
	{ 
		if(s.charAt(0) != '#') throw new IllegalArgumentException("Inserire un colore in esadecimale.");
		border_color=s; 
	}
	
	/**
	 * Setter per cambiare il colore di sfondo dei pulsanti
	 * @param s colore in esadecimale
	 */
	public static void setButtonColor(String s)
	{ 
		if(s.charAt(0) != '#') throw new IllegalArgumentException("Inserire un colore in esadecimale.");
		button_color=s; 
	}
	
	/**
	 * Metodo astratto che ritorna l'elemento HTML incapsulato dalle classi che 
	 * estenderanno questa classe
	 * @param <T> tipo dell'elemento di ritorno, deve estendere HTMLElement
	 * @return elemento HTML
	 */
	public abstract <T extends HTMLElement> T get();
}
