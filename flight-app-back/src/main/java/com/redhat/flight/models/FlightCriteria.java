package com.redhat.flight.models;

import com.redhat.flight.enumerations.CompanyName;
import com.redhat.flight.enumerations.FlightType;
import com.redhat.flight.enumerations.TravelType;
import jakarta.persistence.Embeddable;

import java.time.LocalDate;
import java.time.LocalTime;

@Embeddable
public class FlightCriteria {
    private CompanyName company;
    private FlightType flightType;
    private TravelType travelType;
    private String departureLocation;
    private String arrivalLocation;
    private Double fareMin;
    private Double fareMax;
    private LocalTime flightDurationMin;
    private LocalTime flightDurationMax;
    private String aircraftType;
    private LocalDate departureDateMin;
    private LocalDate arrivalDateMin;
    private LocalDate backDateMin;
    private LocalTime departureTimeMin;
    private LocalTime arrivalTimeMin;
    private LocalTime backTimeMin;
    private LocalDate departureDateMax;
    private LocalDate arrivalDateMax;
    private LocalDate backDateMax;
    private LocalTime departureTimeMax;
    private LocalTime arrivalTimeMax;
    private LocalTime backTimeMax;
    private LocalTime connectionDurationMin;
    private LocalTime connectionDurationMax;
private String providerName;

    /**
     * @return the company
     */
    public CompanyName getCompany() {
        return company;
    }

    /**
     * @param company the company to set
     */
    public void setCompany(CompanyName company) {
        this.company = company;
    }

    /**
     * @return the flightType
     */
    public FlightType getFlightType() {
        return flightType;
    }

    /**
     * @param flightType the flightType to set
     */
    public void setFlightType(FlightType flightType) {
        this.flightType = flightType;
    }

    /**
     * @return the travelType
     */
    public TravelType getTravelType() {
        return travelType;
    }

    /**
     * @param travelType the travelType to set
     */
    public void setTravelType(TravelType travelType) {
        this.travelType = travelType;
    }

    /**
     * @return the departureLocation
     */
    public String getDepartureLocation() {
        return departureLocation;
    }

    /**
     * @param departureLocation the departureLocation to set
     */
    public void setDepartureLocation(String departureLocation) {
        this.departureLocation = departureLocation;
    }

    /**
     * @return the arrivalLocation
     */
    public String getArrivalLocation() {
        return arrivalLocation;
    }

    /**
     * @param arrivalLocation the arrivalLocation to set
     */
    public void setArrivalLocation(String arrivalLocation) {
        this.arrivalLocation = arrivalLocation;
    }

    /**
     * @return the fareMin
     */
    public Double getFareMin() {
        return fareMin;
    }

    /**
     * @param fareMin the fareMin to set
     */
    public void setFareMin(double fareMin) {
        this.fareMin = fareMin;
    }

    /**
     * @return the fareMax
     */
    public Double getFareMax() {
        return fareMax;
    }

    /**
     * @param fareMax the fareMax to set
     */
    public void setFareMax(double fareMax) {
        this.fareMax = fareMax;
    }

    /**
     * @return the flightDurationMin
     */
    public LocalTime getFlightDurationMin() {
        return flightDurationMin;
    }

    /**
     * @param flightDurationMin the flightDurationMin to set
     */
    public void setFlightDurationMin(LocalTime flightDurationMin) {
        this.flightDurationMin = flightDurationMin;
    }

    /**
     * @return the flightDurationMax
     */
    public LocalTime getFlightDurationMax() {
        return flightDurationMax;
    }

    /**
     * @param flightDurationMax the flightDurationMax to set
     */
    public void setFlightDurationMax(LocalTime flightDurationMax) {
        this.flightDurationMax = flightDurationMax;
    }

    /**
     * @return the aircraftType
     */
    public String getAircraftType() {
        return aircraftType;
    }

    /**
     * @param aircraftType the aircraftType to set
     */
    public void setAircraftType(String aircraftType) {
        this.aircraftType = aircraftType;
    }

    /**
     * @return the departureDateMin
     */
    public LocalDate getDepartureDateMin() {
        return departureDateMin;
    }

    /**
     * @param departureDateMin the departureDateMin to set
     */
    public void setDepartureDateMin(LocalDate departureDateMin) {
        this.departureDateMin = departureDateMin;
    }

    /**
     * @return the arrivalDateMin
     */
    public LocalDate getArrivalDateMin() {
        return arrivalDateMin;
    }

    /**
     * @param arrivalDateMin the arrivalDateMin to set
     */
    public void setArrivalDateMin(LocalDate arrivalDateMin) {
        this.arrivalDateMin = arrivalDateMin;
    }

    /**
     * @return the backDateMin
     */
    public LocalDate getBackDateMin() {
        return backDateMin;
    }

    /**
     * @param backDateMin the backDateMin to set
     */
    public void setBackDateMin(LocalDate backDateMin) {
        this.backDateMin = backDateMin;
    }

    /**
     * @return the departureTimeMin
     */
    public LocalTime getDepartureTimeMin() {
        return departureTimeMin;
    }

    /**
     * @param departureTimeMin the departureTimeMin to set
     */
    public void setDepartureTimeMin(LocalTime departureTimeMin) {
        this.departureTimeMin = departureTimeMin;
    }

    /**
     * @return the arrivalTimeMin
     */
    public LocalTime getArrivalTimeMin() {
        return arrivalTimeMin;
    }

    /**
     * @param arrivalTimeMin the arrivalTimeMin to set
     */
    public void setArrivalTimeMin(LocalTime arrivalTimeMin) {
        this.arrivalTimeMin = arrivalTimeMin;
    }

