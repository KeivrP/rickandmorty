import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';
import DetailsScreen from '../screen/espisodio';
import HomeScreen from '../screen/home';
import Localizacion from '../screen/localizacion';


const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer >
      <StatusBar />
      <Stack.Navigator screenOptions={{
        headerMode: 'screen',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#60a85f' },
      }}>
        <Stack.Screen
          options={{
            title: 'Ricky and Morty',
            cardStyleInterpolator: forFade,

          }}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen name="Episodio" component={DetailsScreen} />
        <Stack.Screen name="Localizacion" component={Localizacion} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const forFade = ({ current }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

export default AppNavigator;
