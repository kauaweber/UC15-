
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Profile from './pages/Profile'
import Home from './pages/Home'
import Register from './pages/Register'

const Stack = createNativeStackNavigator()


export default function App() {
  return (
    // Componente que envolve os outros
    <NavigationContainer>
      {/* Componente que indica que vamos trabalhar com navegaçao por pilha/stack */}
      {/* initialRouteName indica qual é a tela que vai aparecer primeiro */}
      <Stack.Navigator initialRouteName="Home">
        {/* Dentro de Stack.Navigator ficam as Stack.Screen */}
        {/* Elas representam cada tela de navegação */}
        {/* Cada uma tem um nome e qual pagina ela representa */}
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Register" component={Register} />


      </Stack.Navigator>
    </NavigationContainer>
  )
}