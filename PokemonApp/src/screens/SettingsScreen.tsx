import React from "react";
import {
  View,
  Text,
  Switch,
  StyleSheet,
} from "react-native";

import { useApp } from "../context/AppContext";

export default function SettingsScreen() {
  const { temaEscuro, alternarTema } = useApp();

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: temaEscuro ? "#121212" : "#f2f2f2" },
      ]}
    >
      <Text
        style={[
          styles.titulo,
          { color: temaEscuro ? "#fff" : "#222" },
        ]}
      >
        Configurações
      </Text>

      <View style={styles.opcao}>
        <Text style={styles.texto}>
          Modo escuro
        </Text>

        <Switch
          value={temaEscuro}
          onValueChange={alternarTema}
          trackColor={{ false: "#ccc", true: "#e3350d" }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },

  opcao: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  texto: {
    fontSize: 17,
    color: "#222",
  },
});