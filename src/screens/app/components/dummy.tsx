// screens/DetailsScreen.tsx
import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, Image, Pressable } from 'react-native';
import Swiper from 'react-native-swiper';
import { COLORS, FONTS, ICONS } from '../../../shared/utils/theme';
import { ScaledSheet, scale, vs } from 'react-native-size-matters';
import CheckBox from '@react-native-community/checkbox';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
const detailsContent = [
    'Detail 1',
    'Detail 2',
    'Detail 3',
    'Detail 4',
    'Detail 5',
    'Detail 6',
];


const Medication: React.FC<{ navigation: any }> = ({ navigation }) => {
    const { t, i18n } = useTranslation();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [toggleCheckBox, setToggleCheckBox] = useState<boolean>(false)
    const [proceed, setProceed] = useState<boolean>(false)
    const handleNext = () => {
        if (currentIndex < detailsContent.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            navigation.navigate('Home');
            setCurrentIndex(0);
            setProceed(false)
            setToggleCheckBox(false)

        }
    };

    const handleGoBack = () => {
        setCurrentIndex(0);
        navigation.navigate('Home');
    };
    console.warn('i18next checking ===>', i18next.language)

    return (
        <View style={{ flex: 1, backgroundColor: COLORS.primary }}>
            <View style={{ flex: 1, borderRadius: 30, marginTop: 40 }}>
                {proceed === false ?
                    <>
                        <View style={{ flex: 1, alignItems: i18next.language === "ar" ? "flex-end" : "flex-start", backgroundColor: COLORS.white, borderRadius: 30, paddingHorizontal: 30, }}>
                            <Pressable onPress={() => navigation.goBack()} style={{ alignSelf: i18next.language === 'ar' ? "flex-start" : "flex-end", marginTop: 15 }}><Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.semibold, color: COLORS.primary, fontSize: vs(13) }}>{t('back')}</Text></Pressable>
                            <Image source={ICONS.caution} style={{ width: scale(180), height: vs(100), resizeMode: "contain", alignSelf: "center", }} />
                            <View style={{ flexDirection: i18next.language === 'ar' ? "row-reverse" : "row", marginTop: 8, marginBottom: i18next.language === 'ar' ? 10 : 0, alignItems: "flex-end", alignSelf: i18next.language === 'ar' ? "flex-end" : "flex-start" }}>
                                <Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.h1, color: COLORS.secondary, fontSize: vs(13) }}>{t("medical-heading")}</Text>
                                {i18next.language !== "ar" ? <Text style={{
                                    fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.h1, color: COLORS.secondary,
                                    fontSize: vs(8),
                                    lineHeight: 20,
                                    textAlignVertical: 'top',
                                    marginLeft: 1
                                }}>18
                                </Text> : null}
                            </View>
                            <Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.normal, color: COLORS.secondary, fontSize: vs(11), textAlign: i18next.language === 'ar' ? 'right' : "justify", marginBottom: i18next.language === 'ar' ? 8 : 0, }}><Text style={{ color: COLORS.secondary }}>• </Text>{t("medical-li-1")}</Text>
                            <Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.normal, color: COLORS.secondary, fontSize: vs(11), textAlign: i18next.language === 'ar' ? 'right' : "justify", marginBottom: i18next.language === 'ar' ? 8 : 0, }}><Text style={{ color: COLORS.secondary }}>• </Text>{t("medical-li-2")}</Text>
                            <Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.normal, color: COLORS.secondary, fontSize: vs(11), textAlign: i18next.language === 'ar' ? 'right' : "justify", marginBottom: i18next.language === 'ar' ? 8 : 0, }}><Text style={{ color: COLORS.secondary }}>• </Text>{t("medical-li-3")}</Text>
                            <Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.normal, color: COLORS.secondary, fontSize: vs(11), textAlign: i18next.language === 'ar' ? 'right' : "justify", marginBottom: i18next.language === 'ar' ? 8 : 0, }}><Text style={{ color: COLORS.secondary }}>• </Text>{t("medical-li-4")}</Text>
                            <Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.normal, color: COLORS.secondary, fontSize: vs(11), textAlign: i18next.language === 'ar' ? 'right' : "justify", marginBottom: i18next.language === 'ar' ? 8 : 0, }}><Text style={{ color: COLORS.secondary }}>• </Text>{t("medical-li-5")}</Text>
                            <Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.normal, color: COLORS.secondary, fontSize: vs(11), textAlign: i18next.language === 'ar' ? 'right' : "justify", marginBottom: i18next.language === 'ar' ? 8 : 0, }}><Text style={{ color: COLORS.secondary }}>• </Text>{t("medical-li-6")}</Text>
                            <Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.normal, color: COLORS.secondary, fontSize: vs(11), textAlign: i18next.language === 'ar' ? 'right' : "justify", marginBottom: i18next.language === 'ar' ? 8 : 0, }}><Text style={{ color: COLORS.secondary }}>• </Text>{t("medical-li-7")}</Text>
                            <Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.normal, color: COLORS.primary, fontSize: vs(12), textAlign: i18next.language === 'ar' ? 'right' : "justify" }}>{t('email')}</Text>
                            <View style={{ flexDirection: i18next.language === 'ar' ? 'row-reverse' : 'row', alignItems: "center", marginTop: 20 }}>
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
                                <Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.normal, color: COLORS.secondary, fontSize: vs(12), }}>{t('agreement')}</Text>
                            </View>
                        </View>
                        <View style={{ width: scale(120), position: "absolute", bottom: 30, alignSelf: "center", alignItems: "center" }}>
                            <TouchableOpacity
                                disabled={!toggleCheckBox}
                                style={{ backgroundColor: toggleCheckBox === true ? COLORS.primary : COLORS.gray, width: scale(180), height: vs(25), borderRadius: 50, alignItems: "center", justifyContent: "center", marginVertical: 5 }} onPress={() => setProceed(true)}  >
                                <Text style={{ color: COLORS.white, fontSize: vs(11), fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.bold }}>{t('proceed')} </Text>
                            </TouchableOpacity>
                        </View>
                    </>
                    :
                    <><Swiper
                        scrollEnabled={false}
                        loop={false}
                        index={currentIndex}
                        showsPagination={true}
                        onIndexChanged={(index) => setCurrentIndex(index)}
                        pagingEnabled
                        paginationStyle={{ bottom: 75, flexDirection: i18next.language == "ar" ? "row-reverse" : "row" }}
                    >
                        {detailsContent.map((detail, index) => (
                            <View key={index} style={{ flex: 1, }}>
                                {index === 0 ?
                                    <View style={{ flex: 1, backgroundColor: COLORS.white, borderRadius: 30, padding: 20, }}>
                                        <Image source={ICONS.indication} style={{ width: scale(250), height: vs(170), resizeMode: "contain", alignSelf: "center" }} />
                                        <View style={{ flexDirection: "column" }}>
                                            <View style={{ flexDirection: i18next.language == "ar" ? "row-reverse" : "row" }}>
                                                <Text style={{ fontFamily: FONTS.h1, color: COLORS.primary, fontSize: vs(22) }}>PYLERA</Text>
                                                <Text style={{
                                                    fontFamily: FONTS.h1, color: COLORS.primary,
                                                    fontSize: vs(17),
                                                    lineHeight: 40,
                                                    textAlignVertical: 'top',
                                                }}>®
                                                </Text>
                                            </View>
                                            <View style={{ flexDirection: i18next.language == "ar" ? "row-reverse" : "row", marginTop: -20 }}>
                                                <Text style={{ fontFamily: FONTS.h1, color: COLORS.primary, fontSize: vs(22) }}>Indication & Usage</Text>
                                                <Text style={{
                                                    fontFamily: FONTS.h1, color: COLORS.primary,
                                                    fontSize: vs(13),
                                                    lineHeight: 40,
                                                    textAlignVertical: 'top',
                                                }}>18
                                                </Text>
                                            </View>
                                        </View>
                                        <Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.normal, color: COLORS.secondary, fontSize: vs(12.5), textAlign: i18next.language === 'ar' ? 'right' : "justify", marginBottom: i18next.language === 'ar' ? 10 : 0 }}>{t('pylera-para')}</Text>
                                        <Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.normal, color: COLORS.secondary, fontSize: vs(12.5), textAlign: i18next.language === 'ar' ? 'right' : "justify", }}>{t("pylera-para-2")}</Text>
                                    </View>
                                    : index === 1 ?
                                        <View style={{ flex: 1, backgroundColor: COLORS.white, borderRadius: 30, padding: 20, }}>
                                            <View style={{ flexDirection: "row" }}>
                                                <View style={{ flexDirection: "row" }}>
                                                    <Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.h1, color: COLORS.primary, fontSize: vs(22) }}>{t('pylera')}</Text>
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
                                                    }}>18
                                                    </Text>
                                                </View>
                                            </View>
                                            <Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.normal, color: COLORS.secondary, fontSize: vs(12.5), textAlign: "justify", marginTop: -8 }}>{t('dose-para-2')}</Text>
                                            <Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.bold, color: COLORS.secondary, fontSize: vs(13), textAlign: i18next.language === 'ar' ? "right" : "justify", marginTop: 5 }}>{t('dose-heading-2')}</Text>
                                            <View style={styles.table}>
                                                <View style={[styles.row, { flexDirection: i18next.language === "ar" ? "row-reverse" : "row" }]}>
                                                    <Text style={[styles.cell, { backgroundColor: COLORS.primary, padding: 10, color: COLORS.white }]}>{t("table-heading-1")}</Text>
                                                    <Text style={[styles.cell, { backgroundColor: COLORS.white }]}>{t("table-heading-2")}</Text>
                                                    <Text style={[styles.cell, { backgroundColor: COLORS.primary, padding: 5, color: COLORS.white }]}>{t("table-heading-3")}</Text>
                                                </View>
                                                <View style={[styles.row, { flexDirection: i18next.language === "ar" ? "row-reverse" : "row", borderBottomWidth: .8, borderBottomColor: COLORS.primary }]}>
                                                    <Text style={styles.cell}>{t('table-1-data-1')}</Text>
                                                    <Text style={styles.cell}>3</Text>
                                                    <Text style={styles.cell}>1</Text>
                                                </View>
                                                <View style={[styles.row, { flexDirection: i18next.language === "ar" ? "row-reverse" : "row", borderBottomWidth: .8, borderBottomColor: COLORS.primary }]}>
                                                    <Text style={styles.cell}>{t('table-1-data-2')}</Text>
                                                    <Text style={styles.cell}>3</Text>
                                                    <Text style={styles.cell}>0</Text>
                                                </View>
                                                <View style={[styles.row, { flexDirection: i18next.language === "ar" ? "row-reverse" : "row", borderBottomWidth: .8, borderBottomColor: COLORS.primary }]}>
                                                    <Text style={styles.cell}>{t('table-1-data-3')}</Text>
                                                    <Text style={styles.cell}>3</Text>
                                                    <Text style={styles.cell}>1</Text>
                                                </View>
                                                <View style={[styles.row, { flexDirection: i18next.language === "ar" ? "row-reverse" : "row", borderBottomWidth: .8, borderBottomColor: COLORS.primary }]}>
                                                    <Text style={styles.cell}>{t('table-1-data-4')}e</Text>
                                                    <Text style={styles.cell}>3</Text>
                                                    <Text style={styles.cell}>0</Text>
                                                </View>
                                            </View>
                                            <Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.normal, color: COLORS.secondary, fontSize: vs(11.5), textAlign: i18next.language === 'ar' ? 'right' : "justify", marginTop: 10, marginBottom: i18next.language === 'ar' ? 10 : 0 }}>{t('dose-para-2')}</Text>
                                            <Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.bold : FONTS.bold, color: COLORS.secondary, fontSize: vs(13), textAlign: i18next.language === 'ar' ? 'right' : "justify", marginTop: 5, marginBottom: i18next.language === 'ar' ? 8 : 0 }}>{t('dose-heading-2')}</Text>
                                            <Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.normal, color: COLORS.secondary, fontSize: vs(11.5), textAlign: i18next.language === 'ar' ? 'right' : "justify", marginTop: -5 }}>{t('dose-para-3')}</Text>
                                        </View>
                                        : index === 2 ?
                                            <View style={{ flex: 1, backgroundColor: COLORS.white, borderRadius: 30, padding: 20, }}>
                                                <Image source={ICONS.events} style={{ width: scale(250), height: vs(190), resizeMode: "contain", alignSelf: "center" }} />
                                                <View style={{ flexDirection: "column", alignSelf: i18next.language === "ar" ? 'flex-end' : "flex-start" }}>
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
                                                    <View style={{ flexDirection: "row", marginTop: -20 }}>
                                                        <Text style={{ fontFamily: FONTS.h1, color: COLORS.primary, fontSize: vs(22) }}>Adverse Events</Text>
                                                        <Text style={{
                                                            fontFamily: FONTS.h1, color: COLORS.primary,
                                                            fontSize: vs(13),
                                                            lineHeight: 40,
                                                            textAlignVertical: 'top',
                                                        }}>18
                                                        </Text>
                                                    </View>
                                                </View>
                                                <Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.normal, color: COLORS.secondary, fontSize: vs(13.5), textAlign: i18next.language === 'ar' ? 'right' : "justify", marginBottom: i18next.language === 'ar' ? 8 : 0 }}>{t('adverse-para')}</Text>
                                                <Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.normal, color: COLORS.secondary, fontSize: vs(11.5), textAlign: i18next.language === 'ar' ? 'right' : "justify", }}><Text style={{ color: COLORS.appgreen }}>• </Text>{t('adverse-li-1')}</Text>
                                                <Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.normal, color: COLORS.secondary, fontSize: vs(11.5), textAlign: i18next.language === 'ar' ? 'right' : "justify", }}><Text style={{ color: COLORS.appgreen }}>• </Text>{t('adverse-li-2')}</Text>
                                                <Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.normal, color: COLORS.secondary, fontSize: vs(11.5), textAlign: i18next.language === 'ar' ? 'right' : "justify", }}><Text style={{ color: COLORS.appgreen }}>• </Text>{t('adverse-li-3')}</Text>
                                                <Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.normal, color: COLORS.secondary, fontSize: vs(11.5), textAlign: i18next.language === 'ar' ? 'right' : "justify", }}><Text style={{ color: COLORS.appgreen }}>• </Text>{t('adverse-li-4')}</Text>
                                            </View>
                                            : index === 3 ?
                                                <View style={{ flex: 1, backgroundColor: COLORS.white, borderRadius: 30, padding: 20, }}>
                                                    <Image source={ICONS.information} style={{ width: scale(160), height: vs(110), resizeMode: "contain", alignSelf: "center" }} />
                                                    <View style={{ flexDirection: "column", alignSelf: i18next.language === "ar" ? 'flex-end' : "flex-start" }}>
                                                        <View style={{ flexDirection: "row" }}>
                                                            <Text style={{ fontFamily: FONTS.h1, color: COLORS.primary, fontSize: vs(22) }}>PYLERA</Text>
                                                            <Text style={{
                                                                fontFamily: FONTS.h1, color: COLORS.primary,
                                                                fontSize: vs(17),
                                                                lineHeight: 40,
                                                                textAlignVertical: 'top',
                                                            }}>®
                                                            </Text>
                                                            <Text style={{ fontFamily: FONTS.h1, color: COLORS.primary, fontSize: vs(22) }}>Patient</Text>

                                                        </View>
                                                        <View style={{ flexDirection: "row", marginTop: -20 }}>
                                                            <Text style={{ fontFamily: FONTS.h1, color: COLORS.primary, fontSize: vs(22) }}>Counseling Information</Text>
                                                            <Text style={{
                                                                fontFamily: FONTS.h1, color: COLORS.primary,
                                                                fontSize: vs(13),
                                                                lineHeight: 40,
                                                                textAlignVertical: 'top',
                                                            }}>18
                                                            </Text>
                                                        </View>
                                                    </View>
                                                    <Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.bold : FONTS.bold, color: COLORS.secondary, fontSize: vs(13), textAlign: i18next.language === 'ar' ? 'right' : "justify", marginTop: -5 }}>{t('patient-heading-1')}</Text>
                                                    <Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.normal, color: COLORS.secondary, fontSize: vs(11.5), textAlign: i18next.language === 'ar' ? 'right' : "justify", marginTop: i18next.language === 'ar' ? 0 : -10, marginBottom: i18next.language === 'ar' ? 10 : 0 }}>{t('patient-para-1')}</Text>
                                                    <Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.bold : FONTS.bold, color: COLORS.secondary, fontSize: vs(13.5), textAlign: i18next.language === 'ar' ? 'right' : "justify", marginTop: -5 }}>{t('patient-heading-2')}</Text>
                                                    <Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.normal, color: COLORS.secondary, fontSize: vs(11.5), textAlign: i18next.language === 'ar' ? 'right' : "justify", marginTop: i18next.language === 'ar' ? 0 : -10, marginBottom: i18next.language === 'ar' ? 10 : 0 }}>{t('patient-para-2')}</Text>
                                                    <Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.bold : FONTS.bold, color: COLORS.secondary, fontSize: vs(13.5), textAlign: i18next.language === 'ar' ? 'right' : "justify", marginTop: -5 }}>{t('patient-heading-3')}</Text>
                                                    <Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.normal, color: COLORS.secondary, fontSize: vs(11.5), textAlign: i18next.language === 'ar' ? 'right' : "justify", marginTop: i18next.language === 'ar' ? 0 : -10, marginBottom: i18next.language === 'ar' ? 10 : 0 }}>{t('patient-para-3')}</Text>
                                                    <Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.bold : FONTS.bold, color: COLORS.secondary, fontSize: vs(13.5), textAlign: i18next.language === 'ar' ? 'right' : "justify", marginTop: -5 }}>{t('patient-heading-4')}</Text>
                                                    <Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.normal, color: COLORS.secondary, fontSize: vs(11.5), textAlign: i18next.language === 'ar' ? 'right' : "justify", marginTop: i18next.language === 'ar' ? 0 : -10 }}>{t('patient-para-4')}</Text>
                                                </View>
                                                : index === 4 ?
                                                    <View style={{ flex: 1, backgroundColor: COLORS.white, borderRadius: 30, padding: 20, alignSelf: i18next.language = "ar" ? "flex-end" : "flex-start", }}>
                                                        <Pressable onPress={() => navigation.goBack()} style={{ alignSelf: i18next.language == "ar" ? "flex-start" : "flex-end", marginBottom: -20, }}>
                                                            <Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.semibold, color: COLORS.primary, fontSize: vs(13), textAlign: i18next.language = "ar" ? "right" : "left" }}>{t('skip')}</Text>
                                                        </Pressable>
                                                        <View style={{ flexDirection: "column", alignSelf: i18next.language == "ar" ? "flex-end" : "flex-start" }}>
                                                            <View style={{ flexDirection: "row" }}>
                                                                <Text style={{ fontFamily: FONTS.h1, color: COLORS.primary, fontSize: vs(22) }}>PYLERA</Text>
                                                                <Text style={{
                                                                    fontFamily: FONTS.h1, color: COLORS.primary,
                                                                    fontSize: vs(17),
                                                                    lineHeight: 40,
                                                                    textAlignVertical: 'top',
                                                                }}>®
                                                                </Text>
                                                                <Text style={{ fontFamily: FONTS.h1, color: COLORS.primary, fontSize: vs(22) }}>Warning</Text>

                                                            </View>
                                                            <View style={{ flexDirection: "row", marginTop: -20 }}>
                                                                <Text style={{ fontFamily: FONTS.h1, color: COLORS.primary, fontSize: vs(22) }}>& Precautions</Text>
                                                                <Text style={{
                                                                    fontFamily: FONTS.h1, color: COLORS.primary,
                                                                    fontSize: vs(13),
                                                                    lineHeight: 40,
                                                                    textAlignVertical: 'top',
                                                                }}>18
                                                                </Text>
                                                            </View>
                                                        </View>
                                                        <Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.bold, color: COLORS.secondary, fontSize: vs(13), textAlign: i18next.language === 'ar' ? 'right' : "justify", marginTop: -5 }}>{t('warning-heading')}</Text>
                                                        <Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.normal, color: COLORS.secondary, fontSize: vs(12.5), textAlign: i18next.language === 'ar' ? 'right' : "justify", marginTop: i18next.language === 'ar' ? 0 : -8 }}>{t('warning-para')}</Text>
                                                        <View style={{ flexDirection: "column", alignSelf: i18next.language = "ar" ? "flex-end" : "flex-start" }}>
                                                            <View style={{ flexDirection: "row" }}>
                                                                <Text style={{ fontFamily: FONTS.h1, color: COLORS.primary, fontSize: vs(22) }}>PYLERA</Text>
                                                                <Text style={{
                                                                    fontFamily: FONTS.h1, color: COLORS.primary,
                                                                    fontSize: vs(17),
                                                                    lineHeight: 40,
                                                                    textAlignVertical: 'top',
                                                                }}>®
                                                                </Text>
                                                                <Text style={{ fontFamily: FONTS.h1, color: COLORS.primary, fontSize: vs(22) }}>Drug</Text>

                                                            </View>
                                                            <View style={{ flexDirection: "row", marginTop: -20 }}>
                                                                <Text style={{ fontFamily: FONTS.h1, color: COLORS.primary, fontSize: vs(22) }}>Interactions</Text>
                                                                <Text style={{
                                                                    fontFamily: FONTS.h1, color: COLORS.primary,
                                                                    fontSize: vs(13),
                                                                    lineHeight: 40,
                                                                    textAlignVertical: 'top',
                                                                }}>20
                                                                </Text>
                                                            </View>
                                                        </View>
                                                        <Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.normal, color: COLORS.secondary, fontSize: vs(12.5), textAlign: i18next.language === 'ar' ? 'right' : "justify", marginTop: i18next.language === 'ar' ? 0 : -8 }}>{t('warning-para2')}</Text>
                                                        <Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.normal, color: COLORS.secondary, fontSize: vs(11.5), textAlign: i18next.language === 'ar' ? 'right' : "justify", marginTop: i18next.language === 'ar' ? 0 : -8 }}><Text style={{ color: COLORS.appgreen }}>• </Text>{t('drugs-li-1')}</Text>
                                                        <Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.normal, color: COLORS.secondary, fontSize: vs(11.5), textAlign: i18next.language === 'ar' ? 'right' : "justify", marginTop: i18next.language === 'ar' ? 0 : -8 }}><Text style={{ color: COLORS.appgreen }}>• </Text>{t('drugs-li-2')}</Text>
                                                        <Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.normal, color: COLORS.secondary, fontSize: vs(11.5), textAlign: i18next.language === 'ar' ? 'right' : "justify", marginTop: i18next.language === 'ar' ? 0 : -8 }}><Text style={{ color: COLORS.appgreen }}>• </Text>{t('drugs-li-3')}</Text>
                                                        <Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.normal, color: COLORS.secondary, fontSize: vs(11.5), textAlign: i18next.language === 'ar' ? 'right' : "justify", marginTop: i18next.language === 'ar' ? 0 : -8 }}><Text style={{ color: COLORS.appgreen }}>• </Text>{t('drugs-li-4')}</Text>
                                                        <Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.normal, color: COLORS.secondary, fontSize: vs(11.5), textAlign: i18next.language === 'ar' ? 'right' : "justify", marginTop: i18next.language === 'ar' ? 0 : -8 }}><Text style={{ color: COLORS.appgreen }}>• </Text>{t('drugs-li-5')}</Text>
                                                        <Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.normal, color: COLORS.secondary, fontSize: vs(11.5), textAlign: i18next.language === 'ar' ? 'right' : "justify", marginTop: i18next.language === 'ar' ? 0 : -8 }}><Text style={{ color: COLORS.appgreen }}>• </Text>{t('drugs-li-6')}</Text>
                                                        <Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.normal, color: COLORS.secondary, fontSize: vs(11.5), textAlign: i18next.language === 'ar' ? 'right' : "justify", marginTop: i18next.language === 'ar' ? 0 : -8 }}><Text style={{ color: COLORS.appgreen }}>• </Text>{t('drugs-li-7')}</Text>
                                                        <Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.normal, color: COLORS.secondary, fontSize: vs(11.5), textAlign: i18next.language === 'ar' ? 'right' : "justify", marginTop: i18next.language === 'ar' ? 0 : -8 }}><Text style={{ color: COLORS.appgreen }}>• </Text>{t('drugs-li-8')}</Text>
                                                        <Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.normal, color: COLORS.secondary, fontSize: vs(11.5), textAlign: i18next.language === 'ar' ? 'right' : "justify", marginTop: i18next.language === 'ar' ? 0 : -8 }}><Text style={{ color: COLORS.appgreen }}>• </Text>{t('drugs-li-9')}</Text>
                                                    </View>
                                                    : index === 5 ?
                                                        <View style={{ flex: 1, backgroundColor: COLORS.white, borderRadius: 30, padding: 20, }}>
                                                            <Pressable onPress={() => navigation.goBack()} style={{ alignSelf: "flex-end", marginBottom: -40 }}><Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.semibold, color: COLORS.primary, fontSize: vs(13) }}>{t('skip')}</Text></Pressable>

                                                            <Image source={ICONS.caution2} style={{ width: scale(170), height: vs(180), resizeMode: "contain", alignSelf: "flex-start", marginLeft: -25 }} />
                                                            <View style={{ flexDirection: "column" }}>
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
                                                                <View style={{ flexDirection: "row", marginTop: -20 }}>
                                                                    <Text style={{ fontFamily: FONTS.h1, color: COLORS.primary, fontSize: vs(22) }}>Contraindications</Text>
                                                                    <Text style={{
                                                                        fontFamily: FONTS.h1, color: COLORS.primary,
                                                                        fontSize: vs(13),
                                                                        lineHeight: 40,
                                                                        textAlignVertical: 'top',
                                                                    }}>20
                                                                    </Text>
                                                                </View>
                                                            </View>
                                                            <Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.semibold, color: COLORS.secondary, fontSize: vs(13), textAlign: i18next.language === 'ar' ? 'right' : "justify", marginTop: -5 }}><Text style={{ color: COLORS.appgreen }}>• </Text>{t('contraindications-heading')}</Text>
                                                            <Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.normal, color: COLORS.secondary, fontSize: vs(12.5), textAlign: i18next.language === 'ar' ? 'right' : "justify", marginTop: -8 }}>{t('contraindications-para')}</Text>

                                                            <Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.semibold, color: COLORS.secondary, fontSize: vs(12.5), textAlign: i18next.language === 'ar' ? 'right' : "justify", marginTop: 10 }}><Text style={{ color: COLORS.appgreen }}>• </Text>{t('contraindications-li-1')}</Text>
                                                            <Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.semibold, color: COLORS.secondary, fontSize: vs(12.5), textAlign: i18next.language === 'ar' ? 'right' : "justify", marginTop: i18next.language === 'ar' ? -5 : -8 }}><Text style={{ color: COLORS.appgreen }}>• </Text>{t('contraindications-li-2')}</Text>
                                                            <Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.semibold, color: COLORS.secondary, fontSize: vs(12.5), textAlign: i18next.language === 'ar' ? 'right' : "justify", marginTop: i18next.language === 'ar' ? -5 : -8 }}><Text style={{ color: COLORS.appgreen }}>• </Text>{t('contraindications-li-3')}</Text>
                                                            <Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.normal, color: COLORS.secondary, fontSize: vs(12.5), textAlign: i18next.language === 'ar' ? 'right' : "justify", }}>{t('contraindications-para-3')}</Text>
                                                        </View>
                                                        : null
                                }
                            </View>
                        ))}
                    </Swiper>
                        <View style={{ width: scale(120), position: "absolute", bottom: 10, alignSelf: "center", alignItems: "center" }}>
                            <TouchableOpacity style={{ backgroundColor: COLORS.primary, width: scale(100), height: vs(25), borderRadius: 50, alignItems: "center", justifyContent: "center", marginVertical: 5 }} onPress={handleNext}  >
                                <Text style={{ color: COLORS.white, fontSize: vs(12), fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.bold }}>{currentIndex === detailsContent.length - 1 ? t('go-back') : t('next')} </Text>
                            </TouchableOpacity>
                            <Text style={{ color: COLORS.secondary, fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.semibold, fontSize: vs(9), textAlign: 'center' }}>{t("disclaimer-n-references")}</Text>
                        </View>
                    </>
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
});

export default Medication;
