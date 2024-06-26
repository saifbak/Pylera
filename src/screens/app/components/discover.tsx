// screens/DetailsScreen.tsx
import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import { COLORS, FONTS, ICONS } from '../../../shared/utils/theme';
import { scale, vs } from 'react-native-size-matters';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

const detailsContent = [
    'Detail 1',
    'Detail 2',
    'Detail 3',
    'Detail 4',
    'Detail 5',
    // Add more details if needed
];

const Discover: React.FC<{ navigation: any }> = ({ navigation }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const { t } = useTranslation();

    const handleNext = () => {
        if (currentIndex < detailsContent.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            navigation.navigate('Home');
            setCurrentIndex(0);
        }
    };

    const handleGoBack = () => {
        setCurrentIndex(0);
        navigation.navigate('Home');
    };

    return (
        <View style={{ flex: 1, backgroundColor: COLORS.primary }}>
            <View style={{ flex: 1, borderRadius: 30, marginTop: 40 }}>
                <Swiper
                    loop={false}
                    index={currentIndex}
                    scrollEnabled={false}
                    showsPagination={true}
                    onIndexChanged={(index) => setCurrentIndex(index)}
                    pagingEnabled
                    paginationStyle={{ bottom: 70, flexDirection: i18next.language === "ar" ? "row-reverse" : "row" }}

                >
                    {detailsContent.map((detail, index) => (
                        <View key={index} style={{ flex: 1, }}>
                            {index === 0 ?
                                <View style={{ flex: 1, backgroundColor: COLORS.white, borderRadius: 30, padding: 20, }}>
                                    <Image source={ICONS.infection} style={{ width: scale(250), height: vs(170), resizeMode: "contain", alignSelf: "center" }} />
                                    <View style={{ flexDirection: i18next.language === "ar" ? "row-reverse" : "row", alignSelf: i18next.language === "ar" ? "flex-end" : "flex-start" }}>
                                        <Text style={{ fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.h1, color: COLORS.appgreen, fontSize: vs(22) }}>{t('infection')}</Text>
                                        <Text style={{
                                            fontFamily: FONTS.h1, color: COLORS.appgreen,
                                            fontSize: vs(13),
                                            lineHeight: i18next.language === "ar" ? 25 : 40,
                                            textAlignVertical: 'top',
                                        }}>1,2
                                        </Text>
                                    </View>
                                    <Text style={{ fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.bold, color: COLORS.secondary, fontSize: vs(13.5), textAlign: i18next.language === "ar" ? "right" : "left", marginBottom: 10 }}>{t('discover-para')}</Text>
                                    <Text style={{ fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.normal, color: COLORS.secondary, fontSize: vs(11.5), textAlign: i18next.language === "ar" ? "right" : "left", marginBottom: 10 }}><Text style={{ color: COLORS.appgreen }}>• </Text>{t('discover-li-1')}</Text>
                                    <Text style={{ fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.normal, color: COLORS.secondary, fontSize: vs(11.5), textAlign: i18next.language === "ar" ? "right" : "left", marginBottom: 10 }}><Text style={{ color: COLORS.appgreen }}>• </Text>{t('discover-li-2')}</Text>
                                    <Text style={{ fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.normal, color: COLORS.secondary, fontSize: vs(11.5), textAlign: i18next.language === "ar" ? "right" : "left" }}><Text style={{ color: COLORS.appgreen }}>• </Text>{t("discover-li-3")}</Text>
                                </View>
                                : index === 1 ?
                                    <View style={{ flex: 1, alignItems: i18next.language === "ar" ? "flex-end" : 'flex-start', backgroundColor: COLORS.white, borderRadius: 30, padding: 20, }}>
                                        <Image source={ICONS.symptoms} style={{ width: scale(250), height: vs(170), resizeMode: "contain", alignSelf: "center" }} />
                                        <View style={{ flexDirection: i18next.language === "ar" ? "row-reverse" : "row" }}>
                                            <Text style={{ fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.h1, color: COLORS.appgreen, fontSize: vs(22) }}>{t('symptoms')}</Text>
                                            <Text style={{
                                                fontFamily: FONTS.h1, color: COLORS.appgreen,
                                                fontSize: vs(13), // Adjust the font size for superscript
                                                lineHeight: i18next.language === "ar" ? 25 : 40, // Adjust the line height for superscript
                                                textAlignVertical: 'top',
                                            }}>3
                                            </Text>
                                        </View>
                                        <Text style={{ fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.bold, color: COLORS.secondary, fontSize: vs(13.5), textAlign: i18next.language === "ar" ? "right" : 'justify', marginBottom: 10 }}>{t('symptoms-para')}</Text>
                                        <Text style={{ fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.normal, color: COLORS.secondary, fontSize: vs(12.5), textAlign: "justify", }}><Text style={{ color: COLORS.appgreen }}>• </Text>{t('symptoms-li-1')}</Text>
                                        <Text style={{ fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.normal, color: COLORS.secondary, fontSize: vs(12.5), textAlign: "justify", }}><Text style={{ color: COLORS.appgreen }}>• </Text>{t('symptoms-li-2')}</Text>
                                        <Text style={{ fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.normal, color: COLORS.secondary, fontSize: vs(12.5), textAlign: "justify", }}><Text style={{ color: COLORS.appgreen }}>• </Text>{t('symptoms-li-3')}</Text>
                                        <Text style={{ fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.normal, color: COLORS.secondary, fontSize: vs(12.5), textAlign: "justify", }}><Text style={{ color: COLORS.appgreen }}>• </Text>{t('symptoms-li-4')}</Text>
                                        <Text style={{ fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.normal, color: COLORS.secondary, fontSize: vs(12.5), textAlign: "justify", }}><Text style={{ color: COLORS.appgreen }}>• </Text>{t('symptoms-li-5')}</Text>
                                        <Text style={{ fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.normal, color: COLORS.secondary, fontSize: vs(12.5), textAlign: "justify", }}><Text style={{ color: COLORS.appgreen }}>• </Text>{t('symptoms-li-6')}</Text>
                                        <Text style={{ fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.normal, color: COLORS.secondary, fontSize: vs(12.5), textAlign: "justify", }}><Text style={{ color: COLORS.appgreen }}>• </Text>{t('symptoms-li-7')}</Text>
                                    </View>
                                    : index === 2 ?
                                        <View style={{ flex: 1, alignItems: i18next.language === "ar" ? "flex-end" : 'flex-start', backgroundColor: COLORS.white, borderRadius: 30, padding: 20, }}>
                                            <Image source={ICONS.cause} style={{ width: scale(280), height: vs(200), resizeMode: "contain", alignSelf: "center" }} />
                                            {/* <View style={{ flexDirection: i18next.language === "ar" ? "row-reverse" : "row" }}>
                                                <Text style={{ fontFamily: FONTS.h1, color: COLORS.appgreen, fontSize: vs(22), alignSelf: "flex-start" }}>{t('cause')}</Text>
                                                <Text style={{ fontFamily: FONTS.h1, color: COLORS.appgreen, fontSize: vs(13), textAlignVertical: 'top', top: 40, lineHeight:, left: -13 }}>{t('sup-3')}
                                                </Text>
                                            </View> */}
                                            <View style={{ flexDirection: i18next.language === "ar" ? "row-reverse" : "row" }}>
                                                <Text style={{ fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.h1, color: COLORS.appgreen, fontSize: vs(22) }}>{t('cause')}</Text>
                                                <Text style={{
                                                    fontFamily: FONTS.h1, color: COLORS.appgreen,
                                                    fontSize: vs(13), // Adjust the font size for superscript
                                                    lineHeight: i18next.language === "ar" ? 25 : 40, // Adjust the line height for superscript
                                                    textAlignVertical: 'top',
                                                }}>{t('sup-3')}
                                                </Text>
                                            </View>
                                            <Text style={{ fontFamily: i18next.language === "ar" ? FONTS.bold : FONTS.bold, color: COLORS.secondary, fontSize: vs(13.5), textAlign: "justify", }}>{t('cause-li-heading-1')}</Text>
                                            <Text style={{ fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.normal, color: COLORS.secondary, fontSize: vs(11.5), textAlign: i18next.language === "ar" ? "right" : "justify", marginBottom: i18next.language === "ar" ? vs(10) : 0 }}>{t('cause-li-para-1')}</Text>
                                            <Text style={{ fontFamily: i18next.language === "ar" ? FONTS.bold : FONTS.bold, color: COLORS.secondary, fontSize: vs(13.5), textAlign: "justify", }}>{t('cause-li-heading-2')}</Text>
                                            <Text style={{ fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.normal, color: COLORS.secondary, fontSize: vs(11.5), textAlign: i18next.language === "ar" ? "right" : "justify", marginBottom: i18next.language === "ar" ? vs(10) : 0 }}>{t('cause-li-para-2')}</Text>
                                            <Text style={{ fontFamily: i18next.language === "ar" ? FONTS.bold : FONTS.bold, color: COLORS.secondary, fontSize: vs(13.5), textAlign: "justify", }}>{t('cause-li-heading-3')}</Text>
                                            <Text style={{ fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.normal, color: COLORS.secondary, fontSize: vs(11.5), textAlign: i18next.language === "ar" ? "right" : "justify", }}>{t('cause-li-para-3')}</Text>
                                        </View>
                                        : index === 3 ?
                                            <View style={{ flex: 1, alignItems: i18next.language === "ar" ? "flex-end" : 'flex-start', backgroundColor: COLORS.white, borderRadius: 30, padding: 30, }}>
                                                <Image source={i18next.language === "ar" ? ICONS.dodontAr : ICONS.dodont} style={{ width: scale(90), height: vs(60), resizeMode: "contain", alignSelf: i18next.language === 'ar' ? 'flex-end' : "flex-start" }} />
                                                <View style={{ flexDirection: i18next.language === "ar" ? "row-reverse" : "row", marginTop: 10 }}>
                                                    <Text style={{ fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.h1, color: COLORS.appgreen, fontSize: vs(20) }}>{t('do-dont')}</Text>
                                                    {/* <Text style={{
                                                        fontFamily: FONTS.h1, color: COLORS.appgreen,
                                                        fontSize: vs(13), // Adjust the font size for superscript
                                                        lineHeight: i18next.language === "ar" ? 25 : 40, // Adjust the line height for superscript
                                                        textAlignVertical: 'top',
                                                    }}>{t('sup-4')}
                                                    </Text> */}
                                                </View>
                                                <Text style={{ fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.bold, color: COLORS.secondary, fontSize: vs(11.5), textAlign: i18next.language === "ar" ? "right" : "justify", marginBottom: -20, marginTop: -5 }}>{t('do-dont-para')}</Text>
                                                <View style={{ flexDirection: i18next.language === "ar" ? "row-reverse" : "row" }}>
                                                    <Image source={i18next.language === "ar" ? ICONS.doAr : ICONS.do} style={{ width: scale(75), height: vs(75), resizeMode: "contain", }} />
                                                    <Text style={{ fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.h1, color: COLORS.appgreen, fontSize: vs(12), lineHeight: 80, textAlignVertical: 'top', marginLeft: 5 }}>8-13</Text>
                                                </View>
                                                <View style={{ flexWrap: "wrap", flexDirection: i18next.language === 'ar' ? "row-reverse" : "row", marginTop: vs(-15) }}>
                                                    <View style={{ alignItems: "center", marginRight: 15 }}>
                                                        <Image source={ICONS.cranberry} style={{ width: scale(40), height: vs(40), resizeMode: "contain", }} />
                                                        <Text style={{ fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.bold, color: COLORS.secondary, fontSize: vs(8.5), textAlign: i18next.language === "ar" ? "center" : "justify", }}>{t('cranberry')}</Text>
                                                    </View>
                                                    <View style={{ alignItems: "center", marginRight: 15 }}>
                                                        <Image source={ICONS.broccoli} style={{ width: scale(40), height: vs(40), resizeMode: "contain", }} />
                                                        <Text style={{ fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.bold, color: COLORS.secondary, fontSize: vs(8.5), textAlign: i18next.language === "ar" ? "center" : "justify", }}>{t('broccoli')}</Text>
                                                    </View>
                                                    <View style={{ alignItems: "center", marginRight: 15 }}>
                                                        <Image source={ICONS.beans} style={{ width: scale(40), height: vs(40), resizeMode: "contain", }} />
                                                        <Text style={{ fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.bold, color: COLORS.secondary, fontSize: vs(8.5), textAlign: i18next.language === "ar" ? "center" : "justify", }}>{t('beans')}</Text>
                                                    </View>
                                                    <View style={{ alignItems: "center", marginRight: 15 }}>
                                                        <Image source={ICONS.green_banana} style={{ width: scale(40), height: vs(40), resizeMode: "contain", }} />
                                                        <Text style={{ fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.bold, color: COLORS.secondary, fontSize: vs(8.5), textAlign: i18next.language === "ar" ? "center" : "justify", }}>{t('green-banana')}</Text>
                                                    </View>
                                                    <View style={{ alignItems: "center", marginRight: 15 }}>
                                                        <Image source={ICONS.aloevera} style={{ width: scale(40), height: vs(40), resizeMode: "contain", }} />
                                                        <Text style={{ fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.bold, color: COLORS.secondary, fontSize: vs(8.5), textAlign: i18next.language === "ar" ? "center" : "justify", }}>{t('aloe-vera')}</Text>
                                                    </View>
                                                    <View style={{ alignItems: "center", marginRight: 15, marginTop: 5 }}>
                                                        <Image source={ICONS.gabbage} style={{ width: scale(40), height: vs(40), resizeMode: "contain", }} />
                                                        <Text style={{ fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.bold, color: COLORS.secondary, fontSize: vs(8.5), textAlign: i18next.language === "ar" ? "center" : "justify", }}>{t('cabbage')}</Text>
                                                    </View>
                                                    <View style={{ alignItems: "center", marginRight: 15, marginTop: 5 }}>
                                                        <Image source={ICONS.oregano} style={{ width: scale(40), height: vs(40), resizeMode: "contain", }} />
                                                        <Text style={{ fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.bold, color: COLORS.secondary, fontSize: vs(8.5), textAlign: i18next.language === "ar" ? "center" : "justify", }}>{t('oregano')}</Text>
                                                    </View>
                                                </View>
                                                <View style={{ flexDirection: i18next.language === "ar" ? "row-reverse" : "row" }}>
                                                    <Image source={i18next.language === "ar" ? ICONS.dontAr : ICONS.dont} style={{ width: scale(75), height: vs(75), resizeMode: "contain", marginTop: -20 }} />
                                                    <Text style={{ fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.h1, color: '#e62341', fontSize: vs(12), lineHeight: 30, textAlignVertical: 'top', marginLeft: 5 }}>4, 5</Text>
                                                </View>
                                                <View style={{ flexWrap: "wrap", flexDirection: i18next.language === 'ar' ? "row-reverse" : 'row', marginTop: vs(-18) }}>
                                                    <View style={{ alignItems: "center", marginRight: 15 }}>
                                                        <Image source={ICONS.pickles} style={{ width: scale(40), height: vs(40), resizeMode: "contain", }} />
                                                        <Text style={{ fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.bold, color: COLORS.secondary, fontSize: vs(8.5), textAlign: i18next.language === "ar" ? "center" : "justify", }}>{t('pickles')}</Text>
                                                    </View>
                                                    <View style={{ alignItems: "center", marginRight: 15 }}>
                                                        <Image source={ICONS.spices} style={{ width: scale(40), height: vs(40), resizeMode: "contain", }} />
                                                        <Text style={{ fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.bold, color: COLORS.secondary, fontSize: vs(8.5), textAlign: i18next.language === "ar" ? "center" : "justify", }}>{t('spices')}</Text>
                                                    </View>
                                                    <View style={{ alignItems: "center", marginRight: 15 }}>
                                                        <Image source={ICONS.tea} style={{ width: scale(40), height: vs(40), resizeMode: "contain", }} />
                                                        <Text style={{ fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.bold, color: COLORS.secondary, fontSize: vs(8.5), textAlign: i18next.language === "ar" ? "center" : "justify", }}>{t('tea')}</Text>
                                                    </View>
                                                    <View style={{ alignItems: "center", marginRight: 15 }}>
                                                        <Image source={ICONS.chocolate} style={{ width: scale(40), height: vs(40), resizeMode: "contain", }} />
                                                        <Text style={{ fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.bold, color: COLORS.secondary, fontSize: vs(8.5), textAlign: i18next.language === "ar" ? "center" : "justify", }}>{t('chocolate')}</Text>
                                                    </View>
                                                    <View style={{ alignItems: "center", marginRight: 15 }}>
                                                        <Image source={ICONS.citrus} style={{ width: scale(40), height: vs(40), resizeMode: "contain", }} />
                                                        <Text style={{ fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.bold, color: COLORS.secondary, fontSize: vs(8.5), textAlign: i18next.language === "ar" ? "center" : "justify", }}>{t('citrus')}</Text>
                                                    </View>
                                                    <View style={{ alignItems: "center", marginRight: 15, marginTop: 5 }}>
                                                        <Image source={ICONS.fries} style={{ width: scale(40), height: vs(40), resizeMode: "contain", }} />
                                                        <Text style={{ fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.bold, color: COLORS.secondary, fontSize: vs(8.5), textAlign: i18next.language === "ar" ? "center" : "justify", }}>{t('fries')}</Text>
                                                    </View>
                                                    <View style={{ alignItems: "center", marginRight: 15, marginTop: 5 }}>
                                                        <Image source={ICONS.coffee} style={{ width: scale(40), height: vs(40), resizeMode: "contain", }} />
                                                        <Text style={{ fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.bold, color: COLORS.secondary, fontSize: vs(8.5), textAlign: i18next.language === "ar" ? "center" : "justify", }}>{t('coffee')}</Text>
                                                    </View>
                                                    <View style={{ alignItems: "center", marginRight: 15, marginTop: 5 }}>
                                                        <Image source={ICONS.softdrink} style={{ width: scale(40), height: vs(40), resizeMode: "contain", }} />
                                                        <Text style={{ fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.bold, color: COLORS.secondary, fontSize: vs(8.5), textAlign: i18next.language === "ar" ? "center" : "justify", }}>{t('soda-drinks')}</Text>
                                                    </View>
                                                    <View style={{ alignItems: "center", marginRight: 15, marginTop: 5 }}>
                                                        <Image source={ICONS.tomatoes} style={{ width: scale(40), height: vs(40), resizeMode: "contain", }} />
                                                        <Text style={{ fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.bold, color: COLORS.secondary, fontSize: vs(8.5), textAlign: i18next.language === "ar" ? "center" : "justify", }}>{t('tomatoes')}</Text>
                                                    </View>
                                                    <View style={{ alignItems: "center", marginRight: 15, marginTop: 5 }}>
                                                        <Image source={ICONS.redmeat} style={{ width: scale(40), height: vs(40), resizeMode: "contain", }} />
                                                        <Text style={{ fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.bold, color: COLORS.secondary, fontSize: vs(8.5), textAlign: i18next.language === "ar" ? "center" : "justify", }}>{t('red-meat')}</Text>
                                                    </View>
                                                </View>
                                            </View>
                                            : index === 4 ?
                                                <View style={{ flex: 1, backgroundColor: COLORS.white, borderRadius: 30, padding: 20, }}>
                                                    <Image source={i18next.language === "ar" ? ICONS.factsAR : ICONS.facts} style={{ width: scale(280), height: vs(200), resizeMode: "contain", alignSelf: "center" }} />
                                                    <View style={{ flexDirection: i18next.language === "ar" ? "row-reverse" : "row", marginTop: -20, marginBottom: 20, alignSelf: i18next.language == "ar" ? "flex-end" : "flex-start" }}>
                                                        <Text style={{ fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.h1, color: COLORS.appgreen, fontSize: vs(22), textAlign: i18next.language == "ar" ? "right" : "left" }}>{t('h-pylori-facts')}</Text>
                                                        <Text style={{
                                                            fontFamily: FONTS.h1, color: COLORS.appgreen,
                                                            fontSize: vs(13), // Adjust the font size for superscript
                                                            lineHeight: i18next.language === "ar" ? 45 : 40, // Adjust the line height for superscript
                                                            textAlignVertical: i18next.language === "ar" ? 'bottom' : "top",
                                                            right: i18next.language === "ar" ? 230 : 0
                                                        }}>12-17
                                                        </Text>
                                                    </View>
                                                    <View style={{ flex: .8, flexDirection: i18next.language === "ar" ? 'row-reverse' : "row", justifyContent: "space-between" }}>
                                                        <View style={{ width: scale(103), height: vs(100), backgroundColor: COLORS.secondary, padding: 5, alignItems: i18next.language === "ar" ? "flex-end" : "flex-start", justifyContent: "center", borderRadius: 12, }}>
                                                            <View style={{ flex: .7 }}>
                                                                <Text style={{ fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.bold, color: COLORS.white, fontSize: vs(12), textAlign: i18next.language === "ar" ? "right" : "left", }}>{t('did-you-know')}</Text>
                                                            </View>
                                                            <View style={{ flex: 2, }}>
                                                                <Text style={{ fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.normal, color: COLORS.white, fontSize: vs(9), textAlign: i18next.language === "ar" ? "right" : "left", }}>{t('did-you-know-h1')}</Text>
                                                            </View>
                                                        </View>
                                                        <View style={{ width: scale(103), height: vs(100), backgroundColor: COLORS.primary, padding: 5, alignItems: i18next.language === "ar" ? "flex-end" : "flex-start", justifyContent: "center", borderRadius: 12, }}>
                                                            <View style={{ flex: .7 }}>
                                                                <Text style={{ fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.bold, color: COLORS.white, fontSize: vs(12), textAlign: i18next.language === "ar" ? "right" : "left", }}>{t('did-you-know')}</Text>
                                                            </View>
                                                            <View style={{ flex: 2 }}>
                                                                <Text style={{ fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.normal, color: COLORS.white, fontSize: vs(9), textAlign: i18next.language === "ar" ? "right" : "left", }}>{t('did-you-know-h2')}</Text>
                                                            </View>
                                                        </View>
                                                        <View style={{ width: scale(103), height: vs(100), backgroundColor: COLORS.secondary, padding: 5, alignItems: i18next.language === "ar" ? "flex-end" : "flex-start", justifyContent: "center", borderRadius: 12, }}>
                                                            <View style={{ flex: .7 }}>
                                                                <Text style={{ fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.bold, color: COLORS.white, fontSize: vs(12), textAlign: i18next.language === "ar" ? "right" : "left", }}>{t('did-you-know')}</Text>
                                                            </View>
                                                            <View style={{ flex: 2 }}>
                                                                <Text style={{ fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.normal, color: COLORS.white, fontSize: vs(9), textAlign: i18next.language === "ar" ? "right" : "left", }}>{t('did-you-know-h3')}</Text>
                                                            </View>
                                                        </View>
                                                    </View>
                                                    <View style={{ flex: 1.3, flexDirection: i18next.language === "ar" ? 'row-reverse' : "row", justifyContent: "space-between" }}>
                                                        <View style={{ width: scale(103), height: vs(100), backgroundColor: COLORS.primary, padding: 5, alignItems: i18next.language === "ar" ? "flex-end" : "flex-start", justifyContent: "center", borderRadius: 12, }}>
                                                            <View style={{ flex: .7 }}>
                                                                <Text style={{ fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.bold, color: COLORS.white, fontSize: vs(12), textAlign: i18next.language === "ar" ? "right" : "left", }}>{t('did-you-know')}</Text>
                                                            </View>
                                                            <View style={{ flex: 2 }}>
                                                                <Text style={{ fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.normal, color: COLORS.white, fontSize: vs(9), textAlign: i18next.language === "ar" ? "right" : "left", }}>{t('did-you-know-h4')}</Text>
                                                            </View>
                                                        </View>
                                                        <View style={{ width: scale(209), height: vs(100), backgroundColor: COLORS.secondary, padding: 5, alignItems: i18next.language === "ar" ? "flex-end" : "flex-start", justifyContent: "center", borderRadius: 12, }}>
                                                            <View style={{ flex: .7 }}>
                                                                <Text style={{ fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.bold, color: COLORS.white, fontSize: vs(12), textAlign: i18next.language === "ar" ? "right" : "left", }}>{t('did-you-know')}</Text>
                                                            </View>
                                                            <View style={{ flex: 2 }}>
                                                                <Text style={{ fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.normal, color: COLORS.white, fontSize: vs(9), textAlign: i18next.language === "ar" ? "right" : "left", }}>{t('did-you-know-h5')}</Text>
                                                            </View>
                                                        </View>
                                                    </View>
                                                </View>
                                                : null
                            }
                        </View>
                    ))}
                </Swiper>
                <View style={{ width: scale(120), position: "absolute", bottom: 10, alignSelf: "center", alignItems: "center" }}>
                    <TouchableOpacity style={{ backgroundColor: COLORS.primary, width: scale(100), height: vs(25), borderRadius: 50, alignItems: "center", justifyContent: "center", marginVertical: 5 }} onPress={handleNext}  >
                        <Text style={{ color: COLORS.white, fontSize: vs(12), fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.bold }}>{currentIndex === detailsContent.length - 1 ? t('go-back') : t('next')} </Text>
                    </TouchableOpacity>
                    <Text
                        onPress={() => navigation.navigate('References')}
                        style={{ color: COLORS.secondary, fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.semibold, fontSize: vs(9), textAlign: 'center' }}>{t("disclaimer-n-references")}</Text>
                </View>
            </View >
        </View >
    );
};

export default Discover;