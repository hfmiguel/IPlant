import React from 'react';
import {
    Text,
    StyleSheet,
    View
} from "react-native";

import { SvgFromUri } from 'react-native-svg';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

import { RectButton, RectButtonProps } from "react-native-gesture-handler";

interface PlantProps extends RectButtonProps {
    data: {
        name: string;
        photo: string;
    }
}

export const PlantCardPrimary = ({ data, ...rest }: PlantProps) => {
    return (
        <RectButton
            style={styles.container}
            {...rest}
        >
            <View style={styles.viewContainer}>
                <SvgFromUri uri={data.photo} width={70} height={70} />

                <Text style={styles.text}>
                    {data.name}
                </Text>
            </View>
        </RectButton>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        maxWidth: '45%',
    },
    viewContainer: {
        backgroundColor: colors.shape,
        borderRadius: 20,
        paddingVertical: 10,
        alignItems: 'center',
        margin: 10,
        borderWidth: 1,
        borderColor: colors.purple_light,
        borderStyle: 'solid'
    },
    text: {
        color: colors.purple_dark,
        fontFamily: fonts.heading,
        marginVertical: 16
    }
})