package com.redhat.flight.repository;

import java.util.Date;

import com.redhat.flight.models.PasswordResetToken;
import com.redhat.flight.models.UserDao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface PasswordResetTokenRepository extends JpaRepository<PasswordResetToken, Long> {
    @Query("SELECT passResToken FROM PasswordResetToken passResToken where passResToken.token = ?1")
	PasswordResetToken findByToken(String token);
    
    @Query("SELECT passResToken FROM PasswordResetToken passResToken where passResToken.user = ?1")
	PasswordResetToken findByUser(UserDao user);
    
    @Modifying
    @Query("delete from PasswordResetToken t where t.expiryDate <= ?1")
    void deleteAllExpiredSince(Date now);
}  
