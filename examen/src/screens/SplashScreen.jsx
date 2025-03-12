import { useCallback, useEffect, useState } from 'react';
import { Text, View, Image } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { useNavigation } from '@react-navigation/native';

SplashScreen.preventAutoHideAsync();

export default function SplashScreenComponent() {
    const [appIsReady, setAppIsReady] = useState(false);
    const navigation = useNavigation();

    useEffect(() => {
        async function prepare() {
            try {
                await Font.loadAsync(Entypo.font);
                await new Promise(resolve => setTimeout(resolve, 2000));
            } catch (e) {
                console.warn(e);
            } finally {
                setAppIsReady(true);
            }
        }

        prepare();
    }, []);

    const onLayoutRootView = useCallback(() => {
        if (appIsReady) {
            SplashScreen.hideAsync();
            navigation.replace('FeedScreen'); 
        }
    }, [appIsReady]);

    if (!appIsReady) {
        return null;
    }

    return (
        <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
            onLayout={onLayoutRootView}>
            <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg' }} /> 
        </View>
    );
}