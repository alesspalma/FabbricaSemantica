package it.uniroma1.fabbricasemantica.data;

/**
 * Interfaccia di un task qualsiasi
 * @author aless
 *
 */
public interface Task 
{
	/**
	 * Ritorna la rappresentazione in stringa
	 * @return stringa
	 */
	default String getTaskID() { return toString(); }
}
