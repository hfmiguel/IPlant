import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    ActivityIndicator
} from 'react-native';

import { useNavigation } from '@react-navigation/core';

import { EnvironmentButton } from '../Components/EnvironmentButton';
import { PlantCardPrimary } from '../Components/PlantCardPrimary';
import { Load } from '../Components/Load';
import { Header } from './Template/Header';
import { PlantProps } from '../libs/storage'
import api from '../services/api';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface EnvironmentProps {
    key: string;
    title: string;
}

export function PlantSelect() {
    
    const [environment, setEnvironment] = useState<EnvironmentProps[]>([]);
    const [plants, setPlants] = useState<PlantProps[]>([]);
    const [filteredPlants, setFilteredPlants] = useState<PlantProps[]>([]);
    const [environmentSelected, setEnvironmentSelected] = useState("all");
    const [loading, setLoading] = useState(true);

    const [page, setPage] = useState(1);
    const [loadMore, setLoadMore] = useState(false);

    const navigation = useNavigation();

    function handlePlantSelect(plant: PlantProps) {
        navigation.navigate('PlantSave', { plant });
    }

    function handleEnvironmentSelected(envValue: string) {
        setEnvironmentSelected(envValue);

        if (envValue === "all")
            return setFilteredPlants(plants);
        
        const filtered = plants.filter(plant =>
            plant.environments.includes(envValue)
        );

        setFilteredPlants(filtered);
    }

    async function fetchPlants() {
        try {
            const { data } = await api.get(`plants?_sort=name&_order=asc&_page=${page}&_limit=8`);

            if (!data) 
                return setLoading(true);
            
            if (page > 1) {
                setPlants(oldValue => [...oldValue, ...data]);
                setFilteredPlants(oldValue => [...oldValue, ...data]);
            } else {
                setPlants(data);
                setFilteredPlants(data);
            }
            setLoading(false);
            setLoadMore(false);
        } catch (error) {
            console.log(error);
        }
    }

    function handleFetchMore(distance: number) {
        if (distance < 1) {
            return;
        }

        setLoadMore(true);
        setPage(oldValue => oldValue + 1);
        fetchPlants();
    }

    /* executado antes da tela ser montada */
    useEffect(() => {
        async function fetchEnviroment() {
            try {
                const { data } = await
                    api.get("plants_environments?_sort=title&_order=asc");
                setEnvironment([{
                    key: 'all',
                    title: 'Todos'
                },
                ...data
                ]);
            } catch (error) {
                console.log(error);
            }
        }

        fetchEnviroment();
    }, []);

    useEffect(() => {
        fetchPlants();
    }, []);

    if (loading)
        return <Load/>
    
    return (
        <View style={styles.container}>

            <View style={styles.header}>

                <Header />

                <Text style={styles.title}>
                    Em qual ambiente
                </Text>
                <Text style={styles.subtitle}>
                    você quer colocar sua planta ?
                </Text>
            </View>

            <View>
                <FlatList
                    data={environment}
                    keyExtractor={(item) => String(item.key)}
                    renderItem={({ item }) => (
                        <EnvironmentButton title={item.title}
                            active={item.key === environmentSelected}
                            onPress={ () => handleEnvironmentSelected(item.key) }
                        />
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.environmentList}
                />
            </View>
              <View style={styles.plants}>
                <FlatList
                    data={filteredPlants}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({ item }) => (
                        <PlantCardPrimary data={item} onPress={() => handlePlantSelect(item)} />
                    )}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    contentContainerStyle={styles.plantsList}
                    onEndReachedThreshold={0.1}
                    onEndReached={({ distanceFromEnd }) => handleFetchMore(distanceFromEnd)}
                    ListFooterComponent={
                        loadMore 
                            ? <ActivityIndicator color={colors.purple} />
                            : <></>
                    }
                />
            </View>

        </View>
    )
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    header: {
        paddingHorizontal: 30
    },
    title: {
        color: colors.heading,
        fontFamily: fonts.heading,
        fontSize: 17,
        lineHeight: 20,
        marginTop: 15
    },
    subtitle: {
        fontSize: 17,
        lineHeight: 20,
        color: colors.heading,
        fontFamily: fonts.text,
    },
    environmentList: {
        height: 40,
        justifyContent: 'center',
        paddingBottom: 5,
        marginVertical: 32,
    },
    plants: {
        flex: 1,
        paddingHorizontal: 32,
        justifyContent: 'center'
    },
    plantsList: {
        
    }
})