package it.uniroma1.fabbricasemantica.servlet;

import java.io.File;
import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Scheletro di base delle servlet
 * @author aless
 *
 */
public abstract class BaseServlet extends HttpServlet {
	
	private static final long serialVersionUID = 6784574842574L;
	
	/**
	 * Percorso dei file risorse necessari al sito
	 */
	public static final String PERCORSO_RISORSE= File.separator+"WEB-INF"+File.separator+"resources";
	
	/**
	 * URL pagina login
	 */
	public static final String LOGIN_URL="login.html";
	
	/**
	 * URL pagina registrazione
	 */
	public static final String SIGNUP_URL="signup.html";
	
	/**
	 * URL pagina home
	 */
	public static final String HOME_URL="home.html";
	
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doSomething(request, response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doSomething(request, response);
	}

	/**
	 * Metodo che implementa la logica richiesta nelle specifiche del backend.
	 * */
	protected abstract void doSomething(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException;
	
	
}
