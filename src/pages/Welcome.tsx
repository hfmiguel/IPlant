import React from 'react';
import {
    Text,
    StyleSheet,
    Image,
    SafeAreaView,
    Dimensions,
    TouchableOpacity,
    View
} from 'react-native';

import { Feather } from '@expo/vector-icons';
import wateringImage from '../assets/watering.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { useNavigation } from '@react-navigation/core';

export function Welcome() {

    const navigation = useNavigation();

    function navigate() {
        navigation.navigate('UserIdentification');
    }

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.wrapper}>
                <Text style={styles.title}>
                    Gerencie {'\n'}
                    suas plantas de{'\n'}
                    forma facil
                </Text>

                <Image
                    source={wateringImage}
                    style={styles.image}
                    resizeMode="contain"
                />

                <Text style={styles.subtitle}>
                    Não esqueça mais de regar suas plantas.
                    Nós cuidamos de lembrar você sempre-
            </Text>

                <TouchableOpacity
                    style={styles.button}
                    activeOpacity={0.2}
                    onPress={navigate}
                >
                    <Feather name="chevron-right" style={styles.buttonIcon}></Feather>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrapper: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
        fontFamily: fonts.heading,
        marginTop: 38,
        lineHeight: 34
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 20,
        color: colors.heading,
        fontFamily: fonts.text,
    },
    image: {
        height: Dimensions.get("window").width * 0.7,
        // height: 250
        // width: 250,
    },
    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 10,
        height: 56,
        width: 56,
    },
    buttonIcon: {
        color: colors.white,
        fontSize: 32
    }
})