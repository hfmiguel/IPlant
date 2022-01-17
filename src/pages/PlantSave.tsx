import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    Platform,
    TouchableOpacity
} from 'react-native';

import { SvgFromUri } from 'react-native-svg'
import { Toasts } from "../Components/Toast";
import { Button } from '../Components/Button';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { useNavigation, useRoute } from '@react-navigation/core';
import DateTimePicker, { Event } from '@react-native-community/datetimepicker';
import { PlantProps, savePlant, loadPlant } from '../libs/storage'
import { format, isBefore } from 'date-fns';

import waterDrop from '../assets/waterdrop.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface Params {
    plant: PlantProps
}

export function PlantSave() {
    const navigation = useNavigation();

    const [selectedDateTime, setSelectedDateTime] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(Platform.OS === 'ios');
    const [isToastActive, setIsToastActive] = useState(false);

    const route = useRoute();
    const { plant } = route.params as Params;

    function handleViewToast(value: boolean) {
        setIsToastActive(value);
    }

    function handleChangeTime(event: Event, dateTime: Date | undefined) {

        if (Platform.OS == 'android') {
            setShowDatePicker(oldState => !oldState);
        }

        /* verifica se tem uma data sendo passada e se a data passada eh menor que a atual */
        if (dateTime && isBefore(dateTime, new Date())) {
            setSelectedDateTime(new Date());
            return Toasts({
                type: "error",
                title: "⏱",
                content: "Escolha um horario um pouco mais tarde",
                position: "top",
                onHide: () => handleViewToast(false),
                onShow: () => handleViewToast(true),
            });
        }

        if (dateTime) {
            setSelectedDateTime(dateTime);
        }
    }

    function handleOpenDatetimePickerForAndroid() {
        setShowDatePicker(oldState => !oldState);
    }

    function handleNextScreen() {
        navigation.navigate('MyPlants');
    }

    async function handleSave() {

        const data = await loadPlant();

        try {

            await savePlant({
                ...plant,
                dateTimeNotification: selectedDateTime
            }).then(() => {
                Toasts({
                    type: "success",
                    title: "Pronto 🤩!",
                    content: "Sua plantinha foi salva.Você receberá uma notificação para lembra-lo(a) de rega-la",
                    position: "top",
                    onHide: () => { handleViewToast(false); handleNextScreen() },
                    onShow: () => handleViewToast(true),
                });
            });
        } catch (error) {
            return Toasts({
                type: "error",
                title: "Ops! 😯",
                content: "Falha ao salvar sua planta.Tente novamente por favor",
                position: "top",
                onHide: () => handleViewToast(false),
                onShow: () => handleViewToast(true),
            });
        }
    }

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.container}
        >
            <View style={styles.container}>
                <View style={styles.plantInfo}>
                    <SvgFromUri
                        uri={plant.photo}
                        height={150}
                        width={150} />

                    <Text style={styles.plantName}>
                        {plant.name}
                    </Text>
                    <Text style={styles.plantAbout}>
                        {plant.about}
                    </Text>
                </View>

                <View style={styles.controller}>
                    <View style={styles.tipsContainer}>
                        <Image source={waterDrop} style={styles.tipImage} />
                        <Text style={styles.tipText}>
                            {plant.water_tips}
                        </Text>
                    </View>

                    <Text style={styles.alertLabel}>
                        Ecolha o melhor horário para ser lembrado:
                    </Text>

                    {showDatePicker &&
                        <DateTimePicker
                            value={selectedDateTime}
                            mode='time'
                            display='default'
                            onChange={handleChangeTime}
                        />
                    }

                    {
                        Platform.OS === 'android' && (
                            <TouchableOpacity style={styles.dateTimePickerButton} onPress={handleOpenDatetimePickerForAndroid}>
                                <Text style={styles.dateTimePickerText}>
                                    {`Horário ${format(selectedDateTime, 'HH:mm')}`}
                                </Text>
                            </TouchableOpacity>
                        )
                    }

                    <Button
                        title={'Cadastrar planta'}
                        onPress={handleSave}
                    />
                </View>
            </View>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        backgroundColor: colors.shape,
    },
    plantInfo: {
        flex: 1,
        paddingHorizontal: 30,
        paddingVertical: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.shape,
    },
    plantName: {
        fontFamily: fonts.heading,
        fontSize: 24,
        color: colors.heading,
        marginTop: 15,
    },
    plantAbout: {
        textAlign: 'center',
        fontFamily: fonts.text,
        color: colors.heading,
        fontSize: 17,
        marginTop: 10,
    },
    controller: {
        backgroundColor: colors.white,
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: getBottomSpace() || 20,
    },
    tipsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.purple_light,
        borderColor: colors.purple_dark,
        borderWidth: 1,
        padding: 20,
        borderRadius: 20,
        position: 'relative',
        bottom: 70,
    },
    tipImage: {
        width: 56,
        height: 56,
    },
    tipText: {
        flex: 1,
        marginLeft: 20,
        fontFamily: fonts.text,
        color: colors.white,
        fontSize: 17,
        textAlign: 'center',
    },
    alertLabel: {
        textAlign: 'center',
        fontFamily: fonts.complement,
        color: colors.heading,
        fontSize: 12,
        marginBottom: 5
    },
    dateTimePickerButton: {
        backgroundColor: colors.shape,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        height: 56,
        paddingVertical: 20,
        marginTop: 20,
        marginBottom: 20,
    },
    dateTimePickerText: {
        color: colors.heading,
        fontSize: 24,
        fontFamily: fonts.text
    }

});