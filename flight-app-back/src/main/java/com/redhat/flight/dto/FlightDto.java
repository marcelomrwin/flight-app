package com.redhat.flight.dto;

import com.redhat.flight.enumerations.CompanyName;
import com.redhat.flight.enumerations.FlightType;
import com.redhat.flight.enumerations.TravelType;
import com.redhat.flight.models.CabinDetail;
import com.redhat.flight.models.InflightInfo;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Set;


public class FlightDto {
    private Long idFlight;
    private CompanyName companyName;
    private FlightType flightType;
    private TravelType travelType;
    private LocalDate departureDate;
    private LocalTime departureTime;
    private LocalDate arrivalDate;
    private LocalTime arrivalTime;
    private LocalDate backDate;
    private LocalTime backTime;
    private String departureLocation;
    private String arrivalLocation;
    private LocalTime flightDuration;
    private LocalTime connectionDuration;
    private String aircraftType;
    private Set<CabinDetail> cabinDetails;
    private Set<String> comforts;
    private Set<InflightInfo> inflightInfos;
    private String providerName;

    /**
     * @return the idFlight
     */
    public Long getIdFlight() {
        return idFlight;
    }

    /**
     * @param idFlight the idFlight to set
     */
    public void setIdFlight(Long idFlight) {
        this.idFlight = idFlight;
    }

    /**
     * @return the companyName
     */
    public CompanyName getCompanyName() {
        return companyName;
    }

    /**
     * @param companyName the companyName to set
     */
    public void setCompanyName(CompanyName companyName) {
        this.companyName = companyName;
    }

    /**
     * @return the cabinDetails
     */
    public Set<CabinDetail> getCabinDetails() {
        return cabinDetails;
    }

    /**
     * @param cabinDetails the cabinDetails to set
     */
    public void setCabinDetails(Set<CabinDetail> cabinDetails) {
        this.cabinDetails = cabinDetails;
    }

    /**
     * @return the comforts
     */
    public Set<String> getComforts() {
        return comforts;
    }

    /**
     * @param comforts the comforts to set
     */
    public void setComforts(Set<String> comforts) {
        this.comforts = comforts;
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
     * @return the departureDate
     */
    public LocalDate getDepartureDate() {
        return departureDate;
    }

    /**
     * @param departureDate the departureDate to set
     */
    public void setDepartureDate(LocalDate departureDate) {
        this.departureDate = departureDate;
    }

    /**
     * @return the arrivalDate
     */
    public LocalDate getArrivalDate() {
        return arrivalDate;
    }

    /**
     * @param arrivalDate the arrivalDate to set
     */
    public void setArrivalDate(LocalDate arrivalDate) {
        this.arrivalDate = arrivalDate;
    }

    /**
     * @return the backDate
     */
    public LocalDate getBackDate() {
        return backDate;
    }

    /**
     * @param backDate the backDate to set
     */
    public void setBackDate(LocalDate backDate) {
        this.backDate = backDate;
    }

    /**
     * @return the departureTime
     */
    public LocalTime getDepartureTime() {
        return departureTime;
    }

    /**
     * @param departureTime the departureTime to set
     */
    public void setDepartureTime(LocalTime departureTime) {
        this.departureTime = departureTime;
    }

    /**
     * @return the arrivalTime
     */
    public LocalTime getArrivalTime() {
        return arrivalTime;
    }

    /**
     * @param arrivalTime the arrivalTime to set
     */
    public void setArrivalTime(LocalTime arrivalTime) {
        this.arrivalTime = arrivalTime;
    }

    /**
     * @return the backTime
     */
    public LocalTime getBackTime() {
        return backTime;
    }

    /**
     * @param backTime the backTime to set
     */
    public void setBackTime(LocalTime backTime) {
        this.backTime = backTime;
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
     * @return the flightDuration
     */
    public LocalTime getFlightDuration() {
        return flightDuration;
    }

    /**
     * @param flightDuration the flightDuration to set
     */
    public void setFlightDuration(LocalTime flightDuration) {
        this.flightDuration = flightDuration;
    }

    /**
     * @return the connectionDuration
     */
    public LocalTime getConnectionDuration() {
        return connectionDuration;
    }

    /**
     * @param connectionDuration the connectionDuration to set
     */
    public void setConnectionDuration(LocalTime connectionDuration) {
        this.connectionDuration = connectionDuration;
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
     * @return the inflightInfos
     */
    public Set<InflightInfo> getInflightInfos() {
        return inflightInfos;
    }

    /**
     * @param inflightInfos the inflightInfos to set
     */
    public void setInflightInfos(Set<InflightInfo> inflightInfos) {
        this.inflightInfos = inflightInfos;
    }


    /**
     * @param idFlight
     * @param companyName
     * @param flightType
     * @param travelType
     * @param departureDate
     * @param departureTime
     * @param arrivalDate
     * @param arrivalTime
     * @param backDate
     * @param backTime
     * @param departureLocation
     * @param arrivalLocation
     * @param flightDuration
     * @param connectionDuration
     * @param aircraftType
     * @param cabinDetails
     * @param comforts
     * @param inflightInfos
     */
    public FlightDto(Long idFlight, CompanyName companyName, FlightType flightType, TravelType travelType,
                     LocalDate departureDate, LocalTime departureTime, LocalDate arrivalDate, LocalTime arrivalTime,
                     LocalDate backDate, LocalTime backTime, String departureLocation, String arrivalLocation,
                     LocalTime flightDuration, LocalTime connectionDuration, String aircraftType, Set<CabinDetail> cabinDetails,
                     Set<String> comforts, Set<InflightInfo> inflightInfos, String providerName) {
        super();
        this.idFlight = idFlight;
        this.companyName = companyName;
        this.flightType = flightType;
        this.travelType = travelType;
        this.departureDate = departureDate;
        this.departureTime = departureTime;
        this.arrivalDate = arrivalDate;
        this.arrivalTime = arrivalTime;
        this.backDate = backDate;
        this.backTime = backTime;
        this.departureLocation = departureLocation;
        this.arrivalLocation = arrivalLocation;
        this.flightDuration = flightDuration;
        this.connectionDuration = connectionDuration;
        this.aircraftType = aircraftType;
        this.cabinDetails = cabinDetails;
        this.comforts = comforts;
        this.inflightInfos = inflightInfos;
        this.providerName = providerName;
    }

    public String getProviderName() {
        return providerName;
    }

    public void setProviderName(String providerName) {
        this.providerName = providerName;
    }

    /**
     *
     */
    public FlightDto() {
        super();
        // TODO Auto-generated constructor stub
    }


}
