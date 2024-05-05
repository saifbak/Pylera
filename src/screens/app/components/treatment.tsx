// screens/DetailsScreen.tsx
import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, Button, TouchableOpacity, Image, Pressable, FlatList, Alert } from 'react-native';
import Swiper from 'react-native-swiper';
import { COLORS, FONTS, ICONS } from '../../../shared/utils/theme';
import { ScaledSheet, scale, vs } from 'react-native-size-matters';
import CheckBox from '@react-native-community/checkbox';
import ReactNativeModal from 'react-native-modal';
import AlertModal from '../../../shared/components/AlertModal';
import useTreatment from '../hooks/useTreatment';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
const detailsContent = [
    'Detail 1',
    'Detail 2',
    'Detail 3',
    'Detail 4',
];

const Treatment: React.FC<{ navigation: any }> = ({ navigation }) => {
    const { t } = useTranslation();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [toggleCheckBox, setToggleCheckBox] = useState<boolean>(false);
    const [toggleCheckBox2, setToggleCheckBox2] = useState<boolean>(false);
    const [proceed, setProceed] = useState<boolean>(false);
    const [agree, setAgree] = useState<boolean>(false);
    const [confirmation, setConfirmation] = useState<boolean>(false);
    const [visible, setVisible] = useState<boolean>(false);
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const {
        fetchData,
        selectDate,
        setSelectDate,
        selectTime,
        setSelectTime,
        selectBreakFastTime,
        setSelectBreakFastTime,
        selectLunchTime,
        setSelectLunchTime,
        selectDinnerTime,
        setSelectDinnerTime,
        selectBedTimeSnackTime,
        setSelectBedTimeSnackTime,
        treatmentData,
        setTreatmentData,
        saveTreatmentData,

    } = useTreatment()


    const monthNames: string[] = [
        'January', 'February', 'March', 'April',
        'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December'
    ];

    // Get the current date
    const currentDate = new Date();

    // Get the current month index
    const currentMonthIndex = currentDate.getMonth();

    // Get the current month name
    const currentMonth = monthNames[currentMonthIndex];

    // Get the current year
    const currentYear = currentDate.getFullYear();

    function getDaysOfMonth(month: number, year: number): { day: string; date: number }[] {
        const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

        const days: { day: string; date: number }[] = [];

        // Create a Date object for the first day of the month
        const firstDayOfMonth = new Date(year, month - 1, 1);

        // Get the number of days in the month
        const lastDayOfMonth = new Date(year, month, 0).getDate();

        // Iterate through each day of the month
        for (let day = 1; day <= lastDayOfMonth; day++) {
            const currentDate = new Date(year, month - 1, day);
            const dayOfWeek = daysOfWeek[currentDate.getDay()];
            days.push({ day: dayOfWeek, date: day });
        };

        return days;
    };

    const daysOfMonth = getDaysOfMonth(currentMonthIndex + 1, currentYear);


    interface TimeSlot {
        hour: number;
        minute: number;
        formattedTime: string;
    }

    function generate24HourClock(): TimeSlot[] {
        const timeSlots: TimeSlot[] = [];

        for (let hour = 0; hour < 24; hour++) {
            for (let minute = 0; minute < 60; minute += 30) {
                const isAM = hour < 12;
                const formattedHour = (hour % 12 === 0 ? 12 : hour % 12).toString().padStart(2, '0');
                const formattedMinute = minute.toString().padStart(2, '0');
                const period = isAM ? 'AM' : 'PM';
                const formattedTime = `${formattedHour}:${formattedMinute} ${period}`;

                timeSlots.push({ hour, minute, formattedTime });
            }
        }

        return timeSlots;
    }

    // Example usage:
    const clockArray = generate24HourClock();

    const handleNext = () => {
        if (currentIndex < detailsContent.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
        else {
            navigation.navigate('Home');
            setCurrentIndex(0);
            setProceed(false)
            setConfirmation(false)
            setToggleCheckBox(false)
            setToggleCheckBox2(false)
            setSelectTime('')
            setSelectDate(0)
            setSelectBreakFastTime('')
            setSelectLunchTime('')
            setSelectDinnerTime('')
            setSelectBedTimeSnackTime('')
        }
    };

    const handleModal = useCallback(() => {
        setVisible(true)
    }, []);
    const handleProceedModal = useCallback(() => {
        setIsVisible(true)
    }, []);

    const handleGoBack = () => {
        setCurrentIndex(0);
        navigation.navigate('Home');
    };
    const handleModalPressed = useCallback(() => {
        setVisible(false);
        setProceed(true);
    }, [visible]);

    const handleProceedModalPressed = useCallback(() => {
        handleSaveAllTimesToStore()
        setIsVisible(false);
        handleNext()
    }, [isVisible]);

    const handleSaveDateTime = useCallback(() => {
        if (!treatmentData.selectDate && !treatmentData.selectTime) {
            return Alert.alert('Please select date and time to proceed');
        }
        else {
            return handleNext();
        }
    }, [treatmentData.selectDate, treatmentData.selectTime]);

    const handleSaveAllTimesToStore = useCallback(() => {
        const updatedTreatmentData = { ...treatmentData, ...treatmentData };
        saveTreatmentData(updatedTreatmentData);

    }, [selectBreakFastTime, selectLunchTime, selectDinnerTime, selectBedTimeSnackTime]);

    console.log(treatmentData);

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <View style={{ flex: 1, backgroundColor: COLORS.primary }}>
            <AlertModal isVisible={visible} setVisible={setVisible} title={t('alert')} text={t('alart-para-1')} onPress={handleModalPressed} />
            <AlertModal isVisible={isVisible} setVisible={setIsVisible} title={t('alert')} text={t('alart-para-2')} onPress={handleProceedModalPressed} />
            <View style={{ flex: 1, borderRadius: 30, marginTop: 40 }}>
                {proceed === false ?
                    <>
                        <View style={{ flex: 1, backgroundColor: COLORS.white, borderRadius: 30, paddingHorizontal: 30, }}>
                            <Pressable onPress={() => navigation.goBack()} style={{ alignSelf: i18next.language === "ar" ? "flex-start" : "flex-end", marginTop: 15 }}><Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.semibold, color: COLORS.primary, fontSize: vs(13) }}>{t('back')}</Text></Pressable>
                            <Image source={ICONS.caution} style={{ width: scale(280), height: vs(160), resizeMode: "contain", alignSelf: "center", marginVertical: vs(20) }} />
                            <View style={{ flexDirection: "row", marginTop: 5 }}>
                                <Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.h1, color: COLORS.secondary, fontSize: vs(12), textAlign: i18next.language === 'ar' ? 'right' : "justify" }}>{t('agreement2')}</Text>
                            </View>
                            <View style={{ flexDirection: i18next.language === 'ar' ? 'row-reverse' : "row", alignItems: "center", marginTop: 30 }}>
                                <CheckBox
                                    disabled={false}
                                    value={toggleCheckBox}
                                    onValueChange={(newValue) => setToggleCheckBox(newValue)}
                                    onCheckColor={String(COLORS.primary)}
                                    onFillColor={String(COLORS.primary)}
                                    onTintColor={String(COLORS.primary)}
                                    tintColors={{
                                        true: COLORS.primary
                                    }}
                                />
                                <Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.normal, color: COLORS.secondary, fontSize: vs(12), }}>{t('agree')}</Text>
                            </View>
                            <View style={{ width: scale(120), alignSelf: "center", alignItems: "center", marginTop: vs(50) }}>
                                <TouchableOpacity
                                    disabled={!toggleCheckBox}
                                    style={{ backgroundColor: toggleCheckBox === true ? COLORS.primary : COLORS.gray, width: scale(180), height: vs(25), borderRadius: 50, alignItems: "center", justifyContent: "center", marginVertical: 5 }}
                                    onPress={handleModal}>
                                    <Text style={{ color: COLORS.white, fontSize: vs(11), fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.bold }}>{t('proceed')} </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </>
                    : proceed === true && confirmation === false ?
                        <>
                            <View style={{ flex: 1, backgroundColor: COLORS.white, borderRadius: 30, paddingHorizontal: 30, alignItems: i18next.language === 'ar' ? 'flex-end' : 'flex-start' }}>
                                <Pressable onPress={() => navigation.goBack()} style={{ alignSelf: i18next.language === "ar" ? "flex-start" : "flex-end", marginTop: 15 }}><Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.semibold, color: COLORS.primary, fontSize: vs(13) }}>{t('back')}</Text></Pressable>
                                <Image source={ICONS.caution} style={{ width: scale(200), height: vs(100), resizeMode: "contain", alignSelf: "center", }} />
                                <View style={{ flexDirection: "row", marginTop: vs(10), marginBottom: i18next.language === 'ar' ? 5 : 0 }}>
                                    <Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.bold : FONTS.h1, color: COLORS.secondary, fontSize: vs(13), }}>{t('medical-heading')}</Text>
                                    <Text style={{
                                        fontFamily: FONTS.h1, color: COLORS.secondary,
                                        fontSize: vs(8),
                                        lineHeight: 20,
                                        textAlignVertical: 'top',
                                        marginLeft: 1
                                    }}>18
                                    </Text>
                                </View>
                                <Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.normal, color: COLORS.secondary, fontSize: vs(11), textAlign: i18next.language === 'ar' ? 'right' : "justify", marginBottom: i18next.language === 'ar' ? 5 : 0 }}><Text style={{ color: COLORS.secondary }}>• </Text>{t('medical-li-1')}</Text>
                                <Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.normal, color: COLORS.secondary, fontSize: vs(11), textAlign: i18next.language === 'ar' ? 'right' : "justify", marginBottom: i18next.language === 'ar' ? 5 : 0 }}><Text style={{ color: COLORS.secondary }}>• </Text>{t('medical-li-2')}</Text>
                                <Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.normal, color: COLORS.secondary, fontSize: vs(11), textAlign: i18next.language === 'ar' ? 'right' : "justify", marginBottom: i18next.language === 'ar' ? 5 : 0 }}><Text style={{ color: COLORS.secondary }}>• </Text>{t('medical-li-3')}</Text>
                                <Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.normal, color: COLORS.secondary, fontSize: vs(11), textAlign: i18next.language === 'ar' ? 'right' : "justify", marginBottom: i18next.language === 'ar' ? 5 : 0 }}><Text style={{ color: COLORS.secondary }}>• </Text>{t('medical-li-4')}</Text>
                                <Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.normal, color: COLORS.secondary, fontSize: vs(11), textAlign: i18next.language === 'ar' ? 'right' : "justify", marginBottom: i18next.language === 'ar' ? 5 : 0 }}><Text style={{ color: COLORS.secondary }}>• </Text>{t('medical-li-5')}</Text>
                                <Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.normal, color: COLORS.secondary, fontSize: vs(11), textAlign: i18next.language === 'ar' ? 'right' : "justify", marginBottom: i18next.language === 'ar' ? 5 : 0 }}><Text style={{ color: COLORS.secondary }}>• </Text>{t('medical-li-6')}</Text>
                                <View style={{ width: scale(120), marginTop: vs(40), alignSelf: "center", alignItems: "center" }}>
                                    <TouchableOpacity
                                        // disabled={!toggleCheckBox}
                                        style={{ backgroundColor: COLORS.primary, width: scale(180), height: vs(25), borderRadius: 50, alignItems: "center", justifyContent: "center", marginVertical: 5 }}
                                        onPress={() => setConfirmation(true)}  >
                                        <Text style={{ color: COLORS.white, fontSize: vs(11), fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.bold }}>{t('proceed')}</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </>
                        :
                        <>
                            <Swiper
                                scrollEnabled={false}
                                loop={false}
                                index={currentIndex}
                                showsPagination={false}
                                onIndexChanged={(index) => setCurrentIndex(index)}>
                                {detailsContent.map((detail, index) => (
                                    <View key={index.toString()} style={{ flex: 1, }}>
                                        {index === 0 ?
                                            <View style={{ flex: 1, backgroundColor: COLORS.white, borderRadius: 30, padding: 20, }}>
                                                <Pressable onPress={() => navigation.goBack()} style={{ alignSelf: i18next.language === "ar" ? "flex-start" : "flex-end", marginVertical: 5 }}><Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.semibold, color: COLORS.primary, fontSize: vs(13) }}>{t('skip')}</Text></Pressable>
                                                <View style={{ backgroundColor: COLORS.yellow, borderColor: COLORS.secondary, borderWidth: 2, height: vs(450), width: '90%', alignSelf: "center" }}>
                                                    <View style={{ flex: 1, backgroundColor: COLORS.white }}>

                                                    </View>
                                                    <View style={{ flex: 2.3, backgroundColor: COLORS.primary }}>
                                                    </View>
                                                    <Image source={ICONS.family} style={{ position: "absolute", top: 45, width: scale(250), height: 210, resizeMode: "contain", alignSelf: "center" }} />
                                                    <Image source={ICONS.playbutton} style={{ position: "absolute", top: 220, width: scale(70), height: 100, resizeMode: "contain", alignSelf: "center" }} />
                                                </View>
                                            </View>
                                            : index === 1 ?
                                                <>
                                                    <View style={{ flex: .65, paddingHorizontal: 20, alignItems: "center", justifyContent: "center" }}>
                                                        <Image source={ICONS.date} style={{ width: scale(300), height: vs(250), resizeMode: "contain", marginTop: -50 }} />
                                                    </View>
                                                    <View style={{ flex: 1, backgroundColor: COLORS.white, borderRadius: 30, padding: 20, }}>
                                                        <Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.normal, color: COLORS.secondary, fontSize: vs(11.5), textAlign: i18next.language === 'ar' ? 'right' : "justify", marginTop: -8, marginBottom: i18next.language === 'ar' ? 5 : 0 }}>{t('date-time-para')}</Text>
                                                        <Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.bold, color: COLORS.secondary, fontSize: vs(11.5), textAlign: i18next.language === 'ar' ? 'right' : "justify", marginBottom: -5 }}>{t('date-time-heading')}</Text>
                                                        <Text style={styles.month}>{i18next.language === "ar" ? "" : `${currentMonth}, ${currentYear}`}</Text>
                                                        <FlatList
                                                            contentContainerStyle={{ height: vs(55), }}
                                                            showsHorizontalScrollIndicator={false}
                                                            data={daysOfMonth}
                                                            keyExtractor={(_, key_index) => key_index.toString()}
                                                            renderItem={({ item, index }) => {
                                                                return (
                                                                    <TouchableOpacity
                                                                        key={index.toString()}
                                                                        onPress={() => { setSelectDate(item?.date), setTreatmentData({ ...treatmentData, selectDate: item?.date }) }}
                                                                        style={[styles.dateView, { backgroundColor: item?.date === treatmentData.selectDate ? COLORS.primary : COLORS.white }]}
                                                                    >
                                                                        <Text style={[styles.day, { color: item?.date === treatmentData.selectDate ? COLORS.white : COLORS.borderColor }]}>{item?.day.slice(0, 3)}</Text>
                                                                        <Text style={[styles.date, { color: item?.date === treatmentData.selectDate ? COLORS.white : COLORS.borderColor }]}>{item?.date}</Text>
                                                                    </TouchableOpacity>
                                                                )
                                                            }}
                                                            horizontal
                                                        />
                                                        <FlatList
                                                            style={{ marginTop: vs(-80), flex: 1, }}
                                                            showsHorizontalScrollIndicator={false}
                                                            data={clockArray}
                                                            keyExtractor={(_, key_index) => key_index.toString()}
                                                            renderItem={({ item, index }) => {
                                                                return (
                                                                    <TouchableOpacity
                                                                        key={index.toString()}
                                                                        onPress={() => { setSelectTime(item?.formattedTime), setTreatmentData({ ...treatmentData, selectTime: item?.formattedTime }) }}
                                                                        style={[styles.hoursView, { backgroundColor: item?.formattedTime === treatmentData.selectTime ? COLORS.secondary : COLORS.white }]}
                                                                    >
                                                                        <Text style={[styles.hours, { color: item?.formattedTime === treatmentData.selectTime ? COLORS.white : COLORS.borderColor }]}>{item?.formattedTime}</Text>
                                                                    </TouchableOpacity>
                                                                )
                                                            }}
                                                            horizontal
                                                        />
                                                        <View style={{
                                                            flexDirection: i18next.language === 'ar' ? 'row-reverse' : "row",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                            bottom: vs(50)
                                                        }}>
                                                            <CheckBox
                                                                disabled={false}
                                                                value={toggleCheckBox2}
                                                                onValueChange={(newValue) => setToggleCheckBox2(newValue)}
                                                                onCheckColor={String(COLORS.primary)}
                                                                onFillColor={String(COLORS.primary)}
                                                                onTintColor={String(COLORS.primary)}
                                                                tintColors={{
                                                                    true: COLORS.primary
                                                                }}
                                                            />
                                                            <Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.normal, color: COLORS.secondary, fontSize: vs(12), }}>{t('have-not')}.</Text>
                                                        </View>
                                                    </View>
                                                </>
                                                : index === 2 ?
                                                    <>
                                                        <View style={{ flex: .8, paddingHorizontal: 20, alignItems: "center", justifyContent: "flex-start" }}>
                                                            <Image source={ICONS.time} style={{ width: scale(200), height: vs(150), resizeMode: "contain", marginTop: 10 }} />
                                                        </View>
                                                        <View style={{ flex: 2, backgroundColor: COLORS.white, borderRadius: 30, padding: 20, }}>
                                                            {/* <Text style={{ fontFamily: FONTS.normal, color: COLORS.secondary, fontSize: vs(12.5), textAlign: "justify", marginTop: -8 }}>To set your treatment plan, please enter the following data, and the application will send you notification reminders to take your dose</Text> */}
                                                            <Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.bold, color: COLORS.secondary, fontSize: vs(12.5), textAlign: i18next.language === 'ar' ? 'right' : "left", marginBottom: -5 }}>{t('set-meal')}</Text>
                                                            <View>
                                                                <Text style={[styles.Headings, {
                                                                    fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.bold,
                                                                    textAlign: i18next.language === 'ar' ? 'right' : "left",
                                                                }]}>{t('breakfast-time')}</Text>
                                                                <FlatList
                                                                    showsHorizontalScrollIndicator={false}
                                                                    data={clockArray}
                                                                    keyExtractor={(_, key_index) => key_index.toString()}
                                                                    renderItem={({ item, index }) => {
                                                                        return (
                                                                            <TouchableOpacity
                                                                                key={index.toString()}
                                                                                onPress={() => { setSelectBreakFastTime(item?.formattedTime), setTreatmentData({ ...treatmentData, selectBreakFastTime: item?.formattedTime }) }}
                                                                                style={[styles.hoursView, { backgroundColor: item?.formattedTime === treatmentData.selectBreakFastTime ? COLORS.secondary : COLORS.white }]}
                                                                            >
                                                                                <Text style={[styles.hours, { color: item?.formattedTime === treatmentData.selectBreakFastTime ? COLORS.white : COLORS.borderColor }]}>{item?.formattedTime}</Text>
                                                                            </TouchableOpacity>
                                                                        )
                                                                    }}
                                                                    horizontal
                                                                />
                                                            </View>
                                                            <View style={{}}>
                                                                <Text style={[styles.Headings, {
                                                                    fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.bold,
                                                                    textAlign: i18next.language === 'ar' ? 'right' : "left",
                                                                }]}>{t('lunch-time')}</Text>
                                                                <FlatList
                                                                    showsHorizontalScrollIndicator={false}
                                                                    data={clockArray}
                                                                    keyExtractor={(_, key_index) => key_index.toString()}
                                                                    renderItem={({ item, index }) => {
                                                                        return (
                                                                            <TouchableOpacity
                                                                                key={index.toString()}
                                                                                onPress={() => { setSelectLunchTime(item?.formattedTime), setTreatmentData({ ...treatmentData, selectLunchTime: item?.formattedTime }) }}
                                                                                style={[styles.hoursView, { backgroundColor: item?.formattedTime === treatmentData.selectLunchTime ? COLORS.secondary : COLORS.white }]}
                                                                            >
                                                                                <Text style={[styles.hours, { color: item?.formattedTime === treatmentData.selectLunchTime ? COLORS.white : COLORS.borderColor }]}>{item?.formattedTime}</Text>
                                                                            </TouchableOpacity>
                                                                        )
                                                                    }}
                                                                    horizontal
                                                                />
                                                            </View>
                                                            <View>
                                                                <Text style={[styles.Headings, {
                                                                    fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.bold,
                                                                    textAlign: i18next.language === 'ar' ? 'right' : "left",
                                                                }]}>{t('dinner-time')}</Text>
                                                                <FlatList
                                                                    showsHorizontalScrollIndicator={false}
                                                                    data={clockArray}
                                                                    keyExtractor={(_, key_index) => key_index.toString()}
                                                                    renderItem={({ item, index }) => {
                                                                        return (
                                                                            <TouchableOpacity
                                                                                key={index.toString()}
                                                                                onPress={() => { setSelectDinnerTime(item?.formattedTime), setTreatmentData({ ...treatmentData, selectDinnerTime: item?.formattedTime }) }}
                                                                                style={[styles.hoursView, { backgroundColor: item?.formattedTime === treatmentData.selectDinnerTime ? COLORS.secondary : COLORS.white }]}
                                                                            >
                                                                                <Text style={[styles.hours, { color: item?.formattedTime === treatmentData.selectDinnerTime ? COLORS.white : COLORS.borderColor }]}>{item?.formattedTime}</Text>
                                                                            </TouchableOpacity>
                                                                        )
                                                                    }}
                                                                    horizontal
                                                                />
                                                            </View>
                                                            <View>
                                                                <Text style={[styles.Headings, {
                                                                    fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.bold,
                                                                    textAlign: i18next.language === 'ar' ? 'right' : "left",
                                                                }]}>{t('bed-time-snack')}</Text>
                                                                <FlatList
                                                                    showsHorizontalScrollIndicator={false}
                                                                    data={clockArray}
                                                                    keyExtractor={(_, key_index) => key_index.toString()}
                                                                    renderItem={({ item, index }) => {
                                                                        return (
                                                                            <TouchableOpacity
                                                                                key={index.toString()}
                                                                                onPress={() => { setSelectBedTimeSnackTime(item?.formattedTime), setTreatmentData({ ...treatmentData, selectBedTimeSnackTime: item?.formattedTime }) }}
                                                                                style={[styles.hoursView, { backgroundColor: item?.formattedTime === treatmentData.selectBedTimeSnackTime ? COLORS.secondary : COLORS.white }]}
                                                                            >
                                                                                <Text style={[styles.hours, { color: item?.formattedTime === treatmentData.selectBedTimeSnackTime ? COLORS.white : COLORS.borderColor }]}>{item?.formattedTime}</Text>
                                                                            </TouchableOpacity>
                                                                        )
                                                                    }}
                                                                    horizontal
                                                                />
                                                            </View>
                                                        </View>
                                                    </>
                                                    : index === 3 ?
                                                        <View style={{ flex: 1, backgroundColor: COLORS.white, borderRadius: 30, padding: 20, }}>
                                                            {/* <View style={{ flexDirection: "row" }}>
                                                                <View style={{ flexDirection: "row" }}>
                                                                    <Text style={{ fontFamily: FONTS.h1, color: COLORS.primary, fontSize: vs(22) }}>PYLERA</Text>
                                                                    <Text style={{
                                                                        fontFamily: FONTS.h1, color: COLORS.primary,
                                                                        fontSize: vs(17),
                                                                        lineHeight: 40,
                                                                        textAlignVertical: 'top',
                                                                    }}>®
                                                                    </Text>
                                                                </View>
                                                                <View style={{ flexDirection: "row", }}>
                                                                    <Text style={{ fontFamily: FONTS.h1, color: COLORS.primary, fontSize: vs(22) }}>Dose Education</Text>
                                                                    <Text style={{
                                                                        fontFamily: FONTS.h1, color: COLORS.primary,
                                                                        fontSize: vs(13),
                                                                        lineHeight: 40,
                                                                        textAlignVertical: 'top',
                                                                    }}>20
                                                                    </Text>
                                                                </View>
                                                            </View> */}
                                                            <Text style={{ fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.normal, color: COLORS.secondary, fontSize: vs(11.5), textAlign: i18next.language === "ar" ? 'right' : "justify", marginTop: i18next.language === "ar" ? -0 : -8 }}>{t('administrator')}</Text>
                                                            <Text style={{ fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.bold, color: COLORS.secondary, fontSize: vs(12), textAlign: i18next.language === "ar" ? 'right' : "justify", marginTop: 5 }}>{t('admin-heading')}</Text>
                                                            <View style={styles.table}>
                                                                <View style={styles.row}>
                                                                    <Text style={[styles.cell, { backgroundColor: COLORS.primary, padding: 10, color: COLORS.white }]}>{t('table-heading-1')}</Text>
                                                                    <Text style={[styles.cell, { backgroundColor: COLORS.white }]}>{t('table-heading-2')}</Text>
                                                                    <Text style={[styles.cell, { backgroundColor: COLORS.primary, padding: 5, color: COLORS.white }]}>{t('table-heading-3')}</Text>
                                                                </View>
                                                                <View style={[styles.row, { borderBottomWidth: .8, borderBottomColor: COLORS.primary }]}>
                                                                    <Text style={styles.cell}>{t('table-1-data-1')}</Text>
                                                                    <Text style={styles.cell}>3</Text>
                                                                    <Text style={styles.cell}>1</Text>
                                                                </View>
                                                                <View style={[styles.row, { borderBottomWidth: .8, borderBottomColor: COLORS.primary }]}>
                                                                    <Text style={styles.cell}>{t('table-1-data-2')}</Text>
                                                                    <Text style={styles.cell}>3</Text>
                                                                    <Text style={styles.cell}>0</Text>
                                                                </View>
                                                                <View style={[styles.row, { borderBottomWidth: .8, borderBottomColor: COLORS.primary }]}>
                                                                    <Text style={styles.cell}>{t('table-1-data-3')}</Text>
                                                                    <Text style={styles.cell}>3</Text>
                                                                    <Text style={styles.cell}>1</Text>
                                                                </View>
                                                                <View style={[styles.row, { borderBottomWidth: .8, borderBottomColor: COLORS.primary }]}>
                                                                    <Text style={styles.cell}>{t('table-1-data-4')}</Text>
                                                                    <Text style={styles.cell}>3</Text>
                                                                    <Text style={styles.cell}>0</Text>
                                                                </View>
                                                            </View>
                                                            <Text style={{ fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.normal, color: COLORS.secondary, fontSize: vs(11.5), textAlign: i18next.language === "ar" ? 'right' : "justify", marginTop: 5 }}>{t('admin-para-2')}</Text>
                                                            <Text style={{ fontFamily: i18next.language === "ar" ? FONTS.bold : FONTS.bold, color: COLORS.secondary, fontSize: vs(13), textAlign: i18next.language === "ar" ? 'right' : "justify", marginTop: 8 }}>{t('missed-dose-heading')}</Text>
                                                            <Text style={{ fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.normal, color: COLORS.secondary, fontSize: vs(11.5), textAlign: i18next.language === "ar" ? 'right' : "justify", marginTop: -5 }}>{t('missed-dose-para')}</Text>
                                                        </View>
                                                        : null
                                        }
                                    </View>
                                ))}
                            </Swiper>
                            <View style={{ width: scale(120), position: "absolute", bottom: 10, alignSelf: "center", alignItems: "center" }}>
                                <TouchableOpacity style={{ backgroundColor: currentIndex === detailsContent.length - 1 ? '#b0120f' : COLORS.primary, width: currentIndex === detailsContent.length - 1 ? scale(120) : scale(100), height: vs(25), borderRadius: 50, alignItems: "center", justifyContent: "center", marginVertical: 5 }}
                                    onPress={currentIndex === 2 ? handleProceedModal : currentIndex === 1 ? handleSaveDateTime : handleNext}
                                >
                                    <Text style={{ color: COLORS.white, fontSize: i18next.language === "ar" ? vs(10) : vs(12), fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.bold }}>{currentIndex === detailsContent.length - 1 ? t('reset-mealtimes') : currentIndex === 2 ? t("start") : t('next')} </Text>
                                </TouchableOpacity>
                                <Text
                                    onPress={() => navigation.navigate('References')}
                                    style={{ color: COLORS.secondary, fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.semibold, fontSize: vs(9), textAlign: 'center' }}>{t('disclaimer-n-references')}</Text>
                            </View></>
                }
            </View >
        </View >
    );
};

