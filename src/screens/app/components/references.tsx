import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { ScaledSheet, vs } from 'react-native-size-matters'
import { COLORS, FONTS, ICONS } from '../../../shared/utils/theme'
import i18next, { t } from 'i18next'
import { useTranslation } from 'react-i18next'

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
                <ScrollView style={{ flex: 1, }}>
                    <Text style={{ alignSelf: i18next.language === "ar" ? "flex-end" : "flex-start", fontFamily: i18next.language === "ar" ? FONTS.text_arabic : FONTS.semibold, color: "#af0f10", fontSize: vs(14), marginTop: vs(20) }}>{t('references')}</Text>
                </ScrollView>
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