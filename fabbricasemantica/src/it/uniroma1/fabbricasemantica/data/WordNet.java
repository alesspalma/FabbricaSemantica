package it.uniroma1.fabbricasemantica.data;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Random;
import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.Stream;

/**
 * Classe che rappresenta il dizionario evoluto della lingua inglese WordNet. 
 * Una volta caricata una versione con il metodo getInstance le successive 
 * chiamate alla stessa versione ritornano lo stesso oggetto gia' caricato
 * in precedenza. Accetta eventuali versioni future. Gli oggetti della classe sono iterabili.
 * @author aless
 *
 */
public class WordNet implements Iterable<Synset>
{	
	/**
	 * Percorso generale che accomuna tutte le versini di WordNet
	 */
	public static final Path PERCORSO_RELEASES= Paths.get("wordnet-releases","releases");
	
	/**
	 * Mappa che registra tutte le versioni di WordNet gia' caricate in memoria (se esistono),
	 * in modo che una futura chiamata ad una versione gia' richiesta ritornera' lo stesso oggetto
	 * della prima chiamata
	 */
	private static HashMap<String,WordNet> instances= new HashMap<>();
	
	/**
	 * Mappa che associa ad ogni ID il rispettivo Synset
	 */
	private Map<String,Synset> synsetsMap = new HashMap<>();
	
	/**
	 * Mappa che associa ad ogni parola (in lower case) l'elenco di
	 * synset in cui compare nella specifica versione
	 */
	private Map<String,List<Synset>> alphabeticMap= new HashMap<>(); 
	
	/**
	 * Lista che contiene tutti gli id dei synset presenti
	 */
	private List<String> idList;
	
	/**
	 * Numero di synset in WordNet
	 */
	private int size;
	
	/**
	 * Stringa che riporta la versione di WordNet
	 */
	private String version;
	
	/**
	 * Costruttore privato che legge i 4 file data della versione di WordNet richiesta e crea tutti i synset
	 * e l'oggetto WordNet
	 * @param versionString Stringa che rappresenta la versione di WordNet richiesta
	 * @throws IOException Lancia IOException se la versione non esite (dunque non vengono trovati i file
	 * data necessari)
	 */
	private WordNet(String versionString, String servletPath) throws IOException
	{
		version=versionString;
		for(POS pos: POS.values())
		{
			try(Stream<String> read = Files.lines(Paths.get(servletPath).resolve(PERCORSO_RELEASES).resolve("WordNet-"+version).resolve("dict").resolve("data."+pos.toString())))
			{
				read.filter(s-> !s.startsWith(" "))
						.map(s-> new Synset(s,version))
						.forEach(s -> synsetsMap.put(s.getID(),s));
			}
			catch(IOException e) { throw e; }
		}
		idList= new ArrayList<>(synsetsMap.keySet());
		size=idList.size();
	}
	
	/**
	 * Metodo statico che serve a richiedere le versioni di WordNet.
	 * Se la versione non e' mai stata istanziata chiama il costruttore privato,
	 * se la versione non esite ritorna null
	 * @param version Stringa che rappresenta la versione di WordNet da istanziare
	 * @return null se la versione non esiste, l'oggetto WordNet se la versione esiste
	 */
	public static WordNet getInstance(String version, String servletPath)
	{ 
		if(!instances.containsKey(version))
		{
			try 
			{ 
				instances.put(version, new WordNet(version,servletPath));
				return instances.get(version); 
			}
			catch(IOException e) { return null; }
		}
		else return instances.get(version);
	}
	
	/**
	 * Metodo che ritorna la lista di synset in cui e' presente la parola richiesta, usata
	 * come parte del discorso (nome,aggettivo,verbo,avverbio) richiesta.
	 * Il metodo e' case in-sensitive.
	 * @param word parola da cercare
	 * @param pos parte del discorso su cui filtrare la parola cercata
	 * @return lista di synset in cui compare la parola in quell'accezione
	 */
	public List<Synset> getSynsets(String word, POS pos)
	{
		List<Synset> result=alphabeticMap.get(word.toLowerCase());
		if(result==null)
			return new ArrayList<>();
		return result.stream()
					.filter(s->s.getPOS()==pos)
					.collect(Collectors.toList());
	}
	
	/**
	 * Metodo che ritorna la lista di synset in cui e' presente la parola richiesta, usata
	 * come qualsiasi parte del discorso.
	 * Il metodo e' case in-sensitive.
	 * @param word parola da cercare
	 * @return lista di synset in cui e' presente la parola
	 */
	public List<Synset> getSynsets(String word)
	{
		List<Synset> result= new LinkedList<>();
		for(POS pos: POS.values())
			result.addAll(getSynsets(word, pos));
		return result;
	}
	
