import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";

import { Pokemon } from "../types/Pokemon";
import { useApp } from "../context/AppContext";

export default function PokemonScreen({ navigation }: any) {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [carregando, setCarregando] = useState(true);

  const { temaEscuro } = useApp();

  useEffect(() => {
    async function buscarPokemons() {
      try {
        const ids = [1, 4, 7];

        const resultados = await Promise.all(
          ids.map(async (id) => {
            const resposta = await fetch(
              `https://pokeapi.co/api/v2/pokemon/${id}`
            );

            return await resposta.json();
          })
        );

        setPokemons(resultados);
      } catch (error) {
        console.log("Erro ao buscar Pokémon:", error);
      } finally {
        setCarregando(false);
      }
    }

    buscarPokemons();
  }, []);

  const fundo = temaEscuro ? "#121212" : "#f2f2f2";
  const corTexto = temaEscuro ? "#fff" : "#222";

  if (carregando) {
    return (
      <View style={[styles.container, { backgroundColor: fundo }]}>
        <ActivityIndicator size="large" color="#e3350d" />
        <Text style={{ color: corTexto }}>Carregando Pokémon...</Text>
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: fundo }]}>
      <Text style={[styles.titulo, { color: corTexto }]}>
        Pokédex
      </Text>

      <FlatList
        data={pokemons}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              navigation.navigate("Detalhes", { pokemon: item })
            }
          >
            <Image
              source={{
                uri: item.sprites.other["official-artwork"].front_default,
              }}
              style={styles.imagem}
            />

            <Text style={styles.nome}>
              {item.name.toUpperCase()}
            </Text>

            <Text style={styles.numero}>
              #{item.id.toString().padStart(3, "0")}
            </Text>

            <Text style={styles.verMais}>
              Ver detalhes
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    alignItems: "center",
    elevation: 4,
  },

  imagem: {
    width: 130,
    height: 130,
  },

  nome: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },

  numero: {
    color: "#777",
    marginTop: 3,
  },

  verMais: {
    backgroundColor: "#e3350d",
    color: "#fff",
    padding: 8,
    borderRadius: 8,
    marginTop: 10,
    overflow: "hidden",
  },
});