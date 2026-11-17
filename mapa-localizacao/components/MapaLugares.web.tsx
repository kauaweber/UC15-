import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
    CircleMarker,
  } from 'react-leaflet';
  import L from 'leaflet';
  import 'leaflet/dist/leaflet';
  
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
  
  const icone = L.divIcon({
    html: '<span style="font-size:30px">📍</span>',
    className: '',
    iconSize: [32, 40],
    iconAnchor: [16, 40],
  });
  
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
      <MapContainer
        center={[latitude, longitude]}
        zoom={14}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
  
        <CircleMarker
          center={[latitude, longitude]}
          radius={9}
          pathOptions={{
            color: '#fff',
            fillColor: '#1683ff',
            fillOpacity: 1,
            weight: 3,
          }}
        >
          <Popup>Você está aqui!</Popup>
        </CircleMarker>
  
        {lugares.map((lugar) => (
          <Marker
            key={lugar.id}
            position={[lugar.latitude, lugar.longitude]}
            icon={icone}
          >
            <Popup>{lugar.nome}</Popup>
          </Marker>
        ))}
      </MapContainer>
    );
  }