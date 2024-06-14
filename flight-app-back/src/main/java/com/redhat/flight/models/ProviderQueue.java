package com.redhat.flight.models;

import jakarta.persistence.Embeddable;
import lombok.Data;

@Embeddable
@Data
public class ProviderQueue {
    private String queueName;
    private String queueDescription;
    private String subscriptionEndpoint;
}
