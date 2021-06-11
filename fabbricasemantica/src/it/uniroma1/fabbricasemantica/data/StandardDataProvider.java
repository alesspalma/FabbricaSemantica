package it.uniroma1.fabbricasemantica.data;

import java.util.List;

/**
 * Questa classe restituisce i dati necessari per il task ricevuto in input.
 * Il metodo {@link #getData(Task)} restituira' una stringa in formato JSON
 * che le pagine in JSweet andranno a formattare.
 * N.B. Il proprio {@link DataProvider} dovrebbe evitare di avere stringhe codificate, questo e' solo un esempio.
 * */
public class StandardDataProvider implements DataProvider<String> 
{
	/**
	 * Istanza di WordNet da cui verrano prese definizioni e possibili risposte
	 */
	private static WordNet WORDNET;
	
	/**
	 * Costruttore
	 * @param servletPath percorso dove trovare i file necessari a istanziare WordNet
	 */
	public StandardDataProvider(String servletPath) { WORDNET= WordNet.getInstance("3.1", servletPath); }
	
	@Override 
	/**
	 * Metodo che ritorna i dati necessari ai rispettivi task
	 */
	public String getData(Task task) 
	{
		if (task == StandardTask.SNAKE_WORD_VALIDATION)
		{
			String[] casualAnswer= WORDNET.getCasualGlossWord();
			List<String> casualOptions = WORDNET.getNCasualWords(3);
			return "{" +
					"\"description\": \""+casualAnswer[0]+"\","+
					"\"answer\": \""+casualAnswer[1]+"\","+
					"\"opt1\": \""+casualOptions.get(0)+"\","+
					"\"opt2\": \""+casualOptions.get(1)+"\","+
					"\"opt3\": \""+casualOptions.get(2)+'\"'+
					"}";
		}
		//else if...implementazione libera di altre task future
		return null; 
	}
}
