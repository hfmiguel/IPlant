import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface EnvironmentButtonProps extends RectButtonProps {

    title: string;
    active?: boolean; /* opcional */
}


export function EnvironmentButton({
    title,
    active = false,
    ...rest

}: EnvironmentButtonProps) {
    return (
        <RectButton
            style={[
                styles.container,
                active && styles.containerActive
            ]}
            {...rest}
        >
            <View style={[
                styles.viewContainer,
                active && styles.containerActive
            ]}>
                <Text style={[
                    styles.text,
                    active && styles.textActive
                ]}>
                    {title}
                </Text>
            </View>
        </RectButton>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.shape,
        width: 76,
        height: 40,
        marginHorizontal: 5,
        borderRadius: 12,
    },
    viewContainer: {
        width: '100%',
        height: '100%',
        borderColor: colors.purple_light,
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerActive: {
        backgroundColor: colors.purple_light,
        borderColor: colors.white,
    },
    text: {
        color: colors.heading,
        fontFamily: fonts.text
    },
    textActive: {
        fontFamily: fonts.heading,
        color: colors.white,
    }
})