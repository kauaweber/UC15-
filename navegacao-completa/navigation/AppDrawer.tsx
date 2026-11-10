import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

import AppTabs from './AppTabs';
import FavoritosScreen from '../Screens/FavoritosScreen';
import ConfiguracoesScreen from '../Screens/ConfiguracoesScreen';
import type { AppDrawerParamList } from '../types/navigation';

const Drawer = createDrawerNavigator<AppDrawerParamList>();

export default function AppDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="Loja"
      screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen
        name="Loja"
        component={AppTabs}
        options={{
          title: 'Minha Loja',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="storefront-outline" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favoritos"
        component={FavoritosScreen}
        options={{
          title: 'Favoritos',
          headerShown: true,
          drawerIcon: ({ color, size }) => (
            <Ionicons name="heart-outline" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Configuracoes"
        component={ConfiguracoesScreen}
        options={{
          title: 'Configurações',
          headerShown: true,
          drawerIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}