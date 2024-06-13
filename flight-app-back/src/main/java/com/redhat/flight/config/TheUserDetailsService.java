package com.redhat.flight.config;


import com.redhat.flight.dto.UserDto;
import com.redhat.flight.models.PasswordResetToken;
import com.redhat.flight.models.UserDao;
import com.redhat.flight.models.VerificationToken;
import com.redhat.flight.repository.PasswordResetTokenRepository;
import com.redhat.flight.repository.UserRepository;
import com.redhat.flight.repository.VerificationTokenRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Optional;

@Service
public class TheUserDetailsService implements UserDetailsService {
	@Autowired
	private UserRepository userRepository;

	@Autowired
	private PasswordEncoder bcryptEncoder;

	@Autowired
	private PasswordResetTokenRepository passwordTokenRepository;
	
	@Autowired
	private VerificationTokenRepository verificationTokenRepository;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
	    boolean enabled = true;
	    boolean accountNonExpired = true;
	    boolean credentialsNonExpired = true;
	    boolean accountNonLocked = true;
		UserDao user = userRepository.findByUsername(username);
		if (user == null) {
			throw new UsernameNotFoundException("User not found with username: " + username);
		}
		return new User(user.getUsername(), user.getPassword(),user.isEnabled(), 
		          accountNonExpired, 
		          credentialsNonExpired, 
		          accountNonLocked,  new ArrayList<>());
	}

	public Optional loadUserByEmail(String email) {
		return userRepository.findByEmail(email);
	}

	public UserDao loadUserByName(String username) {
		UserDao user = userRepository.findByUsername(username);
		return user;
	}

	public void updateUser(UserDao user) {
		userRepository.save(user);
	}

	public UserDao save(UserDto user) {
		UserDao newUser = new UserDao();
		newUser.setUsername(user.getUsername());
		newUser.setEmail(user.getEmail());
		newUser.setPassword(bcryptEncoder.encode(user.getPassword()));
		newUser.setConfpassword(bcryptEncoder.encode(user.getConfpassword()));
		return userRepository.save(newUser);
	}

	public void changeUserPassword(final UserDao user, final String password) {
		user.setPassword(bcryptEncoder.encode(password));
		userRepository.save(user);
	}

	public void createPasswordResetTokenForUser(final UserDao user, final String token) {
		final PasswordResetToken myToken = new PasswordResetToken(token, user);
		passwordTokenRepository.save(myToken);
	}

	public PasswordResetToken getPasswordResetToken(final String token) {
		return passwordTokenRepository.findByToken(token);
	}

	private boolean isTokenExpired(PasswordResetToken passToken) {
		final Calendar cal = Calendar.getInstance();
		return passToken.getExpiryDate().before(cal.getTime());
	}

	private boolean isTokenFound(PasswordResetToken passToken) {
		return passToken != null;
	}

	public String validatePasswordResetToken(String token) {
		final PasswordResetToken passToken = passwordTokenRepository.findByToken(token);

		return !isTokenFound(passToken) ? "invalidToken" : isTokenExpired(passToken) ? "expired" : null;
	}

	public Optional<UserDao> getUserByPasswordResetToken(final String token) {
		return Optional.ofNullable(passwordTokenRepository.findByToken(token).getUser());
	}

	public Optional<UserDao> getUserByVerificationToken(final String token) {
		return Optional.ofNullable(verificationTokenRepository.findByToken(token).getUser());
	}

	public void createVerificationTokenForUser(UserDao user, String token) {
		final VerificationToken myToken = new VerificationToken(token, user);
		verificationTokenRepository.save(myToken);
	}
	
	 public String validateVerificationToken(String token) {
	        final VerificationToken verificationToken = verificationTokenRepository.findByToken(token);
	        if (verificationToken == null) {
	            return "invalid";
	        }

	        final UserDao user = verificationToken.getUser();
	        final Calendar cal = Calendar.getInstance();
	        if ((verificationToken.getExpiryDate()
	            .getTime() - cal.getTime()
	            .getTime()) <= 0) {
	        	verificationTokenRepository.delete(verificationToken);
	            return "expired";
	        }

	        user.setEnabled(true);
	        userRepository.save(user);
	        return "valid";
	    }

}
