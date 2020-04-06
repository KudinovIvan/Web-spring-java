import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.json.JSONString;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.PrintWriter;
import java.sql.DriverManager;
import java.sql.Connection;
import java.sql.ResultSet;
import java.io.IOException;
import java.sql.SQLException;

@WebServlet("/JDBCPostgreSQLExample")
    public class JDBCPostgreSQLExample extends HttpServlet {

        //  Database credentials
        static final String DB_URL = "jdbc:postgresql://localhost:5432/users";
        static final String USER = "postgres";
        static final String PASS = "21122012--+";

        private static final Gson GSON = new GsonBuilder().setPrettyPrinting().create();

        protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
            String username = request.getParameter("username");
            String password = request.getParameter("password");
            PrintWriter out = response.getWriter();
            User user = new User(username,password);
            GSON.toJson(user);
            out.print(user);
            out.close();
        };
        protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String username = request.getParameter("username");
        String password = request.getParameter("password");
        PrintWriter out = response.getWriter();
        User user = new User(username,password);
        GSON.toJson(user);
        out.print(user);
        out.close();
        };

        public static void main(String[] args) {

            System.out.println("Testing connection to PostgreSQL JDBC");

            try {
                Class.forName("org.postgresql.Driver");
            } catch (ClassNotFoundException e) {
                System.out.println("PostgreSQL JDBC Driver is not found. Include it in your library path ");
                e.printStackTrace();
                return;
            }

            System.out.println("PostgreSQL JDBC Driver successfully connected");
            Connection connection = null;

            try {
                connection = DriverManager.getConnection(DB_URL, USER, PASS);

            } catch (SQLException e) {
                System.out.println("Connection Failed");
                e.printStackTrace();
                return;
            }

            if (connection != null) {
                System.out.println("You successfully connected to database now");
            } else {
                System.out.println("Failed to make connection to database");
            }



            /*public ResultSet getUser(User user) {
                ResultSet resSet = null;
                String select = "SELECT * FROM " + Const.USER_TABLE + " WHERE "+
                        Const.USERS_LOGIN + "=? AND "+ Const.USERS_PASSWORD + "=?";

                try {
                    PreparedStatement prSt = getDbConnection().prepareStatement(select);
                    prSt.setString(1, user.getLogin());
                    prSt.setString(2, user.getPassword());
                    resSet = prSt.executeQuery();
                } catch (SQLException | ClassNotFoundException e) {
                    e.printStackTrace();
                }
                return resSet;
            }*/
        }
    }
