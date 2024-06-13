package com.redhat.flight.models;

import com.redhat.flight.enumerations.FlightType;
import com.redhat.flight.enumerations.TravelType;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Flight {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idFlight;

    @ManyToOne
    @JoinColumn(name = "company_id")
    private Company company;

    @Column(name = "flight_type",columnDefinition = "varchar(100)")
    @Enumerated(EnumType.STRING)
    private FlightType flightType;

    @Column(name = "travel_type",columnDefinition = "varchar(100)")
    @Enumerated(EnumType.STRING)
    private TravelType travelType;

    @Column(name = "departure_date")
    private LocalDate departureDate;
    @Column(name = "arrival_date")
    private LocalDate arrivalDate;
    @Column(name = "back_date")
    private LocalDate backDate;
    @Column(name = "departure_time")
    private LocalTime departureTime;
    @Column(name = "arrival_time")
    private LocalTime arrivalTime;
    @Column(name = "back_time")
    private LocalTime backTime;
    @Column(name = "departure_location")
    private String departureLocation;
    @Column(name = "arrival_location")
    private String arrivalLocation;
    @Column(name = "flight_duration")
    private LocalTime flightDuration;
    @Column(name = "connection_duration")
    private LocalTime connectionDuration;
    @Column(name = "aircraft_type")
    private String aircraftType;
}
