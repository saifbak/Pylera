
import React, { useCallback, useState } from 'react';
import { View, Text, Button, TouchableOpacity, Image, Pressable } from 'react-native';
import Swiper from 'react-native-swiper';
import { COLORS, FONTS, ICONS } from '../../../shared/utils/theme';
import { ScaledSheet, scale, vs } from 'react-native-size-matters';
import CheckBox from '@react-native-community/checkbox';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import AlertModal from '../../../shared/components/AlertModal';
const detailsContent = [
    'Detail 1',
    'Detail 2',
    'Detail 3',
    'Detail 4',
    'Detail 5',
    'Detail 6',
    'Detail 7',
];

const Medication: React.FC<{ navigation: any }> = ({ navigation }) => {
    const { t } = useTranslation()
    const [currentIndex, setCurrentIndex] = useState(0);
    const [toggleCheckBox, setToggleCheckBox] = useState<boolean>(false)
    const [proceed, setProceed] = useState<boolean>(false)
    const [visible, setVisible] = useState<boolean>(false);
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

    const handleModalPressed = useCallback(() => {
        setVisible(false);
        setProceed(true);
    }, [visible]);

    const handleModal = useCallback(() => {
        setVisible(true)
    }, []);

    return (
        <View style={{ flex: 1, backgroundColor: COLORS.primary }}>
            <AlertModal isVisible={visible} setVisible={setVisible} title={t('alert')} text={t('alart-para-5')} onPress={() => setVisible(false)} onPress2={handleModalPressed} isSecondButton={true} confirmText={true} />
            <View style={{ flex: 1, borderRadius: 30, marginTop: 40 }}>
                {proceed === false ?
                    <>
                        <View style={{ flex: 1, alignItems: i18next.language === "ar" ? "flex-end" : "flex-start", backgroundColor: COLORS.white, borderRadius: 30, paddingHorizontal: 30, }}>
                            <Pressable onPress={() => navigation.goBack()} style={{ alignSelf: i18next.language === 'ar' ? "flex-start" : "flex-end", marginTop: 15 }}><Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.semibold, color: COLORS.primary, fontSize: vs(13) }}>{t('back')}</Text></Pressable>
                            <Image source={ICONS.caution} style={{ width: scale(180), height: vs(100), resizeMode: "contain", alignSelf: "center", }} />
                            <View style={{ flexDirection: i18next.language === "ar" ? "row-reverse" : "row", marginTop: 8, marginBottom: i18next.language === 'ar' ? 10 : 0, alignItems: "flex-end" }}>
                                <Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.h1, color: COLORS.secondary, fontSize: vs(13) }}>{t("medical-heading")}</Text>
                                {<Text style={{
                                    fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.h1, color: COLORS.secondary,
                                    fontSize: vs(8),
                                    lineHeight: 35,
                                    textAlignVertical: 'top',
                                    marginLeft: 1
                                }}>{i18next.language === "ar" ? '١٣' : 13}
                                </Text>}
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
                                style={{ backgroundColor: toggleCheckBox === true ? COLORS.primary : COLORS.gray, width: scale(180), height: vs(25), borderRadius: 50, alignItems: "center", justifyContent: "center", marginVertical: 5 }} onPress={handleModal}  >
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
                        paginationStyle={{ bottom: 75, flexDirection: i18next.language == "ar" ? "row-reverse" : "row" }}                    >
                        {detailsContent.map((detail, index) => (
                            <View key={index} style={{ flex: 1, }}>
                                {index === 0 ?
                                    <View style={{ flex: 1, backgroundColor: COLORS.white, borderRadius: 30, padding: 20, }}>
                                        <Image source={ICONS.indication} style={{ width: scale(250), height: vs(170), resizeMode: "contain", alignSelf: "center" }} />
                                        <View style={{ flexDirection: "column", alignSelf: i18next.language == "ar" ? "flex-end" : "flex-start" }}>
                                            <View style={{ flexDirection: i18next.language == "ar" ? "row-reverse" : "row" }}>
                                                <Text style={{ fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.h1, color: COLORS.primary, fontSize: vs(22) }}>{t("pylera0")}</Text>
                                                <Text style={{
                                                    fontFamily: FONTS.h1, color: COLORS.primary,
                                                    fontSize: vs(13),
                                                    lineHeight: 30,
                                                    textAlignVertical: 'top',
                                                }}>{t('trade-mark')}
                                                </Text>
                                            </View>
                                            <View style={{ flexDirection: i18next.language == "ar" ? "row-reverse" : "row", marginTop: i18next.language == 'en' ? -13 : 0 }}>
                                                <Text style={{ fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.h1, color: COLORS.primary, fontSize: vs(22) }}>{t('indication-n-usage')}</Text>
                                                {i18next.language !== "ar" ? <Text style={{
                                                    fontFamily: FONTS.h1, color: COLORS.primary,
                                                    fontSize: vs(12),
                                                    lineHeight: 40,
                                                    textAlignVertical: 'top',
                                                }}>{t('sup-6')}
                                                </Text>
                                                    : <Text style={{
                                                        fontFamily: FONTS.h1, color: COLORS.primary,
                                                        fontSize: vs(13),
                                                        lineHeight: 30,
                                                        textAlignVertical: 'top',
                                                    }}>{t('sup-6')}
                                                    </Text>}
                                            </View>
                                            <View style={{ flexDirection: "row", marginTop: -20 }}>

                                                {/* {i18next.language !== "ar" && <Text style={{ fontFamily: FONTS.h1, color: COLORS.primary, fontSize: vs(22) }}>Indication & Usage</Text>} */}
                                                <Text style={{
                                                    fontFamily: FONTS.h1, color: COLORS.primary,
                                                    fontSize: vs(13),
                                                    lineHeight: 40,
                                                    textAlignVertical: 'top',
                                                }}>{i18next.language == "ar" ? "" : ""}
                                                </Text>
                                            </View>
                                        </View>
                                        <View>
                                            <Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.normal, color: COLORS.secondary, fontSize: vs(12.5), textAlign: i18next.language === 'ar' ? 'right' : "justify", marginBottom: i18next.language === 'ar' ? 10 : 0 }}>{t('pylera-para')}</Text>
                                            {i18next.language === "ar" && <Text style={{ position: "absolute", fontSize: vs(6), right: i18next.language === "ar" ? 86 : 0, top: -2, color: COLORS.secondary }}>{'®️'}</Text>}
                                            {i18next.language === "en" && <Text style={{ position: "absolute", fontSize: vs(6), left: i18next.language === "en" ? scale(43) : 0, top: 5, color: COLORS.secondary }}>{'®️'}</Text>}
                                        </View>
                                        <View>
                                            <Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.normal, color: COLORS.secondary, fontSize: vs(12.5), textAlign: i18next.language === 'ar' ? 'right' : "justify", }}>{t("pylera-para-2")}</Text>
                                            {i18next.language === "en" && <Text style={{ position: "absolute", fontSize: vs(6), right: i18next.language === "en" ? scale(59) : 0, top: vs(19), color: COLORS.secondary }}>{'®️'}</Text>}
                                            {i18next.language === "ar" && <Text style={{ position: "absolute", fontSize: vs(6), right: i18next.language === "ar" ? scale(122) : 0, top: vs(17), color: COLORS.secondary }}>{'®️'}</Text>}
                                            {i18next.language === "en" && <Text style={{ position: "absolute", fontSize: vs(6), left: i18next.language === "en" ? scale(162) : 0, top: vs(37), color: COLORS.secondary }}>{'®️'}</Text>}
                                            {i18next.language === "ar" && <Text style={{ position: "absolute", fontSize: vs(6), left: i18next.language === "ar" ? scale(130) : 0, top: vs(35), color: COLORS.secondary }}>{'®️'}</Text>}
                                        </View>
                                    </View>
                                    : index === 1 ?
                                        <View style={{ flex: 1, backgroundColor: COLORS.white, borderRadius: 30, padding: 20, }}>
                                            <View style={{ flexDirection: "column", alignItems: i18next.language === "ar" ? "flex-end" : "flex-start" }}>
                                                {i18next.language === "ar" ? <View style={{ flexDirection: i18next.language === "ar" ? "row-reverse" : "row" }}>
                                                    {i18next.language === "ar" && <Text style={{ position: 'absolute', left: 55, color: COLORS.primary }} >{t('trade-mark')}</Text>}
                                                    <Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.h1, color: COLORS.primary, fontSize: vs(22) }}>{t('patient')}</Text>
                                                    {i18next.language == 'ar' && <Text style={{
                                                        fontFamily: FONTS.h1, color: COLORS.primary,
                                                        fontSize: vs(13),
                                                        lineHeight: 40,
                                                        right: i18next.language === "ar" ? 140 : 0,
                                                        textAlignVertical: i18next.language === "ar" ? 'bottom' : "top",
                                                    }}>{i18next.language === "ar" ? "١٣" : "®"}
                                                    </Text>}
                                                    {i18next.language !== 'ar' && <Text style={{ fontFamily: FONTS.h1, color: COLORS.primary, fontSize: vs(22) }}>{'Dosage'}</Text>}
                                                </View>
                                                    :
                                                    <View style={{ flexDirection: i18next.language === "ar" ? "row-reverse" : "row" }}>
                                                        {i18next.language === "en" && <Text style={{ position: 'absolute', left: 88, color: COLORS.primary, top: 3 }} >{t('trade-mark')}</Text>}
                                                        <Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.h1, color: COLORS.primary, fontSize: vs(22) }}>{t('pylera')}</Text>
                                                        {i18next.language == 'ar' && <Text style={{
                                                            fontFamily: FONTS.h1, color: COLORS.primary,
                                                            fontSize: vs(13),
                                                            lineHeight: 40,
                                                            right: i18next.language === "ar" ? 140 : 0,
                                                            textAlignVertical: i18next.language === "ar" ? 'bottom' : "top",
                                                        }}>{i18next.language === "ar" ? "١٣" : "®"}
                                                        </Text>}
                                                        {i18next.language !== 'ar' && <Text style={{ fontFamily: FONTS.h1, color: COLORS.primary, fontSize: vs(22) }}>{' '}{' '}{'Dosage'}</Text>}
                                                    </View>
                                                }
                                                <View style={{ flexDirection: "row", marginTop: -20 }}>
                                                    {i18next.language !== 'ar' && <Text style={{ fontFamily: FONTS.h1, color: COLORS.primary, fontSize: vs(22) }}>{'and Administration'}</Text>}
                                                    {<Text style={{
                                                        fontFamily: FONTS.h1, color: COLORS.primary,
                                                        fontSize: vs(12),
                                                        lineHeight: 40,
                                                        textAlignVertical: 'top',
                                                    }}>{i18next.language !== "ar" ? "١٣" : ""}
                                                    </Text>}
                                                </View>
                                            </View>
                                            <View>
                                                <Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.normal, color: COLORS.secondary, fontSize: vs(12.5), textAlign: i18next.language === 'ar' ? "right" : "left", marginTop: -5 }}>{t('dose-para')}</Text>
                                                {i18next.language === "ar" && <Text style={{ position: "absolute", fontSize: vs(6), right: i18next.language === "ar" ? scale(185) : 0, top: -5, color: COLORS.secondary }}>{'®️'}</Text>}
                                                {i18next.language === "en" && <Text style={{ position: "absolute", fontSize: vs(6), left: i18next.language === "en" ? scale(142) : 0, top: -1, color: COLORS.secondary }}>{'®️'}</Text>}
                                            </View>
                                            <View>
                                                {i18next.language === "ar" && <Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.normal, color: COLORS.secondary, fontSize: vs(12.5), textAlign: i18next.language === 'ar' ? "right" : "justify", marginTop: 0 }}>{t('dose-para-1')}</Text>}
                                                {i18next.language === "ar" && <Text style={{ position: "absolute", fontSize: vs(6), right: i18next.language === "ar" ? scale(103) : 0, top: 20, color: COLORS.secondary }}>{'®️'}</Text>}
                                                {/* {i18next.language === "ar" && <Text style={{ position: "absolute", fontSize: vs(6), right: i18next.language === "ar" ? scale(165) : 0, top: -1, color: COLORS.secondary }}>{'®️'}</Text>} */}
                                                {i18next.language === "en" && <Text style={{ position: "absolute", fontSize: vs(6), left: i18next.language === "en" ? scale(108) : 0, bottom: 50, color: COLORS.secondary }}>{'®️'}</Text>}
                                                {i18next.language === "en" && <Text style={{ position: "absolute", fontSize: vs(6), left: i18next.language === "en" ? scale(67) : 0, bottom: 30, color: COLORS.secondary }}>{'®️'}</Text>}
                                            </View>
                                            <View>
                                                <Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.bold, color: COLORS.secondary, fontSize: vs(13), textAlign: i18next.language === 'ar' ? "right" : "justify", marginTop: 5 }}>{i18next.language === "en" ? t('dose-heading') : t('dose-heading-2')}</Text>
                                                {i18next.language === "ar" && <Text style={{ position: "absolute", fontSize: vs(6), right: i18next.language === "ar" ? scale(188) : 0, top: 2, color: COLORS.secondary }}>{'®️'}</Text>}
                                                {i18next.language === "en" && <Text style={{ position: "absolute", fontSize: vs(6), right: i18next.language === "en" ? scale(89) : 0, top: 7, color: COLORS.secondary }}>{'®️'}</Text>}
                                            </View>
                                            <View style={styles.table}>
                                                <View style={[styles.row, { flexDirection: i18next.language === "ar" ? "row-reverse" : "row", }]}>
                                                    {i18next.language === "en" && <Text style={{ zIndex: 2, position: "absolute", fontSize: vs(4), right: i18next.language === "en" ? scale(135) : 0, top: 20, color: COLORS.secondary }}>{'®️'}</Text>}
                                                    <Text style={[styles.cell, { backgroundColor: COLORS.primary, padding: 10, color: COLORS.white }]}>{t("table-heading-1")}</Text>
                                                    <Text style={[styles.cell, { backgroundColor: COLORS.white }]}>{t("table-heading-2")}</Text>
                                                    <Text style={[styles.cell, { backgroundColor: COLORS.primary, padding: 5, color: COLORS.white }]}>{t("table-heading-3")}</Text>
                                                    {i18next.language === "en" && <Text style={{ color: "white", position: "absolute", fontSize: vs(6), right: i18next.language === "en" ? scale(38) : 0, top: 20, }}>{`®`}</Text>}
                                                    {/* {i18next.language === "ar" && <Text style={{ color: "white", position: "absolute", fontSize: vs(6), right: i18next.language === "ar" ? scale(46) : 0, top: 18, }}>{`®`}</Text>} */}
                                                </View>
                                                <View style={[styles.row, { flexDirection: i18next.language === "ar" ? "row-reverse" : "row", borderBottomWidth: .8, borderBottomColor: COLORS.primary }]}>
                                                    <Text style={styles.cell}>{t('table-1-data-1')}</Text>
                                                    <Text style={styles.cell}>{i18next.language === "en" ? '3' : '٣'}</Text>
                                                    <Text style={styles.cell}>{i18next.language === "en" ? '1' : '١'}</Text>
                                                </View>
                                                <View style={[styles.row, { flexDirection: i18next.language === "ar" ? "row-reverse" : "row", borderBottomWidth: .8, borderBottomColor: COLORS.primary }]}>
                                                    <Text style={styles.cell}>{t('table-1-data-2')}</Text>
                                                    <Text style={styles.cell}>{i18next.language === "en" ? '3' : '٣'}</Text>
                                                    <Text style={styles.cell}>{i18next.language === "en" ? '0' : '٠'}</Text>
                                                </View>
                                                <View style={[styles.row, { flexDirection: i18next.language === "ar" ? "row-reverse" : "row", borderBottomWidth: .8, borderBottomColor: COLORS.primary }]}>
                                                    <Text style={styles.cell}>{t('table-1-data-3')}</Text>
                                                    <Text style={styles.cell}>{i18next.language === "en" ? '3' : '٣'}</Text>
                                                    <Text style={styles.cell}>{i18next.language === "en" ? '1' : '١'}</Text>
                                                </View>
                                                <View style={[styles.row, { flexDirection: i18next.language === "ar" ? "row-reverse" : "row", borderBottomWidth: .8, borderBottomColor: COLORS.primary }]}>
                                                    <Text style={styles.cell}>{t('table-1-data-4')}</Text>
                                                    <Text style={styles.cell}>{i18next.language === "en" ? '3' : '٣'}</Text>
                                                    <Text style={styles.cell}>{i18next.language === "en" ? '0' : '٠'}</Text>
                                                </View>
                                            </View>
                                            <View>
                                                <Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.normal, color: COLORS.secondary, fontSize: vs(11.5), textAlign: i18next.language === 'ar' ? 'right' : "justify", marginTop: 10, marginBottom: i18next.language === 'ar' ? 10 : 0 }}>{t('dose-para-2')}</Text>
                                                {i18next.language === "ar" && <Text style={{ position: "absolute", fontSize: vs(6), right: i18next.language === "ar" ? scale(151) : 0, top: vs(6), color: COLORS.secondary }}>{'®️'}</Text>}
                                                {i18next.language === "en" && <Text style={{ position: "absolute", fontSize: vs(6), right: i18next.language === "en" ? scale(83) : 0, top: vs(10), color: COLORS.secondary }}>{'®️'}</Text>}
                                                {i18next.language === "ar" && <Text style={{ position: "absolute", fontSize: vs(7), right: i18next.language === "ar" ? scale(169) : 0, top: vs(58), color: COLORS.secondary }}>{'١٣'}</Text>}
                                            </View>
                                            <Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.bold : FONTS.bold, color: COLORS.secondary, fontSize: vs(13), textAlign: i18next.language === 'ar' ? 'right' : "justify", marginTop: 5, marginBottom: i18next.language === 'ar' ? 8 : 0 }}>{i18next.language === "en" ? t('dose-heading-2') : t('dose-heading-3')}</Text>
                                            <Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.normal, color: COLORS.secondary, fontSize: vs(11.5), textAlign: i18next.language === 'ar' ? 'right' : "justify", marginTop: -5 }}>{t('dose-para-3')}</Text>
                                        </View>
                                        : index === 2 ?
                                            <View style={{ flex: 1, backgroundColor: COLORS.white, borderRadius: 30, padding: 20, }}>
                                                <Image source={ICONS.events} style={{ width: scale(250), height: vs(190), resizeMode: "contain", alignSelf: "center" }} />
                                                <View style={{ flexDirection: "column", alignSelf: i18next.language === "ar" ? "flex-end" : "flex-start" }}>
                                                    <View style={{ flexDirection: i18next.language === "ar" ? "row-reverse" : "row" }}>
                                                        <Text style={{ fontFamily: FONTS.h1, color: COLORS.primary, fontSize: vs(22) }}>{t("pylera")}</Text>
                                                        {i18next.language == "en" && <Text style={{
                                                            fontFamily: FONTS.h1, color: COLORS.primary,
                                                            fontSize: vs(17),
                                                            lineHeight: 40,
                                                            textAlignVertical: 'top',
                                                        }}>®
                                                        </Text>}
                                                    </View>
                                                    <View style={{ flexDirection: i18next.language === "ar" ? "row-reverse" : "row", marginTop: i18next.language === "ar" ? -10 : -20 }}>
                                                        <Text style={{ fontFamily: FONTS.h1, color: COLORS.primary, fontSize: vs(22) }}>{t('adverse-heading')}</Text>
                                                        <Text style={{
                                                            fontFamily: FONTS.h1, color: COLORS.primary,
                                                            fontSize: vs(12),
                                                            lineHeight: 40,
                                                            textAlignVertical: 'top',
                                                        }}>{i18next.language === 'ar' ? '١٣' : '13'}
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
                                                    <View style={{ flexDirection: "column", alignSelf: i18next.language === "ar" ? "flex-end" : "flex-start" }}>
                                                        <View style={{ flexDirection: i18next.language === "ar" ? "row-reverse" : "row" }}>
                                                            <Text style={{ fontFamily: FONTS.h1, color: COLORS.primary, fontSize: vs(22) }}>{t('pylera')}</Text>
                                                            {i18next.language == "en" && <Text style={{
                                                                fontFamily: FONTS.h1, color: COLORS.primary,
                                                                fontSize: vs(15),
                                                                lineHeight: 40,
                                                                textAlignVertical: 'top',
                                                            }}>®
                                                            </Text>}
                                                            {i18next.language === "en" && <Text style={{ fontFamily: FONTS.h1, color: COLORS.primary, fontSize: vs(22) }}>Patient</Text>}

                                                        </View>
                                                        <View style={{ flexDirection: i18next.language === "ar" ? "row-reverse" : "row", marginTop: -20 }}>
                                                            <Text style={{ fontFamily: FONTS.h1, color: COLORS.primary, fontSize: vs(22) }}>{t('counseling-information')}</Text>
                                                            <Text style={{
                                                                fontFamily: FONTS.h1, color: COLORS.primary,
                                                                fontSize: vs(12),
                                                                lineHeight: 40,
                                                                textAlignVertical: 'top',
                                                            }}>{i18next.language === 'ar' ? '١٣' : '13'}
                                                            </Text>
                                                        </View>
                                                    </View>
                                                    <Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.bold : FONTS.bold, color: COLORS.secondary, fontSize: vs(13), textAlign: i18next.language === 'ar' ? 'right' : "justify", marginTop: -5, marginBottom: 5 }}>{t('patient-heading-1')}</Text>
                                                    <View>
                                                        {/* <Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.normal, color: COLORS.secondary, fontSize: vs(12.5), textAlign: i18next.language === 'ar' ? "right" : "justify", marginTop: 0 }}>{t('dose-para-1')}</Text> */}
                                                        <Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.normal, color: COLORS.secondary, fontSize: vs(11.5), textAlign: i18next.language === 'ar' ? 'right' : "justify", marginTop: i18next.language === 'ar' ? -5 : -10, marginBottom: i18next.language === 'ar' ? 5 : 5 }}>{t('patient-para-1')}</Text>
                                                        {i18next.language === "ar" && <Text style={{ position: "absolute", fontSize: vs(6), right: i18next.language === "ar" ? scale(88) : 0, bottom: vs(14), color: COLORS.secondary }}>{'®️'}</Text>}
                                                        {i18next.language === "en" && <Text style={{ position: "absolute", fontSize: vs(6), right: i18next.language === "en" ? scale(53) : 0, bottom: vs(28), color: COLORS.secondary }}>{'®️'}</Text>}
                                                    </View>
                                                    <View>
                                                        <Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.bold : FONTS.bold, color: COLORS.secondary, fontSize: vs(13.5), textAlign: i18next.language === 'ar' ? 'right' : "justify", marginTop: -5, marginBottom: 5 }}>{t('patient-heading-2')}</Text>
                                                        {/* <Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.normal, color: COLORS.secondary, fontSize: vs(12.5), textAlign: i18next.language === 'ar' ? "right" : "justify", marginTop: 0 }}>{t('dose-para-1')}</Text> */}
                                                        {i18next.language === "ar" && <Text style={{ position: "absolute", fontSize: vs(6), right: i18next.language === "ar" ? scale(55) : 0, top: vs(17), color: COLORS.secondary }}>{'®️'}</Text>}
                                                        {i18next.language === "en" && <Text style={{ position: "absolute", fontSize: vs(6), left: i18next.language === "en" ? scale(40) : 0, top: vs(18), color: COLORS.secondary }}>{'®️'}</Text>}
                                                        {i18next.language === "en" && <Text style={{ position: "absolute", fontSize: vs(6), left: i18next.language === "en" ? scale(40) : 0, top: vs(34), color: COLORS.secondary }}>{'®️'}</Text>}
                                                    </View>
                                                    <Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.normal, color: COLORS.secondary, fontSize: vs(11.5), textAlign: i18next.language === 'ar' ? 'right' : "justify", marginTop: i18next.language === 'ar' ? -5 : -10, marginBottom: i18next.language === 'ar' ? 5 : 5 }}>{t('patient-para-2')}</Text>
                                                    <View>
                                                        <Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.bold : FONTS.bold, color: COLORS.secondary, fontSize: vs(13.5), textAlign: i18next.language === 'ar' ? 'right' : "justify", marginTop: -5, marginBottom: 5 }}>{t('patient-heading-3')}</Text>
                                                        {/* <Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.normal, color: COLORS.secondary, fontSize: vs(12.5), textAlign: i18next.language === 'ar' ? "right" : "justify", marginTop: 0 }}>{t('dose-para-1')}</Text> */}
                                                        {i18next.language === "ar" && <Text style={{ position: "absolute", fontSize: vs(6), left: i18next.language === "ar" ? scale(48) : 0, top: vs(35), color: COLORS.secondary }}>{'®️'}</Text>}
                                                        {i18next.language === "ar" && <Text style={{ position: "absolute", fontSize: vs(6), right: i18next.language === "ar" ? scale(50) : 0, top: vs(16), color: COLORS.secondary }}>{'®️'}</Text>}
                                                        {i18next.language === "en" && <Text style={{ position: "absolute", fontSize: vs(6), left: i18next.language === "en" ? scale(104) : 0, top: vs(33), color: COLORS.secondary }}>{'®️'}</Text>}
                                                        {i18next.language === "en" && <Text style={{ position: "absolute", fontSize: vs(6), left: i18next.language === "en" ? scale(104) : 0, top: vs(48), color: COLORS.secondary }}>{'®️'}</Text>}
                                                    </View>
                                                    <Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.normal, color: COLORS.secondary, fontSize: vs(11.5), textAlign: i18next.language === 'ar' ? 'right' : "justify", marginTop: i18next.language === 'ar' ? -5 : -10, marginBottom: i18next.language === 'ar' ? 5 : 5 }}>{t('patient-para-3')}</Text>
                                                    <View>
                                                        {/* <Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.normal, color: COLORS.secondary, fontSize: vs(12.5), textAlign: i18next.language === 'ar' ? "right" : "justify", marginTop: 0 }}>{t('dose-para-1')}</Text> */}
                                                        <Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.bold : FONTS.bold, color: COLORS.secondary, fontSize: vs(13.5), textAlign: i18next.language === 'ar' ? 'right' : "justify", marginTop: -5, marginBottom: 5 }}>{t('patient-heading-4')}</Text>
                                                        {i18next.language === "ar" && <Text style={{ position: "absolute", fontSize: vs(6), right: i18next.language === "ar" ? scale(80) : 0, top: vs(34), color: COLORS.secondary }}>{'®️'}</Text>}
                                                        {i18next.language === "en" && <Text style={{ position: "absolute", fontSize: vs(6), right: i18next.language === "en" ? scale(7) : 0, top: vs(19), color: COLORS.secondary }}>{'®️'}</Text>}
                                                        {i18next.language === "en" && <Text style={{ position: "absolute", fontSize: vs(6), left: i18next.language === "en" ? scale(104) : 0, top: vs(32), color: COLORS.secondary }}>{'®️'}</Text>}
                                                    </View>
                                                    <View>
                                                        {/* <Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.normal, color: COLORS.secondary, fontSize: vs(12.5), textAlign: i18next.language === 'ar' ? "right" : "justify", marginTop: 0 }}>{t('dose-para-1')}</Text> */}
                                                        <Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.normal, color: COLORS.secondary, fontSize: vs(11.5), textAlign: i18next.language === 'ar' ? 'right' : "justify", marginTop: i18next.language === 'ar' ? -5 : -10 }}>{t('patient-para-4')}</Text>
                                                        {/* <Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.bold : FONTS.bold, color: COLORS.secondary, fontSize: vs(13.5), textAlign: i18next.language === 'ar' ? 'right' : "justify", marginTop: -5 }}>{t('patient-heading-4')}</Text> */}
                                                        {i18next.language === "ar" && <Text style={{ position: "absolute", fontSize: vs(6), right: i18next.language === "ar" ? scale(148) : 0, top: vs(28), color: COLORS.secondary }}>{'®️'}</Text>}
                                                    </View>
                                                    {i18next.language == "ar" && <Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.normal, color: COLORS.secondary, fontSize: vs(11.5), textAlign: i18next.language === 'ar' ? 'right' : "justify", marginTop: i18next.language === 'ar' ? 0 : -10 }}>{t('patient-para-5')}</Text>}
                                                </View>
                                                : index === 4 ?
                                                    <View style={{ flex: 1, backgroundColor: COLORS.white, borderRadius: 30, padding: 20, }}>
                                                        <Pressable onPress={() => navigation.goBack()} style={{ alignSelf: i18next.language === "ar" ? "flex-start" : "flex-end", marginBottom: -20 }}><Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.semibold, color: COLORS.primary, fontSize: vs(13) }}>{t('skip')}</Text></Pressable>
                                                        <View style={{ flexDirection: "column", alignSelf: i18next.language === "ar" ? "flex-end" : "flex-start" }}>
                                                            <View style={{ flexDirection: i18next.language == "ar" ? "row-reverse" : "row" }}>
                                                                <Text style={{ fontFamily: FONTS.h1, color: COLORS.primary, fontSize: vs(22) }}>{t('pylera')}</Text>
                                                                {i18next.language !== "ar" && <Text style={{
                                                                    fontFamily: FONTS.h1, color: COLORS.primary,
                                                                    fontSize: vs(17),
                                                                    lineHeight: 40,
                                                                    textAlignVertical: 'top',
                                                                }}>®
                                                                </Text>}
                                                                {i18next.language !== "ar" && <Text style={{ fontFamily: FONTS.h1, color: COLORS.primary, fontSize: vs(22) }}>Warning</Text>}

                                                            </View>
                                                            <View style={{ flexDirection: i18next.language == "ar" ? "row-reverse" : "row", marginTop: -20 }}>
                                                                <Text style={{ fontFamily: FONTS.h1, color: COLORS.primary, fontSize: vs(22) }}>{t('precautions')}</Text>
                                                                <Text style={{
                                                                    fontFamily: FONTS.h1, color: COLORS.primary,
                                                                    fontSize: vs(13),
                                                                    lineHeight: 40,
                                                                    textAlignVertical: 'top',
                                                                }}>{i18next.language === 'ar' ? '١٣' : '13'}
                                                                </Text>
                                                            </View>
                                                        </View>
                                                        <Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.bold : FONTS.bold, color: COLORS.secondary, fontSize: vs(13), textAlign: i18next.language === 'ar' ? 'right' : "justify", marginTop: -5 }}>{t('warning-heading')}</Text>
                                                        <View>
                                                            <Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.normal, color: COLORS.secondary, fontSize: vs(12.5), textAlign: i18next.language === 'ar' ? 'right' : "justify", marginTop: i18next.language === 'ar' ? 0 : -8 }}>{t('warning-para')}</Text>
                                                            {i18next.language === "ar" && <Text style={{ position: "absolute", fontSize: vs(6), right: i18next.language === "ar" ? scale(55) : 0, top: vs(2), color: COLORS.secondary }}>{'®️'}</Text>}
                                                        </View>
                                                        <View style={{ flexDirection: "column", alignSelf: i18next.language === "ar" ? "flex-end" : "flex-start" }}>
                                                            <View style={{ flexDirection: i18next.language == "ar" ? "row-reverse" : "row" }}>
                                                                <Text style={{ fontFamily: FONTS.h1, color: COLORS.primary, fontSize: vs(22) }}>{t('pylera')}</Text>
                                                                {i18next.language == "en" && <Text style={{
                                                                    fontFamily: FONTS.h1, color: COLORS.primary,
                                                                    fontSize: vs(17),
                                                                    lineHeight: 40,
                                                                    textAlignVertical: 'top',
                                                                }}>®
                                                                </Text>}
                                                                {i18next.language == "en" && <Text style={{ fontFamily: FONTS.h1, color: COLORS.primary, fontSize: vs(22) }}>Drug</Text>}

                                                            </View>
                                                            <View style={{ flexDirection: i18next.language == "ar" ? "row-reverse" : "row", marginTop: i18next.language == "ar" ? -10 : -20 }}>
                                                                <Text style={{ fontFamily: FONTS.h1, color: COLORS.primary, fontSize: vs(22) }}>{t('interactions')}</Text>
                                                                <Text style={{
                                                                    fontFamily: FONTS.h1, color: COLORS.primary,
                                                                    fontSize: vs(13),
                                                                    lineHeight: 40,
                                                                    textAlignVertical: 'top',
                                                                }}>{i18next.language === 'ar' ? '١٣' : '13'}
                                                                </Text>
                                                            </View>
                                                        </View>
                                                        <View>
                                                            {/* <Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.normal, color: COLORS.secondary, fontSize: vs(12.5), textAlign: i18next.language === 'ar' ? 'right' : "justify", marginTop: i18next.language === 'ar' ? 0 : -8 }}>{t('warning-para')}</Text> */}
                                                            <Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.normal, color: COLORS.secondary, fontSize: vs(12.5), textAlign: i18next.language === 'ar' ? 'right' : "justify", marginTop: i18next.language === 'ar' ? 0 : -8 }}>{t('warning-para2')}</Text>
                                                            {i18next.language === "ar" && <Text style={{ position: "absolute", fontSize: vs(6), left: i18next.language === "ar" ? scale(110) : 0, top: vs(18), color: COLORS.secondary }}>{'®️'}</Text>}
                                                            {i18next.language === "en" && <Text style={{ position: "absolute", fontSize: vs(6), right: i18next.language === "en" ? scale(6) : 0, top: vs(13), color: COLORS.secondary }}>{'®️'}</Text>}
                                                            {i18next.language === "ar" && <Text style={{ position: "absolute", fontSize: vs(6), left: i18next.language === "ar" ? scale(132) : 0, top: vs(35), color: COLORS.secondary }}>{'®️'}</Text>}
                                                            {i18next.language === "en" && <Text style={{ position: "absolute", fontSize: vs(6), left: i18next.language === "en" ? scale(45) : 0, top: vs(46), color: COLORS.secondary }}>{'®️'}</Text>}
                                                        </View>
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
                                                            <Pressable onPress={() => navigation.goBack()} style={{ alignSelf: i18next.language === "ar" ? "flex-start" : "flex-end", marginBottom: -40 }}><Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.semibold, color: COLORS.primary, fontSize: vs(13) }}>{t('skip')}</Text></Pressable>

                                                            <Image source={ICONS.caution2} style={{ width: scale(170), height: vs(180), resizeMode: "contain", alignSelf: "flex-start", marginLeft: -25 }} />
                                                            <View style={{ flexDirection: "column", alignSelf: i18next.language === "ar" ? "flex-end" : "flex-start" }}>
                                                                <View style={{ flexDirection: i18next.language == "ar" ? "row-reverse" : "row" }}>
                                                                    <Text style={{ fontFamily: FONTS.h1, color: COLORS.primary, fontSize: vs(22) }}>{t('pylera')}{'  '}{i18next.language === "en" && t('drug')}</Text>
                                                                    {i18next.language == "en" && <Text style={{
                                                                        position: "absolute",
                                                                        fontFamily: FONTS.h1, color: COLORS.primary,
                                                                        fontSize: vs(17),
                                                                        left: scale(78),
                                                                        lineHeight: 40,
                                                                        textAlignVertical: 'top',
                                                                    }}>®
                                                                    </Text>}
                                                                </View>
                                                                <View style={{ flexDirection: i18next.language == "ar" ? "row-reverse" : "row", marginTop: -10 }}>
                                                                    <Text style={{ fontFamily: FONTS.h1, color: COLORS.primary, fontSize: vs(22) }}>{t('interaction')}</Text>
                                                                    <Text style={{
                                                                        fontFamily: FONTS.h1, color: COLORS.primary,
                                                                        fontSize: vs(13),
                                                                        lineHeight: 40,
                                                                        textAlignVertical: 'top',
                                                                    }}>{i18next.language === 'ar' ? '١٣' : '13'}
                                                                    </Text>
                                                                </View>
                                                            </View>
                                                            <Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.semibold : FONTS.semibold, color: COLORS.primary, fontSize: vs(12.5), textAlign: i18next.language === 'ar' ? 'right' : "justify", marginTop: -0, marginBottom: vs(5) }}><Text style={{ color: COLORS.appgreen }}>• </Text>{t('contraindications-heading')}</Text>
                                                            <View>
                                                                <Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.normal, color: COLORS.secondary, fontSize: vs(12.5), textAlign: i18next.language === 'ar' ? 'right' : "justify", marginTop: -8 }}>{t('contraindications-para')}</Text>
                                                                {i18next.language === "ar" && <Text style={{ position: "absolute", fontSize: vs(6), right: i18next.language === "ar" ? scale(29) : 0, bottom: vs(10), color: COLORS.secondary }}>{'®️'}</Text>}
                                                            </View>

                                                            <Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.semibold : FONTS.semibold, color: COLORS.primary, fontSize: vs(12.5), textAlign: i18next.language === 'ar' ? 'right' : "justify", marginTop: 10 }}><Text style={{ color: COLORS.appgreen }}>• </Text>{t('contraindications-li-1')}</Text>
                                                            <Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.semibold : FONTS.semibold, color: COLORS.primary, fontSize: vs(12.5), textAlign: i18next.language === 'ar' ? 'right' : "justify", marginTop: i18next.language === 'ar' ? -5 : -8 }}><Text style={{ color: COLORS.appgreen }}>• </Text>{t('contraindications-li-2')}</Text>
                                                            <Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.semibold : FONTS.semibold, color: COLORS.primary, fontSize: vs(12.5), textAlign: i18next.language === 'ar' ? 'right' : "justify", marginTop: i18next.language === 'ar' ? -5 : -8 }}><Text style={{ color: COLORS.appgreen }}>• </Text>{t('contraindications-li-3')}</Text>
                                                            <View>
                                                                {/* <Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.normal, color: COLORS.secondary, fontSize: vs(12.5), textAlign: i18next.language === 'ar' ? 'right' : "justify", marginTop: -8 }}>{t('contraindications-para')}</Text> */}
                                                                <Text style={{ fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.normal, color: COLORS.secondary, fontSize: vs(12.5), textAlign: i18next.language === 'ar' ? 'right' : "justify", }}>{t('contraindications-para-3')}</Text>
                                                                {i18next.language === "ar" && <Text style={{ position: "absolute", fontSize: vs(6), left: i18next.language === "ar" ? scale(-1) : 0, bottom: vs(10), color: COLORS.secondary }}>{'®️'}</Text>}
                                                                {i18next.language === "en" && <Text style={{ position: "absolute", fontSize: vs(6), left: i18next.language === "en" ? scale(70) : 0, bottom: vs(10), color: COLORS.secondary }}>{'®️'}</Text>}
                                                            </View>
                                                        </View>
                                                        : index == 6 ?
                                                            <View style={{ flex: 1, alignItems: i18next.language === "ar" ? "flex-end" : 'flex-start', backgroundColor: COLORS.white, borderRadius: 30, padding: 30, }}>
                                                                <Image source={i18next.language === "ar" ? ICONS.dodontAr : ICONS.dodont} style={{ width: scale(90), height: vs(60), resizeMode: "contain", alignSelf: i18next.language === 'ar' ? 'flex-end' : "flex-start" }} />
                                                                <View style={{ flexDirection: i18next.language === "ar" ? "row-reverse" : "row", marginTop: 10 }}>
                                                                    <Text style={{ fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.h1, color: COLORS.appgreen, fontSize: vs(20) }}>{t('do-dont')}</Text>
                                                                </View>
                                                                <Text style={{ fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.bold, color: COLORS.secondary, fontSize: vs(11.5), textAlign: i18next.language === "ar" ? "right" : "justify", marginBottom: -20, marginTop: -5 }}>{t('do-dont-para')}</Text>
                                                                <View style={{ flexDirection: i18next.language === "ar" ? "row-reverse" : "row" }}>
                                                                    <Image source={i18next.language === "ar" ? ICONS.doAr : ICONS.do} style={{ width: scale(75), height: vs(75), resizeMode: "contain", }} />
                                                                    <Text style={{ fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.h1, color: COLORS.appgreen, fontSize: vs(12), lineHeight: 80, textAlignVertical: 'top', marginLeft: 5 }}>{i18next.language === 'ar' ? '٧، ٨ و ١٤-١٧' : '7, 8 and 14-17'}</Text>
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
                                                                    <Text style={{ fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.h1, color: '#e62341', fontSize: vs(12), lineHeight: 30, textAlignVertical: 'top', marginLeft: 5 }}>{i18next.language === 'ar' ? "٣، ٤" : '3, 4'}</Text>
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
                                                            : null
                                }
                            </View>
                        ))}
                    </Swiper>
                        <View style={{ width: scale(120), position: "absolute", bottom: 10, alignSelf: "center", alignItems: "center" }}>
                            <TouchableOpacity style={{ backgroundColor: COLORS.primary, width: scale(100), height: vs(25), borderRadius: 50, alignItems: "center", justifyContent: "center", marginVertical: 5 }} onPress={handleNext}  >
                                <Text style={{ color: COLORS.white, fontSize: vs(12), fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.bold }}>{currentIndex === detailsContent.length - 1 ? t('go-back') : t('next')} </Text>
                            </TouchableOpacity>
                            <Text
                                onPress={() => navigation.navigate('References')}
                                style={{ color: COLORS.secondary, fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.semibold, fontSize: vs(9), textAlign: 'center' }}>{t("disclaimer-n-references")}</Text>
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
        flexDirection: i18next.language === 'ar' ? 'row-reverse' : 'row',
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