import { Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FONTS, ICONS } from '../../../shared/utils/theme'
import { scale, verticalScale } from 'react-native-size-matters'
import { useTranslation } from 'react-i18next'

const Splash = () => {
    const { t } = useTranslation();
    return (
        <View style={styles.container}>
            <StatusBar barStyle={"light-content"} backgroundColor={'#4597cf'} />
            <View style={styles.body}>
                <View style={styles.indicator} />
                <View style={{ backgroundColor: '#1d3660', width: scale(30), height: verticalScale(30), borderRadius: 100, position: "absolute", top: 20, left: 40 }} />
                <View style={{ backgroundColor: '#4597cf', width: scale(70), height: verticalScale(70), borderRadius: 100, position: "absolute", top: 100, right: -50 }} />
                <View style={{ backgroundColor: '#1d3660', width: scale(100), height: verticalScale(100), borderRadius: 100, position: "absolute", bottom: -35, left: -35 }} />
                <View style={{ flex: 1, justifyContent: "center" }}>
                    <View style={{ justifyContent: "center", alignSelf: "center", marginTop: -150, }}>
                        <Image source={ICONS.logo} style={{ width: 300, height: 300, resizeMode: "contain", marginBottom: -50, alignSelf: "center" }} />
                        <Text style={{ marginBottom: -20, textAlign: "center", color: '#4597cf', fontSize: verticalScale(15), fontFamily: FONTS.semibold }}>{t('welcome-to-eradicate')}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Splash

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