import React, { useEffect, useState } from 'react';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import {
    StyleSheet,
    View,
    Text,
    Image,
} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage'
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export function Header() {

    const [userName, setUserName] = useState<string>();
    const userImg = 'https://avatars.githubusercontent.com/u/14097051?v=4';

    useEffect(() => {
        async function getUserName() {
            const user = await AsyncStorage.getItem("@iplant:user");

            if (!user || user == "" || user == null) {
                const keys = await AsyncStorage.getAllKeys();
                await AsyncStorage.multiRemove(keys);
            } else {
                setUserName(user || '');
            }

        }
        getUserName();
    }, [userName]);

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.greeting}>Olá,</Text>
                <Text style={styles.userName}>{userName}</Text>
            </View>
            <View>
                <Image style={styles.image} source={{ uri : userImg}} />
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        marginTop: getStatusBarHeight(),
    },
    greeting: {
        fontSize: 32,
        color: colors.heading,
        fontFamily: fonts.text,

    },
    userName: {
        fontSize: 32,
        color: colors.heading,
        fontFamily: fonts.heading,
        lineHeight: 40
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 40,
    }
})