package com.redhat.flight.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class SynthesisCriteria {
    private LocalDate departureDateMin;
    private LocalDate departureDateMax;
}
