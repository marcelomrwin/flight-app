package com.redhat.flight.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
public class Bookmark {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idBookmark;
    @Column(name = "title")
    private String title;
    @Column(name = "adding_date")
    private LocalDate addingDate;
    @Column(name = "nb_flights")
    private int nbFlights;
    @Embedded
    private FlightCriteria flightCriteria;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private UserDao user;
}
