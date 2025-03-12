import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TextInput, Button, Image } from 'react-native';
import { Posts } from '../utils/Posts';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HeaderMenu from '../components/HeaderMenu';

export default function FeedScreen() {
    const navigation = useNavigation();
    const [comment, setComment] = useState('');
    const [newPostText, setNewPostText] = useState('');
    const [posts, setPosts] = useState(Posts);

    const handleCommentSubmit = () => {
        console.log('Comentario enviado:', comment);
        setComment('');
    };

    return (
        <View style={styles.container}>
            <HeaderMenu activeScreen="FeedScreen" />
            <View style={styles.newPostCard}>
                <Image style={styles.avatar} source={{ uri: 'https://randomuser.me/api/portraits/men/3.jpg' }} />
                <TextInput
                    style={styles.newPostInput}
                    placeholder="¿Qué estás pensando?"
                    value={newPostText}
                    onChangeText={setNewPostText}
                />
            </View>
            <FlatList
                data={posts}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <View style={styles.cardHeader}>
                            <Image style={styles.avatar} source={{ uri: item.avatar }} />
                            <Text style={styles.userName}>{item.user}</Text>
                        </View>
                        <Text>{item.text}</Text>
                        <Image style={styles.postImage} source={{ uri: item.image }} />
                        <View style={styles.commentSection}>
                            <TextInput
                                style={styles.commentInput}
                                placeholder="Escribe un comentario..."
                                value={comment}
                                onChangeText={setComment}
                            />
                            <Button title="Enviar" onPress={handleCommentSubmit} />
                        </View>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f2f5',
    },
    newPostCard: {
        flexDirection:'row',
        backgroundColor: '#fff',
        marginHorizontal: 0,
        padding: 10,
        margin: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
    },
    newPostInput: {
        flex: 1,
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    card: {
        marginHorizontal: 0,
        marginTop: 10,
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    userName: {
        marginLeft: 10,
        fontWeight: 'bold',
    },
    postImage: {
        width: '100%',
        height: 300,
        borderRadius: 8,
        marginTop: 10,
    },
    commentSection: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderTopWidth: 1,
        borderColor: '#ccc',
    },
    commentInput: {
        flex: 1,
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginRight: 10,
    },
});