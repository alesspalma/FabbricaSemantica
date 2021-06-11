package fabbricasemantica;

import static def.dom.Globals.alert;
import static def.dom.Globals.document;
import static def.dom.Globals.window;
import static def.jquery.Globals.$;

import java.util.ArrayList;
import java.util.List;

import def.dom.CanvasRenderingContext2D;
import def.dom.HTMLCanvasElement;
import def.dom.HTMLDivElement;
import def.dom.HTMLLabelElement;
import def.dom.KeyboardEvent;
import def.jquery.JQueryXHR;
import def.js.JSON;
import jsweet.util.StringTypes;

/**
 * Classe che crea il gioco snake e rappresenta il serpente che si muove
 * e mangia i frutti
 * @author aless
 *
 */
public class Snake
{
	/**
	 * URL servlet che fornisce il prossimo esempio
	 */
	public static final String NEXT_EX_SRV ="nextExample.jsp";
	
	/**
	 * URL servlet che salva le risposte dell'utente
	 */
	public static final String TASK_SRV ="snakeWordValidation.jsp";
	
	/**
	 * Array di colori delle possibili risposte
	 */
	public static final String[] COLORS = new String[] {"#C031C7","red","green","blue"};
	
	/**
	 * Campo che incapsula il framerate del videogioco, gli sara' assegnata una funzione
	 * che fa muovere il serpente e controlla tutte le sue azioni
	 */
	private static double animation=0.0;
	
	/**
	 * Testa del serpente
	 */
	private Square head;
	
	/**
	 * Punti, 1 per ogni risposta giusta
	 */
	private int points;
	
	/**
	 * Canvas su cui viene disegnato lo snake
	 */
	private HTMLCanvasElement canvas;
	
	/**
	 * Contesto del canvas
	 */
	private CanvasRenderingContext2D cxt;
	
	/**
	 * Direzione verso cui si muove il serpente
	 */
	private String direction;
	
	/**
	 * Numero che rappresenta la difficolta', piu'
	 * e' alto piu' il serpente andra' veloce
	 */
	private int difficulty=7;
	
	/**
	 * Lista di cibi che appaiono su schermo, ogni cibo sara' del colore
	 * della stringa nella posizione corrispondente, ma nell'array COLORS
	 */
	private List<Food> foods = new ArrayList<>();
	
	/**
	 * Label che contiene la definizione corrente
	 */
	private HTMLLabelElement definition = HTMLElementBuilder.getEmptyLabel(new String[] {"font-weight","bold"});
	
	/**
	 * Lista di label che conterranno le possibili risposte alla definizione
	 * data, solo una di queste sara' giusta ogni label sara' del colore posto nella stessa posizione
	 * ma nell'array COLORS
	 */
	private List<HTMLLabelElement> answers= new ArrayList<>();
	
	/**
	 * Costruttore
	 * @param canvas canvas su cui viene disegnato
	 */
	public Snake(HTMLCanvasElement canvas)
	{
		this.canvas=canvas;
		//inizializza le label dove mettere le possibili risposte
		for(String col : COLORS)
			answers.add(HTMLElementBuilder.getEmptyLabel(new String[] {"font-weight","bold","color",col}));
		HTMLDivElement divQuestion = HTMLElementBuilder.getStandardDiv();
		$(divQuestion).css("position","relative");
		$(divQuestion).css("left","17.5%");
		$(divQuestion).css("width","65%");
		$(divQuestion).append(definition);
		for(HTMLLabelElement label : answers)
			$(divQuestion).append(label);
		//appendo alla pagina
		$("body").append(divQuestion);
		nextQuestion();
		//funzione che fa muovere il serpente e controlla che non sia morto, ne decreta il framerate
		Runnable moving= () -> 
		{
			move();
			getContest().clearRect(0, 0, canvas.width, canvas.height);
			draw();
			drawFood();
			if(dead())
			{
				window.clearInterval(animation);
				alert("Game over. Aggiorna la pagina per rigiocare.");
			};
		};
		
		animation = window.setInterval(moving, 1000/difficulty);
		
		//serpente spostabile con frecce direzionali e WASD
		window.addEventListener("keydown",(ev) -> 
		{ 
			KeyboardEvent evKey=(KeyboardEvent)ev;
			switch((int)evKey.keyCode)
			{
				case 38: { evKey.preventDefault(); up(); } break;
				case 37: { evKey.preventDefault(); left(); } break;
				case 40: { evKey.preventDefault(); down(); } break;
				case 39: { evKey.preventDefault(); right(); } break;
				case 87: { evKey.preventDefault(); up(); } break;
				case 65: { evKey.preventDefault(); left(); } break;
				case 83: { evKey.preventDefault(); down(); } break;
				case 68: { evKey.preventDefault(); right(); } break;
			}
		});
		
		head = new Square(45,0);
		cxt=canvas.getContext(StringTypes._2d);
		direction="right";
		for(int i=0; i < 4; i++) head.addSquare();
		draw();
	}
	
