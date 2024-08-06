import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Profile = ({ navigation, user }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
      </View>

      <View style={styles.profileContainer}>
        <View style={styles.avatarContainer}>
          <Text style={styles.avatarText}>{user ? user.name.charAt(0) : ''}</Text>
        </View>
        <View style={styles.profileTextContainer}>
          <Text style={styles.profileName}>{user ? user.name : 'Loading...'}</Text>
          <TouchableOpacity onPress={() => navigation.navigate("ViewProfile")}>
            <Text style={styles.viewProfile}>View profile</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuItem}>
          <Icon name="add" size={24} color="#000" />
          <Text style={styles.menuText}>Add account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Icon name="flash" size={24} color="#000" />
          <Text style={styles.menuText}>What's new</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Icon name="time" size={24} color="#000" />
          <Text style={styles.menuText}>Reading history</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Settings")}
          style={styles.menuItem}
        >
          <Icon name="settings" size={24} color="#000" />
          <Text style={styles.menuText}>Settings and privacy</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: StatusBar.currentHeight || 0,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  avatarContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#4CAF50",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  profileTextContainer: {
    marginLeft: 16,
  },
  profileName: {
    color: "#333",
    fontSize: 18,
    fontWeight: "bold",
  },
  viewProfile: {
    color: "#1E90FF",
  },
  menuContainer: {
    marginTop: 20,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  menuText: {
    marginLeft: 10,
    color: "#333",
    fontSize: 16,
  },
});

export default Profile;
