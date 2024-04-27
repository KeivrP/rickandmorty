import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

const CharacterList = ({ characters }) => {
  const [characterData, setCharacterData] = useState([]);

  useEffect(() => {
    const fetchCharacterData = async () => {
      const characterPromises = characters.map((characterUrl) =>
        fetch(characterUrl).then((response) => response.json())
      );
      const characterData = await Promise.all(characterPromises);
      setCharacterData(characterData);
    };

    fetchCharacterData();
  }, [characters]);

  return (
    <ScrollView horizontal style={styles.container}>
      {characterData.map((character) => (
        <View key={character.id} style={styles.characterContainer}>
          <Image source={{ uri: character.image }} style={styles.image} />
          <Text style={styles.name}>{character.name}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 25,
  },
  characterContainer: {
    marginRight: 10,
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  name: {
    color: 'white',
  },
});

export default CharacterList;
