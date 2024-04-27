import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screen/localizacion';
import DetailsScreen from './src/screen/espisodio';
import { StatusBar } from 'react-native';

// Importa tus componentes de pantalla


export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <StatusBar />
    <Stack.Navigator>
      <Stack.Screen name="espisodio" component={HomeScreen} />
      <Stack.Screen name="localizacion" component={DetailsScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

