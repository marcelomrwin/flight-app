package com.redhat.flight.service;

import com.redhat.flight.models.FlightProvider;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface FlightProviderService {
    @Transactional
    FlightProvider addFlightProvider(FlightProvider flightProvider);

    @Transactional(readOnly = true)
    List<FlightProvider> getAllFlightProviders();

    @Transactional(readOnly = true)
    FlightProvider getFlightProvider(Long providerId);

    @Transactional(readOnly = true)
    FlightProvider getFlightProvider(String providerName);
}
