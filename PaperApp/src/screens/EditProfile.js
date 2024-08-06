import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const EditProfile = ({ user, onUpdateUser }) => {
  const [name, setName] = useState(user ? user.name : 'Loading...');
  const navigation = useNavigation();

  const handleSave = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      if (!token) {
        Alert.alert('Error', 'No token found');
        return;
      }
      const response = await axios.put(
        'http://192.168.1.4:5001/user/me',
        { name },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      onUpdateUser(response.data); // Update user in parent component
      navigation.goBack();
    } catch (error) {
      console.error('Error updating profile:', error);
      Alert.alert('Error', 'Failed to update profile. Please try again.');
    }
  };

  const handleCancel = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleCancel}>
          <Text style={styles.cancelButton}>X</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Edit Profile</Text>
        <TouchableOpacity onPress={handleSave}>
          <Text style={styles.saveButton}>Save</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.avatarContainer}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{user ? user.name.charAt(0) : ''}</Text>
          <TouchableOpacity style={styles.editIconContainer}>
            <Text style={styles.editIcon}>✏️</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name</Text>
        <TextInput style={styles.input} value={name} onChangeText={setName} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cancelButton: {
    color: "#000",
    fontSize: 18,
    padding: 8,
    backgroundColor: "#f00",
    borderRadius: 20,
    textAlign: "center",
    width: 36,
    height: 36,
    lineHeight: 20,
  },
  title: {
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
  },
  saveButton: {
    color: "#000",
    fontSize: 18,
  },
  avatarContainer: {
    alignItems: "center",
    marginVertical: 32,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#00C853",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarText: {
    fontSize: 40,
    color: "#000",
  },
  editIconContainer: {
    position: "absolute",
    right: 0,
    bottom: 0,
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 5,
  },
  editIcon: {
    fontSize: 18,
  },
  inputContainer: {
    marginVertical: 16,
  },
  label: {
    color: "#000",
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    color: "#000",
    padding: 8,
    marginTop: 8,
  },
});

export default EditProfile;
