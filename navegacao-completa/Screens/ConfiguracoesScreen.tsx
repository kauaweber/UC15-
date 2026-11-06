import { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

export default function ConfiguracoesScreen() {
  const [notificacoes, setNotificacoes] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Configurações</Text>
      <Text>
        Notificações: {notificacoes ? 'Ativadas' : 'Desativadas'}
      </Text>
      <Switch value={notificacoes} onValueChange={setNotificacoes} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 16 },
  titulo: { fontSize: 26, fontWeight: 'bold' },
});