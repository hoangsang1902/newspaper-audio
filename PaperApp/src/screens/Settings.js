import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";

const Settings = ({handleLogout, navigation }) => {


  return (
    <View style={styles.container}>
      <View style={styles.settingsList}>
        <TouchableOpacity style={styles.settingItem}>
          <Text>Account</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem}>
          <Text>Playback</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem}>
          <Text>About</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={() => handleLogout(navigation)}>
        <Text style={styles.logoutButtonText}>Log out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  // Container
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
    padding: 20,
  },

  settingsList: {
    flex: 1,
    // Additional styling if needed
  },

  settingItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#444",
  },
  settingItemText: {
    color: "black",
  },

  // Button
  logoutButton: {
    backgroundColor: '#A52A2A',
    paddingVertical: 15,
    paddingHorizontal: 5,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 15,
  },
  logoutButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },

  // Bottom menu
  bottomMenu: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
  },
  menuButton: {
    padding: 10,
  },
});

export default Settings;
