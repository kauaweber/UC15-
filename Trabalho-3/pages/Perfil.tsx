import { View, Text, Button, StyleSheet } from "react-native";

export default function Perfil({ navigation }: any) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.emoji}>👤</Text>
        <Text style={styles.titulo}>Meu Perfil</Text>
        <Text style={styles.texto}>Bem-vindo ao seu perfil!</Text>
      </View>

      <View style={styles.botao}>
        <Button
          title="Voltar para Login"
          color="#2563EB"
          onPress={() => navigation.navigate("Login")}
        />
      </View>

      <View style={styles.botao}>
        <Button
          title="Ir para Cadastro"
          color="#16A34A"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F5F9",
    justifyContent: "center",
    padding: 25,
  },
  card: {
    backgroundColor: "#fff",
    padding: 30,
    borderRadius: 15,
    alignItems: "center",
    marginBottom: 25,
    elevation: 4,
  },
  emoji: {
    fontSize: 55,
    marginBottom: 10,
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2563EB",
  },
  texto: {
    fontSize: 16,
    color: "#64748B",
    marginTop: 10,
  },
  botao: {
    marginTop: 12,
    borderRadius: 10,
    overflow: "hidden",
  },
});