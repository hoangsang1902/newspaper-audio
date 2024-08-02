import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import axios from 'axios';

const data = [
  {
    id: "1",
    title: "List báo quân đội nhân dân1",
    description: "Danh sách phát - ABC",
    img: "https://wallpapers.com/images/featured-full/avatar-pictures-vohr0oeq1ld3lpbp.jpg",
  },
  {
    id: "2",
    title: "List báo quân đội nhân dân2",
    description: "Danh sách phát - ABC",
    img: "https://wallpapers.com/images/featured-full/avatar-pictures-vohr0oeq1ld3lpbp.jpg",
  },
  {
    id: "3",
    title: "List báo quân đội nhân dân3",
    description: "Danh sách phát - ABCD",
    img: "https://wallpapers.com/images/featured-full/avatar-pictures-vohr0oeq1ld3lpbp.jpg",
  },
  // Add more items as needed
];

const Library = () => {
    // const [data, setData] = useState([]);
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //   const fetchData = async () => {
    //     try {
    //       const response = await axios.get('http://localhost:5001/api/librarys');
    //       setData(response.data);
    //       setLoading(false);
    //     } catch (error) {
    //       console.error(error);
    //       setLoading(false);
    //     }
    //   };

    //   fetchData();
    // }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer}>
      {/* <View style={styles.itemImage}><Image style={styles.itemImage} src={item.img}/></View> */}
      <Image style={styles.itemImage} src={item.img} />
      <View style={styles.itemTextContainer}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemDescription}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <View style={styles.leftContainer}>
          <View style={styles.iconContainer}>
            <Ionicons name="person-circle-outline" size={30} color="#6A0DAD" />
          </View>
          <Text style={styles.headerTitle}>Library</Text>
        </View>
        <View style={styles.rightContainer}>
          <TouchableOpacity>
            <Ionicons
              name="search-outline"
              size={24}
              color="black"
              style={styles.headerIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="add-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Filter Buttons */}
      <View style={styles.filterContainer}>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>Danh sách phát</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>Nghệ sĩ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>Đã tải xuống</Text>
        </TouchableOpacity>
      </View>

      {/* List */}
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />

      {/* List */}
      {/* {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.listContainer}
        />
      )} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    flex: 1,
    backgroundColor: "#fff",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // paddingHorizontal: 20, // Adjust as necessary for your layout
    padding: 16,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  rightContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    marginRight: 10, // Adjust spacing between icon and text
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    marginLeft: 8,
  },
  headerIcon: {
    marginRight: 10, // Adjust spacing between the two icons
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    marginVertical: 10,
  },
  filterButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
    backgroundColor: "#f0f0f0",
  },
  filterText: {
    fontSize: 14,
    color: "gray",
    fontWeight: "bold",
    color: "#000",
  },
  listContainer: {
    paddingHorizontal: 10,
    marginTop: 10,
    gap: 5,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  itemImage: {
    width: 40,
    height: 40,
    backgroundColor: "#ccc",
    marginRight: 10,
  },
  itemTextContainer: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  itemDescription: {
    fontSize: 14,
    color: "gray",
  },
});
export default Library;
