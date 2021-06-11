package it.uniroma1.fabbricasemantica.data;

/**
 * Enum che rappresenta le parti del discorso che si possono trovare in WordNet,
 * ovvero aggettivo, nome, avverbio, verbo
 * @author aless
 *
 */
public enum POS
{
	NOUN("noun"),
	VERB("verb"),
	ADJECTIVE("adj"),
	ADVERB("adv");
	
	/**
	 * Stringa che rappresenta l'abbreviazione della costante enumerativa presente come suffisso dei 
	 * file data di WordNet
	 */
	private String rappresentation;
	
	/**
	 * Costruttore che assegna ad ogni costante la sua rappresentazione
	 * @param rappr Rappresentazione in stringa della costante
	 */
	POS(String rappr) { rappresentation=rappr; }
	
	/**
	 * {@inheritDoc}
	 * Ritorna la rappresentazione.
	 */
	@Override
	public String toString() { return rappresentation; }
	
	/**
	 * Metodo statico che, fornito un carattere di quelli che si possono trovare nei file data di WordNet
	 * (fatta eccezione per 's', che viene trattato come 'a'), restituisce la costante enumerativa
	 * corrispondente
	 * @param lettera Carattere che rappresenta la parte del discorso
	 * @return Costante enumerativa di quella parte del discorso rappresentata dal carattere
	 */
	public static POS getByChar(char lettera)
	{
		switch(lettera)
		{
			case('n'): return POS.NOUN;
			case('v'): return POS.VERB;
			case('a'): return POS.ADJECTIVE;
			case('r'): return POS.ADVERB;
			default: return null;
		}
	}
}
