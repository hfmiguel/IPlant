import React from 'react';
import {
    SafeAreaView,
    Text,
    View,
    StyleSheet
} from 'react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

import { Header } from './Template/Header';
import { Button } from '../Components/Button';
import { useNavigation } from '@react-navigation/core';

export function LoggedUser() {

    const navigation = useNavigation();
  
    function handlePlantSelect() {
        navigation.navigate("PlantSelect");
    }

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.header}>

                <Header />

            </View>

            <View style={styles.content}>
                <Text style={styles.title}>
                    Quem bom termos você de volta!
                </Text>

                {/* <Text style={styles.subtitle}>
                    {subtitle}
                </Text> */}

                <View style={styles.footer}>
                    <Button title={'Continuar'} onPress={handlePlantSelect} />
                </View>

            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    header: {
        paddingHorizontal: 30,
        paddingVertical: 30
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: 30
    },
    title: {
        fontSize: 22,
        fontFamily: fonts.heading,
        textAlign: 'center',
        color: colors.heading,
        lineHeight: 38,
        marginTop: 15,
    },
    subtitle: {
        fontFamily: fonts.text,
        textAlign: 'center',
        fontSize: 17,
        paddingVertical: 10,
        color: colors.heading,
    },
    footer: {
        width: '100%',
        paddingHorizontal: 50,
        marginTop: 20
    }
})