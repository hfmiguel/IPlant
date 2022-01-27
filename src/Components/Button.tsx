import React from 'react';
import { Text, StyleSheet, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import colors from '../styles/colors';
import fonts from '../styles/fonts';


interface ButtonProps extends TouchableOpacityProps {
    title: string
}

export function Button({ title, ...rest }: ButtonProps) {

    return (
        <TouchableOpacity
            style={style.container}
            activeOpacity={0.2}
            {...rest}
        >
            <Text style={style.text}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: colors.purple_light,
        borderColor: colors.purple_dark,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        height: 56,
        paddingHorizontal: 50,
    },
    text: {
        color: colors.white,
        fontSize: 20
    }
})