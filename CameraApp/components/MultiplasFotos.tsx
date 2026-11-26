import { useState } from 'react'
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native'
import * as ImagePicker from 'expo-image-picker'

const MultiplasFotos = () => {
  const [fotos, setFotos] = useState<string[]>([])

  const escolherFotos = async () => {
    const resultado = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsMultipleSelection: true,
      selectionLimit: 5,
      quality: 0.8,
    })

    if (!resultado.canceled) {
      const uris = resultado.assets.map(item => item.uri)
      setFotos(uris)
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.botao} onPress={escolherFotos}>
        <Text>Escolher fotos</Text>
      </TouchableOpacity>
      <Text>{fotos.length} foto(s) selecionada(s)</Text>
      <View style={styles.galeria}>
        {fotos.map((uri, index) => (
          <Image key={index} source={{ uri }} style={styles.foto} />
        ))}
      </View>
    </View>
  )
}

export default MultiplasFotos

const styles = StyleSheet.create({
  container: { alignItems: 'center', gap: 14 },
  botao: { backgroundColor: '#4ade9e', padding: 12, borderRadius: 10 },
  galeria: { flexDirection: 'row', flexWrap: 'wrap', gap: 10, justifyContent: 'center' },
  foto: { width: 100, height: 100, borderRadius: 8 },
})