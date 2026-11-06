import { Button, View, Text, StyleSheet } from "react-native"

export default function Home({ navigation }: any) {
    return (
      <View>
        <Text>Home</Text>
        <Button
          title="Ir para Profile"
          onPress={() => navigation.navigate('Profile')}
        />
        <Button
            title="Ir para Register"
            onPress={() => navigation.navigate('Register')}
        />
      </View>
    )
  }
  
  const styles = StyleSheet.create({})