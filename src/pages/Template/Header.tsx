import React, { useEffect, useState } from 'react';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import {
    StyleSheet,
    View,
    Text,
    Image,
} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage'
import userImg from '../../assets/felix.jpg';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export function Header(){

    const [userName, setUserName] = useState<string>();

    useEffect(() => {
        async function getUserName() {
            const user = await AsyncStorage.getItem("@iplant:user");
            setUserName(user || '');
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
                <Image style={ styles.image } source={userImg} />
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