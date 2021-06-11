package it.uniroma1.fabbricasemantica.data;

/**
 * Enum che contiene le relazione presenti nella versione di WordNet piu' recente (3.1), implementa
 * l'interfaccia WordNetRelation affinche' future enum che aggiungono altre relazioni estendano
 * WordNetRelation ed abbiano lo stesso supertipo
 * @author aless
 *
 */
public enum Relations implements WordNetRelation
{
	ANTONYM("!"),
	HYPERNYM("@"),
	INSTANCE_HYPERNYM("@i"),
	HYPONYM("~"),
	INSTANCE_HYPONYM("~i"),
	MEMBER_HOLONYM("#m"),
	SUBSTANCE_HOLONYM("#s"),
	PART_HOLONYM("#p"),
	MEMBER_MERONYM("%m"),
	SUBSTANCE_MERONYM("%s"),
	PART_MERONYM("%p"),
	ATTRIBUTE("="),
	DERIVATIONALLY_RELATED_FORM("+"),
	DOMAIN_OF_SYNSET_TOPIC(";c"),
	MEMBER_OF_THIS_DOMAIN_TOPIC("-c"),
	DOMAIN_OF_SYNSET_REGION(";r"),
	MEMBER_OF_THIS_DOMAIN_REGION("-r"),
	DOMAIN_OF_SYNSET_USAGE(";u"),
	MEMBER_OF_THIS_DOMAIN_USAGE("-u"),
	ENTAILMENT("*"),
	CAUSE(">"),
	ALSO_SEE("^"),
	VERB_GROUP("$"),
	SIMILAR_TO("&"),
	PARTICIPLE_OF_VERB("<"),
	PERTAINYM("\\");
	
	/**
	 * Rappresentazione della relazione sotto forma di stringa
	 */
	private String rappresentation;
	
	/**
	 * Costruttore che assegna la rappresentazione alla costante enumerativa
	 * @param rappresentation Stringa che rappresenta la relazione
	 */
	Relations(String rappresentation) { this.rappresentation=rappresentation; }
	
	/**
	 * {@inheritDoc}
	 * Ritorna la rappresentazione.
	 */
	@Override
	public String toString() { return rappresentation; }
}
