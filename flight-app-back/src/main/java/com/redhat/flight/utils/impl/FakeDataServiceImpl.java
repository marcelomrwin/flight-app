package com.redhat.flight.utils.impl;

import com.github.javafaker.Faker;
import com.redhat.flight.config.TheUserDetailsService;
import com.redhat.flight.dto.UserDto;
import com.redhat.flight.enumerations.CabinClass;
import com.redhat.flight.enumerations.CompanyName;
import com.redhat.flight.enumerations.FlightType;
import com.redhat.flight.enumerations.TravelType;
import com.redhat.flight.models.*;
import com.redhat.flight.repository.CompanyRepository;
import com.redhat.flight.repository.FlightRepository;
import com.redhat.flight.repository.UserRepository;
import com.redhat.flight.service.FlightProviderService;
import com.redhat.flight.service.FlightService;
import com.redhat.flight.utils.FakeDataService;
import jakarta.transaction.Transactional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Time;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.*;
import java.util.concurrent.ThreadLocalRandom;

@Service
@Transactional
public class FakeDataServiceImpl implements FakeDataService {
    private static final Faker faker = new Faker();
    private static Logger logger = LoggerFactory.getLogger(FakeDataServiceImpl.class);
    @Autowired
    private FlightService flightService;

    @Autowired
    private CompanyRepository companyRepository;

    @Autowired
    private FlightRepository flightRepository;

    @Autowired
    private TheUserDetailsService theUserDetailsService;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private FlightProviderService flightProviderService;

    private static final List<String> titles = List.of("air-journal_TAP-Portugal-A330-900", "A380", "A330_200_1", "Business Class dining", "Onboard connectivity", "Headsets", "Inflight services", "Economy seat", "Business Class", "Economy Class dining", "Our Economy Class", "turista_entretenimiento", "Meal service equipment", "Air France Play app", "Unwind with fellow globalistas", "Entertainment", "Onboard Wi-Fi", "air-journal_TAP-Portugal-A330-200", "Air filtration systems", "Tailored exclusively for you", "The perfect temptation", "Your private sanctuary", "In-flight services", "Comfortable and hygienic cabin environment", "Linen and blankets", "Business seat", "Fine wine to complement your meal", "Qsuite - First in Business", "entertainment-tap", "tap confort", "ORYX ONE PLAY Wireless streaming on board", "First Class", "Economy Class", "First Class dining", "tap-air-portugal-crew", "ice TV live");

    // Random number generator
    private static final Random random = new Random();

    // Generate random LocalDate between two dates
    private static LocalDate generateRandomLocalDate(LocalDate startDate, LocalDate endDate) {
        long startEpochDay = startDate.toEpochDay();
        long endEpochDay = endDate.toEpochDay();
        long randomEpochDay = ThreadLocalRandom.current().nextLong(startEpochDay, endEpochDay);
        return LocalDate.ofEpochDay(randomEpochDay);
    }

    // Generate random LocalTime within a day
    private static LocalTime generateRandomLocalTime() {
        int hour = random.nextInt(24);
        int minute = random.nextInt(60);
        return LocalTime.of(hour, minute);
    }

    // Generate random flight duration
    private static LocalTime generateRandomFlightDuration() {
        int hour = random.nextInt(12); // Up to 12 hours
        int minute = random.nextInt(60);
        return LocalTime.of(hour, minute);
    }

    // Generate random connection duration
    private static LocalTime generateRandomConnectionDuration() {
        int minute = random.nextInt(360); // Up to 6 hours (360 minutes)
        return LocalTime.of(0, minute);
    }

    // Generate random fare
    private static double generateRandomFare() {
        return 100 + (3000 - 100) * random.nextDouble(); // Fare between 100 and 3000
    }

    public static CabinDetail generateCabinDetail() {
        CabinDetail cabinDetail = new CabinDetail();
        cabinDetail.setCabinClass(CabinClass.values()[faker.random().nextInt(CabinClass.values().length)]);
        cabinDetail.setBaggage(faker.lorem().sentence());
        cabinDetail.setCancellation(faker.lorem().sentence());
        cabinDetail.setRebooking(faker.lorem().sentence());
        cabinDetail.setRefund(faker.lorem().sentence());
        cabinDetail.setFare(faker.number().randomDouble(2, 50, 500));
        return cabinDetail;
    }

