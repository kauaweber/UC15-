import { StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

interface Props {
  latitude: number;
  longitude: number;
}

interface Lugar {
  id: string;
  nome: string;
  latitude: number;
  longitude: number;
}

export default function MapaLugares({ latitude, longitude }: Props) {
  const lugares: Lugar[] = [
    {
      id: '1',
      nome: 'Lugar favorito 1',
      latitude: latitude + 0.003,
      longitude: longitude + 0.003,
    },
    {
      id: '2',
      nome: 'Lugar favorito 2',
      latitude: latitude - 0.004,
      longitude: longitude + 0.002,
    },
    {
      id: '3',
      nome: 'Lugar favorito 3',
      latitude: latitude + 0.002,
      longitude: longitude - 0.004,
    },
  ];

  return (
    <MapView
      style={styles.mapa}
      initialRegion={{
        latitude,
        longitude,
        latitudeDelta: 0.03,
        longitudeDelta: 0.03,
      }}
      showsUserLocation={true}
    >
      {lugares.map((lugar) => (
        <Marker
          key={lugar.id}
          coordinate={{
            latitude: lugar.latitude,
            longitude: lugar.longitude,
          }}
          title={lugar.nome}
          description="Um lugar favorito perto de você"
        />
      ))}
    </MapView>
  );
}

const styles = StyleSheet.create({
  mapa: { flex: 1 },
});