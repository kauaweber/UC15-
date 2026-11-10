import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { Pokemon } from "../types/Pokemon";
import { useApp } from "../context/AppContext";

export default function DetailsScreen({ route }: any) {
  const pokemon: Pokemon = route.params.pokemon;

  const {
    favoritos,
    adicionarFavorito,
    removerFavorito,
    temaEscuro,
  } = useApp();

  const favorito = favoritos.some((p) => p.id === pokemon.id);

  const fundo = temaEscuro ? "#121212" : "#f2f2f2";
  const texto = temaEscuro ? "#fff" : "#222";

  return (
    <View style={[styles.container, { backgroundColor: fundo }]}>
      <Text style={[styles.nome, { color: texto }]}>
        {pokemon.name.toUpperCase()}
      </Text>

      <Image
        source={{
          uri: pokemon.sprites.other["official-artwork"].front_default,
        }}
        style={styles.imagem}
      />

      <View style={styles.informacoes}>
        <Text style={styles.info}>
          Tipo: {pokemon.types.map((t) => t.type.name).join(", ")}
        </Text>

        <Text style={styles.info}>
          Altura: {pokemon.height / 10} m
        </Text>

        <Text style={styles.info}>
          Peso: {pokemon.weight / 10} kg
        </Text>

        <Text style={styles.info}>
          Número: #{pokemon.id}
        </Text>
      </View>

      <TouchableOpacity
        style={styles.botao}
        onPress={() =>
          favorito
            ? removerFavorito(pokemon.id)
            : adicionarFavorito(pokemon)
        }
      >
        <Text style={styles.botaoTexto}>
          {favorito ? "Remover dos favoritos" : "Adicionar aos favoritos"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },

  nome: {
    fontSize: 27,
    fontWeight: "bold",
    marginTop: 15,
  },

  imagem: {
    width: 220,
    height: 220,
  },

  informacoes: {
    backgroundColor: "#fff",
    padding: 20,
    width: "100%",
    borderRadius: 15,
    marginTop: 10,
  },

  info: {
    fontSize: 17,
    color: "#333",
    marginBottom: 10,
  },

  botao: {
    backgroundColor: "#e3350d",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },

  botaoTexto: {
    color: "#fff",
    fontWeight: "bold",
  },
});