    /**
     * @return the backTimeMin
     */
    public LocalTime getBackTimeMin() {
        return backTimeMin;
    }

    /**
     * @param backTimeMin the backTimeMin to set
     */
    public void setBackTimeMin(LocalTime backTimeMin) {
        this.backTimeMin = backTimeMin;
    }

    /**
     * @return the departureDateMax
     */
    public LocalDate getDepartureDateMax() {
        return departureDateMax;
    }

    /**
     * @param departureDateMax the departureDateMax to set
     */
    public void setDepartureDateMax(LocalDate departureDateMax) {
        this.departureDateMax = departureDateMax;
    }

    /**
     * @return the arrivalDateMax
     */
    public LocalDate getArrivalDateMax() {
        return arrivalDateMax;
    }

    /**
     * @param arrivalDateMax the arrivalDateMax to set
     */
    public void setArrivalDateMax(LocalDate arrivalDateMax) {
        this.arrivalDateMax = arrivalDateMax;
    }

    /**
     * @return the backDateMax
     */
    public LocalDate getBackDateMax() {
        return backDateMax;
    }

    /**
     * @param backDateMax the backDateMax to set
     */
    public void setBackDateMax(LocalDate backDateMax) {
        this.backDateMax = backDateMax;
    }

    /**
     * @return the departureTimeMax
     */
    public LocalTime getDepartureTimeMax() {
        return departureTimeMax;
    }

    /**
     * @param departureTimeMax the departureTimeMax to set
     */
    public void setDepartureTimeMax(LocalTime departureTimeMax) {
        this.departureTimeMax = departureTimeMax;
    }

    /**
     * @return the arrivalTimeMax
     */
    public LocalTime getArrivalTimeMax() {
        return arrivalTimeMax;
    }

    /**
     * @param arrivalTimeMax the arrivalTimeMax to set
     */
    public void setArrivalTimeMax(LocalTime arrivalTimeMax) {
        this.arrivalTimeMax = arrivalTimeMax;
    }

    /**
     * @return the backTimeMax
     */
    public LocalTime getBackTimeMax() {
        return backTimeMax;
    }

    /**
     * @param backTimeMax the backTimeMax to set
     */
    public void setBackTimeMax(LocalTime backTimeMax) {
        this.backTimeMax = backTimeMax;
    }

    /**
     * @return the connectionDurationMin
     */
    public LocalTime getConnectionDurationMin() {
        return connectionDurationMin;
    }

    /**
     * @param connectionDurationMin the connectionDurationMin to set
     */
    public void setConnectionDurationMin(LocalTime connectionDurationMin) {
        this.connectionDurationMin = connectionDurationMin;
    }

    /**
     * @return the connectionDurationMax
     */
    public LocalTime getConnectionDurationMax() {
        return connectionDurationMax;
    }

    public String getProviderName() {
        return providerName;
    }

    public void setProviderName(String providerName) {
        this.providerName = providerName;
    }

    /**
     * @param connectionDurationMax the connectionDurationMax to set
     */
    public void setConnectionDurationMax(LocalTime connectionDurationMax) {
        this.connectionDurationMax = connectionDurationMax;
    }

    /**
     * @param company
     * @param flightType
     * @param travelType
     * @param departureLocation
     * @param arrivalLocation
     * @param fareMin
     * @param fareMax
     * @param flightDurationMin
     * @param flightDurationMax
     * @param aircraftType
     * @param departureDateMin
     * @param arrivalDateMin
     * @param backDateMin
     * @param departureTimeMin
     * @param arrivalTimeMin
     * @param backTimeMin
     * @param departureDateMax
     * @param arrivalDateMax
     * @param backDateMax
     * @param departureTimeMax
     * @param arrivalTimeMax
     * @param backTimeMax
     * @param connectionDurationMin
     * @param connectionDurationMax
     */
    public FlightCriteria(CompanyName company, FlightType flightType, TravelType travelType, String departureLocation,
                          String arrivalLocation, double fareMin, double fareMax, LocalTime flightDurationMin,
                          LocalTime flightDurationMax, String aircraftType, LocalDate departureDateMin,
                          LocalDate arrivalDateMin, LocalDate backDateMin, LocalTime departureTimeMin,
                          LocalTime arrivalTimeMin, LocalTime backTimeMin, LocalDate departureDateMax,
                          LocalDate arrivalDateMax, LocalDate backDateMax, LocalTime departureTimeMax,
                          LocalTime arrivalTimeMax, LocalTime backTimeMax, LocalTime connectionDurationMin,
                          LocalTime connectionDurationMax,String providerName) {
        super();
        this.company = company;
        this.flightType = flightType;
        this.travelType = travelType;
        this.departureLocation = departureLocation;
        this.arrivalLocation = arrivalLocation;
        this.fareMin = fareMin;
        this.fareMax = fareMax;
        this.flightDurationMin = flightDurationMin;
        this.flightDurationMax = flightDurationMax;
        this.aircraftType = aircraftType;
        this.departureDateMin = departureDateMin;
        this.arrivalDateMin = arrivalDateMin;
        this.backDateMin = backDateMin;
        this.departureTimeMin = departureTimeMin;
        this.arrivalTimeMin = arrivalTimeMin;
        this.backTimeMin = backTimeMin;
        this.departureDateMax = departureDateMax;
        this.arrivalDateMax = arrivalDateMax;
        this.backDateMax = backDateMax;
        this.departureTimeMax = departureTimeMax;
        this.arrivalTimeMax = arrivalTimeMax;
        this.backTimeMax = backTimeMax;
        this.connectionDurationMin = connectionDurationMin;
        this.connectionDurationMax = connectionDurationMax;
        this.providerName = providerName;
    }

    public FlightCriteria() {
        super();
    }
}
