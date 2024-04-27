import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Pagination = ({ currentPage, itemsPerPage, totalItems, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <View style={styles.paginationContainer}>
      {pageNumbers.map((number) => (
        <TouchableOpacity
          key={number}
          style={[styles.paginationItem, currentPage === number && styles.activePaginationItem]}
          onPress={() => paginate(number)}
        >
          <Text style={styles.paginationText}>{number}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  paginationItem: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginHorizontal: 5,
    borderRadius: 5,
    backgroundColor: '#ccc',
  },
  activePaginationItem: {
    backgroundColor: 'blue',
  },
  paginationText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Pagination;
