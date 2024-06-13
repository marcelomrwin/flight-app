package com.redhat.flight.config;

import org.springframework.mail.SimpleMailMessage;
import org.springframework.stereotype.Repository;

@Repository
public interface EmailService {
	public void sendEmail(SimpleMailMessage  email);
}
