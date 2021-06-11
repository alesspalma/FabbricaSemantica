package it.uniroma1.fabbricasemantica.data;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.TreeSet;

/**
 * Classe che rappresenta un synset (synonym set), ovvero un insieme di sinonimi usati per esprimere un
 * concetto della lingua inglese. I synset sono letti dai file data di una versione di WordNet.
 * @author aless
 *
 */
public class Synset
{
	/**
	 * Stringa che rappresenta l'ID del synset (composto da offset + carattere che rappresenta la pos)
	 */
	private String ID;
	
	/**
	 * Costante enumerativa che rappresenta la pos (part of speech) a cui appartiene il synset
	 */
	private POS pos;
	
	/**
	 * Insieme che contiene tutti i sinonimi del synset
	 */
	private Set<String> synonyms= new TreeSet<>();
	
	/**
	 * Stringa che contiene la definizione del synset
	 */
	private String gloss;
	
	/**
	 * Insieme che contiene uno (se presente) o piu' (se presenti) esempi che chiariscono l'uso
	 * dei sinonimi contenuti nel synset
	 */
	private Set<String> examples= new HashSet<>();
	
	/**
	 * Mappa del synset che associa ad ogni simbolo (che rappresenta il tipo di relazione) l'elenco degli ID dei synset
	 * che hanno quel tipo di relazione con l'oggetto
	 */
	private Map<String,List<String>> relationships= new HashMap<>();
	
	/**
	 * Stringa che rappresenta la versione di WordNet a cui appartiene il synset
	 */
	private String wordNetVersion;
	
	/**
	 * Costruttore dell'oggetto synset che a partire da una stringa letta da file assegna tutti
	 * i campi dell'oggetto synset
	 * @param info Stringa letta da file
	 * @param version Stringa che rappresenta la versione di WordNet a cui appartiene il synset
	 */
	public Synset(String info,String version)
	{
		wordNetVersion=version;
		ID=info.substring(0,8)+(info.charAt(12) != 's' ? info.charAt(12) : 'a');
		pos= POS.getByChar(ID.charAt(8));
		int pipe=info.indexOf('|',16);
		makeSynonyms(Integer.parseInt(info.substring(14,16),16),info.substring(17,pipe+1));
		makeGlossExamples(info.substring(pipe+2));
	}
	
	/**
	 * Metodo privato che assegna tutti i sinonimi all'oggetto synset
	 * @param words numero di sinonimi contenuti nel synset
	 * @param data Stringa contenente i sinonimi e il resto dei dati del synset
	 */
	private void makeSynonyms(int words, String data)
	{
		String[] splittedWords=data.split(" ");
		for(int i=0; i <= words*2; i+=2) 
		{ 
			if(i==words*2)
			{ makeRelationships(Integer.parseInt(splittedWords[i]), data.substring(data.indexOf(splittedWords[i])+4)); }
			else
			{
				if(splittedWords[i].endsWith(")"))
					{ synonyms.add(splittedWords[i].substring(0,splittedWords[i].indexOf('('))); }
				else synonyms.add(splittedWords[i]);
			}
		}
	}
	
	/**
	 * Metodo privato che riempie la mappa relationships con l'elenco degli ID dei synset che 
	 * hanno una determinata relazione con l'oggetto synset che si sta costruendo
	 * @param rel numero di relazioni presenti
	 * @param data Stringa che contiene le relazioni
	 */
	private void makeRelationships(int rel, String data)
	{
		String[] splittedRel=data.split(" ");
		for(int j=0; j < rel*4 ; j+=4)
		{
			String id=splittedRel[j+2].equals("s") ? splittedRel[j+1]+"a" : splittedRel[j+1]+splittedRel[j+2] ;
			relationships.merge(splittedRel[j],new LinkedList<>(Arrays.asList(id)),(l1,l2) -> { l1.addAll(l2); return l1; });
		}
		
	}
	
