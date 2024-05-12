package app;  // Defines the package name under which this class is organized

import java.io.IOException;  // Imports the IOException class for handling IO errors

import javax.servlet.annotation.WebServlet;  // Imports the WebServlet annotation to define servlet properties
import javax.servlet.http.HttpServlet;  // Imports HttpServlet as the base class for creating HTTP servlets
import javax.servlet.http.HttpServletRequest;  // Imports HttpServletRequest to handle the client's request
import javax.servlet.http.HttpServletResponse;  // Imports HttpServletResponse to handle the response sent to the client

// Annotation to declare servlet configuration
@WebServlet(
    name = "HelloAppEngine",  // Logical name of the servlet
    urlPatterns = {"/hello"}  // URL pattern(s) which this servlet will respond to
)
public class HelloAppEngine extends HttpServlet {  // Begins the definition of the class

  @Override  // Indicates that this method overrides a method in a superclass
  public void doGet(HttpServletRequest request, HttpServletResponse response) 
      throws IOException {  // Method to handle GET requests; it throws an IOException

    response.setContentType("text/plain");  // Sets the content type of the response to plain text
    response.setCharacterEncoding("UTF-8");  // Sets the character encoding of the response to UTF-8

    // Writes a text response to the output stream (client)
    response.getWriter().print("Hello App Engine!\r\n");
  }
}
