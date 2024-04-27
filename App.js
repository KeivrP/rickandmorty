import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/pages/homeScreen';
import DetailsScreen from './src/pages/detail Screen';
import { StatusBar } from 'react-native';

// Importa tus componentes de pantalla


export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <StatusBar />
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

