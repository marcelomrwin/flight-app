package com.redhat.flight.service.impl;

import com.redhat.flight.dto.SyntheseCompanyDto;
import com.redhat.flight.dto.SyntheseTripDto;
import com.redhat.flight.models.Bookmark;
import com.redhat.flight.models.Flight;
import com.redhat.flight.models.FlightCriteria;
import com.redhat.flight.models.SynthesisCriteria;
import com.redhat.flight.repository.BookmarkRepository;
import com.redhat.flight.repository.FlightRepository;
import com.redhat.flight.service.FlightService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class FlightServiceImpl implements FlightService {

    @Autowired
    private FlightRepository flightRepository;
    @Autowired
    private BookmarkRepository bookmarkRepository;

    public List<Flight> searchFlight(FlightCriteria flightCriteria) {
        // TODO Auto-generated method stub
        return flightRepository.searchFlight(flightCriteria);
    }

    @Override
    public List<Flight> getAllFlights() {
        List<Flight> flights = flightRepository.findAll();

        if (flights.size() > 0) {
            return flights;
        } else {
            return new ArrayList<Flight>();
        }
    }

    @Override
    public Flight getFlight(Long idFlight) {
        // TODO Auto-generated method stub
        Flight flight = flightRepository.findById(idFlight).orElse(null);
        return flight;
    }

    @Override
    public Long getNumberFlights(SynthesisCriteria synthesisCriteria) {
        // TODO Auto-generated method stub
        return flightRepository.getNumberFlights(synthesisCriteria);
    }

    @Override
    public List<SyntheseCompanyDto> getSyntheseCompanyFlights(SynthesisCriteria synthesisCriteria) {
        // TODO Auto-generated method stub
        return flightRepository.getSyntheseCompanyFlights(synthesisCriteria);
    }

    @Override
    public Bookmark addBookmark(Bookmark bookmark) {
        return this.bookmarkRepository.save(bookmark);
    }

    @Override
    public List<Bookmark> getAllBookmarks() {
        // TODO Auto-generated method stub
        return bookmarkRepository.findAll();
    }

    @Override
    public Bookmark getBookmark(Long idBookmark) {
        // TODO Auto-generated method stub
        return this.bookmarkRepository.getOne(idBookmark);
    }

    @Override
    public List<SyntheseTripDto> getSyntheseTripFlights(SynthesisCriteria synthesisCriteria) {
        // TODO Auto-generated method stub
        return flightRepository.getSyntheseTripFlights(synthesisCriteria);
    }

    @Override
    public List<Bookmark> getBookmarkList(String userName) {
        // TODO Auto-generated method stub
        return flightRepository.getBookmarkList(userName);
    }

    @Override
    public void deleteBookmark(Long idBookmark) {
        bookmarkRepository.deleteById(idBookmark);
    }

    @Override
    public void deleteAllBookmark() {
        bookmarkRepository.deleteAll();
    }
}
