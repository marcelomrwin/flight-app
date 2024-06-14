package com.redhat.flight;

import com.redhat.flight.enumerations.CabinClass;
import com.redhat.flight.enumerations.CompanyName;
import com.redhat.flight.enumerations.FlightType;
import com.redhat.flight.enumerations.TravelType;
import com.redhat.flight.models.*;
import org.junit.jupiter.api.Test;

import java.io.PrintWriter;
import java.io.StringWriter;
import java.lang.reflect.Field;
import java.util.List;

public class GenerateModelsTest {
    @Test
    void generateModelsTest() {
        List<Class<?>> modelsClasses = List.of(Bookmark.class, CabinDetail.class, Company.class, Email.class, Flight.class, FlightCriteria.class, InflightInfo.class, LoginRequest.class, LoginResponse.class, PasswordResetToken.class, SynthesisCriteria.class, UserDao.class, VerificationToken.class, CabinClass.class, CompanyName.class, FlightType.class, TravelType.class);
        StringWriter sw = new StringWriter();
        PrintWriter pw = new PrintWriter(sw);
        for (Class<?> modelClass : modelsClasses) {
            pw.println("package "+modelClass.getPackageName());
            pw.println(modelClass.toGenericString() +" {");
            Field[] declaredFields = modelClass.getDeclaredFields();
            for (Field field : declaredFields) {
                pw.println(field.getType().getName()+ " "+ field.getName()+";");
            }
            pw.println("}\n");
            pw.flush();
        }

        System.out.println(sw.toString());
    }
}
