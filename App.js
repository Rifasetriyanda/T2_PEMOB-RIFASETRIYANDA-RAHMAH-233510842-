import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';

import RingkasanScreen from './src/screens/RingkasanScreen';
import PertemuanScreen from './src/screens/PertemuanScreen';
import JadwalScreen from './src/screens/JadwalScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#fff',
            borderTopColor: '#e5e5ea',
            borderTopWidth: 1,
            height: 60,
            paddingBottom: 8,
          },
          tabBarActiveTintColor: '#007AFF',
          tabBarInactiveTintColor: '#8e8e93',
          tabBarLabelStyle: {
            fontSize: 11,
            fontWeight: '600',
          },
          tabBarIcon: ({ color, size }) => {
            const icons = {
              Ringkasan: '📖',
              Pertemuan: '📋',
              Jadwal: '📅',
            };
            return (
              <Text style={{ fontSize: size - 4 }}>{icons[route.name]}</Text>
            );
          },
        })}
      >
        <Tab.Screen
          name="Ringkasan"
          component={RingkasanScreen}
          options={{ title: 'Ringkasan' }}
        />
        <Tab.Screen
          name="Pertemuan"
          component={PertemuanScreen}
          options={{ title: 'Pertemuan' }}
        />
        <Tab.Screen
          name="Jadwal"
          component={JadwalScreen}
          options={{ title: 'Jadwal' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
// percobaan