    public static Company generateCompany(CompanyName companyName) {
        Company company = new Company();
        company.setCompanyName(companyName);
//        company.setFlights(generateFlights(company));
        company.setCabinDetails(generateCabinDetails());
//        company.setComforts();
        company.setInflightInfos(generateInflightInfos());
        return company;
    }

    public static Flight generateFlight(Company company, FlightProvider provider) {
        Flight flight = new Flight();
        flight.setCompany(company);
        flight.setProviderName(provider.getProviderName());
        flight.setFlightType(FlightType.values()[faker.random().nextInt(FlightType.values().length)]);
        flight.setTravelType(TravelType.values()[faker.random().nextInt(TravelType.values().length)]);

        flight.setDepartureLocation(faker.address().city());
        flight.setArrivalLocation(faker.address().city());

        flight.setDepartureDate(LocalDate.now().plusDays(faker.number().numberBetween(1, 30)));

        {
            long longTime = -1;
            do {
                LocalTime localTime = LocalTime.now().plusHours(faker.number().numberBetween(1, 10));
                Time sqlTime = Time.valueOf(localTime);
                longTime = sqlTime.getTime();
                flight.setDepartureTime(localTime);
            } while (longTime < 0);
        }

        flight.setArrivalDate(flight.getDepartureDate().plusDays(faker.number().numberBetween(1, 10)));

        {
            long longTime = -1;
            do {
                LocalTime localTime = flight.getDepartureTime().plusHours(faker.number().numberBetween(1, 10));
                Time sqlTime = Time.valueOf(localTime);
                longTime = sqlTime.getTime();
                flight.setArrivalTime(localTime);
            } while (longTime < 0);
        }

        {
            long longTime = -1;
            do {
                LocalTime localTime = LocalTime.of(faker.number().numberBetween(0, 5), faker.number().numberBetween(0, 59));
                Time sqlTime = Time.valueOf(localTime);
                longTime = sqlTime.getTime();
                flight.setConnectionDuration(localTime);
            } while (longTime < 0);
        }

        {
            long longTime = -1;
            do {
                LocalTime localTime = LocalTime.of(faker.number().numberBetween(0, 5), faker.number().numberBetween(0, 59));
                Time sqlTime = Time.valueOf(localTime);
                longTime = sqlTime.getTime();
                flight.setFlightDuration(localTime);
            } while (longTime < 0);
        }

        if (flight.getTravelType() == TravelType.ROUNDTRIP) {
            flight.setBackDate(flight.getArrivalDate().plusDays(faker.number().numberBetween(1, 10)));
            long longTime = -1;
            do {
                LocalTime backTime = flight.getArrivalTime().plusHours(faker.number().numberBetween(1, 12));
                Time sqlTime = Time.valueOf(backTime);
                longTime = sqlTime.getTime();
                flight.setBackTime(backTime);
            } while (longTime < 0);
        }
        flight.setAircraftType(faker.aviation().aircraft());

        return flight;
    }

    public static InflightInfo generateInflightInfo() {
        InflightInfo inflightInfo = new InflightInfo();
        int titleIndex = faker.number().numberBetween(0, titles.size());
        logger.debug("titleIndex is {} with value {}", titleIndex, titles.get(titleIndex));
        inflightInfo.setTitle(titles.get(titleIndex));
        String description = faker.lorem().paragraph();
        if (description.length() > 255) description = description.substring(0, 255);
        inflightInfo.setDescription(description);
        return inflightInfo;
    }

    public static LoginRequest generateLoginRequest() {
        LoginRequest loginRequest = new LoginRequest();
        loginRequest.setUsername(faker.internet().emailAddress());
        loginRequest.setPassword(faker.internet().password());
        return loginRequest;
    }

