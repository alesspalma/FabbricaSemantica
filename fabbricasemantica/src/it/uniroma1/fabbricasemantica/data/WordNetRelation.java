package it.uniroma1.fabbricasemantica.data;

/**
 * Interfaccia che fa da supertipo a tutte le relazioni tra synset di WordNet.
 * L'utilita' di questa interfaccia vuota e' la possibilità di essere implementata da future
 * enumerazioni che vogliono aggiungere nuovi tipi di relazioni tra synset, cosi' da avere sempre
 * lo stesso supertipo.
 * 
 * Ci si aspetta che gli enum che la implementano overridino il metodo toString() restituendo
 * la rappresentazione del tipo di relazione.
 * @author aless
 *
 */
public interface WordNetRelation
{

}
