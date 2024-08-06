import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FontAwesome } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Login, Signup, Welcome, Home, Search, Audio, Profile, ViewProfile, Settings, EditProfile } from './src/screens/index';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Search') {
            iconName = 'search';
          } else if (route.name === 'Audio') {
            iconName = 'headphones';
          }
          return <FontAwesome name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="Search" component={Search} options={{ headerShown: false }} />
      <Tab.Screen name="Audio" component={Audio} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        const storedUser = await AsyncStorage.getItem('user');

        if (token && storedUser) {
          const user = JSON.parse(storedUser);
          setUser(user);
        } else {
          console.log('No token or user found');
        }
      } catch (err) {
        console.error('Error fetching user:', err.message || err);
      }
    };
    fetchUser();
  }, []);

  const handleLogout = async (navigation) => {
    try {
      await AsyncStorage.clear();
      setUser(null);
      navigation.navigate('Welcome');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };


  const handleLoginSuccess = (user) => {
    setUser(user);
  };

  const handleUpdateUser = (updatedUser) => {
    setUser(updatedUser);  // Cập nhật lại state user với thông tin mới
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
        <Stack.Screen name="Login" options={{ headerShown: false }} >
          {(props) => <Login {...props} onLoginSuccess={handleLoginSuccess} />}
        </Stack.Screen>
        <Stack.Screen name="Signup" options={{ headerShown: false }}>
          {(props) => <Signup {...props} onSignupSuccess={handleLoginSuccess} />}
        </Stack.Screen>
        <Stack.Screen name="HomeTabs" component={BottomTabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="Profile" options={{ headerShown: false }}>
          {(props) => <Profile {...props} user={user} />}
        </Stack.Screen>
        <Stack.Screen name="ViewProfile" >
          {(props) => <ViewProfile {...props} user={user} />}
        </Stack.Screen>
        <Stack.Screen name="Settings">
          {(props) => <Settings {...props} handleLogout={handleLogout} />}
        </Stack.Screen>
        <Stack.Screen name="EditProfile" >
          {(props) => <EditProfile {...props} user={user} onUpdateUser={handleUpdateUser} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
