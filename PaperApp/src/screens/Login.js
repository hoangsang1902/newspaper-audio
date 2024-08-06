import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, TouchableOpacity, Pressable, Alert } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import Ionicons from 'react-native-vector-icons/Ionicons';
import COLORS from '../constants/colors';
import Button from '../components/Button';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({ navigation,onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const handleLogin = async () => {
    try {
      // const response = await axios.post('http://172.20.1.97:5001/login', { email, password });
      const response = await axios.post('http://192.168.1.4:5001/login', { email, password });
      const { token, user } = response.data;
      await AsyncStorage.clear();
      if (token) {
        // Lưu token và thông tin người dùng mới
        await AsyncStorage.setItem('token', token);
        await AsyncStorage.setItem('user', JSON.stringify(user));
        onLoginSuccess(user); 
        navigation.navigate('HomeTabs');
      } else {
        console.log('Failed to receive a token');
      }
      // await AsyncStorage.clear();
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Hey, Welcome back!</Text>
          <Text style={styles.subtitle}>Connect with your friends today</Text>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email address</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              placeholder='Enter your email address'
              placeholderTextColor={COLORS.black}
              keyboardType='email-address'
              style={styles.input}
              value={email}
              onChangeText={setEmail}
            />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              placeholder='Enter your password'
              placeholderTextColor={COLORS.black}
              secureTextEntry={!isPasswordShown}
              style={styles.input}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity
              onPress={() => setIsPasswordShown(!isPasswordShown)}
              style={{ position: 'absolute', right: 12 }}>
              {isPasswordShown ? (
                <Ionicons name="eye-off" size={24} color={COLORS.black} />
              ) : (
                <Ionicons name="eye" size={24} color={COLORS.black} />
              )}
            </TouchableOpacity>
          </View>
        </View>

        <Button
          title="Login"
          filled
          style={{ marginTop: 18, marginBottom: 4 }}
          onPress={handleLogin}
        />
        <View style={styles.loginContainer}>
          <Text>Don't have an account?</Text>
          <Pressable onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.loginText}>Register</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  container: {
    marginVertical: 22,
    paddingHorizontal: 16,
  },
  header: {
    marginVertical: 22,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 12,
    color: COLORS.black,
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.black,
  },
  inputContainer: {
    marginBottom: 12,
  },
  label: {
    fontSize: 16,
    fontWeight: '400',
    marginVertical: 8,
    color: COLORS.black,
  },
  inputWrapper: {
    width: '100%',
    height: 48,
    borderColor: COLORS.black,
    borderWidth: 1,
    justifyContent: 'center',
    paddingLeft: 22,
    borderRadius: 4,
  },
  input: {
    width: '100%',
    height: '100%',
    color: COLORS.black,
  },
  loginContainer: {
    flexDirection: 'row',
    marginTop: 12,
    justifyContent: 'center',
  },
  loginText: {
    fontSize: 16,
    color: COLORS.primary,
    fontWeight: 'bold',
    marginLeft: 4,
  },
});

