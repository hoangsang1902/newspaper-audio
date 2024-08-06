import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const ViewProfile = ({ navigation,user }) => {
  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{user ? user.name.charAt(0) : ''}</Text>
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.username}>{user ? user.name : 'Loading...'}</Text>
          <Text style={styles.stats}>0 followers · 0 following</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("EditProfile")}
          style={styles.editButton}
        >
          <Text style={styles.editButtonText}>Edit</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.noActivityText}>No recent activity</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  // Container
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
  },
  text: {
    color: "#36454F",
    fontSize: 16,
  },

  // Profile header
  profileHeader: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#4CAF50",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  userInfo: {
    marginLeft: 10,
  },
  username: {
    fontSize: 18,
    fontWeight: "bold",
  },
  stats: {
    color: "#888",
  },
  editButton: {
    position: "absolute",
    right: 20,
  },
  editButtonText: {
    color: "#007bff",
  },

  // No activity text
  noActivityText: {
    textAlign: "center",
    marginTop: 20,
  },
});

export default ViewProfile;