import { useRef, useState } from 'react'
import { View, TouchableOpacity, Text, Image, StyleSheet, Alert } from 'react-native'
import { CameraView, useCameraPermissions } from 'expo-camera'
import type { CameraType } from 'expo-camera'

const CameraCustom = () => {
  const [permissao, pedirPermissao] = useCameraPermissions()
  const [cameraPronta, setCameraPronta] = useState(false)
  const [capturando, setCapturando] = useState(false)
  const [foto, setFoto] = useState<string | null>(null)
  const [lado, setLado] = useState<CameraType>('back')
  const cameraRef = useRef<CameraView>(null)

  const tirarFoto = async () => {
    if (!cameraPronta || capturando) return

    try {
      setCapturando(true)
      const resultado = await cameraRef.current?.takePictureAsync()
      if (resultado) setFoto(resultado.uri)
    } catch {
      Alert.alert('Erro', 'Não foi possível capturar a foto.')
    } finally {
      setCapturando(false)
    }
  }

  const trocarCamera = () => {
    setCameraPronta(false)
    setLado(lado === 'back' ? 'front' : 'back')
  }

  const tirarOutraFoto = () => {
    setCameraPronta(false)
    setFoto(null)
  }

  if (!permissao) {
    return <Text>Carregando permissões...</Text>
  }

  if (!permissao.granted) {
    return (
      <TouchableOpacity style={styles.botao} onPress={pedirPermissao}>
        <Text>Permitir câmera</Text>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
      {foto ? (
        <>
          <Image source={{ uri: foto }} style={styles.camera} />
          <TouchableOpacity style={styles.botao} onPress={tirarOutraFoto}>
            <Text>Tirar outra foto</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <CameraView
            key={lado}
            ref={cameraRef}
            style={styles.camera}
            facing={lado}
            onCameraReady={() => setCameraPronta(true)}
          />
          <TouchableOpacity style={styles.botao} onPress={trocarCamera} disabled={capturando}>
            <Text>Trocar câmera</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.botao, { opacity: cameraPronta && !capturando ? 1 : 0.5 }]}
            onPress={tirarFoto}
            disabled={!cameraPronta || capturando}
          >
            <Text>{capturando ? 'Capturando...' : 'Capturar'}</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  )
}

export default CameraCustom

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  camera: { flex: 1 },
  botao: { backgroundColor: '#4ade9e', padding: 16, alignItems: 'center' },
})