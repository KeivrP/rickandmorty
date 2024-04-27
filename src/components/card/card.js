import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import RickAndMortyImage from '../../images/Rick_y_morty.webp';


const Card = ({ title, description, date, imageUrl }) => {
  return (
    <View style={styles.episodio}>
      <Image source={RickAndMortyImage} style={styles.imagenEpisodio} />
      <View style={styles.descripcionEpisodio}>
        <Text style={styles.tituloEpisodio}>{title}</Text>
        <Text style={styles.detalleEpisodio}>{description}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  date: {
    fontSize: 12,
    color: '#777',
  },
  episodio: {
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imagenEpisodio: {
    width: 100,
    height: 60,
    backgroundColor: '#d8d8d8',
    marginRight: 10,
  },
  descripcionEpisodio: {
    flexGrow: 1,
  },
  tituloEpisodio: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'white',
  },
  detalleEpisodio: {
    fontSize: 12,
    color: '#666',
  },
});

export default Card;
