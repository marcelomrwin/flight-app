package com.redhat.flight.repository.impl;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;


import com.redhat.flight.models.*;
import jakarta.persistence.EntityManager;
import jakarta.persistence.criteria.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.redhat.flight.dto.SyntheseCompanyDto;
import com.redhat.flight.dto.SyntheseTripDto;
import com.redhat.flight.enumerations.CompanyName;
import com.redhat.flight.enumerations.TravelType;
import com.redhat.flight.repository.FlightRepositoryCustom;

@Repository
public class FlightRepositoryImpl implements FlightRepositoryCustom {
    private static final Logger log = LoggerFactory.getLogger(FlightRepositoryImpl.class);
    @Autowired
    private EntityManager entityManager;

    public List<Flight> searchFlight(FlightCriteria flightCriteria) {
        CriteriaBuilder cb = entityManager.getCriteriaBuilder();
        CriteriaQuery<Flight> cq = cb.createQuery(Flight.class);
        Root<Flight> flight = cq.from(Flight.class);
        List<Predicate> predicates = new ArrayList<>();
        if (flightCriteria.getCompany() != null) {
            predicates.add(cb.equal(flight.get("company").get("companyName"), flightCriteria.getCompany()));
        }
        if (flightCriteria.getFlightType() != null) {
            predicates.add(cb.equal(flight.get("flightType"), flightCriteria.getFlightType()));
        }
        if (flightCriteria.getTravelType() != null) {
            predicates.add(cb.equal(flight.get("travelType"), flightCriteria.getTravelType()));
        }
        if (flightCriteria.getAircraftType() != null) {
            predicates.add(cb.like(flight.get("aircraftType"), "%" + flightCriteria.getAircraftType() + "%"));
        }
        if (flightCriteria.getDepartureLocation() != null) {
            predicates.add(cb.like(flight.get("departureLocation"), "%" + flightCriteria.getDepartureLocation() + "%"));
        }
        if (flightCriteria.getArrivalLocation() != null) {
            predicates.add(cb.like(flight.get("arrivalLocation"), "%" + flightCriteria.getArrivalLocation() + "%"));
        }
        if (flightCriteria.getArrivalDateMin() != null) {
            predicates.add(cb.greaterThanOrEqualTo(flight.get("arrivalDate"), flightCriteria.getArrivalDateMin()));
        }
        if (flightCriteria.getArrivalDateMax() != null) {
            predicates.add(cb.lessThanOrEqualTo(flight.get("arrivalDate"), flightCriteria.getArrivalDateMax()));
        }
        if (flightCriteria.getArrivalTimeMin() != null) {
            predicates.add(cb.greaterThanOrEqualTo(flight.get("arrivalTime"), flightCriteria.getArrivalTimeMin()));
        }
        if (flightCriteria.getArrivalTimeMax() != null) {
            predicates.add(cb.lessThanOrEqualTo(flight.get("arrivalTime"), flightCriteria.getArrivalTimeMax()));
        }
        if (flightCriteria.getBackDateMin() != null) {
            predicates.add(cb.greaterThanOrEqualTo(flight.get("backDate"), flightCriteria.getBackDateMin()));
        }
        if (flightCriteria.getBackDateMax() != null) {
            predicates.add(cb.lessThanOrEqualTo(flight.get("backDate"), flightCriteria.getBackDateMax()));
        }
        if (flightCriteria.getBackTimeMin() != null) {
            predicates.add(cb.greaterThanOrEqualTo(flight.get("backTime"), flightCriteria.getBackTimeMin()));
        }
        if (flightCriteria.getBackTimeMax() != null) {
            predicates.add(cb.lessThanOrEqualTo(flight.get("backTime"), flightCriteria.getBackTimeMax()));
        }
        if (flightCriteria.getConnectionDurationMin() != null) {
            predicates.add(cb.greaterThanOrEqualTo(flight.get("connectionDuration"),
                    flightCriteria.getConnectionDurationMin()));
        }
        if (flightCriteria.getConnectionDurationMax() != null) {
            predicates.add(
                    cb.lessThanOrEqualTo(flight.get("connectionDuration"), flightCriteria.getConnectionDurationMax()));
        }
        if (flightCriteria.getDepartureDateMax() != null) {
            predicates.add(cb.lessThanOrEqualTo(flight.get("departureDate"), flightCriteria.getDepartureDateMax()));
        }
        if (flightCriteria.getDepartureDateMin() != null) {
            predicates.add(cb.greaterThanOrEqualTo(flight.get("departureDate"), flightCriteria.getDepartureDateMin()));
        }
        if (flightCriteria.getDepartureTimeMax() != null) {
            predicates.add(cb.lessThanOrEqualTo(flight.get("departureTime"), flightCriteria.getDepartureTimeMax()));
        }
        if (flightCriteria.getDepartureTimeMin() != null) {
            predicates.add(cb.greaterThanOrEqualTo(flight.get("departureTime"), flightCriteria.getDepartureTimeMin()));
        }
        if (flightCriteria.getFlightDurationMax() != null) {
            predicates.add(cb.lessThanOrEqualTo(flight.get("flightDuration"), flightCriteria.getFlightDurationMax()));
        }
        if (flightCriteria.getFlightDurationMin() != null) {
            predicates
                    .add(cb.greaterThanOrEqualTo(flight.get("flightDuration"), flightCriteria.getFlightDurationMin()));
        }

        if (flightCriteria.getProviderName() != null) {
            predicates.add(cb.like(flight.get("providerName"), "%" + flightCriteria.getProviderName() + "%"));
        }

        cq.where(predicates.toArray(new Predicate[0]));

        List<Flight> resultList = Collections.emptyList();
        try {
            resultList = entityManager.createQuery(cq).getResultList();
        } catch (Exception e) {
            debugCriteriaError(e, cb);
        }
        return resultList;
    }

