import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const HeaderMenu = ({ activeScreen }) => {
    const navigation = useNavigation();

    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.Title}>Facebook</Text>
                <View style={styles.headerIcons}>
                    <View style={{ backgroundColor: 'rgb(212, 212, 212)', borderRadius: 50, padding: 4, marginRight: 4 }}>
                        <Icon name="magnify" size={30} color="gray" />
                    </View>
                    <View style={{ backgroundColor: 'rgb(212, 212, 212)', borderRadius: 50, padding: 4 }}>
                        <Icon name="dots-vertical" size={30} color="gray" />
                    </View>
                </View>
            </View>
            <View style={styles.menu}>
                <Icon name="home" size={30} color={activeScreen === 'FeedScreen' ? 'blue' : 'gray'} onPress={() => navigation.navigate('FeedScreen')} />
                <Icon name="dots-vertical" size={30} color="gray" />
                <Icon name="account-circle-outline" size={30} color={activeScreen === 'ProfileScreen' ? 'blue' : 'gray'} onPress={() => navigation.navigate('ProfileScreen')} />
                <Icon name="bell-outline" size={30} color="gray" />
                <Icon name="dots-vertical" size={30} color="gray" />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 50,
        paddingHorizontal: 10,
        backgroundColor: 'rgb(255, 255, 255)',
    },
    headerIcons: {
        flexDirection: 'row',
    },
    Title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'rgb(0, 119, 255)',
    },
    menu: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        paddingHorizontal: 40,
        backgroundColor: 'rgb(255, 255, 255)',
    },
});

export default HeaderMenu;