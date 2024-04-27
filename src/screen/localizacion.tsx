import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Localizacion = ({navigation, route}) => {
  const {name} = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Button
        title="Go Back"
        onPress={() => navigation.goBack() }
      />
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

export default Localizacion;