    @Override
    public Long getNumberFlights(SynthesisCriteria synthesisCriteria) {
        CriteriaBuilder cb = entityManager.getCriteriaBuilder();
        CriteriaQuery<Long> cq = cb.createQuery(Long.class);
        Root<Flight> flight = cq.from(Flight.class);
        cq.select(cb.count(flight));
        List<Predicate> predicates = new ArrayList<>();
        if (synthesisCriteria.getDepartureDateMax() != null) {
            predicates.add(cb.lessThanOrEqualTo(flight.get("departureDate"), synthesisCriteria.getDepartureDateMax()));
        }
        if (synthesisCriteria.getDepartureDateMin() != null) {
            predicates
                    .add(cb.greaterThanOrEqualTo(flight.get("departureDate"), synthesisCriteria.getDepartureDateMin()));
        }
        cq.where(predicates.toArray(new Predicate[0]));
        return entityManager.createQuery(cq).getSingleResult();

    }

    @Override
    public List<SyntheseCompanyDto> getSyntheseCompanyFlights(SynthesisCriteria synthesisCriteria) {
        CriteriaBuilder cb = entityManager.getCriteriaBuilder();
        CriteriaQuery<SyntheseCompanyDto> cq = cb.createQuery(SyntheseCompanyDto.class);
        Root<Flight> flight = cq.from(Flight.class);

        Join<Flight, Company> company = flight.join("company");
        cq.multiselect(company.get("companyName"), cb.count(company.get("companyName")));

        List<Predicate> predicates = new ArrayList<>();
        if (synthesisCriteria.getDepartureDateMax() != null) {
            predicates.add(cb.lessThanOrEqualTo(flight.get("departureDate"), synthesisCriteria.getDepartureDateMax()));
        }
        if (synthesisCriteria.getDepartureDateMin() != null) {
            predicates
                    .add(cb.greaterThanOrEqualTo(flight.get("departureDate"), synthesisCriteria.getDepartureDateMin()));
        }

        cq.where(predicates.toArray(new Predicate[0]));
        cq.groupBy(company.get("companyName"));

        return entityManager.createQuery(cq).getResultList();
    }

    @Override
    public List<SyntheseTripDto> getSyntheseTripFlights(SynthesisCriteria synthesisCriteria) {
        CriteriaBuilder cb = entityManager.getCriteriaBuilder();
        CriteriaQuery<SyntheseTripDto> cq = cb.createQuery(SyntheseTripDto.class);
        Root<Flight> flight = cq.from(Flight.class);

        cq.multiselect(flight.get("travelType"), cb.count(flight.get("travelType")));

        List<Predicate> predicates = new ArrayList<>();
        if (synthesisCriteria.getDepartureDateMax() != null) {
            predicates.add(cb.lessThanOrEqualTo(flight.get("departureDate"), synthesisCriteria.getDepartureDateMax()));
        }
        if (synthesisCriteria.getDepartureDateMin() != null) {
            predicates
                    .add(cb.greaterThanOrEqualTo(flight.get("departureDate"), synthesisCriteria.getDepartureDateMin()));
        }
        cq.where(predicates.toArray(new Predicate[0]));
        cq.groupBy(flight.get("travelType"));

        return entityManager.createQuery(cq).getResultList();

    }

    @Override
    public List<Bookmark> getBookmarkList(String userName) {
        CriteriaBuilder cb = entityManager.getCriteriaBuilder();
        CriteriaQuery<Bookmark> cq = cb.createQuery(Bookmark.class);
        Root<Bookmark> bookmark = cq.from(Bookmark.class);
        List<Predicate> predicates = new ArrayList<>();
        predicates.add(cb.equal(bookmark.get("user").get("username"), userName));
        cq.where(predicates.toArray(new Predicate[0]));
        return entityManager.createQuery(cq).getResultList();
    }

    private void debugCriteriaError(Exception e, CriteriaBuilder cb) {
        Logger logger = LoggerFactory.getLogger(FlightRepositoryImpl.class);
        logger.error("The query produced an unexpected error", e);
        CriteriaBuilder criteriaBuilder = entityManager.getCriteriaBuilder();
        CriteriaQuery<Long> query = cb.createQuery(Long.class);
        Root<Flight> root = query.from(Flight.class);
        query.select(root.get("idFlight"));
        logger.warn("Listing flight IDs");
        List<Long> idList = entityManager.createQuery(query).getResultList();
        logger.warn("The query returned {} results", idList.size());

        for (Long id : idList) {
            CriteriaQuery<Flight> cq1 = criteriaBuilder.createQuery(Flight.class);
            Root<Flight> root1 = cq1.from(Flight.class);
            List<Predicate> predicates1 = new ArrayList<>();
            logger.warn("Querying Flight id [{}]", id);
            predicates1.add(criteriaBuilder.equal(root1.get("idFlight"), id));
            cq1.where(predicates1.toArray(new Predicate[0]));

            try {
                List<Flight> resultList1 = entityManager.createQuery(cq1).getResultList();
                for (Flight f : resultList1) {
                    logger.warn("Searched Flight [{}]", f);
                }
            } catch (Exception ex) {
                logger.error("An unhandled error occurred for flight id [{}]", id, ex);
                throw ex;
            }
        }
    }

}
