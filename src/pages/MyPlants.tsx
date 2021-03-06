import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Image, Text, FlatList, Alert } from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import waterdrop from '../assets/waterdrop.png'

import { Header } from './Template/Header';
import { loadPlant, PlantProps, removePlant } from '../libs/storage';
import { formatDistance } from 'date-fns';
import { pt } from 'date-fns/locale';
import { PlantCardSecondary } from '../Components/PlantCardSecondary';
import { Load } from '../Components/Load';

export function MyPlants() {
    const [myPlants, setMyPlants] = useState<PlantProps[]>([]);
    const [loading, setLoading] = useState(true);
    const [nextWatered, setNextWatered] = useState<string>();

    function handleRemove(plant: PlantProps) {
        Alert.alert("Remover", `Deseja remover a ${plant.name}`, [
            {
                text: 'Não 🙏',
                style: 'cancel'
            },
            {
                text: 'Sim 😭',
                style: 'default',
                onPress: async () => {
                    try {
                        await removePlant(plant.id);
                        setMyPlants((oldData) => (
                            oldData.filter((item) => item.id !== plant.id)
                        ));
                    } catch (error) {

                    }
                }
            }
        ]);
    }

    useEffect(() => {
        async function loadStorageData() {
            try {
                const plantsStoraged = await loadPlant();

                if (typeof plantsStoraged != undefined && typeof plantsStoraged[0] != "undefined") {

                    const nextTime = formatDistance(
                        new Date(plantsStoraged[0].dateTimeNotification).getTime(),
                        new Date().getTime(),
                        {
                            locale: pt
                        }
                    )
                    setNextWatered(`Regue sua ${plantsStoraged[0].name} daqui a ${nextTime}`);
                    setMyPlants(plantsStoraged);
                }

                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        }

        loadStorageData();
    }, []);

    if (loading)
        return <Load />

    return (
        <View style={styles.container}>
            <Header />

            <View style={styles.spotlight}>
                <Image source={waterdrop} style={styles.spotlightImage} />
                <Text style={styles.spotlightText}>{nextWatered}</Text>
            </View>

            <View style={styles.plants}>
                <Text style={styles.plantsTitle}>
                    Próximas regadas
                </Text>

                <FlatList
                    data={myPlants}
                    keyExtractor={item => String(item.id)}
                    renderItem={({ item }) => (
                        <PlantCardSecondary data={item} handleRemove={() => { handleRemove(item) }} />
                    )}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        paddingTop: 50,
        backgroundColor: colors.background
    },
    spotlight: {
        backgroundColor: colors.purple_light,
        borderColor: colors.purple_dark,
        borderWidth: 1,
        paddingHorizontal: 20,
        borderRadius: 20,
        height: 110,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    spotlightImage: {
        width: 60,
        height: 60,
    },
    spotlightText: {
        flex: 1,
        color: colors.white,
        paddingHorizontal: 20,
    },
    plants: {
        flex: 1,
        width: '100%'
    },
    plantsTitle: {
        fontSize: 24,
        fontFamily: fonts.heading,
        color: colors.heading,
        marginVertical: 20
    }
});