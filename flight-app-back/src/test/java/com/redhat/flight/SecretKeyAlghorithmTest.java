package com.redhat.flight;

import io.jsonwebtoken.SignatureAlgorithm;
import org.junit.jupiter.api.Test;

import javax.crypto.KeyGenerator;
import javax.crypto.SecretKey;
import java.security.NoSuchAlgorithmException;
import java.util.Base64;

public class SecretKeyAlghorithmTest {

    @Test
    public void generateValidSigKey() throws NoSuchAlgorithmException {
        SignatureAlgorithm signatureAlgorithm = SignatureAlgorithm.HS512;
        KeyGenerator keyGen = KeyGenerator.getInstance(signatureAlgorithm.getJcaName());
        keyGen.init(signatureAlgorithm.getMinKeyLength()); // Tamanho da chave
        SecretKey secretKey = keyGen.generateKey();
        String encodedKey = encodeSecretKey(secretKey);
        System.out.println("Chave Secreta em Texto Plano: " + encodedKey);
    }

    public static String encodeSecretKey(SecretKey secretKey) {
        // Obter os bytes da chave secreta
        byte[] keyBytes = secretKey.getEncoded();

        // Codificar os bytes em uma string Base64
        String encodedKey = Base64.getEncoder().encodeToString(keyBytes);
        return encodedKey;
    }
}
