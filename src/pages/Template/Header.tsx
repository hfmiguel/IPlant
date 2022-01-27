import React, { useEffect, useState, useRef } from 'react';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import {
    StyleSheet,
    View,
    Text,
    Image,
} from "react-native";
import { TouchableOpacity } from 'react-native';
import { Modalize } from 'react-native-modalize';
import AsyncStorage from '@react-native-async-storage/async-storage'
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import { LogoutModal } from './LogoutModal';
import { getUser } from '../../libs/storage';


console.log(process.env);


export function Header() {

    const modalizeRef = useRef<Modalize>(null);

    const [userName, setUserName] = useState<string>();
    const [userPhoto, setUserPhoto] = useState<string>("https://avatars.githubusercontent.com/u/14097051?v=4");

    const onOpen = () => {
        modalizeRef.current?.open();
    };

    useEffect(() => {

        async function getUserName() {
            const user = await getUser();
            if (!user || user == "" || user == null) {
                const keys = await AsyncStorage.getAllKeys();
                await AsyncStorage.multiRemove(keys);
            } else {
                setUserName(user.name || '');
                setUserPhoto(user.photoUrl || '');
            }
        }

        getUserName();
    }, [userName]);

    return (
        <>
            <View style={styles.container}>
                <View>
                    <Text style={styles.greeting}>Olá,</Text>
                    <Text style={styles.userName}>{userName}</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={onOpen}>
                        <Image style={styles.image} source={{ uri: userPhoto }} />
                    </TouchableOpacity>
                </View>
            </View>
            <Modalize
                ref={modalizeRef}
                velocity={1000}
                adjustToContentHeight={true}
            >
                <LogoutModal />
            </Modalize>
        </>

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
