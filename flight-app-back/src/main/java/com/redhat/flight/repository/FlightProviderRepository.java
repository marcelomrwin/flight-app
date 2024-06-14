package com.redhat.flight.repository;

import com.redhat.flight.models.FlightProvider;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface FlightProviderRepository extends JpaRepository<FlightProvider, Long> {

    @Query("SELECT p FROM FlightProvider p WHERE p.providerName=?1")
   Optional<FlightProvider> findByProviderName(String providerName);
}
