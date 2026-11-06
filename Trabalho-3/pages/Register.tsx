import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function Register({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Criar Conta</Text>
      <Text style={styles.subtitulo}>Preencha seus dados</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome completo"
        placeholderTextColor="#777"
      />

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor="#777"
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#777"
        secureTextEntry
      />

      <View style={styles.botao}>
        <Button
          title="Cadastrar"
          color="#16A34A"
          onPress={() => navigation.navigate("Perfil")}
        />
      </View>

      <View style={styles.botao}>
        <Button
          title="Voltar para Login"
          color="#2563EB"
          onPress={() => navigation.navigate("Login")}
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
  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#2563EB",
    textAlign: "center",
    marginBottom: 8,
  },
  subtitulo: {
    fontSize: 17,
    color: "#64748B",
    textAlign: "center",
    marginBottom: 30,
  },
  input: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#CBD5E1",
  },
  botao: {
    marginTop: 10,
    borderRadius: 10,
    overflow: "hidden",
  },
});