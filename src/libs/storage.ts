import AsyncStorage from '@react-native-async-storage/async-storage';
import { format } from 'date-fns';
import * as Google from 'expo-google-app-auth';

export interface PlantProps {
    id: string;
    name: string;
    about: string;
    water_tips: string;
    photo: string;
    environments: [string];
    frequency: {
        times: number;
        repeat_every: string;
    },
    dateTimeNotification: Date;
    hour: string;
}

export interface UserProps {
    id?: string;
    familyName?: string;
    givenName?: string;
    name: string;
    photoUrl?: string;
}

export interface StoragePlantProps {
    [id: string]: {
        data: PlantProps
    }
}

export async function savePlant(plant: PlantProps): Promise<void> {
    try {

        const data = await AsyncStorage.getItem('@iplant:plants');
        const oldPlants = data ? (JSON.parse(data) as StoragePlantProps) : {};

        const newPlant = {
            [plant.id]: {
                data: plant
            }
        }

        // pega as plantas que ja estavao na colecao
        // adiciona a nova planta salva
        await AsyncStorage.setItem('@iplant:plants',
            JSON.stringify({
                ...newPlant,
                ...oldPlants
            })
        );
    } catch (error) {
        console.log(error);
    }
}

export async function loadPlant(): Promise<PlantProps[]> {
    try {
        const data = await AsyncStorage.getItem('@iplant:plants');
        const plants = data ? (JSON.parse(data) as StoragePlantProps) : {} as StoragePlantProps;

        const plantsSorted = Object
            .keys(plants)
            .map((plant) => {
                return {
                    ...plants[plant].data,
                    hour: format(new Date(plants[plant].data.dateTimeNotification), 'HH:mm')
                }
            })
            .sort((a, b) =>
                Math.floor(
                    new Date(a.dateTimeNotification).getTime() / 1000 -
                    Math.floor(new Date(b.dateTimeNotification).getTime() / 1000)
                )
            );

        return plantsSorted;
    } catch (error) {
        console.log(error);

    }
}

export async function removePlant(id: string): Promise<void> {
    try {
        const data = await AsyncStorage.getItem('@iplant:plants');
        const plants = data ? (JSON.parse(data) as StoragePlantProps) : {};
        delete plants[id];
        await AsyncStorage.setItem(
            '@iplant:plants',
            JSON.stringify(plants)
        );
    } catch (error) {
        console.log(error);

    }
}

export async function saveUser(user: Google.GoogleUser): Promise<void> {
    try {
        await AsyncStorage.setItem('@iplant:user', JSON.stringify(user));
        const data = await AsyncStorage.getItem('@iplant:user');
    } catch (error) {
        console.log(error);
    }
}
export async function getUser(): Promise<Google.GoogleUser> {
    try {
        const data = await AsyncStorage.getItem('@iplant:user');
        return data ? (JSON.parse(data) as Google.GoogleUser) : {} as Google.GoogleUser;
    } catch (error) {
        console.log(error);
    }
}