	/**
	 * Ritorna il punteggio
	 * @return punteggio
	 */
	public String getPoints() { return "Punteggio: "+points; }
	
	/**
	 * Setta la difficolta'
	 * @param n difficolta'
	 */
	public void setDifficulty(int n) { difficulty=n; }
	
	/**
	 * Ritorna il contesto del canvas
	 * @return canvas context
	 */
	public CanvasRenderingContext2D getContest() { return cxt; }
	
	/**
	 * Disegna il serpente
	 */
	public void draw() { head.draw(cxt); }
	
	/**
	 * Richiede alla servlet la prossima definizione con
	 * le prossime possibili risposte
	 */
	public void nextQuestion()
	{
		populateFoods();
		$.getJSON(NEXT_EX_SRV,"task=SNAKE_WORD_VALIDATION",(Object result, String a, JQueryXHR ctx)->
		{
			JSON json = (JSON) result;
			List<String> options= new ArrayList<>();
			$(definition).text("Definition: "+(String) json.$get("description"));
			options.add("- "+(String) json.$get("opt1"));
			options.add("- "+(String) json.$get("opt2"));
			options.add("- "+(String) json.$get("opt3"));
			int indiceCasuale = (int) Math.floor(Math.random() * answers.size());
			for(int i=0; i < answers.size(); i++)
			{
				if(i==indiceCasuale) 
				{
					$(answers.get(indiceCasuale)).text("- "+(String) json.$get("answer"));
					foods.get(indiceCasuale).setAnswer();
				}
				else $(answers.get(i)).text(options.remove(0));
			}
			return null;
		});
	}
	
	/**
	 * Disegna i cibi e controlla se un cibo e stato
	 * mangiato
	 */
	public void drawFood()
	{ 
		for(int i=0; i < foods.size(); i++)
		{
			Food f=foods.get(i);
			f.draw(cxt);
			if(hittedFood(f)) 
			{
				eat(f,i);
				nextQuestion();
			}
		}
	}
	
	/**
	 * Elimina i cibi e ne ricrea di nuovi
	 */
	private void populateFoods()
	{ 
		foods.clear();
		foods.addAll(Food.getInstances(canvas,COLORS));
	}
	
	/**
	 * Salva la risposta scelta e , se giusta, aumenta punteggio e lunghezza serpente
	 * @param f cibo mangiato
	 * @param i indice del cibo mangiato all'interno della lista food
	 */
	public void eat(Food f, int i) 
	{ 
		$.get(TASK_SRV, "definition="+definition.textContent
				+"&userAnswer="+answers.get(i).textContent+"&isCorrect="+f.isAnswer());
		if(f.isAnswer())
		{
			points++; 
			head.addSquare(); 
			document.getElementById("counter").textContent=getPoints();
		}
	}
	
	/**
	 * Muove il serpente
	 */
	public void move()
	{
		switch(direction)
		{
			case "up": head.up(); break;
			case "down": head.down(); break;
			case "right": head.right(); break;
			case "left": head.left(); break;
		}
	}
	
	/**
	 * Controlla se il cibo e' stato mangiato dallo snake
	 * @param f cibo su cui effettuare il controllo
	 * @return true se e' stato mangiato, false altrimenti
	 */
	public boolean hittedFood(Food f)
	{
		boolean ris = false;
		if (head.x == f.x && head.y == f.y) ris = true;
		return ris;
	}
	
	/**
	 * Controlla che il serpente non abbia colpito il bordo del canvas
	 * @return true se ha colpito il bordo, false altrimenti
	 */
	public boolean hittedBorder()
	{
		return head.x > canvas.width - DisplayElement.SIDE || head.x < 0 || head.y < 0 || head.y > canvas.height - DisplayElement.SIDE ;
	}
	
	/**
	 * Controlla che il serpente sia morto
	 * @return true se e' morto, false se e' vivo
	 */
	public boolean dead()
	{
		return head.hit(head) || hittedBorder();
	}
	
	/**
	 * Cambia la direzione verso sopra
	 */
	public void up() { if(direction.equals("down")) return; direction="up"; }
	
	/**
	 * Cambia la direzione verso il basso
	 */
	public void down() { if(direction.equals("up")) return; direction="down"; }
	
	/**
	 * Cambia la direzione verso destra
	 */
	public void right() { if(direction.equals("left")) return; direction="right"; }
	
	/**
	 * Cambia la direzione verso sinistra
	 */
	public void left() { if(direction.equals("right")) return; direction="left"; }
}
