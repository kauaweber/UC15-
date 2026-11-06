import { View, Text, Button, StyleSheet } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../types/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;

export default function ProfileScreen({ navigation, route }: Props) {
  const { userId, nome } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Perfil de {nome}</Text>
      <Text>ID do usuário: {userId}</Text>

      <Button title="Voltar" onPress={() => navigation.goBack()} />
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