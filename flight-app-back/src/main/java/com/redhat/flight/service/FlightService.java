package com.redhat.flight.service;

import com.redhat.flight.dto.SyntheseCompanyDto;
import com.redhat.flight.dto.SyntheseTripDto;
import com.redhat.flight.models.Bookmark;
import com.redhat.flight.models.Flight;
import com.redhat.flight.models.FlightCriteria;
import com.redhat.flight.models.SynthesisCriteria;

import java.util.List;

public interface FlightService {
    List<Flight> searchFlight(FlightCriteria flightCriteria);

    List<Flight> getAllFlights();

    Flight getFlight(Long idFlight);

    Long getNumberFlights(SynthesisCriteria synthesisCriteria);

    List<SyntheseCompanyDto> getSyntheseCompanyFlights(SynthesisCriteria synthesisCriteria);

    List<SyntheseTripDto> getSyntheseTripFlights(SynthesisCriteria synthesisCriteria);

    Bookmark addBookmark(Bookmark bookmark);

    List<Bookmark> getAllBookmarks();

    Bookmark getBookmark(Long idBookmark);

    void deleteBookmark(Long idBookmark);

    void deleteAllBookmark();

    List<Bookmark> getBookmarkList(String userName);
}
