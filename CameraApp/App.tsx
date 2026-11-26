
import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
} from 'react-native';

import * as ImagePicker from 'expo-image-picker';
import { CameraView, useCameraPermissions } from 'expo-camera';

export default function App() {
  const [fotos, setFotos] = useState<string[]>([]);
  const [legenda, setLegenda] = useState('');
  const [camera, setCamera] = useState(false);

  const [permissao, pedirPermissao] = useCameraPermissions();
  const cameraRef = useRef<CameraView>(null);

  // Escolher fotos
  const escolherFotos = async () => {
    try {
      const resultado = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ['images'],
        allowsMultipleSelection: true,
        selectionLimit: 10 - fotos.length,
        quality: 0.8,
      });

      if (!resultado.canceled) {
        const novas = resultado.assets.map(item => item.uri);

        setFotos(anteriores =>
          [...new Set([...anteriores, ...novas])].slice(0, 10)
        );
      }
    } catch {
      Alert.alert('Erro', 'Não foi possível escolher as fotos.');
    }
  };

  // Abrir câmera
  const abrirCamera = async () => {
    try {
      if (!permissao?.granted) {
        const resultado = await pedirPermissao();

        if (!resultado.granted) {
          Alert.alert('Erro', 'Permissão da câmera não concedida.');
          return;
        }
      }

      setCamera(true);
    } catch {
      Alert.alert('Erro', 'Não foi possível abrir a câmera.');
    }
  };

  // Tirar foto
  const tirarFoto = async () => {
    try {
      const resultado = await cameraRef.current?.takePictureAsync();

      if (resultado) {
        if (fotos.length >= 10) {
          Alert.alert('Limite', 'Máximo de 10 fotos.');
          return;
        }

        setFotos([...fotos, resultado.uri]);
        setCamera(false);
      }
    } catch {
      Alert.alert('Erro', 'Não foi possível tirar a foto.');
    }
  };

  // Remover foto
  const removerFoto = (uri: string) => {
    setFotos(fotos.filter(foto => foto !== uri));
  };

  // Publicar
  const publicar = () => {
    if (fotos.length === 0) {
      Alert.alert('Atenção', 'Escolha pelo menos uma foto.');
      return;
    }

    Alert.alert('Sucesso!', 'Publicação realizada com sucesso!');

    setFotos([]);
    setLegenda('');
  };

  // Tela da câmera
  if (camera) {
    return (
      <View style={styles.container}>
        <CameraView ref={cameraRef} style={styles.camera} />

        <TouchableOpacity style={styles.botao} onPress={tirarFoto}>
          <Text style={styles.textoBotao}>Tirar foto</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => setCamera(false)}
        >
          <Text style={styles.textoBotao}>Voltar</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Nova publicação</Text>

      {/* Preview */}
      {fotos.length > 0 ? (
        <Image source={{ uri: fotos[0] }} style={styles.preview} />
      ) : (
        <View style={styles.previewVazio}>
          <Text style={styles.texto}>Nenhuma foto selecionada</Text>
        </View>
      )}

      {/* Botões */}
      <TouchableOpacity style={styles.botao} onPress={escolherFotos}>
        <Text style={styles.textoBotao}>Escolher da galeria</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={abrirCamera}>
        <Text style={styles.textoBotao}>Abrir câmera</Text>
      </TouchableOpacity>

      {/* Fotos selecionadas */}
      <Text style={styles.subtitulo}>
        Fotos selecionadas: {fotos.length}/10
      </Text>

      <View style={styles.galeria}>
        {fotos.map((uri, index) => (
          <View key={uri}>
            <Image source={{ uri }} style={styles.foto} />

            <TouchableOpacity onPress={() => removerFoto(uri)}>
              <Text style={styles.remover}>Remover</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>

      {/* Legenda */}
      <TextInput
        style={styles.input}
        placeholder="Escreva uma legenda..."
        placeholderTextColor="#aaa"
        value={legenda}
        onChangeText={setLegenda}
        multiline
      />

      {/* Publicar */}
      <TouchableOpacity style={styles.publicar} onPress={publicar}>
        <Text style={styles.textoBotao}>Compartilhar publicação</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
  },

  titulo: {
    color: '#fff',
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 35,
    marginBottom: 20,
  },

  preview: {
    width: '100%',
    height: 300,
    borderRadius: 10,
  },

  previewVazio: {
    height: 300,
    backgroundColor: '#222',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },

  texto: {
    color: '#fff',
  },

  botao: {
    backgroundColor: '#3797ef',
    padding: 14,
    borderRadius: 8,
    marginTop: 12,
    alignItems: 'center',
  },

  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
  },

  subtitulo: {
    color: '#fff',
    fontSize: 17,
    marginTop: 25,
    marginBottom: 15,
  },

  galeria: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15,
  },

  foto: {
    width: 90,
    height: 90,
    borderRadius: 8,
  },

  remover: {
    color: '#ff5555',
    textAlign: 'center',
    marginTop: 5,
  },

  input: {
    backgroundColor: '#222',
    color: '#fff',
    padding: 15,
    borderRadius: 8,
    marginTop: 25,
    minHeight: 80,
    textAlignVertical: 'top',
  },

  publicar: {
    backgroundColor: '#3797ef',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
  },

  camera: {
    flex: 1,
  },
});
