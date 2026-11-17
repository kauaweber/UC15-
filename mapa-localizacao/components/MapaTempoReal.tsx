import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Location from 'expo-location'
import MapView, { Marker } from 'react-native-maps'



export const MapaTempoReal = () => {
    // armazena localização atual (coordenadas)
    // ele começa com null pois só vamos poder pegar a localização depois que permitirmos
    const [posicao, setPosicao] = useState<Location.LocationObject | null>(null)

    // armazena a mensagem quando acontece o erro
    const [erro, setErro] = useState('')

    // controla a exibição do carregamento
    const [carregando, setCarregando] = useState(true)

    useEffect(() => {
        // indica se continua ativo
        let ativo = true

        // guarda a autorização do monitoramento
        // usamos para interromper o monitoramento quando o componente for desmontado
        let inscricao: Location.LocationSubscription | null = null;

        const iniciarLocalizacao = async () => {
            try {
                // solicita a permissão
                const {status} = await Location.requestForegroundPermissionsAsync()

                // interrompe a localização caso o componente nao esteja ativo (exemplo: fechar a tela, etc)
                if (!ativo) return

                // verifica se o usuario autorizou ou nao, não funciona se não autorizar
                if (status !== 'granted') {
                    setErro('Permissão de localização negada')
                    setCarregando(false)
                    return
                }

                // 
                const novaInscricao = await Location.watchPositionAsync(
                    {
                    accuracy: Location.Accuracy.High, // alta precisão na localização
                    distanceInterval: 5, // a cada 5 metros ele envia a localização
                    timeInterval: 2000 // a cada 2 segundos envia a localização tbm                
                }, 
                // ele executa essa função quando o GPS fornece cada nova posição
                (posicao) => {
                    if (!ativo) return
                    setPosicao(posicao);

                    setCarregando(false)
                },
                (motivo) => {
                    if (!ativo) return
                    setErro(motivo) // pega o motivo do erro para exibir na mensagem de erro
                    setCarregando(false)
                }
                )

                // Guarda a inscrição para cancelar depois
        if (ativo) {
            inscricao = novaInscricao;
          } else {
            novaInscricao.remove();
          }
  
        } catch (error) {
          if (ativo) {
            setErro('Não foi possível obter a localização.');
            setCarregando(false);
          }
  
          console.error(error);
        }
      };
  
      // Inicia o monitoramento
      iniciarLocalizacao();
  
      // Cleanup: interrompe o GPS ao desmontar o componente
      return () => {
        ativo = false;
        inscricao?.remove();
      };
  
    }, []);
  
    // Mostra carregamento enquanto aguarda a primeira posição
    if (carregando) {
      return (
        <View style={styles.centro}>
          <ActivityIndicator size="large" />
          <Text>Buscando sua localização...</Text>
        </View>
      );
    }
  
    // Mostra uma mensagem caso ocorra algum erro
    if (erro || !posicao) {
      return (
        <View style={styles.centro}>
          <Text>{erro || 'Localização indisponível.'}</Text>
        </View>
      );
    }
  
    return (
      <MapView
        style={styles.mapa}
  
        // A região acompanha as coordenadas do GPS
        region={{
          latitude: posicao.coords.latitude,
          longitude: posicao.coords.longitude,
  
          // Controlam o zoom do mapa
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
  
        // Mostra o ponto azul nativo de localização
        showsUserLocation={true}
  
        // Mostra o botão de centralizar no usuário
        showsMyLocationButton={true}
      >
        {/* Marcador atualizado conforme o usuário se movimenta */}
        <Marker
          coordinate={{
            latitude: posicao.coords.latitude,
            longitude: posicao.coords.longitude,
          }}
          title="Minha localização"
          description="Atualizada em tempo real"
        />
      </MapView>
    );
  }
  
  // Estilos do componente
  const styles = StyleSheet.create({
    mapa: {
      flex: 1,
    },
  
    centro: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 12,
    },
  });