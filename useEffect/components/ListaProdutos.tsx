import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';

interface Produto {
  id: number;
  title: string;
}

const ListaProdutos = () => {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((resposta) => resposta.json())
      .then((dados) => setProdutos(dados))
      .catch((erro) => console.log(erro));
  }, []);

  return (
    <FlatList
      data={produtos}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => (
        <View style={styles.linha}>
          <Text>{item.title}</Text>
        </View>
      )}
    />
  );
};

export default ListaProdutos;

const styles = StyleSheet.create({
  linha: {
    padding: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
});