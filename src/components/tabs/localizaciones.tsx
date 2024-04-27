import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Localizaciones = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Localizaciones</Text>
      <Button title="Localizacion" onPress={() => navigation.navigate("Localizacion", {name: "Localizacion 1"})} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Localizaciones;
