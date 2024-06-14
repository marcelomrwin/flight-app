package com.redhat.flight.models;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class FlightProvider {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idProvider;

    @Column(name = "provider_name", nullable = false)
    private String providerName;

    @ElementCollection
    @CollectionTable(name = "provider_queues", joinColumns = @JoinColumn(name = "provider_id"))
    private List<ProviderQueue> providerQueues;
}
