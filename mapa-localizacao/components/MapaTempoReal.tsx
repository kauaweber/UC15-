import * as Location from 'expo-location'
import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect , useState} from 'react'

const MapaTempoReal = () => {
    // armazena localização atual (coordenadas)
    // ele começa com null pois so vamos pegar a localização depois que permitirmos
    const [posicao, setPosicao] = React.useState<Location.LocationObjectCoords | null>(null)

    // armazena a mensagem quando acontece o erro
    const [erro, setErro] = useState('')

    // controla a exibiçao do carregamento
    const [carregando, setCarregando] = useState(true)




    useEffect(() => {
        // indica se continua ativo
        let ativo = true

        // guarda a autorizaçao do rastreamento
        // usamos para i
        let inscriçao: Location.LocationSubscription | null = null;

        const iniciarLocatizacao = async () => {
            try {
                //solicita se contia ativo
                const { status } = await Location.requestForegroundPermissionsAsync()

                // interrompe a localozação caso o componente esteja ativo (exemplo: fechar a tela, etc)
                if (!ativo) return

                // verifica se o usuario autorizou ou não, nao funciona se nao autorizar
                if (status !== 'granted') {
                    setErro('Permissão negada para acessar a localização')
                    setCarregando(false)
                    return
                }

                const novaInscricao = await Location.watchPositionAsync({
                    
                })

            } catch(){

            }
        }
    })
  
    return (
    <View>
      <Text>MapaTempoReal</Text>
    </View>
  )
}

export default MapaTempoReal

const styles = StyleSheet.create({})