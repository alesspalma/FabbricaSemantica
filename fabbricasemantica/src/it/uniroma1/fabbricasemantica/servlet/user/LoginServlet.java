package it.uniroma1.fabbricasemantica.servlet.user;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Optional;
import java.util.stream.Stream;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import it.uniroma1.fabbricasemantica.servlet.BaseServlet;


@WebServlet(name="LoginServlet", urlPatterns="/login.jsp")
public class LoginServlet extends BaseServlet 
{
	private static final long serialVersionUID = 8484501789787L;
	
	@Override
	/**
	 * Logga l'utente se registrato, altrimenti lo reindirizza alla pagina di login
	 */
	protected void doSomething(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException 
	{
		String percorsoUnificato = getServletContext().getRealPath(PERCORSO_RISORSE+File.separator+"utenti.tsv");
		if(!(new File(percorsoUnificato).exists())) { response.sendRedirect(LOGIN_URL); return; }
		
		String email = request.getParameter("email");
		Optional<String> exists;
		try(Stream<String> read = Files.lines(Paths.get(percorsoUnificato)))
		{
			exists = read.map(s -> {
				String[] arr = s.split("\t");
				return arr[0]+arr[1];
				})
				.filter(s-> s.equals(email+request.getParameter("password")))
				.findAny();
		}
		catch(IOException e) { throw e; }
		
		if(exists.isPresent())
		{
			request.getSession().setAttribute("username", email);
			response.sendRedirect(HOME_URL);
		}
		else response.sendRedirect(LOGIN_URL);
	}
}
