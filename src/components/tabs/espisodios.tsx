import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions } from 'react-native';
import { useQueryData } from '../../api/useQueryData';
import Card from '../card/card';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Pagination from '../pagination';

const Episodios = ({ navigation }) => {
  const [episodios, setEpisodios] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);

  const { data, isLoading } = useQueryData({
    entity: "episodios",
  });

  useEffect(() => {
    if (data !== undefined) {
      setEpisodios(data.results);
    }
  }, [data]);

  // Paginación
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  
  const currentItems = episodios.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Episodios</Text>
      <FlatList
        data={currentItems}
        keyExtractor={(episode) => episode.id.toString()}
        renderItem={({ item: episode }) => (
          <TouchableOpacity onPress={() => navigation.navigate("Episodio", { episodeId: episode.id })}>
            <Card
              key={episode.id}
              title={episode.name}
              description={episode.episode}
              date={episode.air_date}
              imageUrl={episode.name}
            />
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.scrollContainer}
      />
      <Pagination currentPage={currentPage} itemsPerPage={itemsPerPage} totalItems={episodios.length} paginate={paginate} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#0f0f0f' 
  },
  title: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  scrollContainer: {
    flexGrow: 1,
  },
});

export default Episodios;
