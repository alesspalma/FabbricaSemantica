package it.uniroma1.fabbricasemantica.servlet.task;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import it.uniroma1.fabbricasemantica.servlet.BaseServlet;

@WebServlet(name = "TaskSnakeWordValidationServlet", urlPatterns = "/snakeWordValidation.jsp")
public class TaskSnakeWordValidationServlet extends BaseServlet {
	private static final long serialVersionUID = 1L;

	@Override
	/**
	 * Salva la risposta selezionata dall'utente in un file tav
	 */
	protected void doSomething(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException 
	{
		String percorsoUnificato = request.getServletContext()
				.getRealPath(PERCORSO_RISORSE+File.separator+request.getSession().getAttribute("username")+"SnakeWordValidation.tsv");
		new File(percorsoUnificato).createNewFile();
		
		try(FileWriter fw=new FileWriter(percorsoUnificato,true)) 
		{ 
			fw.write(request.getParameter("definition")+'\t'
					+request.getParameter("userAnswer")+'\t'
					+request.getParameter("isCorrect")+'\n'); 
		}
		catch(Exception e) { throw(e); } 
	}

}
