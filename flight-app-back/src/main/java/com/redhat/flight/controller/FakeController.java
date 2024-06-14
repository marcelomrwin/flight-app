package com.redhat.flight.controller;

import com.redhat.flight.utils.FakeDataService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequestMapping("flight-webservices/api/v1.0/fake")
public class FakeController {

    @Autowired
    FakeDataService fakeDataService;

    private Logger logger = LoggerFactory.getLogger(getClass());

    @PostMapping
    public ResponseEntity regenerateFakeData() {
        logger.info("Request to generate fake data");
        fakeDataService.regenerateFakeData();
        logger.info("fake data generated");
        return ResponseEntity.ok().build();
    }
}
