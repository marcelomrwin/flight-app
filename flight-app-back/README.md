# Getting Started

### Reference Documentation

For further reference, please consider the following sections:

* [Official Apache Maven documentation](https://maven.apache.org/guides/index.html)
* [Spring Boot Maven Plugin Reference Guide](https://docs.spring.io/spring-boot/docs/3.3.0/maven-plugin/reference/html/)
* [Create an OCI image](https://docs.spring.io/spring-boot/docs/3.3.0/maven-plugin/reference/html/#build-image)
* [Spring Boot Actuator](https://docs.spring.io/spring-boot/docs/3.3.0/reference/htmlsingle/index.html#actuator)
* [Spring Boot DevTools](https://docs.spring.io/spring-boot/docs/3.3.0/reference/htmlsingle/index.html#using.devtools)
* [Spring Web](https://docs.spring.io/spring-boot/docs/3.3.0/reference/htmlsingle/index.html#web)

### Guides

The following guides illustrate how to use some features concretely:

* [Building a RESTful Web Service with Spring Boot Actuator](https://spring.io/guides/gs/actuator-service/)
* [Building a RESTful Web Service](https://spring.io/guides/gs/rest-service/)
* [Serving Web Content with Spring MVC](https://spring.io/guides/gs/serving-web-content/)
* [Building REST services with Spring](https://spring.io/guides/tutorials/rest/)

### Test REST
```shell
http -f POST :8081/flight-webservices/api/v1.0/fake
curl -X POST http://localhost:8081/flight-webservices/api/v1.0/fake

http -f POST :8081/flight-webservices/api/v1.0/flights Content-Type:application/json < src/test/resources/empty-criteria.json
http -f POST :8081/flight-webservices/api/v1.0/flights/syntheseCompanyFlights Content-Type:application/json < src/test/resources/syntheseCompanyFlights.json
http -f POST :8081/flight-webservices/api/v1.0/flights/syntheseTripFlights Content-Type:application/json < src/test/resources/syntheseTripFlights.json
```