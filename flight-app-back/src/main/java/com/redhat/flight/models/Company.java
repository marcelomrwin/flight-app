package com.redhat.flight.models;

import com.redhat.flight.enumerations.CompanyName;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Company {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int idCompany;

    @Column(name = "company_name",columnDefinition = "varchar(200)")
    @Enumerated(EnumType.STRING)
    private CompanyName companyName;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "company")
    private Set<Flight> flights;

    @ElementCollection
    @CollectionTable(name = "cabin_details", joinColumns = @JoinColumn(name = "company_id"))
    private Set<CabinDetail> cabinDetails;

    @ElementCollection
    @CollectionTable(name = "comforts", joinColumns = @JoinColumn(name = "company_id"))
    private Set<String> comforts;

    @ElementCollection
    @CollectionTable(name = "inflight_infos", joinColumns = @JoinColumn(name = "company_id"))
    private Set<InflightInfo> inflightInfos;
}
