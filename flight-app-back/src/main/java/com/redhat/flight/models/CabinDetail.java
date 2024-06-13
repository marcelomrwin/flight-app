package com.redhat.flight.models;

import com.redhat.flight.enumerations.CabinClass;
import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Embeddable
public class CabinDetail {
    @Column(columnDefinition = "varchar(150)")
    @Enumerated(EnumType.STRING)
    private CabinClass cabinClass;
    private String baggage;
    private String cancellation;
    private String rebooking;
    private String refund;
    private Double fare;
}
