
import React, { useState } from "react";

import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);

  function handleLogin() {
    if (!email || !senha) {
      console.log("Preencha todos os campos!");
      return;
    }

    console.log("E-mail:", email);
    console.log("Login realizado!");
  }

  return (
    <LinearGradient
      colors={["#080817", "#11152F", "#211044", "#09091B"]}
      style={styles.background}
    >
      <StatusBar barStyle="light-content" />

      <SafeAreaView style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scroll}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >

          <View style={styles.circleTop} />
          <View style={styles.circleBottom} />

          <View style={styles.header}>

            <Image
              source={require("../Images/logo_vibe.png")}
              style={styles.logoImage}
              resizeMode="contain"
            />

            <Text style={styles.subtitle}>
              Seu mundo, suas conexões.
            </Text>

          </View>

          <View style={styles.card}>

            <Text style={styles.title}>
              Bem-vindo!
            </Text>

            <Text style={styles.description}>
              Entre na sua conta para continuar.
            </Text>

            <Text style={styles.label}>
              E-mail
            </Text>

            <View style={styles.inputContainer}>
              <Ionicons
                name="mail-outline"
                size={23}
                color="#A98DCE"
              />

              <TextInput
                style={styles.input}
                placeholder="Digite seu e-mail"
                placeholderTextColor="#88839A"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>

            <Text style={styles.label}>
              Senha
            </Text>

            <View style={styles.inputContainer}>
              <Ionicons
                name="lock-closed-outline"
                size={23}
                color="#A98DCE"
              />

              <TextInput
                style={styles.input}
                placeholder="Digite sua senha"
                placeholderTextColor="#88839A"
                value={senha}
                onChangeText={setSenha}
                secureTextEntry={!mostrarSenha}
              />

              <TouchableOpacity
                onPress={() => setMostrarSenha(!mostrarSenha)}
              >
                <Ionicons
                  name={
                    mostrarSenha
                      ? "eye-off-outline"
                      : "eye-outline"
                  }
                  size={23}
                  color="#A98DCE"
                />
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={styles.forgot}
              onPress={() => console.log("Recuperar senha")}
            >
              <Text style={styles.forgotText}>
                Esqueceu sua senha?
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={handleLogin}
            >
              <LinearGradient
                colors={["#6425D9", "#9B35E8"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.button}
              >
                <Text style={styles.buttonText}>
                  Entrar
                </Text>
              </LinearGradient>
            </TouchableOpacity>

            <View style={styles.divider} />

            <View style={styles.register}>
              <Text style={styles.registerText}>
                Ainda não tem conta?
              </Text>

              <TouchableOpacity
                onPress={() => console.log("Criar conta")}
              >
                <Text style={styles.registerLink}>
                  {" "}Criar conta
                </Text>
              </TouchableOpacity>
            </View>

          </View>

          <Text style={styles.footer}>
            Vibe © 2026 - Todos os direitos reservados.
          </Text>

        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({

  background: {
    flex: 1,
  },

  container: {
    flex: 1,
  },

  scroll: {
    flexGrow: 1,
    justifyContent: "center",
    paddingHorizontal: 25,
    paddingVertical: 35,
  },

  // DECORAÇÃO

  circleTop: {
    position: "absolute",
    width: 260,
    height: 260,
    borderRadius: 150,
    backgroundColor: "#7028C8",
    opacity: 0.16,
    top: -130,
    right: -120,
  },

  circleBottom: {
    position: "absolute",
    width: 240,
    height: 240,
    borderRadius: 150,
    backgroundColor: "#9B35E8",
    opacity: 0.13,
    bottom: -120,
    left: -120,
  },

  // CABEÇALHO

  header: {
    alignItems: "center",
    marginBottom: 40,
  },

  logoImage: {
    width: 220,
    height: 100,
    marginBottom: 8,
  },

  subtitle: {
    color: "#D0C7E3",
    fontSize: 16,
    marginTop: 5,
  },

  // CARD

  card: {
    backgroundColor: "rgba(25, 23, 48, 0.94)",
    borderWidth: 1,
    borderColor: "#39305B",
    borderRadius: 25,
    padding: 25,
    paddingVertical: 30,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 27,
    fontWeight: "bold",
    marginBottom: 8,
  },

  description: {
    color: "#A9A3BA",
    fontSize: 14,
    marginBottom: 30,
  },

  // INPUTS

  label: {
    color: "#E5DDF2",
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 10,
  },

  inputContainer: {
    height: 58,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: "#42365F",
    backgroundColor: "#211C38",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 22,
  },

  input: {
    flex: 1,
    color: "#FFFFFF",
    fontSize: 15,
    marginLeft: 12,
  },

  // RECUPERAR SENHA

  forgot: {
    alignItems: "flex-end",
    marginTop: -8,
    marginBottom: 28,
  },

  forgotText: {
    color: "#B66AFF",
    fontSize: 14,
    fontWeight: "600",
  },

  // BOTÃO

  button: {
    height: 58,
    borderRadius: 13,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },

  // CADASTRO

  divider: {
    height: 1,
    backgroundColor: "#39334D",
    marginTop: 30,
    marginBottom: 25,
  },

  register: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
  },

  registerText: {
    color: "#BEB7CE",
    fontSize: 14,
  },

  registerLink: {
    color: "#B66AFF",
    fontSize: 14,
    fontWeight: "bold",
  },

  // RODAPÉ

  footer: {
    color: "#77718B",
    fontSize: 11,
    textAlign: "center",
    marginTop: 25,
  },

});
