import { View, Text, Button } from 'react-native'
import React from 'react'

const Register = ({navigation}:any) => {
  return (
    <View>
        <Text>Register</Text>
        <Button
          title="Ir para Home"
          onPress={() => navigation.navigate('Home')}
        />
        <Button
            title="Ir para Profile"
            onPress={() => navigation.navigate('Profile')}        
        />
      </View>
  )
}

export default Register