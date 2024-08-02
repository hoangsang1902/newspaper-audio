// screens/HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import {Ionicons,MaterialIcons,FontAwesome} from 'react-native-vector-icons';



const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.iconContainer}>
          <Ionicons name="person-circle-outline" size={30} color="#6A0DAD" />
        </View>
        <Text style={styles.headerTitle}>Newspaper Audio Player</Text>
      </View>
      <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={styles.trendingSection}>
        <Text style={styles.sectionTitle}>Trending on Social Media</Text>
        <View style={styles.trendingGrid}>
          <View style={styles.trendingItem}>
            <View style={styles.imagePlaceholder} />
            <Text>Excited to share my new podcast episode!</Text>
            <View style={styles.tags}>
              <Text style={styles.tag}>Podcasts</Text>
              <Text style={styles.tag}>Exciting News</Text>
            </View>
            <Text>Influencer123</Text>
          </View>

          <View style={styles.trendingItem}>
            <View style={styles.imagePlaceholder} />
            <Text>Listening to the latest music recommendations</Text>
            <View style={styles.tags}>
              <Text style={styles.tag}>Music</Text>
              <Text style={styles.tag}>Recommendations</Text>
            </View>
            <Text>MusicFan789</Text>
          </View>
        </View>

        <View style={styles.trendingGrid}>
          <View style={styles.trendingItem}>
            <View style={styles.imagePlaceholder} />
            <Text>Excited to share my new podcast episode!</Text>
            <View style={styles.tags}>
              <Text style={styles.tag}>Podcasts</Text>
              <Text style={styles.tag}>Exciting News</Text>
            </View>
            <Text>Influencer123</Text>
          </View>

          <View style={styles.trendingItem}>
            <View style={styles.imagePlaceholder} />
            <Text>Listening to the latest music recommendations</Text>
            <View style={styles.tags}>
              <Text style={styles.tag}>Music</Text>
              <Text style={styles.tag}>Recommendations</Text>
            </View>
            <Text>MusicFan789</Text>
          </View>
        </View>
      </View>

      <View style={styles.recommendedSection}>
        <Text style={styles.sectionTitle}>Recommended Articles</Text>
        <View style={styles.articleItem}>
          <View style={{flexDirection:'row',gap:6,borderBottomWidth: 1,borderBottomColor: '#ddd',paddingBottom: 3}}> 
            <View style={styles.iconContainer}>
              <FontAwesome name="podcast" size={25} color="#6A0DAD" />
            </View>
            <View style={styles.articleItemText}>
              <Text style={styles.articleTitle}>Top 10 Podcasts of the Week</Text>
              <Text style={{ fontSize: 12 }}>Must-listen shows</Text>
            </View>
          </View>
          <View style={styles.iconContainer}>
            <MaterialIcons name="search" size={25} color="#6A0DAD" />
          </View>
        </View>

        <View style={styles.articleItem}>
          <View style={{flexDirection:'row',gap:6}}> 
            <View style={styles.iconContainer}>
              <FontAwesome name="music" size={25} color="#6A0DAD" />
            </View>
            <View style={styles.articleItemText}>
              <Text style={styles.articleTitle}>Interview with a Music Producer</Text>
              <Text style={{ fontSize: 12 }}>Exclusive insights</Text>
            </View>
          </View>
          <View style={styles.iconContainer}>
            <MaterialIcons name="search" size={25} color="#6A0DAD" />
          </View>
        </View>
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
    justifyContent: 'space-between',
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
  contentContainer: {
    paddingHorizontal: 5,
  },
  trendingSection: {
    padding: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  trendingGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  trendingItem: {
    width: '49%',
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  imagePlaceholder: {
    width: '100%',
    height: 100,
    backgroundColor: '#ccc',
    marginBottom: 10,
  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 5,
  },
  tag: {
    marginRight: 5,
    backgroundColor: '#ddd',
    padding: 3,
    borderRadius: 3,
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000',
  },
  recommendedSection: {
    padding: 10,
  },
  articleItem: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  articleItemText: {
    flexDirection: 'column',
  },
  articleTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default Home;
