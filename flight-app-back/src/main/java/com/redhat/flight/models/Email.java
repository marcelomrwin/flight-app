package com.redhat.flight.models;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class Email {
    private String address;
    private String password;
    private String object;
    private String content;

    public Email(String address, String object, String content) {
        super();
        this.address = address;
        this.object = object;
        this.content = content;
    }
}