    private static Set<Flight> generateFlights(Company company, List<FlightProvider> flightProviders) {
        Set<Flight> flights = new HashSet<>();
        for (int i = 0; i < faker.number().numberBetween(1, 5); i++) {
            FlightProvider provider = flightProviders.get(faker.number().numberBetween(0, flightProviders.size()));
            flights.add(generateFlight(company,provider));
        }
        return flights;
    }

    private static Set<CabinDetail> generateCabinDetails() {
        Set<CabinDetail> cabinDetails = new HashSet<>();
        for (int i = 0; i < faker.number().numberBetween(1, 3); i++) {
            cabinDetails.add(generateCabinDetail());
        }
        return cabinDetails;
    }

    private static Set<InflightInfo> generateInflightInfos() {
        Set<InflightInfo> inflightInfos = new HashSet<>();
        for (int i = 0; i < faker.number().numberBetween(1, 3); i++) {
            inflightInfos.add(generateInflightInfo());
        }
        return inflightInfos;
    }

    public static UserDto generateUser(String userName) {
        UserDto user = new UserDto();
        user.setUsername(userName); //faker.name().username()
        user.setEmail(faker.internet().emailAddress());
        user.setPassword("P@ssw0rd1!");
        user.setConfpassword("P@ssw0rd1!");
        return user;
    }

    public static FlightProvider generateFlightProvider() {
        FlightProvider flightProvider = new FlightProvider();
        flightProvider.setProviderName(faker.app().name());
        flightProvider.setProviderQueues(generateProviderQueues());
        return flightProvider;
    }

    public static List<ProviderQueue> generateProviderQueues() {
        List<ProviderQueue> providerQueueList = new ArrayList<>();
        for (int i = 0; i < faker.number().numberBetween(1, 3); i++) {
            providerQueueList.add(generateProviderQueue());
        }
        return providerQueueList;
    }

    public static ProviderQueue generateProviderQueue() {
        ProviderQueue providerQueue = new ProviderQueue();
        providerQueue.setQueueDescription(faker.chuckNorris().fact());
        providerQueue.setQueueName(faker.funnyName().name().toUpperCase().replace(" ", "_"));
        providerQueue.setSubscriptionEndpoint(faker.internet().url());
        return providerQueue;
    }

    @Override
    public void generateFakeData() {
        List<FlightProvider> flightProviders = new ArrayList<>();
        //Flight providers
        for (int i = 0; i < faker.number().numberBetween(1, 5); i++) {
            FlightProvider flightProvider = generateFlightProvider();
            flightProviders.add(flightProviderService.addFlightProvider(flightProvider));
        }

        //Companies and Flights
        List<Company> companies = List.of(generateCompany(CompanyName.TAP), generateCompany(CompanyName.AIRFRANCE), generateCompany(CompanyName.EMIRATES), generateCompany(CompanyName.IBERIA), generateCompany(CompanyName.QATARAIRWAYS));
        for (Company company : companies) {

            company = companyRepository.saveAndFlush(company);

            Set<Flight> flights = generateFlights(company,flightProviders);
            for (Flight flight : flights) {
                flight = flightRepository.saveAndFlush(flight);
                logger.debug(flight.toString());
            }

            company.setFlights(flights);
            companyRepository.save(company);
        }

        //User
        UserDto userDto = generateUser("masales"); //FIXME I still find it strange to use DTO for entities, but I don't have time to fix all that now

        UserDao userDao = theUserDetailsService.save(userDto);
        userDao.setEnabled(true);
        userRepository.save(userDao);


    }

    @Override
    public void regenerateFakeData() {
        flightRepository.deleteAll();
        List<Company> companies = companyRepository.findAll();
        for (Company company : companies) {
            company.setFlights(null);
            companyRepository.save(company);

            List<FlightProvider> flightProviders = flightProviderService.getAllFlightProviders();

            Set<Flight> flights = generateFlights(company, flightProviders);
            for (Flight flight : flights) {
                flight = flightRepository.saveAndFlush(flight);
            }

            company.setFlights(flights);
            companyRepository.save(company);
        }
    }
}
