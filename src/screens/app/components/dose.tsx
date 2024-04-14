import React, { useEffect, useState } from 'react';
import { View, Text, Pressable, Image, TouchableOpacity } from 'react-native';
import { COLORS, FONTS, ICONS, } from '../../../shared/utils/theme';
import { ScaledSheet, scale, vs } from 'react-native-size-matters';
import * as Progress from 'react-native-progress';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

const Dose: React.FC<{ navigation: any }> = ({ navigation }) => {
    const { t } = useTranslation();
    const [treatmentProgress, setTreatmentProgress] = useState(0);
    const [breakfastTime, setBreakfastTime] = useState(false);
    const [bedTimeSnack, setBedTimeSnack] = useState(false);
    const [dinnerTime, setDinnerTime] = useState(false);
    const [lunchTime, setLunchTime] = useState(false);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [hours, setHours] = useState(0);


    useEffect(() => {
        const intervalId = setInterval(() => {
            const totalSeconds = 0;
            setHours(Math.floor(totalSeconds / 3600));
            setMinutes(Math.floor((totalSeconds % 3600) / 60));
            setSeconds(totalSeconds % 60);
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <View style={{ flex: 1, backgroundColor: COLORS.primary }}>
            <View style={{ flex: 1, borderRadius: 30, marginTop: 40 }}>
                <View style={{ flex: 1, backgroundColor: COLORS.white, borderRadius: 30, padding: 20, }}>
                    <Pressable onPress={() => navigation.goBack()} style={{ alignSelf: "flex-end", }}><Text style={{ fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.bold, color: COLORS.primary, fontSize: vs(13) }}>{t('back')}</Text></Pressable>
                    <View style={[styles.block, { backgroundColor: '#ebf1fa' }]}>
                        <Text style={{ fontSize: i18next.language === "ar" ? vs(14) : vs(16), width: 130, height: vs(55), color: COLORS.secondary, fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.semibold, }}>{t('your-treatment')}</Text>
                        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                            <View style={{ width: 70, height: 70, borderRadius: 100, backgroundColor: COLORS.white, alignItems: "center", justifyContent: "center" }}>
                                <Progress.Circle progress={treatmentProgress / 10} borderWidth={1} size={70} borderColor={String(COLORS.white)} thickness={7} showsText textStyle={{ fontFamily: FONTS.bold, color: String(COLORS.secondary), fontSize: vs(16) }} color={String(COLORS.primary)} />
                            </View>
                        </View>
                    </View>
                    <View style={[styles.block, { backgroundColor: COLORS.secondary }]}>
                        <Text style={{ fontSize: vs(16), width: 130, height: vs(55), color: COLORS.white, fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.semibold }}>{t('next-dose')}</Text>
                        <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "center", flex: 1, }}>
                            <Text style={{ fontFamily: FONTS.bold, color: COLORS.white, fontSize: vs(28) }}>{hours.toString().padStart(2, '0')}</Text>
                            <View style={{ marginHorizontal: scale(8), flexDirection: "column", }} >
                                <View style={{ width: 7, height: 7, backgroundColor: COLORS.primary, borderRadius: 50, marginBottom: scale(2) }} />
                                <View style={{ width: 7, height: 7, backgroundColor: COLORS.primary, borderRadius: 50 }} />
                            </View>
                            <Text style={{ fontFamily: FONTS.bold, color: COLORS.white, fontSize: vs(28) }}>{minutes.toString().padStart(2, '0')}</Text>
                            <View style={{ marginHorizontal: scale(8), flexDirection: "column" }} >
                                <View style={{ width: 7, height: 7, backgroundColor: COLORS.primary, borderRadius: 50, marginBottom: scale(2) }} />
                                <View style={{ width: 7, height: 7, backgroundColor: COLORS.primary, borderRadius: 50 }} />
                            </View>
                            <Text style={{ fontFamily: FONTS.bold, color: COLORS.white, fontSize: vs(28) }}>{seconds.toString().padStart(2, '0')}</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('Track')} style={[styles.block, { backgroundColor: COLORS.primary }]}>
                        <Text style={{ fontSize: vs(16), color: COLORS.secondary, fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.semibold, }}>{t('day-progressed')}</Text>
                        <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "center", flex: 1, }}>
                            <Text style={{ fontFamily: FONTS.bold, color: COLORS.white, fontSize: vs(32) }}>00</Text>
                            <View style={{ width: 2, height: vs(47), backgroundColor: COLORS.black, marginHorizontal: scale(8) }} />
                            <Text style={{ fontFamily: FONTS.bold, color: COLORS.white, fontSize: vs(32) }}>10</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{ backgroundColor: COLORS.white, }}>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.semibold, color: COLORS.primary, fontSize: vs(16), textAlign: i18next.language === "ar" ? 'right' : 'left' }}>{t('todays')}</Text>
                            <Text style={{
                                fontFamily: FONTS.semibold, color: COLORS.primary,
                                fontSize: vs(17),
                                lineHeight: 40,
                                textAlignVertical: 'top',
                            }}>®
                            </Text>
                            <Text style={{ fontFamily: FONTS.semibold, color: COLORS.primary, fontSize: vs(16) }}>intake:</Text>
                        </View>
                        <View style={styles.secondaryblock}>
                            <View style={{ flex: 1, flexDirection: i18next.language === "ar" ? 'row-reverse' : 'row', alignItems: "center", justifyContent: "space-between", }}>
                                <View style={{ flexDirection: i18next.language === "ar" ? 'row-reverse' : 'row', alignItems: "center", justifyContent: "center" }}>
                                    <Image source={ICONS.breakfast_time} />
                                    <Text style={{ fontSize: vs(13), fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.bold, color: COLORS.secondary, marginLeft: scale(8) }}>{t('bf-time')}</Text>
                                </View>
                            </View>
                            <View style={{ flex: 1, alignItems: i18next.language === "ar" ? 'flex-start' : "flex-end" }}>
                                <TouchableOpacity style={{ backgroundColor: !breakfastTime ? COLORS.primary : '#b0120f', width: scale(100), height: vs(25), borderRadius: 8, alignItems: "center", justifyContent: "center", marginVertical: 5 }}
                                    onPress={() => setBreakfastTime(!breakfastTime)}
                                >
                                    <Text style={{ color: COLORS.white, fontSize: i18next.language === "ar" ? vs(11) : vs(13), fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.bold }}>{breakfastTime ? t('taken') : t('not-taken')}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.secondaryblock}>
                            <View style={{ flex: 1, flexDirection: i18next.language === "ar" ? 'row-reverse' : 'row', alignItems: "center", justifyContent: "space-between", }}>
                                <View style={{ flexDirection: i18next.language === "ar" ? 'row-reverse' : 'row', alignItems: "center", justifyContent: "center" }}>
                                    <Image source={ICONS.lunch_time} />
                                    <Text style={{ fontSize: vs(13), fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.bold, color: COLORS.secondary, marginLeft: scale(8) }}>{t('l-time')}</Text>
                                </View>
                            </View>
                            <View style={{ flex: 1, alignItems: i18next.language === "ar" ? 'flex-start' : "flex-end" }}>
                                <TouchableOpacity style={{ backgroundColor: !lunchTime ? COLORS.primary : '#b0120f', width: scale(100), height: vs(25), borderRadius: 8, alignItems: "center", justifyContent: "center", marginVertical: 5 }}
                                    onPress={() => setLunchTime(!lunchTime)}
                                >
                                    <Text style={{ color: COLORS.white, fontSize: i18next.language === "ar" ? vs(11) : vs(13), fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.bold }}>{lunchTime ? t('taken') : t('not-taken')}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.secondaryblock}>
                            <View style={{ flex: 1, flexDirection: i18next.language === "ar" ? 'row-reverse' : 'row', alignItems: "center", justifyContent: "space-between", }}>
                                <View style={{ flexDirection: i18next.language === "ar" ? 'row-reverse' : 'row', alignItems: "center", justifyContent: "center" }}>
                                    <Image source={ICONS.breakfast_time} />
                                    <Text style={{ fontSize: vs(13), fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.bold, color: COLORS.secondary, marginLeft: scale(8) }}>{t('d-time')}</Text>
                                </View>
                            </View>
                            <View style={{ flex: 1, alignItems: i18next.language === "ar" ? 'flex-start' : "flex-end" }}>
                                <TouchableOpacity style={{ backgroundColor: !dinnerTime ? COLORS.primary : '#b0120f', width: scale(100), height: vs(25), borderRadius: 8, alignItems: "center", justifyContent: "center", marginVertical: 5 }}
                                    onPress={() => setDinnerTime(!dinnerTime)}
                                >
                                    <Text style={{ color: COLORS.white, fontSize: i18next.language === "ar" ? vs(11) : vs(13), fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.bold }}>{dinnerTime ? t('taken') : t('not-taken')}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.secondaryblock}>
                            <View style={{ flex: 1, flexDirection: i18next.language === "ar" ? 'row-reverse' : 'row', alignItems: "center", justifyContent: "space-between", }}>
                                <View style={{ flexDirection: i18next.language === "ar" ? 'row-reverse' : 'row', alignItems: "center", justifyContent: "center" }}>
                                    <Image source={ICONS.breakfast_time} />
                                    <Text style={{ fontSize: vs(13), fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.bold, color: COLORS.secondary, marginLeft: scale(8) }}>{t('bd-time')}</Text>
                                </View>
                            </View>
                            <View style={{ flex: 1, alignItems: i18next.language === "ar" ? 'flex-start' : "flex-end" }}>
                                <TouchableOpacity style={{ backgroundColor: !bedTimeSnack ? COLORS.primary : '#b0120f', width: scale(100), height: vs(25), borderRadius: 8, alignItems: "center", justifyContent: "center", marginVertical: 5 }}
                                    onPress={() => setBedTimeSnack(!bedTimeSnack)}
                                >
                                    <Text style={{ color: COLORS.white, fontSize: i18next.language === "ar" ? vs(11) : vs(13), fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.bold }}>{bedTimeSnack ? t('taken') : t('not-taken')}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View >
        </View >
    );
};


const styles = ScaledSheet.create({
    block: {
        flexDirection: i18next.language === "ar" ? 'row-reverse' : "row",
        paddingHorizontal: '20@s',
        width: '100%',
        height: '70@vs',
        borderRadius: '16@s',
        alignItems: "center",
        marginVertical: '5@vs',
        justifyContent: "space-between"
    },
    secondaryblock: {
        flexDirection: i18next.language === "ar" ? 'row-reverse' : "row",
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
