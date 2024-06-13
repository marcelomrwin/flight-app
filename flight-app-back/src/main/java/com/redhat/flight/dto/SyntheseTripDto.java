package com.redhat.flight.dto;


import com.redhat.flight.enumerations.TravelType;

public class SyntheseTripDto {
    private TravelType travelType;
    private Long nbFlights;

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
     * @param travelType
     * @param nbFlights
     */
    public SyntheseTripDto(TravelType travelType, Long nbFlights) {
        super();
        this.travelType = travelType;
        this.nbFlights = nbFlights;
    }

    /**
     * @return the nbFlights
     */
    public Long getNbFlights() {
        return nbFlights;
    }

    /**
     * @param nbFlights the nbFlights to set
     */
    public void setNbFlights(Long nbFlights) {
        this.nbFlights = nbFlights;
    }

    /**
     *
     */
    public SyntheseTripDto() {
        super();
        // TODO Auto-generated constructor stub
    }

}
