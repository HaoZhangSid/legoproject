package web;

import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class StaticFileServlet extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // 获取请求的静态文件路径
        String path = request.getPathInfo();

        // 从类路径中读取静态文件
        try (InputStream inputStream = getClass().getResourceAsStream("/" + path)) {
            if (inputStream != null) {
                // 设置响应内容类型
                String contentType = getServletContext().getMimeType(path);
                if (contentType != null) {
                    response.setContentType(contentType);
                }

                // 将文件内容写入响应
                try (OutputStream outputStream = response.getOutputStream()) {
                    byte[] buffer = new byte[1024];
                    int bytesRead;
                    while ((bytesRead = inputStream.read(buffer)) != -1) {
                        outputStream.write(buffer, 0, bytesRead);
                    }
                }
            } else {
                // 如果找不到文件，返回 404
                response.sendError(HttpServletResponse.SC_NOT_FOUND);
            }
        }
    }
}
