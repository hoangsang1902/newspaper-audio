import React from 'react';
import { View, Text, TextInput, Image, ScrollView, StyleSheet,TouchableOpacity } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const Search = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <View style={styles.iconContainer}>
          <Ionicons name="person-circle-outline" size={30} color="#6A0DAD" />
        </View>
        <Text style={styles.headerTitle}>Search</Text>
      </View>

      {/* Main Content */}
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.searchContainer}>
          <TouchableOpacity>
            <MaterialIcons name="menu" size={24} color="gray" />
          </TouchableOpacity>
          <TextInput
            style={styles.searchInput}
            placeholder="Hinted search text"
            placeholderTextColor="gray"
          />
          <TouchableOpacity>
            <Ionicons name="search" size={24} color="gray" />
          </TouchableOpacity>
        </View>
        <Text style={styles.sectionTitle}>Explore your favourites</Text>
        <View style={styles.exploreContainer}>
          {Array.from({ length: 3 }).map((_, index) => (
            <View key={index} style={styles.postContainer}>
              <View style={styles.postImage} />
              <Text style={styles.hashtag}>#hashtag</Text>
            </View>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Search by category</Text>
        <View style={styles.categoryContainer}>
          {['News', 'Podcasts', '', '', '', ''].map((category, index) => (
            <View key={index} style={styles.categoryItem}>
              <Text>{category}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  iconContainer: {
    backgroundColor: '#EDE7F6', // light purple background
    borderRadius: 20,
    padding: 5,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: 8,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginHorizontal: 10,
    marginTop: 10,
  },
  searchInput: {
    flex: 1,
    marginHorizontal: 10,
    paddingVertical: 5,
  },
  contentContainer: {
    paddingHorizontal: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  exploreContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  postContainer: {
    width: '30%',
    alignItems: 'center',
  },
  postImage: {
    width: '100%',
    aspectRatio: 1,
    backgroundColor: '#ccc',
    marginBottom: 5,
  },
  hashtag: {
    color: '#888',
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryItem: {
    width: '45%',
    height: 100,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
});


export default Search;
