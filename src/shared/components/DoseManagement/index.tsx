// import React, { useState } from 'react';
// import { View, Text } from 'react-native';
// import { Button } from 'react-native';

// interface MedicineDose {
//     breakfast: boolean;
//     lunch: boolean;
//     dinner: boolean;
//     bedtimeSnack: boolean;
// }

// interface MedicineTakingData {
//     day: number;
//     data: MedicineDose;
// }

// const MedicineTakingTracker: React.FC = () => {
//     const [medicineTakingData, setMedicineTakingData] = useState<MedicineTakingData[]>(() => {
//         const initialData: MedicineTakingData[] = [];
//         for (let i = 0; i < 10; i++) {
//             initialData.push({
//                 day: i + 1,
//                 data: {
//                     breakfast: false,
//                     lunch: false,
//                     dinner: false,
//                     bedtimeSnack: false,
//                 },
//             });
//         }
//         return initialData;
//     });

//     const handleDoseCompletion = (day: number, dose: keyof MedicineDose) => {
//         setMedicineTakingData((prevData) => {
//             const dayData = prevData.find((d) => d.day === day);
//             if (dayData) {
//                 dayData.data[dose] = true;
//                 return [...prevData];
//             } else {
//                 return prevData;
//             }
//         });
//     };

//     const getProgress = () => {
//         const completedDoses = medicineTakingData.reduce((acc, data) => {
//             const completedDosesForDay = Object.values(data.data).filter((d) => d).length;
//             return acc + completedDosesForDay;
//         }, 0);
//         return completedDoses / (10 * 4);
//     };

//     return (
//         <View>
//             {medicineTakingData.map((data: MedicineTakingData) => (
//                 <View key={data.day}>
//                     <Text>Day {data.day}</Text>
//                     <Text>Breakfast: {data.data.breakfast ? 'Completed' : 'Not Completed'}</Text>
//                     <Text>Lunch: {data.data.lunch ? 'Completed' : 'Not Completed'}</Text>
//                     <Text>Dinner: {data.data.dinner ? 'Completed' : 'Not Completed'}</Text>
//                     <Text>Bedtime Snack: {data.data.bedtimeSnack ? 'Completed' : 'Not Completed'}</Text>
//                     <Button
//                         title="Mark as Completed"
//                         onPress={() => handleDoseCompletion(data.day, 'breakfast')}
//                     />
//                     {/* Add buttons for other doses */}
//                 </View>
//             ))}
//             <Text>Progress: {getProgress() * 100}%</Text>
//         </View>
//     );
// };

// export default MedicineTakingTracker;

