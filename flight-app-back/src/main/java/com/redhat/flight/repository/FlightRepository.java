package com.redhat.flight.repository;


import com.redhat.flight.models.Flight;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface FlightRepository extends JpaRepository<Flight, Long>, FlightRepositoryCustom {
}
