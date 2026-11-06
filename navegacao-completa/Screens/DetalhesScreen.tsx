import { View, Text, Button, StyleSheet } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { produtos } from '../data/produto';
import type { InicioStackParamList } from '../types/navigation';

type Props = NativeStackScreenProps<InicioStackParamList, 'Detalhes'>;

export default function DetalhesScreen({ navigation, route }: Props) {
  const { produtoId } = route.params;
  const produto = produtos.find((item) => item.id === produtoId);

  if (!produto) {
    return (
      <View style={styles.container}>
        <Text>Produto não encontrado.</Text>
        <Button title="Voltar" onPress={() => navigation.goBack()} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{produto.nome}</Text>
      <Text style={styles.preco}>
        R$ {produto.preco.toFixed(2).replace('.', ',')}
      </Text>
      <Text>{produto.descricao}</Text>
      <Button title="Voltar para a lista" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    gap: 20,
    backgroundColor: '#FFFFFF',
  },
  titulo: { fontSize: 26, fontWeight: 'bold', textAlign: 'center' },
  preco: { fontSize: 22, color: '#1454BD', fontWeight: 'bold' },
});