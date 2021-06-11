package it.uniroma1.fabbricasemantica.servlet.user;

import java.io.File;
import java.io.FileWriter;
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

@WebServlet(name="SignupServlet", urlPatterns="/signup.jsp")
public class SignupServlet extends BaseServlet 
{
	private static final long serialVersionUID = 8484501789787L;
	
	@Override
	/**
	 * Registra l'utente se i dati immessi sono congrui e se non ne esiste uno che ha gia' lo stesso username
	 * (ovvero la stessa email). Se la registrazione avviene con successo reindirizza l'utente alla home, altrimenti alla pagina
	 * di registrazione
	 */
	protected void doSomething(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException 
	{
		String percorsoUnificato = request.getServletContext().getRealPath(PERCORSO_RISORSE+File.separator+"utenti.tsv");
		new File(percorsoUnificato).createNewFile();
		String email = request.getParameter("email");
		String password = request.getParameter("password");
		Optional<String> alreadyExists;
		try(Stream<String> read = Files.lines(Paths.get(percorsoUnificato)))
		{
			alreadyExists = read.map(s -> s.split("\t")[0])
				.filter(s-> s.equals(email))
				.findAny();
		}
		catch(IOException e) { throw e; }
		
		if(alreadyExists.isPresent() || !password.equals(request.getParameter("passwordConfirm")))
			{ response.sendRedirect(SIGNUP_URL); return; }

		try(FileWriter fw=new FileWriter(percorsoUnificato,true)) 
			{ 
				fw.write(email+'\t'+password+
					'\t'+"IT:"+request.getParameter("italian_tongue")+
					'\t'+"EN:"+request.getParameter("english_tongue")+
					otherTongues(request)+'\n'); 
			}
		catch(Exception e) { throw(e); } 
		
		request.getSession().setAttribute("username", email);
		response.sendRedirect(HOME_URL);
	}
	
	/**
	 * Controlla quali altre lingue sono state immesse dall'utente in fase di
	 * registrazione
	 * @param request richiesta HTTP
	 * @return stringa che ci informa sulle altre lingue parlate dall'utente e i rispettivi livelli
	 */
	private String otherTongues(HttpServletRequest request)
	{
		StringBuilder sb= new StringBuilder();
		
		sb.append(request.getParameter("other_tongue_1").equals("") ? "" :
			'\t'+request.getParameter("other_tongue_1")+request.getParameter("tongue_level_1"));
		sb.append(request.getParameter("other_tongue_2").equals("") ? "" :
			'\t'+request.getParameter("other_tongue_2")+request.getParameter("tongue_level_2"));
		sb.append(request.getParameter("other_tongue_3").equals("") ? "" :
			'\t'+request.getParameter("other_tongue_3")+request.getParameter("tongue_level_3"));
		
		return sb.toString();
	}
}
