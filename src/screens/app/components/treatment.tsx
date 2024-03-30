// screens/DetailsScreen.tsx
import React, { useCallback, useState } from 'react';
import { View, Text, Button, TouchableOpacity, Image, Pressable, FlatList } from 'react-native';
import Swiper from 'react-native-swiper';
import { COLORS, FONTS, ICONS } from '../../../shared/utils/theme';
import { ScaledSheet, scale, vs } from 'react-native-size-matters';
import CheckBox from '@react-native-community/checkbox';
import ReactNativeModal from 'react-native-modal';
import AlertModal from '../../../shared/components/AlertModal';
import useTreatment from '../hooks/useTreatment';
const detailsContent = [
    'Detail 1',
    'Detail 2',
    'Detail 3',
    'Detail 4',
];

const Treatment: React.FC<{ navigation: any }> = ({ navigation }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [toggleCheckBox, setToggleCheckBox] = useState<boolean>(false);
    const [toggleCheckBox2, setToggleCheckBox2] = useState<boolean>(false);
    const [proceed, setProceed] = useState<boolean>(false);
    const [agree, setAgree] = useState<boolean>(false);
    const [confirmation, setConfirmation] = useState<boolean>(false);
    const [visible, setVisible] = useState<boolean>(false);
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const {
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
        setSelectBedTimeSnackTime

    } = useTreatment()


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
        setIsVisible(false);
        handleNext()
    }, [isVisible]);

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
    console.log(clockArray);
    return (
        <View style={{ flex: 1, backgroundColor: COLORS.primary }}>
            <AlertModal isVisible={visible} setVisible={setVisible} title={'Alert'} text={'Please confirm that you have read and understood the above'} onPress={handleModalPressed} />
            <AlertModal isVisible={isVisible} setVisible={setIsVisible} title={'Alert'} text={'Before proceeding, please make sure the data you have entered is accurate. You will get reminders based on the times you have provided.'} onPress={handleProceedModalPressed} />
            <View style={{ flex: 1, borderRadius: 30, marginTop: 40 }}>
                {proceed === false ?
                    <>
                        <View style={{ flex: 1, backgroundColor: COLORS.white, borderRadius: 30, paddingHorizontal: 30, }}>
                            <Pressable onPress={() => navigation.goBack()} style={{ alignSelf: "flex-end", marginTop: 15 }}><Text style={{ fontFamily: FONTS.semibold, color: COLORS.primary, fontSize: vs(13) }}>Back</Text></Pressable>
                            <Image source={ICONS.caution} style={{ width: scale(280), height: vs(160), resizeMode: "contain", alignSelf: "center", marginVertical: vs(20) }} />
                            <View style={{ flexDirection: "row", marginTop: 5 }}>
                                <Text style={{ fontFamily: FONTS.h1, color: COLORS.secondary, fontSize: vs(12), textAlign: "justify" }}>This content is only for patients who are prescribed PYLERA®. I acknowledge that I have been prescribed PYLERA®.</Text>
                            </View>
                            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 30 }}>
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
                                <Text style={{ fontFamily: FONTS.normal, color: COLORS.secondary, fontSize: vs(12), }}>I have clearly read and understood the above</Text>
                            </View>
                            <View style={{ width: scale(120), alignSelf: "center", alignItems: "center", marginTop: vs(50) }}>
                                <TouchableOpacity
                                    disabled={!toggleCheckBox}
                                    style={{ backgroundColor: toggleCheckBox === true ? COLORS.primary : COLORS.gray, width: scale(180), height: vs(25), borderRadius: 50, alignItems: "center", justifyContent: "center", marginVertical: 5 }}
                                    onPress={handleModal}>
                                    <Text style={{ color: COLORS.white, fontSize: vs(11), fontFamily: FONTS.bold }}>{'PROCEED TO VIEW CONTENT'} </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </>
                    : proceed === true && confirmation === false ?
                        <>
                            <View style={{ flex: 1, backgroundColor: COLORS.white, borderRadius: 30, paddingHorizontal: 30, }}>
                                <Pressable onPress={() => navigation.goBack()} style={{ alignSelf: "flex-end", marginTop: 15 }}><Text style={{ fontFamily: FONTS.semibold, color: COLORS.primary, fontSize: vs(13) }}>Back</Text></Pressable>
                                <Image source={ICONS.caution} style={{ width: scale(180), height: vs(100), resizeMode: "contain", alignSelf: "center", }} />
                                <View style={{ flexDirection: "row", marginTop: 5 }}>
                                    <Text style={{ fontFamily: FONTS.h1, color: COLORS.secondary, fontSize: vs(13) }}>This is a Medicament</Text>
                                    <Text style={{
                                        fontFamily: FONTS.h1, color: COLORS.secondary,
                                        fontSize: vs(8),
                                        lineHeight: 20,
                                        textAlignVertical: 'top',
                                        marginLeft: 1
                                    }}>20
                                    </Text>
                                </View>
                                <Text style={{ fontFamily: FONTS.normal, color: COLORS.secondary, fontSize: vs(11), textAlign: "justify" }}><Text style={{ color: COLORS.secondary }}>• </Text>Medication is a product that affects your health, and its consumption contrary to instructions is dangerous for you.</Text>
                                <Text style={{ fontFamily: FONTS.normal, color: COLORS.secondary, fontSize: vs(11), textAlign: "justify" }}><Text style={{ color: COLORS.secondary }}>• </Text>Strictly follow the doctor's prescription, the method of use, and the instructions of the pharmacist who sold the medication.</Text>
                                <Text style={{ fontFamily: FONTS.normal, color: COLORS.secondary, fontSize: vs(11), textAlign: "justify" }}><Text style={{ color: COLORS.secondary }}>• </Text>The doctor and the pharmacist are experts in medicines, their benefits, and risks.</Text>
                                <Text style={{ fontFamily: FONTS.normal, color: COLORS.secondary, fontSize: vs(11), textAlign: "justify" }}><Text style={{ color: COLORS.secondary }}>• </Text>Do not interrupt the treatment period prescribed for you.</Text>
                                <Text style={{ fontFamily: FONTS.normal, color: COLORS.secondary, fontSize: vs(11), textAlign: "justify" }}><Text style={{ color: COLORS.secondary }}>• </Text>Do not repeat the same prescription without consulting your doctor.</Text>
                                <Text style={{ fontFamily: FONTS.normal, color: COLORS.secondary, fontSize: vs(11), textAlign: "justify" }}><Text style={{ color: COLORS.secondary }}>• </Text>Keep all medications out of reach of children.</Text>
                                <View style={{ width: scale(120), marginTop: vs(40), alignSelf: "center", alignItems: "center" }}>
                                    <TouchableOpacity
                                        // disabled={!toggleCheckBox}
                                        style={{ backgroundColor: COLORS.primary, width: scale(180), height: vs(25), borderRadius: 50, alignItems: "center", justifyContent: "center", marginVertical: 5 }}
                                        onPress={() => setConfirmation(true)}  >
                                        <Text style={{ color: COLORS.white, fontSize: vs(11), fontFamily: FONTS.bold }}>{'PROCEED TO VIEW CONTENT'} </Text>
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
                                    <View key={index} style={{ flex: 1, }}>
                                        {index === 0 ?
                                            <View style={{ flex: 1, backgroundColor: COLORS.white, borderRadius: 30, padding: 20, }}>
                                                <Pressable onPress={() => navigation.goBack()} style={{ alignSelf: "flex-end", marginVertical: 5 }}><Text style={{ fontFamily: FONTS.semibold, color: COLORS.primary, fontSize: vs(13) }}>Skip</Text></Pressable>
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
                                                        <Text style={{ fontFamily: FONTS.normal, color: COLORS.secondary, fontSize: vs(12.5), textAlign: "justify", marginTop: -8 }}>To set your treatment plan, please enter the following data, and the application will send you notification reminders to take your dose</Text>
                                                        <Text style={{ fontFamily: FONTS.bold, color: COLORS.secondary, fontSize: vs(12.5), textAlign: "justify", marginBottom: -5 }}>If you have received the first dose, please set the timing of the first dose.</Text>
                                                        <Text style={styles.month}>{`${currentMonth}, ${currentYear}`}</Text>
                                                        <FlatList
                                                            contentContainerStyle={{ height: vs(55), }}
                                                            showsHorizontalScrollIndicator={false}
                                                            data={daysOfMonth}
                                                            keyExtractor={(_, key_index) => key_index.toString()}
                                                            renderItem={({ item, index }) => {
                                                                return (
                                                                    <TouchableOpacity
                                                                        onPress={() => setSelectDate(item?.date)}
                                                                        style={[styles.dateView, { backgroundColor: item?.date === selectDate ? COLORS.primary : COLORS.white }]}
                                                                    >
                                                                        <Text style={[styles.day, { color: item?.date === selectDate ? COLORS.white : COLORS.borderColor }]}>{item?.day.slice(0, 3)}</Text>
                                                                        <Text style={[styles.date, { color: item?.date === selectDate ? COLORS.white : COLORS.borderColor }]}>{item?.date}</Text>
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
                                                                        onPress={() => setSelectTime(item?.formattedTime)}
                                                                        style={[styles.hoursView, { backgroundColor: item?.formattedTime === selectTime ? COLORS.secondary : COLORS.white }]}
                                                                    >
                                                                        <Text style={[styles.hours, { color: item?.formattedTime === selectTime ? COLORS.white : COLORS.borderColor }]}>{item?.formattedTime}</Text>
                                                                    </TouchableOpacity>
                                                                )
                                                            }}
                                                            horizontal
                                                        />
                                                        <View style={{
                                                            flexDirection: "row",
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
                                                            <Text style={{ fontFamily: FONTS.normal, color: COLORS.secondary, fontSize: vs(12), }}>I haven't administrated any dose.</Text>
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
                                                            <Text style={{ fontFamily: FONTS.bold, color: COLORS.secondary, fontSize: vs(12.5), textAlign: "justify", marginBottom: -5 }}>Set your daily meals times :</Text>
                                                            <View>
                                                                <Text style={styles.Headings}>Breakfast Time</Text>
                                                                <FlatList
                                                                    showsHorizontalScrollIndicator={false}
                                                                    data={clockArray}
                                                                    keyExtractor={(_, key_index) => key_index.toString()}
                                                                    renderItem={({ item, index }) => {
                                                                        return (
                                                                            <TouchableOpacity
                                                                                onPress={() => setSelectBreakFastTime(item?.formattedTime)}
                                                                                style={[styles.hoursView, { backgroundColor: item?.formattedTime === selectBreakFastTime ? COLORS.secondary : COLORS.white }]}
                                                                            >
                                                                                <Text style={[styles.hours, { color: item?.formattedTime === selectBreakFastTime ? COLORS.white : COLORS.borderColor }]}>{item?.formattedTime}</Text>
                                                                            </TouchableOpacity>
                                                                        )
                                                                    }}
                                                                    horizontal
                                                                />
                                                            </View>
                                                            <View style={{}}>
                                                                <Text style={styles.Headings}>Lunch Time</Text>
                                                                <FlatList
                                                                    showsHorizontalScrollIndicator={false}
                                                                    data={clockArray}
                                                                    keyExtractor={(_, key_index) => key_index.toString()}
                                                                    renderItem={({ item, index }) => {
                                                                        return (
                                                                            <TouchableOpacity
                                                                                onPress={() => setSelectLunchTime(item?.formattedTime)}
                                                                                style={[styles.hoursView, { backgroundColor: item?.formattedTime === selectLunchTime ? COLORS.secondary : COLORS.white }]}
                                                                            >
                                                                                <Text style={[styles.hours, { color: item?.formattedTime === selectLunchTime ? COLORS.white : COLORS.borderColor }]}>{item?.formattedTime}</Text>
                                                                            </TouchableOpacity>
                                                                        )
                                                                    }}
                                                                    horizontal
                                                                />
                                                            </View>
                                                            <View>
                                                                <Text style={styles.Headings}>Dinner Time</Text>
                                                                <FlatList
                                                                    showsHorizontalScrollIndicator={false}
                                                                    data={clockArray}
                                                                    keyExtractor={(_, key_index) => key_index.toString()}
                                                                    renderItem={({ item, index }) => {
                                                                        return (
                                                                            <TouchableOpacity
                                                                                onPress={() => setSelectDinnerTime(item?.formattedTime)}
                                                                                style={[styles.hoursView, { backgroundColor: item?.formattedTime === selectDinnerTime ? COLORS.secondary : COLORS.white }]}
                                                                            >
                                                                                <Text style={[styles.hours, { color: item?.formattedTime === selectDinnerTime ? COLORS.white : COLORS.borderColor }]}>{item?.formattedTime}</Text>
                                                                            </TouchableOpacity>
                                                                        )
                                                                    }}
                                                                    horizontal
                                                                />
                                                            </View>
                                                            <View>
                                                                <Text style={styles.Headings}>Bed Time Snack</Text>
                                                                <FlatList
                                                                    showsHorizontalScrollIndicator={false}
                                                                    data={clockArray}
                                                                    keyExtractor={(_, key_index) => key_index.toString()}
                                                                    renderItem={({ item, index }) => {
                                                                        return (
                                                                            <TouchableOpacity
                                                                                onPress={() => setSelectBedTimeSnackTime(item?.formattedTime)}
                                                                                style={[styles.hoursView, { backgroundColor: item?.formattedTime === selectBedTimeSnackTime ? COLORS.secondary : COLORS.white }]}
                                                                            >
                                                                                <Text style={[styles.hours, { color: item?.formattedTime === selectBedTimeSnackTime ? COLORS.white : COLORS.borderColor }]}>{item?.formattedTime}</Text>
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

                                                            <View style={{ flexDirection: "row" }}>
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
                                                            </View>
                                                            <Text style={{ fontFamily: FONTS.normal, color: COLORS.secondary, fontSize: vs(12.5), textAlign: "justify", marginTop: -8 }}>Administer three PYLERA® capsules 4 times a day (after meals and at bedtime) for 10 days. Administer PYLERA® with omeprazole 20 mg twice daily (after the morning and evening meals).</Text>
                                                            <Text style={{ fontFamily: FONTS.bold, color: COLORS.secondary, fontSize: vs(13), textAlign: "justify", marginTop: 5 }}>Daily Dosing Schedule for PYLERA®</Text>
                                                            <View style={styles.table}>
                                                                <View style={styles.row}>
                                                                    <Text style={[styles.cell, { backgroundColor: COLORS.primary, padding: 10, color: COLORS.white }]}>Time of dose</Text>
                                                                    <Text style={[styles.cell, { backgroundColor: COLORS.white }]}>Time of dose Number of capsules of PLYERA®</Text>
                                                                    <Text style={[styles.cell, { backgroundColor: COLORS.primary, padding: 5, color: COLORS.white }]}>Number of capsules of OMEPRAZOLE® 20 mg</Text>
                                                                </View>
                                                                <View style={[styles.row, { borderBottomWidth: .8, borderBottomColor: COLORS.primary }]}>
                                                                    <Text style={styles.cell}>After morning meal</Text>
                                                                    <Text style={styles.cell}>3</Text>
                                                                    <Text style={styles.cell}>1</Text>
                                                                </View>
                                                                <View style={[styles.row, { borderBottomWidth: .8, borderBottomColor: COLORS.primary }]}>
                                                                    <Text style={styles.cell}>After lunch</Text>
                                                                    <Text style={styles.cell}>3</Text>
                                                                    <Text style={styles.cell}>0</Text>
                                                                </View>
                                                                <View style={[styles.row, { borderBottomWidth: .8, borderBottomColor: COLORS.primary }]}>
                                                                    <Text style={styles.cell}>After evening meal</Text>
                                                                    <Text style={styles.cell}>3</Text>
                                                                    <Text style={styles.cell}>1</Text>
                                                                </View>
                                                                <View style={[styles.row, { borderBottomWidth: .8, borderBottomColor: COLORS.primary }]}>
                                                                    <Text style={styles.cell}>At bedtime</Text>
                                                                    <Text style={styles.cell}>3</Text>
                                                                    <Text style={styles.cell}>0</Text>
                                                                </View>
                                                            </View>
                                                            <Text style={{ fontFamily: FONTS.normal, color: COLORS.secondary, fontSize: vs(12.5), textAlign: "justify", marginTop: 5 }}>Patients are instructed to swallow the PYLERA® capsules whole with a full glass of water (8 ounces). Ingestion of adequate amounts of fluid, particularly with the bedtime dose, is recommended to reduce the risk of esophageal irritation and ulceration by tetracycline hydrochloride.</Text>
                                                            <Text style={{ fontFamily: FONTS.bold, color: COLORS.secondary, fontSize: vs(13), textAlign: "justify", marginTop: 5 }}>Missed Dose</Text>
                                                            <Text style={{ fontFamily: FONTS.normal, color: COLORS.secondary, fontSize: vs(12.5), textAlign: "justify", marginTop: -5 }}>If a dose is missed, patients should continue the normal dosing schedule until medication is gone. Patients should not take double doses. If more than 4 doses are missed, the prescriber should be contacted.</Text>
                                                        </View>
                                                        : null
                                        }
                                    </View>
                                ))}
                            </Swiper>
                            <View style={{ width: scale(120), position: "absolute", bottom: 10, alignSelf: "center", alignItems: "center" }}>
                                <TouchableOpacity style={{ backgroundColor: currentIndex === detailsContent.length - 1 ? '#b0120f' : COLORS.primary, width: currentIndex === detailsContent.length - 1 ? scale(120) : scale(100), height: vs(25), borderRadius: 50, alignItems: "center", justifyContent: "center", marginVertical: 5 }}
                                    onPress={currentIndex === 2 ? handleProceedModal : handleNext}
                                >
                                    <Text style={{ color: COLORS.white, fontSize: vs(13), fontFamily: FONTS.bold }}>{currentIndex === detailsContent.length - 1 ? 'Reset Mealtime' : currentIndex === 2 ? "Start" : 'Next'} </Text>
                                </TouchableOpacity>
                                <Text style={{ color: COLORS.secondary, fontFamily: FONTS.semibold, fontSize: vs(10), textAlign: 'center' }}>Disclaimer & References</Text>
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
        flexDirection: 'row',
        alignItems: "center",
    },
    cell: {
        flex: 1,
        padding: '2@vs',
        textAlign: 'center',
        fontFamily: FONTS.bold,
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
        fontFamily: FONTS.bold,
        color: COLORS.primary,
        fontSize: vs(15),
        textAlign: "left",
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