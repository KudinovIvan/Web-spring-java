

public class User {
    private String username;
    private String password;

    private String getLogin(){
        return username;
    }
    public User(String username, String password){
        this.username=username;
        this.password=password;
    }
    private String getPassword(){
        return password;
    }
    public void setPassword(String password){
        this.password=password;
    }
}
