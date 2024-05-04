import React, { useEffect, useState } from 'react';
import { View, Text, Pressable, Image, TouchableOpacity, Alert } from 'react-native';
import { COLORS, FONTS, ICONS, } from '../../../shared/utils/theme';
import { ScaledSheet, scale, vs } from 'react-native-size-matters';
import * as Progress from 'react-native-progress';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import useDose from '../hooks/useDose';
import moment from 'moment';
import Countdown from '../../../shared/components/Countdown';
import MedicineTakingTracker from '../../../shared/components/DoseManagement';
import { useIsFocused } from '@react-navigation/native';
import Notificatons from '../../../../Notificatons';

const Dose: React.FC<{ navigation: any }> = ({ navigation }) => {
    const isFocused = useIsFocused();
    const { t } = useTranslation();

    const {
        treatmentProgress,
        setTreatmentProgress,
        breakfastTime,
        setBreakfastTime,
        bedTimeSnack,
        setBedTimeSnack,
        dinnerTime,
        setDinnerTime,
        lunchTime,
        setLunchTime,
        savedTime,
        setSavedTime,
        fetchData,
        treatmentData,
        handleDoseCompletion,
        fetchTrackerData,
        getProgress,
        fetchSavedTimeData,
        saveSavedTimeData,
        medicineTakingData,
    } = useDose()

    useEffect(() => {
        fetchData();
        fetchTrackerData();
    }, [isFocused]);

    useEffect(() => {
        fetchSavedTimeData();
    }, [treatmentData]);

    const setNotifications = (reminder: string, dates: any) => {
        if (!!dates) {
            const [hour, minute, meridiem] = dates.match(/(\d{2}):(\d{2}) (AM|PM)/).slice(1);
            const hourIn24Format = meridiem === "PM" ? parseInt(hour) + 12 : parseInt(hour);

            const date = new Date();
            date.setHours(hourIn24Format);
            date.setMinutes(parseInt(minute));
            date.setSeconds(0);

            Notificatons.scheduleNotification({ reminder: reminder, date: date })
        }
        else {
            Alert.alert('Please select yout dose timings.')
        }
    }

    return (
        <View style={{ flex: 1, backgroundColor: COLORS.primary }}>
            <View style={{ flex: 1, borderRadius: 30, marginTop: 40 }}>
                <View style={{ flex: 1, backgroundColor: COLORS.white, borderRadius: 30, padding: 20, }}>
                    <Pressable onPress={() => navigation.goBack()} style={{ alignSelf: i18next.language === "ar" ? "flex-start" : "flex-end", }}><Text style={{ fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.bold, color: COLORS.primary, fontSize: vs(13) }}>{t('back')}</Text></Pressable>
                    {/* <Pressable onPress={() => setNotifications()} style={{ alignSelf: i18next.language === "ar" ? "flex-start" : "flex-end", }}><Text style={{ fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.bold, color: COLORS.primary, fontSize: vs(13) }}>{t('noti')}</Text></Pressable> */}
                    <View style={[styles.block, { flexDirection: i18next.language === "ar" ? 'row-reverse' : "row", backgroundColor: '#ebf1fa' }]}>
                        <Text style={{ fontSize: i18next.language === "ar" ? vs(14) : vs(16), width: 130, height: vs(55), color: COLORS.secondary, fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.semibold, }}>{t('your-treatment')}</Text>
                        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                            <View style={{ width: 70, height: 70, borderRadius: 100, backgroundColor: COLORS.white, alignItems: "center", justifyContent: "center" }}>
                                <Progress.Circle progress={getProgress() / 10} borderWidth={1} size={70} borderColor={String(COLORS.white)} thickness={7} showsText textStyle={{ fontFamily: FONTS.bold, color: String(COLORS.secondary), fontSize: vs(16) }} color={String(COLORS.primary)} />
                            </View>
                        </View>
                    </View>
                    <View>
                    </View>
                    <View style={[styles.block, { flexDirection: i18next.language === "ar" ? 'row-reverse' : "row", backgroundColor: COLORS.secondary }]}>
                        <Text style={{ fontSize: vs(16), width: 130, height: vs(55), color: COLORS.white, fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.semibold }}>{t('next-dose')}</Text>
                        <Countdown savedTime={savedTime} />
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('Track')} style={[styles.block, { flexDirection: i18next.language === "ar" ? 'row-reverse' : "row", backgroundColor: COLORS.primary }]}>
                        <Text style={{ fontSize: vs(16), color: COLORS.secondary, fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.semibold, }}>{t('day-progressed')}</Text>
                        <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "center", flex: 1, }}>
                            <Text style={{ fontFamily: FONTS.bold, color: COLORS.white, fontSize: vs(32) }}>{medicineTakingData.length > 0 ? medicineTakingData[0]?.day.toString().padStart(2, '0') : ''}</Text>
                            <View style={{ width: 2, height: vs(47), backgroundColor: COLORS.black, marginHorizontal: scale(8) }} />
                            <Text style={{ fontFamily: FONTS.bold, color: COLORS.white, fontSize: vs(32) }}>10</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{ backgroundColor: COLORS.white, }}>
                        <View style={{ flexDirection: "row", alignSelf: i18next.language === "ar" ? "flex-end" : "flex-start" }}>
                            <Text style={{ fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.semibold, color: COLORS.primary, fontSize: vs(16), textAlign: i18next.language === "ar" ? 'right' : 'left' }}>{t('todays')}</Text>
                        </View>
                        <MedicineTakingTracker
                            breakfastTime={breakfastTime}
                            setBreakfastTime={setBreakfastTime}
                            lunchTime={lunchTime}
                            setLunchTime={setLunchTime}
                            dinnerTime={dinnerTime}
                            setDinnerTime={setDinnerTime}
                            bedTimeSnack={bedTimeSnack}
                            setBedTimeSnack={setBedTimeSnack}
                            handleDoseCompletion={handleDoseCompletion}
                            setSavedTime={saveSavedTimeData}
                            treatmentData={treatmentData}
                            setNotifications={setNotifications}
                        />
                    </View>
                </View>
            </View >
        </View >
    );
};


const styles = ScaledSheet.create({
    block: {

        paddingHorizontal: '20@s',
        width: '100%',
        height: '70@vs',
        borderRadius: '16@s',
        alignItems: "center",
        marginVertical: '5@vs',
        justifyContent: "space-between"
    },
    secondaryblock: {

        paddingHorizontal: '10@s',
        width: '100%',
        height: '48@vs',
        borderRadius: '14@s',
        alignItems: "center",
        marginVertical: '5@vs',
        backgroundColor: COLORS.acrylic
    },

});

export default Dose;
