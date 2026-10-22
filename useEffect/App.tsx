import { StyleSheet, View } from 'react-native';
import Busca from './components/Busca';
import ListaProdutos from './components/ListaProdutos';

export default function App() {
  return (
    <View style={styles.container}>
      <Busca />
      <ListaProdutos />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: 50,
  },
});