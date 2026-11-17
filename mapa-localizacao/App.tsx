import { useEffect, useState } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  Pressable,
} from 'react-native';
import * as Location from 'expo-location';

import MapaLugares from './components/MapaLugares';

export default function App() {
  const [localizacao, setLocalizacao] =
    useState<Location.LocationObjectCoords | null>(null);
  const [erro, setErro] = useState('');
  const [carregando, setCarregando] = useState(true);

  const obterLocalizacao = async () => {
    setCarregando(true);
    setErro('');

    try {
      const { status } =
        await Location.requestForegroundPermissionsAsync();

      if (status !== 'granted') {
        setErro('Permissão de localização negada.');
        return;
      }

      // objeto que, entre outras informaçoes, possui as coordenadas
      const posicao = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Balanced,
      });

      setLocalizacao(posicao.coords);
    } catch (error) {
      console.error(error);
      setErro('Não foi possível obter a localização.');
    } finally {
      setCarregando(false);
    }
  };

  useEffect(() => {
    obterLocalizacao();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.cabecalho}>
        <Text style={styles.titulo}>Meu Mapa de Favoritos</Text>
        <Pressable style={styles.botao} onPress={obterLocalizacao}>
          <Text style={styles.textoBotao}>Atualizar posição</Text>
        </Pressable>
      </View>

      {carregando ? (
        <View style={styles.centro}>
          <ActivityIndicator size="large" />
          <Text>Obtendo sua localização...</Text>
        </View>
      ) : erro ? (
        <View style={styles.centro}>
          <Text>{erro}</Text>
          <Text>Tente permitir a localização e atualizar.</Text>
        </View>
      ) : localizacao ? (
        <MapaLugares
          key={`${localizacao.latitude}-${localizacao.longitude}`}
          latitude={localizacao.latitude}
          longitude={localizacao.longitude}
        />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  cabecalho: { padding: 16, gap: 10, backgroundColor: '#f1f5f9' },
  titulo: { fontSize: 20, fontWeight: 'bold' },
  botao: {
    alignSelf: 'flex-start',
    backgroundColor: '#2563eb',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 8,
  },
  textoBotao: { color: '#fff', fontWeight: 'bold' },
  centro: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    padding: 20,
  },
});