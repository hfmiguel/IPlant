import React from 'react';
import {
    SafeAreaView,
    Text,
    View,
    StyleSheet
} from 'react-native';
 
import colors from '../styles/colors';
import fonts from '../styles/fonts';

import { Button } from '../Components/Button';
import { useNavigation } from '@react-navigation/core';

export function Confirmation() {

    const navigation = useNavigation();

    function handlePlantSelect() {
        navigation.navigate('PlantSelect');
    }

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.content}>
                <Text style={styles.emoji}>
                    🤩
                </Text>

                <Text style={styles.title}>
                   Prontinho
                </Text>

                <Text style={styles.subtitle}>
                    Agora vamos começar a cuidar das suas {'\n'}
                    plantinhas com muito carinho
                </Text>

                <View style={styles.footer}>
                    <Button title={'Começar'} onPress={handlePlantSelect}/>
                </View>

            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        alignItems: 'center',
        justifyContent: 'space-around'
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
        color: colors.heading,
        paddingHorizontal: 10
    },
    emoji: {
        fontSize: 78,
    },
    footer: {
        width: '100%',
        paddingHorizontal: 50,
        marginTop: 20
    }
})