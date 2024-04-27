import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Episodios from '../components/tabs/espisodios';
import Localizaciones from '../components/tabs/localizaciones';

const HomeScreen = ({ navigation }) => {

  const Tab = createMaterialTopTabNavigator();

  return (
    <Tab.Navigator screenOptions={{
      tabBarStyle: { backgroundColor: '#60a85f' },
    }}>
      <Tab.Screen name="Episodios" children={() => <Episodios navigation={navigation} />} />
      <Tab.Screen name="Localizaciones" component={Localizaciones} />
    </Tab.Navigator>
  );
};



export default HomeScreen;
