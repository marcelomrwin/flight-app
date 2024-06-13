package com.redhat.flight.repository;

import com.redhat.flight.dto.SyntheseCompanyDto;
import com.redhat.flight.dto.SyntheseTripDto;
import com.redhat.flight.models.Bookmark;
import com.redhat.flight.models.Flight;
import com.redhat.flight.models.FlightCriteria;
import com.redhat.flight.models.SynthesisCriteria;

import java.util.List;


public interface FlightRepositoryCustom {
    List<Flight> searchFlight(FlightCriteria flightCriteria);

    Long getNumberFlights(SynthesisCriteria synthesisCriteria);

    List<SyntheseCompanyDto> getSyntheseCompanyFlights(SynthesisCriteria synthesisCriteria);

    List<SyntheseTripDto> getSyntheseTripFlights(SynthesisCriteria synthesisCriteria);

    List<Bookmark> getBookmarkList(String userName);
}
