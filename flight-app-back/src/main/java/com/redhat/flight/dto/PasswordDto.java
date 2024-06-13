package com.redhat.flight.dto;

public class PasswordDto {
	 private  String token;
	 private String newPassword;
	/**
	 * @return the token
	 */
	public String getToken() {
		return token;
	}
	/**
	 * @param token the token to set
	 */
	public void setToken(String token) {
		this.token = token;
	}
	/**
	 * @return the newPassword
	 */
	public String getNewPassword() {
		return newPassword;
	}
	/**
	 * @param newPassword the newPassword to set
	 */
	public void setNewPassword(String newPassword) {
		this.newPassword = newPassword;
	}
	/**
	 * 
	 */
	public PasswordDto() {
		super();
		// TODO Auto-generated constructor stub
	}
	/**
	 * @param token
	 * @param newPassword
	 */
	public PasswordDto(String token, String newPassword) {
		super();
		this.token = token;
		this.newPassword = newPassword;
	}
	 
}