	/**
	 * Divide glossa ed esempi di ogni synset, assegnandoli e stampando a video una notifica in caso di 
	 * presenza di errori di separazione tra glossa ed esempi (nel caso in cui tra glossa ed
	 * esempi non sia presente ';' ma un altro carattere; nel caso in cui prima dell'esempio
	 * sia riportata la scritta e.g., che è inutile dato che sappiamo che gli esempi vengono dopo
	 * la glossa e il carattere ';', nel caso in cui ci siano delle virgolette " non chiuse o 
	 * chiuse ma mai aperte) o tra esempi ed esempi (nel caso in cui gli esempi siano distanziati
	 * tra loro da piu di uno spazio, nel caso in cui gli esempi siano divisi da ':' anzichè ';')
	 * @param data porzione di stringa in cui ci sono glossa ed esempi
	 */
	private void makeGlossExamples(String data)
	{
		int examplesSeparator;
		try
		{
			examplesSeparator=(Character.isLetter(data.charAt(data.indexOf('"')-2)) || data.charAt(data.indexOf('"')-2) == ' ' ?
					takeExamplesSeparator(data) : data.indexOf('"'));
		}
		catch(StringIndexOutOfBoundsException e) { examplesSeparator=data.indexOf('"'); }
		if(examplesSeparator != -1)
		{
			gloss=data.substring(0,examplesSeparator).trim().toLowerCase();
			if(gloss.length() > 0) gloss=gloss.substring(0,gloss.length()-1);
			/*try
			{
				if(data.charAt(examplesSeparator-2)!=';' && data.charAt(examplesSeparator-2)!=')')
					//non controllo solo che il carattere in due posizioni prima del separatore sia diverso
					//da ';' (separatore standard) ma anche che sia diverso da ')' poichè molte parole
					//specialmente aggettivi non hanno glossa ed hanno prima degli esempi solo una parola
					//tra parentesi che specifica un modo d'utilizzo o a che ambito si riferiscono. In
					//tali casi non si tratta di errori di separazione.
					//es: | (informal) "my mother has these prehistoric ideas about proper clothes"
					System.out.println("Ci sono errori di separazione degli esempi del Synset: "+getID());
			}
			catch(StringIndexOutOfBoundsException e) {} */
			for(String esempio: data.substring(examplesSeparator).split("; \"")) 
				{ 
					String trimmedExample=(esempio.startsWith("\"") ? esempio.trim() : ('"'+esempio).trim());
					if(trimmedExample.endsWith("\"") && trimmedExample.length() > 1)
						examples.add(trimmedExample.substring(1, trimmedExample.length()-1)); 
					else if(trimmedExample.length() > 1)
						examples.add(trimmedExample); //poichè ci sono molti esempi che consistono in citazioni seguite dall'autore preferisco considerare il
					//caso in cui l'esempio non termini con le virgolette " e riportare negli esempi la citazione tra virgolette, seguita dall'autore
				}
		}
		else
			gloss=data.trim().toLowerCase();
	}
	
	/**
	 * Metodo che sposta il valore della variabile examplesSeparator, per ignorare le virgolette 
	 * interne alla definizioni, per casi speciali del tipo: 01222212 04 n 01 carrot 0 001 @ 01222041 n 0000 
	 * | promise of reward as in "carrot and stick"; "used the carrot of subsidized housing for the workers to get their vote"  
	 * da WordNet 3.1
	 * @param data Stringa che contiene gli esempi
	 * @return indice del carattere " dal quale iniziano gli esempi
	 */
	private int takeExamplesSeparator(String data)
	{
		int indexCloser=data.indexOf('"',data.indexOf('"')+1);
		return data.indexOf('"',indexCloser+1);
	}
	
	/**
	 * Metodo che ritorna un booleano che ci informa se il synset contiene o meno la parola
	 * fornita in input.
	 * Il metodo e' case in-sensitive
	 * @param word Parola da ricercare
	 * @return true se la parola è contenuta nel synset, false altrimenti
	 */
	public boolean contains(String word) { return synonyms.stream().anyMatch(s->s.compareToIgnoreCase(word)==0); }
	
	/**
	 * Ritorna l'offset dell'oggetto Synset, composto dall'ID escluso il carattere finale che riguarda
	 * il pos
	 * @return Stringa che rappresenta l'offset del synset
	 */
	public String getOffset() { return ID.substring(0,8); }
	
	/**
	 * Ritorna l'ID del synset (offset + carattere pos)
	 * @return L'identificatore univoco del synset
	 */
	public String getID() { return ID; }
	
	/**
	 * Ritorna l'insieme dei sinonimi del synset
	 * @return Insieme contenente i sinonimi che fanno parte del synset
	 */
	public List<String> getSynonyms() { return new ArrayList<>(synonyms); }
	
	/**
	 * Ritorna la glossa (definizione) del synset
	 * @return Stringa che contiene la definizione
	 */
	public String getGloss() { return gloss; }
	
	/**
	 * Ritorna la costante enumerativa POS che corrisponde alla parte
	 * del discorso con la quale devono essere usati ed intesi i lemmi contenuti nel synset
	 * @return Costante enumerativa POS
	 */
	public POS getPOS() { return pos; }
	
	/**
	 * Ritorna un insieme di esempi delle parole contenute nel synset.
	 * Se nel synset non erano presenti esempi ritorna un set vuoto
	 * @return Insieme degli esempi
	 */
	public Set<String> getExamples() { return examples; }
	
	/**
	 * Ritorna la mappa delle relazioni di quel synset
	 * @return La mappa che associa ad ogni tipo di relazione l'elenco degli offset
	 * dei synset che hanno quelle relazioni con l'oggetto synset che chiama il metodo
	 */
	public Map<String, List<String>> getRelations() { return relationships; }
	
	/**
	 * Ritorna la stringa contenente la versione di WordNet alla quale appartiene il synset
	 * @return Stringa contenente la versione
	 */
	public String getWordNetVersion() { return wordNetVersion; }
	
	/**
	 * {@inheritDoc}
	 */
	@Override
	public String toString() { return ID+": "+getSynonyms().toString(); }
			
}
