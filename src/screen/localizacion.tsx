import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Episodios from './tabs/espisodios';
import Localizaciones from './tabs/localizaciones';

const HomeScreen = ({ navigation }) => {

const Tab = createMaterialTopTabNavigator();

  return (
<Tab.Navigator>
      <Tab.Screen name="Episodios" component={Episodios} />
      <Tab.Screen name="Localizaciones" component={Localizaciones} />
    </Tab.Navigator>
  );
};



export default HomeScreen;
