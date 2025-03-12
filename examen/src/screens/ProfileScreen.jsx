import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import HeaderMenu from '../components/HeaderMenu';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
        <HeaderMenu activeScreen="ProfileScreen" />
        <View style={styles.container2}>
            <Image source={{ uri: 'https://via.placeholder.com/400x200' }} style={styles.cover} />
            <Image
                style={styles.avatar}
                source={{ uri: 'https://randomuser.me/api/portraits/men/3.jpg' }}
            />
            <Text style={styles.name}>Lorem Ipsum</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container2: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  cover: {
    width: '100%',
    height: 200,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    position: 'absolute',
    top: 140,
    borderWidth: 3,
    borderColor: '#fff',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 60,
  },
});