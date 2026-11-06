import { View, Text, Button } from 'react-native'
import React from 'react'

const Profile = ({navigation}:any) => {
  return (
    <View>
        <Text>ProfileScreen</Text>
        <Button
          title="Ir para Home"
          onPress={() => navigation.navigate('Home')}
        />
        <Button
            title="Ir para Register"
            onPress={() => navigation.navigate('Register')}
        />
      </View>
  )
}

export default Profile