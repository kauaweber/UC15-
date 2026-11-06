import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

import InicioScreen from './screens/InicioScreen';
import FavoritosScreen from './screens/favoritoScreen';
import type { TabParamList } from './types/navigation';

const Tab = createBottomTabNavigator<TabParamList>();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Inicio"
            component={InicioScreen}
            options={{
              title: 'Início',
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="home-outline" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Favoritos"
            component={FavoritosScreen}
            options={{
              title: 'Favoritos',
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="heart-outline" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}