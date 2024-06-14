package com.redhat.flight.service.impl;

import com.redhat.flight.models.FlightProvider;
import com.redhat.flight.repository.FlightProviderRepository;
import com.redhat.flight.service.FlightProviderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class FlightProviderServiceImpl implements FlightProviderService {

    private final FlightProviderRepository flightProviderRepository;

    @Autowired
    public FlightProviderServiceImpl(FlightProviderRepository flightProviderRepository) {
        this.flightProviderRepository = flightProviderRepository;
    }
    @Override
    @Transactional
    public FlightProvider addFlightProvider(FlightProvider flightProvider) {
        return flightProviderRepository.save(flightProvider);
    }
    @Override
    @Transactional(readOnly = true)
    public List<FlightProvider> getAllFlightProviders() {
        return flightProviderRepository.findAll();
    }
    @Override
    @Transactional(readOnly = true)
    public FlightProvider getFlightProvider(Long providerId) {
        return flightProviderRepository.findById(providerId).orElse(null);
    }

    @Override
    @Transactional(readOnly = true)
    public FlightProvider getFlightProvider(String providerName) {
        return flightProviderRepository.findByProviderName(providerName).orElse(null);
    }
}
