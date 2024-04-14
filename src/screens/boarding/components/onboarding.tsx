import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { COLORS, FONTS, ICONS } from '../../../shared/utils/theme'
import { scale, verticalScale, vs } from 'react-native-size-matters'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Swiper from 'react-native-swiper'
import { AuthContext } from '../../../config/context'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'

const Onboarding = ({ navigation }: any) => {

    const { onboard } = useContext(AuthContext);
    const { t } = useTranslation();
    const detailsContent = [
        'Detail 1',
        'Detail 2',
        'Detail 3',
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        if (currentIndex < detailsContent.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            onboard()
        }
    };

    const handleGoBack = () => {
        setCurrentIndex(0);
        navigation.navigate('Home');
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle={"light-content"} backgroundColor={'#4597cf'} />
            <View style={{ flex: 1, marginTop: verticalScale(30), }}>

                <Swiper
                    loop={false}
                    index={currentIndex}
                    showsPagination={true}
                    onIndexChanged={(index) => setCurrentIndex(index)}
                    pagingEnabled
                    paginationStyle={{ bottom: vs(600) }}
                    activeDotStyle={{ width: scale(40), height: vs(6) }}
                    activeDotColor={String(COLORS.gray)}
                    dotColor={String(COLORS.gray)}

                >
                    {detailsContent.map((detail, index) => (
                        <View key={index} style={{ flex: 1, }}>
                            {index === 0 ?
                                <View style={{ flex: 1, backgroundColor: COLORS.white, borderRadius: 30, padding: scale(15), }}>
                                    <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "space-between", }}>
                                        <View style={{ width: scale(70) }} />
                                        <TouchableOpacity style={{ width: scale(45) }} onPress={() => onboard()}>
                                            <Text style={{ color: '#4597cf', fontSize: verticalScale(13), fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.medium }}>{t('skip')}</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ justifyContent: "space-around", height: vs(100) }}>
                                        <View>
                                            <Text style={{ textAlign: "center", color: '#1d3660', fontSize: verticalScale(23), fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.semibold, marginBottom: 0, marginTop: -10 }}>{t("onboard-heading-1")}</Text>
                                            <Text style={{ textAlign: "center", color: '#1d3660', fontSize: verticalScale(12), fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.normal, marginBottom: 0 }}>{t('onboard-para-1')}</Text>
                                        </View>

                                    </View>
                                    <View style={{ justifyContent: "center", alignSelf: "center", }}>
                                        <Image source={ICONS.ob1} style={{ width: scale(420), height: vs(420), resizeMode: "contain", alignSelf: "center" }} />
                                    </View>
                                </View>
                                : index === 1 ?
                                    <View style={{ flex: 1, backgroundColor: COLORS.white, borderRadius: 30, padding: scale(15), }}>
                                        <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "space-between", }}>
                                            <View style={{ width: scale(70) }} />
                                            <TouchableOpacity style={{ width: scale(45) }} onPress={() => onboard()}>
                                                <Text style={{ color: '#4597cf', fontSize: verticalScale(13), fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.medium }}>{t('skip')}</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{ justifyContent: "space-around", height: vs(100), alignItems: "center" }}>
                                            <View>
                                                <Text style={{ textAlign: "center", color: '#1d3660', fontSize: verticalScale(23), fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.semibold, marginBottom: vs(0), marginTop: verticalScale(-10) }}>{t('onboard-heading-2')}</Text>
                                                <Text style={{ textAlign: "center", color: '#1d3660', fontSize: verticalScale(12), fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.normal, marginBottom: 0, width: scale(260) }}>{t("onboard-para-2")}</Text>
                                            </View>
                                        </View>
                                        <View style={{ justifyContent: "center", alignSelf: "center", }}>
                                            <Image source={ICONS.ob2} style={{ width: scale(420), height: vs(420), resizeMode: "contain", alignSelf: "center" }} />
                                        </View>
                                    </View>
                                    : index === 2 ?
                                        <View style={{ flex: 1, backgroundColor: COLORS.white, borderRadius: 30, padding: (15), }}>
                                            <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "space-between", }}>
                                                <View style={{ width: scale(70) }} />
                                                {/* <View style={styles.indicator} /> */}
                                                <TouchableOpacity style={{ width: scale(45) }} onPress={() => onboard()}>
                                                    <Text style={{ color: '#4597cf', fontSize: verticalScale(13), fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.medium }}>{t('skip')}</Text>
                                                </TouchableOpacity>
                                            </View>
                                            <View style={{ justifyContent: "space-around", height: vs(100) }}>
                                                <View>
                                                    <Text style={{ textAlign: "center", color: '#1d3660', fontSize: verticalScale(23), fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.semibold, marginBottom: vs(0), marginTop: vs(-10) }}>{t('onboard-heading-3')}</Text>
                                                    <Text style={{ textAlign: "center", color: '#1d3660', fontSize: verticalScale(12), fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.normal, marginBottom: 0 }}>{t('onboard-para-3')}</Text>
                                                </View>
                                            </View>
                                            <View style={{ justifyContent: "center", alignSelf: "center", }}>
                                                <Image source={ICONS.ob3} style={{ width: scale(420), height: scale(420), resizeMode: "contain", alignSelf: "center" }} />
                                            </View>
                                        </View>
                                        : null
                            }
                        </View>
                    ))}
                </Swiper>
                <TouchableOpacity
                    onPress={handleNext}
                    style={{ position: "absolute", bottom: 15, alignSelf: "center", flexDirection: 'row', alignItems: "center", justifyContent: "center", padding: 5 }}>
                    <View style={{ width: 70 }} />
                    <View style={{ width: 100, height: vs(25), borderRadius: 50, backgroundColor: "#4597cf", alignItems: "center", justifyContent: "center" }}>
                        <Text style={{ color: "#ffffff", fontSize: vs(12), fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.normal }}>{currentIndex === detailsContent.length - 1 ? t("lets-start") : t('next')}</Text>
                    </View>
                    <View style={{ width: 70 }}>
                        <Image source={ICONS.arrow} style={{ width: 30, height: 30, resizeMode: "contain" }} />
                    </View>
                </TouchableOpacity>
            </View >
        </View >
    )
}



export default Onboarding;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#4597cf',
        flex: 1,
    },
    body: {
        marginTop: 40,
        backgroundColor: '#FFFFFF',
        flex: 1,
        borderRadius: 40,
        padding: 10,
        overflow: 'hidden'

    },
    indicator: {
        width: 70,
        height: 3,
        backgroundColor: '#d2d1d2',
        borderRadius: 5,
        alignSelf: "center"
    }
})