import React, { useState } from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import { COLORS, FONTS, ICONS, } from '../../../shared/utils/theme';
import { ScaledSheet, scale, vs } from 'react-native-size-matters';
import * as Progress from 'react-native-progress';
import CheckBox from '@react-native-community/checkbox';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

const Track: React.FC<{ navigation: any }> = ({ navigation }) => {

    const { t } = useTranslation();

    const [missingInTime, setMissingInTime] = useState(0);

    const [breakfastDose, setBreakfastDose] = useState(0);

    const [bedTimeDose, setBestTimeDose] = useState(0);

    const [doseInTime, setDoseInTime] = useState(0);

    const [dinnerDose, setDinnerDose] = useState(0);

    const [lunchDose, setLunchDose] = useState(0);

    return (
        <View style={{ flex: 1, backgroundColor: COLORS.primary }}>
            <View style={{ flex: 1, borderRadius: 30, marginTop: 40 }}>
                <View style={{ flex: .6, paddingHorizontal: 20, alignItems: "center", justifyContent: "center" }}>
                    <Image source={ICONS.finish} style={{ right: scale(-65), width: scale(225), height: scale(225), resizeMode: "contain", marginTop: vs(-25) }} />
                    <View style={{ position: "absolute", bottom: scale(5), left: scale(30) }}>
                        <Text style={{ fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.medium, color: COLORS.white, fontSize: vs(35), textAlign: "justify", marginBottom: i18next.language === "ar" ? vs(-10) : vs(-16) }}>{t('well-done')}</Text>
                        <Text style={{ fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.medium, color: COLORS.white, fontSize: vs(12), textAlign: "justify", }}>{t('youve-reached')}</Text>
                    </View>
                </View>
                <View style={{ flex: 1.5, backgroundColor: COLORS.white, borderRadius: 30, padding: scale(15), }}>
                    <Pressable onPress={() => navigation.goBack()} style={{ alignSelf: i18next.language === "ar" ? "flex-start" : "flex-end", }}><Text style={{ fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.bold, color: COLORS.primary, fontSize: vs(13) }}>{t('back')}</Text></Pressable>
                    <View style={{ marginVertical: vs(5), paddingHorizontal: scale(10) }}>
                        <Text style={{ fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.bold, color: COLORS.secondary, fontSize: vs(13), textAlign: i18next.language === "ar" ? "right" : "justify", marginTop: vs(-8) }}>{t('dose-in-time')}</Text>
                        <Text style={{ fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.bold, color: COLORS.primary, fontSize: vs(13), textAlign: i18next.language === "ar" ? "right" : "justify", marginTop: i18next.language === "ar" ? vs(-0) : vs(-8) }}>{`${doseInTime}/40 ${t('time')}`}</Text>
                        <View style={{ width: '100%', }}>
                            <Progress.Bar unfilledColor="white" progress={doseInTime / 10} width={null} borderWidth={1} borderRadius={2} height={5} borderColor={String(COLORS.acrylic)} color={String(COLORS.primary)} />
                        </View>
                    </View>
                    <View style={{ marginVertical: vs(5), paddingHorizontal: scale(10) }}>
                        <Text style={{ fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.bold, color: COLORS.secondary, fontSize: vs(13), textAlign: i18next.language === "ar" ? "right" : "justify", marginTop: vs(-8) }}>{t('missing-doses')}</Text>
                        <Text style={{ fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.bold, color: "#de8545", fontSize: vs(13), textAlign: i18next.language === "ar" ? "right" : "justify", marginTop: i18next.language === "ar" ? vs(-0) : vs(-8) }}>{`${missingInTime}/40 ${t('time')}`}</Text>
                        <View style={{ width: '100%', }}>
                            <Progress.Bar unfilledColor="white" progress={missingInTime / 10} borderWidth={1} width={null} borderRadius={2} height={5} borderColor={String(COLORS.acrylic)} color={"#de8545"} />
                        </View>
                    </View>
                    <View style={{ backgroundColor: '#efefef', flex: 1, borderRadius: 40, marginTop: vs(15), justifyContent: "center", padding: scale(15) }}>
                        <View style={{ marginVertical: vs(8) }}>
                            <Text style={{ fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.bold, color: COLORS.secondary, fontSize: vs(13), textAlign: i18next.language === "ar" ? "right" : "justify", marginTop: vs(-8) }}>{t("bf-doses")}</Text>
                            <Text style={{ fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.bold, color: COLORS.primary, fontSize: vs(13), textAlign: i18next.language === "ar" ? "right" : "justify", marginTop: i18next.language === "ar" ? vs(-0) : vs(-8) }}>{`${breakfastDose}/10 ${t('time')}`}</Text>
                            <View style={{ width: '100%' }}>
                                <Progress.Bar unfilledColor="white" progress={breakfastDose / 10} borderWidth={1} width={null} borderRadius={2} height={5} borderColor={String(COLORS.acrylic)} color={String(COLORS.secondary)} />
                            </View>
                        </View>
                        <View style={{ marginVertical: vs(8) }}>
                            <Text style={{ fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.bold, color: COLORS.secondary, fontSize: vs(13), textAlign: i18next.language === "ar" ? "right" : "justify", marginTop: vs(-8) }}>{t('lunch-doses')}</Text>
                            <Text style={{ fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.bold, color: COLORS.primary, fontSize: vs(13), textAlign: i18next.language === "ar" ? "right" : "justify", marginTop: i18next.language === "ar" ? vs(-0) : vs(-8) }}>{`${lunchDose}/10 ${t('time')}`}</Text>
                            <View style={{ width: '100%' }}>
                                <Progress.Bar unfilledColor="white" progress={lunchDose / 10} borderWidth={1} width={null} borderRadius={2} height={5} borderColor={String(COLORS.acrylic)} color={String(COLORS.secondary)} />
                            </View>
                        </View>
                        <View style={{ marginVertical: vs(8) }}>
                            <Text style={{ fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.bold, color: COLORS.secondary, fontSize: vs(13), textAlign: i18next.language === "ar" ? "right" : "justify", marginTop: vs(-8) }}>{t('dinner-doses')}</Text>
                            <Text style={{ fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.bold, color: COLORS.primary, fontSize: vs(13), textAlign: i18next.language === "ar" ? "right" : "justify", marginTop: i18next.language === "ar" ? vs(-0) : vs(-8) }}>{`${dinnerDose}/10 ${t('time')}`}</Text>
                            <View style={{ width: '100%' }}>
                                <Progress.Bar unfilledColor="white" progress={dinnerDose / 10} borderWidth={1} width={null} borderRadius={2} height={5} borderColor={String(COLORS.acrylic)} color={String(COLORS.secondary)} />
                            </View>
                        </View>
                        <View style={{ marginVertical: vs(8) }}>
                            <Text style={{ fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.bold, color: COLORS.secondary, fontSize: vs(13), textAlign: i18next.language === "ar" ? "right" : "justify", marginTop: vs(-8) }}>{t('bed-time-doses')}</Text>
                            <Text style={{ fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.bold, color: COLORS.primary, fontSize: vs(13), textAlign: i18next.language === "ar" ? "right" : "justify", marginTop: i18next.language === "ar" ? vs(-0) : vs(-8) }}>{`${bedTimeDose}/10 ${t('time')}`}</Text>
                            <View style={{ width: '100%' }}>
                                <Progress.Bar unfilledColor="white" progress={bedTimeDose / 10} borderWidth={1} width={null} borderRadius={2} height={5} borderColor={String(COLORS.acrylic)} color={String(COLORS.secondary)} />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};


const styles = ScaledSheet.create({
    block: {
        flexDirection: "row",
        paddingHorizontal: '20@s',
        width: '100%',
        height: '70@vs',
        borderRadius: '16@s',
        alignItems: "center",
        marginVertical: '5@vs',
        justifyContent: "space-between"
    },
    secondaryblock: {
        flexDirection: "row",
        paddingHorizontal: '10@s',
        width: '100%',
        height: '48@vs',
        borderRadius: '14@s',
        alignItems: "center",
        marginVertical: '5@vs',
        backgroundColor: COLORS.acrylic
    },

})

export default Track;