import React, { useState, useEffect } from 'react';
import { View, Text, Button, TouchableOpacity, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import i18next, { t } from 'i18next';
import { COLORS, FONTS, ICONS } from '../../utils/theme';
import { ScaledSheet, scale, vs } from 'react-native-size-matters';
import { ITreatmentData } from '../../../screens/app/hooks/useTreatment';

interface MedicineDose {
    breakfast: boolean;
    lunch: boolean;
    dinner: boolean;
    bedtimeSnack: boolean;
}

interface MedicineTakingData {
    day: number;
    data: MedicineDose;
}

type TrackerProps = {
    breakfastTime: number;
    setBreakfastTime: (count: number) => void;
    bedTimeSnack: number;
    setBedTimeSnack: (count: number) => void;
    dinnerTime: number;
    setDinnerTime: (count: number) => void;
    lunchTime: number;
    setLunchTime: (count: number) => void;
    handleDoseCompletion: (day: number, dose: keyof MedicineDose) => void;
    setSavedTime: (time: string) => void;
    treatmentData: ITreatmentData;
}

const MedicineTakingTracker: React.FC<TrackerProps> = ({ breakfastTime, setBreakfastTime, lunchTime, setLunchTime, dinnerTime, setDinnerTime, bedTimeSnack, setBedTimeSnack, handleDoseCompletion, setSavedTime, treatmentData }) => {
    console.log('MedicineTakingTracker component===>', treatmentData)
    return (
        <View>
            <View style={[styles.secondaryblock, { flexDirection: i18next.language === "ar" ? 'row-reverse' : "row", }]}>
                <View style={{ flex: 1, flexDirection: i18next.language === "ar" ? 'row-reverse' : 'row', alignItems: "center", justifyContent: "space-between", }}>
                    <View style={{ flexDirection: i18next.language === "ar" ? 'row-reverse' : 'row', alignItems: "center", justifyContent: "center" }}>
                        <Image source={ICONS.breakfast_time} />
                        <Text style={{ fontSize: vs(13), fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.bold, color: COLORS.secondary, marginLeft: scale(8) }}>{t('bf-time')}</Text>
                    </View>
                </View>
                <View style={{ flex: 1, alignItems: i18next.language === "ar" ? 'flex-start' : "flex-end" }}>
                    <TouchableOpacity style={{ backgroundColor: breakfastTime === 2 ? COLORS.primary : breakfastTime === 1 ? '#b0120f' : breakfastTime === 0 ? '#b9bbb7' : COLORS.primary, width: scale(100), height: vs(25), borderRadius: 8, alignItems: "center", justifyContent: "center", marginVertical: 5 }}
                        onPress={() => { setBreakfastTime(breakfastTime + 1), setLunchTime(1), handleDoseCompletion(1, 'breakfast'), setSavedTime(treatmentData.selectLunchTime) }}
                    >
                        <Text style={{ color: COLORS.white, fontSize: i18next.language === "ar" ? vs(11) : vs(11), fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.bold }}>{breakfastTime === 1 ? t('not-taken') : breakfastTime === 2 ? t('taken') : breakfastTime === 0 ? t('wait-for-time') : t('taken')}</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={[styles.secondaryblock, { flexDirection: i18next.language === "ar" ? 'row-reverse' : "row", }]}>
                <View style={{ flex: 1, flexDirection: i18next.language === "ar" ? 'row-reverse' : 'row', alignItems: "center", justifyContent: "space-between", }}>
                    <View style={{ flexDirection: i18next.language === "ar" ? 'row-reverse' : 'row', alignItems: "center", justifyContent: "center" }}>
                        <Image source={ICONS.lunch_time} />
                        <Text style={{ fontSize: vs(13), fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.bold, color: COLORS.secondary, marginLeft: scale(8) }}>{t('l-time')}</Text>
                    </View>
                </View>
                <View style={{ flex: 1, alignItems: i18next.language === "ar" ? 'flex-start' : "flex-end" }}>
                    <TouchableOpacity disabled={lunchTime === 0 ? true : false} style={{ backgroundColor: lunchTime === 2 ? COLORS.primary : lunchTime === 1 ? '#b0120f' : lunchTime === 0 ? '#b9bbb7' : COLORS.primary, width: scale(100), height: vs(25), borderRadius: 8, alignItems: "center", justifyContent: "center", marginVertical: 5 }}
                        onPress={() => { setLunchTime(lunchTime + 1), setDinnerTime(1), handleDoseCompletion(1, 'lunch'), setSavedTime(treatmentData.selectDinnerTime) }}
                    >
                        <Text style={{ color: COLORS.white, fontSize: i18next.language === "ar" ? vs(11) : vs(11), fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.bold }}>{lunchTime === 1 ? t('not-taken') : lunchTime === 2 ? t('taken') : lunchTime === 0 ? t('wait-for-time') : t('taken')}</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={[styles.secondaryblock, { flexDirection: i18next.language === "ar" ? 'row-reverse' : "row", }]}>
                <View style={{ flex: 1, flexDirection: i18next.language === "ar" ? 'row-reverse' : 'row', alignItems: "center", justifyContent: "space-between", }}>
                    <View style={{ flexDirection: i18next.language === "ar" ? 'row-reverse' : 'row', alignItems: "center", justifyContent: "center" }}>
                        <Image source={ICONS.breakfast_time} />
                        <Text style={{ fontSize: vs(13), fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.bold, color: COLORS.secondary, marginLeft: scale(8) }}>{t('d-time')}</Text>
                    </View>
                </View>
                <View style={{ flex: 1, alignItems: i18next.language === "ar" ? 'flex-start' : "flex-end" }}>
                    <TouchableOpacity disabled={dinnerTime === 0 ? true : false} style={{ backgroundColor: dinnerTime === 2 ? COLORS.primary : dinnerTime === 1 ? '#b0120f' : dinnerTime === 0 ? '#b9bbb7' : COLORS.primary, width: scale(100), height: vs(25), borderRadius: 8, alignItems: "center", justifyContent: "center", marginVertical: 5 }}
                        onPress={() => { setDinnerTime(dinnerTime + 1), setBedTimeSnack(1), handleDoseCompletion(1, 'dinner'), setSavedTime(treatmentData.selectBedTimeSnackTime) }}
                    >
                        <Text style={{ color: COLORS.white, fontSize: i18next.language === "ar" ? vs(11) : vs(11), fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.bold }}>{dinnerTime === 1 ? t('not-taken') : dinnerTime === 2 ? t('taken') : dinnerTime === 0 ? t('wait-for-time') : t('taken')}</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={[styles.secondaryblock, { flexDirection: i18next.language === "ar" ? 'row-reverse' : "row", }]}>
                <View style={{ flex: 1, flexDirection: i18next.language === "ar" ? 'row-reverse' : 'row', alignItems: "center", justifyContent: "space-between", }}>
                    <View style={{ flexDirection: i18next.language === "ar" ? 'row-reverse' : 'row', alignItems: "center", justifyContent: "center" }}>
                        <Image source={ICONS.breakfast_time} />
                        <Text style={{ fontSize: vs(13), fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.bold, color: COLORS.secondary, marginLeft: scale(8) }}>{t('bd-time')}</Text>
                    </View>
                </View>
                <View style={{ flex: 1, alignItems: i18next.language === "ar" ? 'flex-start' : "flex-end" }}>
                    <TouchableOpacity disabled={bedTimeSnack === 0 ? true : false} style={{ backgroundColor: bedTimeSnack === 2 ? COLORS.primary : bedTimeSnack === 1 ? '#b0120f' : bedTimeSnack === 0 ? '#b9bbb7' : COLORS.primary, width: scale(100), height: vs(25), borderRadius: 8, alignItems: "center", justifyContent: "center", marginVertical: 5 }}
                        onPress={() => { setBedTimeSnack(bedTimeSnack + 1), handleDoseCompletion(1, 'bedtimeSnack'), setSavedTime(treatmentData.selectBreakFastTime) }}
                    >
                        <Text style={{ color: COLORS.white, fontSize: i18next.language === "ar" ? vs(11) : vs(11), fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.bold }}>{bedTimeSnack === 1 ? t('not-taken') : bedTimeSnack === 2 ? t('taken') : bedTimeSnack === 0 ? t('wait-for-time') : t('taken')}</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {/* <Text>Progress: {getProgress() * 100}%</Text> */}
        </View>
    );
};

export default MedicineTakingTracker;


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