	/**
	 * Metodo che fornito un insieme di stringhe in input restituisce una lista di synset
	 * in cui in ognuno di essi compare almeno una delle parole dell'insieme di input.
	 * @param set Insieme di stringhe
	 * @return Lista di synset in cui compaiono le parole dell'insieme
	 */
	public List<Synset> getContainingSynsets(Set<String> set)
	{
		List<Synset> result= new ArrayList<>();
		for(String s: set)
			result.addAll(alphabeticMap.getOrDefault(s.toLowerCase(), new ArrayList<Synset>()));
		return result;
	}
	
	/**
	 * Ritorna la lista di synset con cui il synset source in input ha relazioni del tipo
	 * WordNetRelation dato in input. Questo metodo e' una chiamata allo stesso con una String come input,
	 * fornendo il .toString() del WordNetRelation
	 * @param source synset di cui vogliamo sapere le relazioni
	 * @param relation tipo di relazione
	 * @return la lista dei synset che hanno quel tipo di relazione con il source
	 */
	public Collection<Synset> getRelatedSynsets(Synset source, WordNetRelation relation) { return getRelatedSynsets(source, relation.toString()); }
	
	/**
	 * Ritorna la lista di synset con cui il synset source in input ha relazioni del tipo
	 * rappresentato dalla stringa data in input. Ritorna una collezione vuota se 
	 * la relazione non esite o non ci sono synset con quella relazione con il source
	 * @param source synset di cui vogliamo sapere le relazioni
	 * @param relation tipo di relazione
	 * @return la lista dei synset che hanno quel tipo di relazione con il source
	 */
	public Collection<Synset> getRelatedSynsets(Synset source, String relation)
	{
		List<String> relations=source.getRelations().get(relation);
		if(relations==null) return new ArrayList<>();
		return relations.stream()
						.map(s-> getSynsetFromID(s))
						.collect(Collectors.toList());
	}
	
	/**
	 * Dato un ID (offset+pos) ritorna il synset corrispondente. Se il synset
	 * non esite ritorna null
	 * @param id Stringa che rappresenta l'ID univoco del synset
	 * @return Synset con l'ID fornito in input
	 */
	public Synset getSynsetFromID(String id) { return synsetsMap.getOrDefault(id,null); }
	
	/**
	 * Ritorna un array che contiene rispettivamente in prima e seconda posizione
	 * la glossa casuale e la rispettiva parola (il primo dei lemmi del synset)
	 * a cui si riferisce
	 * @return
	 */
	public String[] getCasualGlossWord()
	{
		String id = idList.get(new Random().nextInt(size));
		Synset synset = getSynsetFromID(id);
		return new String [] {synset.getGloss(),synset.getSynonyms().get(0).replaceAll("_"," ")};
	}
	
	/**
	 * Returns a first casual word from a WordNet synset
	 * @return A casual word
	 */
	public List<String> getNCasualWords(int n)
	{
		List<String> ris = new ArrayList<>();
		for(int i = 0; i < n; i++)
		{
			String id = idList.get(new Random().nextInt(size));
			Synset synset = getSynsetFromID(id);
			ris.add(synset.getSynonyms().get(0).replaceAll("_"," "));
		}
		return ris;
	}
	
	/**
	 * Ritorna uno stream dei synset della versione di WordNet
	 * @return Stream di synset
	 */
	public Stream<Synset> stream() { return synsetsMap.values().stream(); }
	
	/**
	 * Ritorna la stringa che rappresenta la versione di WordNet
	 * @return Stringa che rappresenta la versione
	 */
	public String getVersion() { return version; }
	
	/** 
	 * {@inheritDoc}
	 */
	@Override
	public Iterator<Synset> iterator() { return new WordNetIterator(); }
	
	/**
	 * Classe che rappresenta l'iteratore sugli oggetti Synset della versione di WordNet
	 * @author aless
	 *
	 */
	private class WordNetIterator implements Iterator<Synset>
	{
		/**
		 * Intero che rappresenta l'indice del synset dell'attuale iterazione
		 */
		private int synsetIndex;
		
		/**
		 * Lista dei synset su cui si svolgera' l'iterazione
		 */
		private List<Synset> list= new ArrayList<>(synsetsMap.values());
		
		/**
		 * {@inheritDoc}
		 */
		@Override
		public boolean hasNext() { return synsetIndex < list.size(); }
		
		/**
		 * {@inheritDoc}
		 */
		@Override
		public Synset next() { return hasNext() ? list.get(synsetIndex++) : null; }
	}

}