const styles = ScaledSheet.create({
    table: {
        borderColor: '#000',
        marginTop: '12@vs'
    },
    row: {
        flexDirection: i18next.language === "ar" ? 'row-reverse' : 'row',
        alignItems: "center",
    },
    cell: {
        flex: 1,
        padding: '2@vs',
        textAlign: 'center',
        fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.bold,
        fontSize: '8@vs',
        color: COLORS.secondary,
    },
    dateView: {
        width: scale(45),
        height: vs(50),
        backgroundColor: COLORS.white,
        borderColor: COLORS.borderColor,
        borderWidth: .3,
        marginRight: scale(10),
        borderRadius: scale(8),
        alignItems: "center",
        justifyContent: "center"
    },
    month: {
        fontFamily: FONTS.semibold,
        color: COLORS.secondary,
        fontSize: vs(12.5),
        textAlign: "right",
        marginVertical: 10
    },
    Headings: {

        color: COLORS.primary,
        fontSize: vs(15),
        marginVertical: 10
    },
    day: {
        fontFamily: FONTS.normal,
        fontSize: '9@vs',
    },
    date: {
        marginTop: -5,
        fontFamily: FONTS.bold,
        fontSize: '15@vs',
    },
    hoursView: {
        width: scale(100),
        height: vs(35),
        backgroundColor: COLORS.white,
        borderColor: COLORS.borderColor,
        borderWidth: .3,
        marginRight: scale(10),
        borderRadius: scale(8),
        alignItems: "center",
        justifyContent: "center"
    },
    hours: {
        marginTop: -5,
        fontFamily: FONTS.semibold,
        fontSize: '13@vs',
    },
});

export default Treatment;