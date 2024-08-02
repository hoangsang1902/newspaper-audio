import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, TouchableOpacity,Pressable } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import COLORS from '../constants/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Button from '../components/Button';

const Login = ({ navigation }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Hey Welcome back!</Text>
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
            />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              placeholder='Enter your password'
              placeholderTextColor={COLORS.black}
              secureTextEntry={isPasswordShown}
              style={styles.input}
            />
            <TouchableOpacity
              onPress={() => setIsPasswordShown(!isPasswordShown)}
              style={{ position: "absolute", right: 12 }}>
              {
                isPasswordShown == true ? (
                  <Ionicons name="eye-off" size={24} color={COLORS.black} />
                ) : (
                  <Ionicons name="eye" size={24} color={COLORS.black} />
                )
              }
            </TouchableOpacity>
          </View>
        </View>

        <Button
          title="Login"
          filled
          style={{
            marginTop: 18,
            marginBottom: 4
          }}
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
