import { View, Text, Button, StyleSheet } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../types/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Tela Inicial</Text>
      <Text>Escolha um perfil:</Text>

      <Button
        title="Abrir perfil de Maria"
        onPress={() =>
          navigation.navigate('Profile', { userId: 10, nome: 'Maria' })
        }
      />

      <Button
        title="Abrir perfil de João"
        onPress={() =>
          navigation.navigate('Profile', { userId: 25, nome: 'João' })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  titulo: { fontSize: 26, fontWeight: 'bold' },
});