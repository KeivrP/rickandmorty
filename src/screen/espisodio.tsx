import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, ImageBackground, TouchableOpacity } from 'react-native';
import { useQueryData } from '../api/useQueryData';
import CharacterList from '../components/avatar/characterScreen';
import RickAndMortyImage from '../images/Rick_y_morty.webp';


const DetailsScreen = ({ navigation, route }) => {

  const [episodios, setEpisodios] = useState<Episode>()
  let { episodeId } = route.params;

  const { data, isLoading } = useQueryData({
    entity: "episodios",
    type: episodeId,
    dependency: [episodeId]

  });

  useEffect(() => {
    if (data !== undefined) {
      setEpisodios(data)
    }
  }, [data])

  
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <ImageBackground source={RickAndMortyImage} style={styles.cover}>
          <View style={styles.overlay}>
            <Text style={styles.title}>{episodios?.name}</Text>
            <Text style={styles.description}>{episodios?.episode}</Text>
            <TouchableOpacity style={styles.playButton}>
              <Text style={styles.playButtonText}>Reproducir</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
        <View style={styles.details}>
          <Text style={styles.heading}>Más Información</Text>
          <Text style={styles.info}>Duración: 24min</Text>
          <Text style={styles.info}>Fecha de lanzamiento: {episodios?.air_date}</Text>
          <Text style={styles.info}>Calificación: 9.2/10</Text>
          <CharacterList characters={episodios?.characters} />
        </View>
      </View>
      <Button
        title="Go Back"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f0f',
  },
  cover: {
    width: '100%',
    height: 300,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  description: {
    textAlign: 'center',
    color: 'white',
    margin: 10,
  },
  playButton: {
    marginTop: 20,
    backgroundColor: '#e62270',
    padding: 10,
    borderRadius: 5,
  },
  playButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  details: {
    padding: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  info: {
    color: 'grey',
    marginBottom: 5,
  },
});

export default DetailsScreen;
