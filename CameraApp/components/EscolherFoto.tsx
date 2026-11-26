import { useState } from 'react'
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native'
import * as ImagePicker from 'expo-image-picker'

const EscolherFoto = () => {
  const [foto, setFoto] = useState<string | null>(null)

  const escolherDaGaleria = async () => {
    const resultado = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    })

    if (!resultado.canceled) {
      setFoto(resultado.assets[0].uri)
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.botao} onPress={escolherDaGaleria}>
        <Text style={styles.botaoTexto}>Escolher da galeria</Text>
      </TouchableOpacity>

      {foto && <Image source={{ uri: foto }} style={styles.preview} />}
    </View>
  )
}

export default EscolherFoto

const styles = StyleSheet.create({
  container: { alignItems: 'center', gap: 14 },
  botao: { backgroundColor: '#4ade9e', padding: 12, borderRadius: 10 },
  botaoTexto: { fontWeight: 'bold' },
  preview: { width: 200, height: 200, borderRadius: 12 },
})