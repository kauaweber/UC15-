import { StyleSheet, TextInput, View } from 'react-native';
import { useEffect, useState } from 'react';

interface Produto {
  id: number;
  title: string;
}

const Busca = () => {
  const [termo, setTermo] = useState('');
  const [produtos, setProdutos] = useState<Produto[]>([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((resposta) => resposta.json())
      .then((dados: Produto[]) => {
        const filtrados = dados.filter((produto) =>
          produto.title.toLowerCase().includes(termo.toLowerCase())
        );

        setProdutos(filtrados);
      })
      .catch((erro) => console.log(erro));
  }, [termo]);

  return (
    <View>
      <TextInput
        style={styles.input}
        value={termo}
        onChangeText={setTermo}
        placeholder="Buscar produto..."
      />
    </View>
  );
};

export default Busca;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
  },
});