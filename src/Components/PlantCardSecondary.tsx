import React from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { SvgFromUri } from 'react-native-svg'
import { Feather } from '@expo/vector-icons';

interface PlantProps extends RectButtonProps {
    data: {
        name: string;
        photo: string;
        hour: string;
    }
    handleRemove: () => void;
}

export function PlantCardSecondary({ data, handleRemove, ...rest }: PlantProps) {
    return (
        <Swipeable
            overshootRight={false}
            renderRightActions={() => (
                <Animated.View>
                    <View>
                        <RectButton
                            style={styles.buttonRemove}
                            onPress={handleRemove}
                        >
                            <Feather name="trash" size={32} color={colors.white} />
                        </RectButton>
                    </View>
                </Animated.View>
            )}
        >
            <RectButton
                style={styles.container}
                {...rest}
            >
                <View style={styles.viewContainer}>
                    <SvgFromUri uri={data.photo} width={50} height={50} />
                    <Text style={styles.title}>
                        {data.name}
                    </Text>
                    <View style={styles.details}>
                        <Text style={styles.timeLabel}>
                            Regar às
                        </Text>
                        <Text style={styles.time}>
                            {data.hour}
                        </Text>
                    </View>
                </View>
            </RectButton>
        </Swipeable >
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    viewContainer: {
        paddingHorizontal: 10,
        paddingVertical: 25,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.shape,
        marginVertical: 5,
        borderWidth: 1,
        borderColor: colors.purple_light,
        borderStyle: 'solid'
    },
    title: {
        flex: 1,
        marginLeft: 10,
        fontFamily: fonts.heading,
        fontSize: 17,
        color: colors.purple_light
    },
    details: {
        alignItems: 'flex-end',
        marginRight: 6,
        color: colors.purple_light

    },
    timeLabel: {
        fontSize: 16,
        fontFamily: fonts.text,
        color: colors.purple_light,
    },
    time: {
        marginTop: 5,
        fontSize: 16,
        fontFamily: fonts.heading,
        color: colors.purple_dark
    },
    buttonRemove: {
        width: 100,
        height: 85,
        backgroundColor: colors.red,
        marginTop: 15,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        right: 20,
        paddingLeft: 15
    }
})