package com.redhat.flight;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import java.io.File;
import java.io.PrintWriter;
import java.io.StringWriter;

public class ListImagesTest {
    @Test
    public void generateImageNames(){
        File imgsDir = new File("src/main/resources/static/assets/imgs");
        Assertions.assertTrue(imgsDir.exists());
        Assertions.assertTrue(imgsDir.isDirectory());
        File[] images = imgsDir.listFiles(f -> f.isFile() && f.getName().endsWith(".jpg"));
        Assertions.assertNotNull(images);
        Assertions.assertTrue(images.length > 0);
        StringWriter sw = new StringWriter();
        try(PrintWriter pw = new PrintWriter(sw)){
            pw.print("private static final List<String> titles = List.of(");
            for (File image : images) {
                pw.print("\"");
                pw.print(image.getName().substring(0, image.getName().length() - 4));
                pw.print("\",");
            }
            pw.println(");");
        }
        System.out.println(sw.toString());
    }
}
