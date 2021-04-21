import React from 'react';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import {
    StyleSheet,
    View,
    Text,
    Image
} from "react-native";

import userImg from '../../assets/felix.jpg';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export function Header(){

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.greeting}>Olá,</Text>
                <Text style={styles.userName}>Henrique</Text>
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