package com.redhat.flight.dto;


public class UserDto {
    private String username;
    private String password;
    private String confpassword;
    private String email;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    /**
     * @return the confpassword
     */
    public String getConfpassword() {
        return confpassword;
    }

    /**
     * @param confpassword the confpassword to set
     */
    public void setConfpassword(String confpassword) {
        this.confpassword = confpassword;
    }

    /**
     * @return the email
     */
    public String getEmail() {
        return email;
    }

    /**
     * @param email the email to set
     */
    public void setEmail(String email) {
        this.email = email;
    }


}
