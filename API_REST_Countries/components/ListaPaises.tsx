
import { useEffect, useState } from 'react';
import {
  Text,
  FlatList,
  ActivityIndicator,
  View,
  TextInput,
  StyleSheet,
} from 'react-native';

import CardPais, { Pais } from './CardPais';
import { buscarPaises } from '../services/api';

export default function ListaPaises() {
  const [paises, setPaises] = useState<Pais[]>([]);
  const [busca, setBusca] = useState('');
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState('');

  useEffect(() => {
    async function carregar() {
      try {
        const dados = await buscarPaises();
        setPaises(dados);
      } catch (error) {
        console.log(error);
        setErro('Não foi possível carregar os países.');
      } finally {
        setCarregando(false);
      }
    }

    carregar();
  }, []);

  const paisesFiltrados = paises.filter((pais) =>
    pais.names.common
      .toLowerCase()
      .includes(busca.trim().toLowerCase())
  );

  if (carregando) {
    return (
      <View style={styles.centro}>
        <ActivityIndicator size="large" />
        <Text>Carregando países...</Text>
      </View>
    );
  }

  if (erro) {
    return <Text style={styles.erro}>{erro}</Text>;
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Buscar país..."
        value={busca}
        onChangeText={setBusca}
        autoCapitalize="none"
      />

      <FlatList
        data={paisesFiltrados}
        keyExtractor={(item) => item.codes.alpha_3}
        renderItem={({ item }) => <CardPais pais={item} />}
        ListEmptyComponent={
          <Text style={styles.mensagem}>
            Nenhum país encontrado.
          </Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  centro: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#cbd5e1',
    borderRadius: 10,
    padding: 14,
    fontSize: 16,
    marginBottom: 16,
  },
  mensagem: {
    textAlign: 'center',
    padding: 20,
    fontSize: 16,
  },
  erro: {
    padding: 20,
    textAlign: 'center',
  },
});
