import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { useApp } from "../context/AppContext";

export default function FavoritesScreen({ navigation }: any) {
  const { favoritos, removerFavorito, temaEscuro } = useApp();

  const fundo = temaEscuro ? "#121212" : "#f2f2f2";
  const texto = temaEscuro ? "#fff" : "#222";

  return (
    <View style={[styles.container, { backgroundColor: fundo }]}>
      <Text style={[styles.titulo, { color: texto }]}>
        Meus Favoritos
      </Text>

      {favoritos.length === 0 ? (
        <Text style={{ color: texto }}>
          Você ainda não possui favoritos.
        </Text>
      ) : (
        <FlatList
          data={favoritos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image
                source={{
                  uri: item.sprites.other["official-artwork"].front_default,
                }}
                style={styles.imagem}
              />

              <Text style={styles.nome}>
                {item.name.toUpperCase()}
              </Text>

              <TouchableOpacity
                style={styles.botao}
                onPress={() => removerFavorito(item.id)}
              >
                <Text style={styles.botaoTexto}>Remover</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Detalhes", { pokemon: item })
                }
              >
                <Text style={styles.detalhes}>Ver detalhes</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
  },

  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 15,
    alignItems: "center",
    marginBottom: 15,
    width: 280,
  },

  imagem: {
    width: 120,
    height: 120,
  },

  nome: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },

  botao: {
    backgroundColor: "#e3350d",
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
  },

  botaoTexto: {
    color: "#fff",
  },

  detalhes: {
    color: "#e3350d",
    marginTop: 10,
  },
});