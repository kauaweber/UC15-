import { View, Text, StyleSheet } from 'react-native';

export default function InicioScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Início</Text>
      <Text>Bem-vindo ao app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 12 },
  titulo: { fontSize: 26, fontWeight: 'bold' },
});