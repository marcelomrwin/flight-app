package com.redhat.flight.dto;


import com.redhat.flight.enumerations.CompanyName;

public class SyntheseCompanyDto {
    private CompanyName companyName;
    private Long nbFlights;

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
     * @param companyName
     * @param nbFlights
     */
    public SyntheseCompanyDto(CompanyName companyName, Long nbFlights) {
        super();
        this.companyName = companyName;
        this.nbFlights = nbFlights;
    }

    /**
     *
     */
    public SyntheseCompanyDto() {
        super();
        // TODO Auto-generated constructor stub
    }

}
