import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

import PokemonScreen from "../screens/PokemonScreen";
import DetailsScreen from "../screens/DetailsScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import SettingsScreen from "../screens/SettingsScreen";

import { useApp } from "../context/AppContext";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function TabsNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#e3350d",
      }}
    >
      <Tab.Screen
        name="Pokémon"
        component={PokemonScreen}
      />

      <Tab.Screen
        name="Favoritos"
        component={FavoritesScreen}
      />

      <Tab.Screen
        name="Configurações"
        component={SettingsScreen}
      />
    </Tab.Navigator>
  );
}

function DrawerNavigator() {
  const { temaEscuro } = useApp();

  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: temaEscuro ? "#222" : "#e3350d",
        },
        headerTintColor: "#fff",
        drawerStyle: {
          backgroundColor: temaEscuro ? "#222" : "#fff",
        },
        drawerActiveTintColor: "#e3350d",
        drawerInactiveTintColor: temaEscuro ? "#fff" : "#333",
      }}
    >
      <Drawer.Screen
        name="Início"
        component={TabsNavigator}
      />

      <Drawer.Screen
        name="Configurações"
        component={SettingsScreen}
      />
    </Drawer.Navigator>
  );
}

export default function AppNavigator() {
  const { temaEscuro } = useApp();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: temaEscuro ? "#222" : "#e3350d",
          },
          headerTintColor: "#fff",
          contentStyle: {
            backgroundColor: temaEscuro ? "#121212" : "#f2f2f2",
          },
        }}
      >
        <Stack.Screen
          name="Principal"
          component={DrawerNavigator}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Detalhes"
          component={DetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}