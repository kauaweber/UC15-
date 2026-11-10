import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import AppTabs from './navigation/AppTabs';
import AppDrawer from './navigation/AppDrawer';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppDrawer />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

/*
utilizando os 3 tipos de navegaçao aprendidos,
crie um aplicativo que, conectando á PokeApi, mostra 3 pokemons na
tela inicial

Ao clicar em cada um deles, mostra detalhes destes pokemons

Telas obrigatorias:
- Pokemon
- Detalhes
- favoritos
- configuraçoes

*/