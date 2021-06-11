package fabbricasemantica;

import static def.dom.Globals.document;
import static def.jquery.Globals.$;

import def.dom.HTMLOptionElement;
import def.dom.HTMLSelectElement;
import jsweet.util.StringTypes;

/**
 * Classe che costruisce un menu a tendina
 * @author aless
 *
 */
public class DropdownMenu extends SiteElement
{
	/**
	 *  Campo che incapsula l'elemento html
	 */
	private HTMLSelectElement menu;
	
	/**
	 * Parametro css di decoro utile per far apparire i bordi smussati
	 */
	public static final String border_radius="3px";
	
	/**
	 * Costruttore completo
	 * @param name nome
	 * @param left spiazzamento a sinistra
	 * @param options Array di stringhe "proprieta'" -- "valore" che verranno usati come parametri css
	 */
	public DropdownMenu(String name, String left, String... options)
	{
		menu= (HTMLSelectElement)new HTMLElementBuilder()
				.assignElement(HTMLTags.SELECT)
				.setClassName("dropdown")
				.setName(name)
				.css(new String[] {"border-radius",border_radius,"border-color",border_color,
						"box-shadow","none","position","relative","left",left}).build();
		for(String s:options)
		{
			HTMLOptionElement opt=document.createElement(StringTypes.option);
			opt.textContent=s;
			$(menu).append(opt);
		}
	}
	
	/**
	 * Ritorna l'elemento html
	 */
	public HTMLSelectElement get() { return menu; }
}
