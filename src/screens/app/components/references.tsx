import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { ScaledSheet, scale, vs } from 'react-native-size-matters'
import { COLORS, FONTS, ICONS } from '../../../shared/utils/theme'
import i18next, { t } from 'i18next'
import { useTranslation } from 'react-i18next'
import SuperscriptText from '../../../shared/components/SuperScriptTexr'
import SuperscriptComponent from '../../../shared/components/SuperScriptTexr'

type referenceProps = {
    navigation: any
}

const References: FC<referenceProps> = ({ navigation }) => {
    const { t } = useTranslation()
    const handleGoBack = () => {
        navigation.goBack();
    }
    return (
        <View style={styles.container}>
            <View style={[styles.content, { alignItems: i18next.language === "ar" ? "flex-end" : "flex-start" }]}>
                <Pressable onPress={handleGoBack}>
                    <Image source={ICONS.cross} style={styles.iconStyle} />
                </Pressable>
                <Text style={{ alignSelf: i18next.language === "ar" ? "flex-end" : "flex-start", fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.semibold, color: "#af0f10", fontSize: vs(14), marginTop: vs(20) }}>{t('references')}</Text>
                <ScrollView style={{ width: '100%', marginVertical: 20, padding: 20, }}>
                    <Text style={{ alignSelf: "flex-start", fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.semibold, color: COLORS.secondary, fontSize: vs(12), textAlign: "justify" }}>{t('references-point1')}</Text>
                    <Text style={{ alignSelf: "flex-start", fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.semibold, color: COLORS.secondary, fontSize: vs(12), textAlign: "justify" }}>{t('references-point2')}</Text>
                    <Text style={{ alignSelf: "flex-start", fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.semibold, color: COLORS.secondary, fontSize: vs(12), textAlign: "justify" }}>{t('references-point3')}</Text>
                    <Text style={{ alignSelf: "flex-start", fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.semibold, color: COLORS.secondary, fontSize: vs(12), textAlign: "justify" }}>{t('references-point4')}</Text>
                    <Text style={{ alignSelf: "flex-start", fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.semibold, color: COLORS.secondary, fontSize: vs(12), textAlign: "justify" }}>{t('references-point5')}</Text>
                    <Text style={{ alignSelf: "flex-start", fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.semibold, color: COLORS.secondary, fontSize: vs(12), textAlign: "justify" }}>{t('references-point6')}</Text>
                    <Text style={{ alignSelf: "flex-start", fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.semibold, color: COLORS.secondary, fontSize: vs(12), textAlign: "justify" }}>{t('references-point7')}</Text>
                    <Text style={{ alignSelf: "flex-start", fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.semibold, color: COLORS.secondary, fontSize: vs(12), textAlign: "justify" }}>{t('references-point8')}</Text>
                    <Text style={{ alignSelf: "flex-start", fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.semibold, color: COLORS.secondary, fontSize: vs(12), textAlign: "justify" }}>{t('references-point9')}</Text>
                    <Text style={{ alignSelf: "flex-start", fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.semibold, color: COLORS.secondary, fontSize: vs(12), textAlign: "justify" }}>{t('references-point10')}</Text>
                    <Text style={{ alignSelf: "flex-start", fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.semibold, color: COLORS.secondary, fontSize: vs(12), textAlign: "justify" }}>{t('references-point11')}</Text>
                    <Text style={{ alignSelf: "flex-start", fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.semibold, color: COLORS.secondary, fontSize: vs(12), textAlign: "justify" }}>{t('references-point12')}</Text>
                    <Text style={{ alignSelf: "flex-start", fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.semibold, color: COLORS.secondary, fontSize: vs(12), textAlign: "justify" }}>{t('references-point13')}</Text>
                    <Text style={{ alignSelf: "flex-start", fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.semibold, color: COLORS.secondary, fontSize: vs(12), textAlign: "justify" }}>{t('references-point14')}</Text>
                    <Text style={{ alignSelf: "flex-start", fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.semibold, color: COLORS.secondary, fontSize: vs(12), textAlign: "justify" }}>{t('references-point15')}</Text>
                    <Text style={{ alignSelf: "flex-start", fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.semibold, color: COLORS.secondary, fontSize: vs(12), textAlign: "justify" }}>{t('references-point16')}</Text>
                    <Text style={{ alignSelf: "flex-start", fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.semibold, color: COLORS.secondary, fontSize: vs(12), textAlign: "justify" }}>{t('references-point17')}</Text>
                    <View>
                        <Text style={{ alignSelf: "flex-start", fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.semibold, color: COLORS.secondary, fontSize: vs(12), textAlign: "justify" }}>{t('references-point18')}</Text>
                        <Text style={{ position: "absolute", fontSize: vs(6), left: i18next.language === "ar" ? 164 : 0, top: -2, color: COLORS.secondary }}>{'®️'}</Text>
                    </View>
                    {/* <Text style={{ alignSelf: "flex-start", fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.semibold, color: COLORS.secondary, fontSize: vs(12), textAlign: "justify" }}>{t('references-point19')}</Text> */}
                    {/* <Text style={{ alignSelf: "flex-start", fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.semibold, color: COLORS.secondary, fontSize: vs(12), textAlign: "justify" }}>{t('references-point20')}</Text> */}
                    <Text style={{ alignSelf: i18next.language === "ar" ? "flex-end" : "flex-start", fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.semibold, color: "#af0f10", fontSize: vs(14), marginVertical: vs(10) }}>{t('disclaimers')}</Text>

                    <Text style={{ alignSelf: i18next.language === "ar" ? "flex-end" : "flex-start", fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.semibold, color: COLORS.secondary, fontSize: vs(12), textAlign: i18next.language === "ar" ? "right" : "justify" }}>{t('disclaimers-des-1')}</Text>
                    <Text style={{ alignSelf: i18next.language === "ar" ? "flex-end" : "flex-start", fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.semibold, color: COLORS.secondary, fontSize: vs(12), textAlign: i18next.language === "ar" ? "right" : "justify" }}>{t('disclaimers-des-mail')}</Text>
                    <Text style={{ alignSelf: i18next.language === "ar" ? "flex-end" : "flex-start", fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.semibold, color: COLORS.secondary, fontSize: vs(12), textAlign: i18next.language === "ar" ? "right" : "justify" }}>{t('disclaimers-des-2')}</Text>
                    <Text style={{ alignSelf: i18next.language === "ar" ? "flex-end" : "flex-start", fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.semibold, color: COLORS.secondary, fontSize: vs(12), textAlign: i18next.language === "ar" ? "right" : "justify", marginBottom: 20 }}>{t('disclaimers-des-3')}</Text>
                    <Image source={ICONS.brand} style={{ width: '110%', height: 100, resizeMode: "stretch" }} />
                </ScrollView>
                <Text style={{ alignSelf: "flex-start", fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.semibold, color: COLORS.secondary, fontSize: vs(12), textAlign: i18next.language === "ar" ? "right" : "justify", writingDirection: "rtl", transform: [{ rotate: '270deg' }], bottom: 120, left: scale(-60) }}>{'PYL-NBP-20-APR-2024'}</Text>
            </View>
        </View>
    )
}

export default References

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primary,
    },
    content: {
        flex: 1,
        backgroundColor: COLORS.white,
        borderRadius: '60@s',
        padding: '20@s',
    },
    iconStyle: {
        width: '50@s',
        height: '50@s',
        resizeMode: 'contain'
    }
})