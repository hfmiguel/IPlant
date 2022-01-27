import React from "react";
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { FacebookLogin, GoogleLogin } from '../Components/SocialButton';

import {
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native';


export function UserIdentification() {

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                    <View style={styles.content}>
                        <View style={styles.form}>
                            <View style={styles.header}>
                                <Text style={styles.emoji}>
                                    😄
                                </Text>

                                <Text style={styles.title}>
                                    Faça login para continuar
                                </Text>
                            </View>
                            <View style={styles.buttons}>
                                <View style={styles.button}>
                                    <FacebookLogin />
                                </View>
                                <View style={styles.button}>
                                    <GoogleLogin />
                                </View>
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>

            </KeyboardAvoidingView>
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
        width: '100%',
    },
    form: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 54,
        alignItems: 'center',
    },
    emoji: {
        fontSize: 44,
    },
    input: {
        borderBottomWidth: 1,
        borderColor: colors.gray,
        color: colors.heading,
        width: '100%',
        fontSize: 18,
        marginTop: 50,
        padding: 10,
        textAlign: 'center',
    },
    title: {
        fontSize: 24,
        lineHeight: 32,
        textAlign: 'center',
        paddingHorizontal: 20,
        color: colors.heading,
        fontFamily: fonts.heading,
        marginTop: 20
    },
    footer: {
        width: '100%',
        marginTop: 40,
        paddingHorizontal: 20
    },
    header: {
        alignItems: 'center',
        width: '100%',
    },
    buttons: {
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',
        marginTop: 20,
        backgroundColor: colors.shape,
        borderRadius: 10,
        paddingVertical: 20,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        paddingVertical: 10,
    },
})