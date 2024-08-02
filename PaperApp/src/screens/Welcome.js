import React from 'react';
import { Text, StyleSheet, View, Image, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import COLORS from '../constants/colors';
import man from '../../assets/man.png';
import Button from '../components/Button';

const Welcome = ({ navigation }) => {
  return (
    <LinearGradient 
      style={styles.container} 
      colors={[COLORS.secondary, COLORS.primary]}
    >
      <View style={styles.innerContainer}>
        <Text style={styles.welcomeText}>Welcome to Paper App</Text>
        <Image
          source={man} 
          style={styles.image} 
        />
        <Button 
          title='Join Now'
          onPress={() => navigation.navigate('Login')}
          style={styles.button}
        />
        <View style={styles.loginContainer}>
          <Text>Don't have an account?</Text>
          <Pressable onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.loginText}>Register</Text>
          </Pressable>
        </View>
      </View>
    </LinearGradient>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 32,
    color: COLORS.white,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    height: 300,
    width: 300,
    marginBottom: 30,
  },
  button: {
    marginTop: 22,
    width: "90%",
  },
  loginContainer: {
    flexDirection: 'row',
    marginTop: 12,
    justifyContent: 'center',
  },
  loginText: {
    fontSize: 16,
    color: COLORS.white,
    fontWeight: 'bold',
    marginLeft: 4,
  },
});
