import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import { FONTS, ICONS } from '../../../shared/utils/theme'
import { ScaledSheet, scale, verticalScale, vs } from 'react-native-size-matters'
import CustomLanguageSelector from '../../../shared/components/CustomLanguageSelector'
import useGetStarted from '../hooks/useGetStarted'
import { AuthContext } from '../../../config/context'

const GetStarted = () => {
    const { getStarted } = useContext(AuthContext);
    const {
        select,
        setSelected,
    } = useGetStarted();

    return (
        <View style={styles.container}>
            <StatusBar barStyle={"light-content"} backgroundColor={'#4597cf'} />
            <View style={styles.body}>
                <View style={styles.indicator} />
                <View style={{ backgroundColor: '#1d3660', width: scale(30), height: verticalScale(30), borderRadius: 100, position: "absolute", top: 20, left: 40 }} />
                <View style={{ backgroundColor: '#4597cf', width: scale(70), height: verticalScale(70), borderRadius: 100, position: "absolute", top: 100, right: -50 }} />
                <View style={{ backgroundColor: '#1d3660', width: scale(100), height: verticalScale(100), borderRadius: 100, position: "absolute", bottom: -35, left: -35 }} />
                <View style={{ flex: 1, justifyContent: "center", }}>
                    <View style={{ justifyContent: "center", alignSelf: "center", marginTop: vs(-140), }}>
                        <Image source={ICONS.logo} style={{ width: scale(270), height: vs(260), resizeMode: "contain", marginBottom: vs(-40), alignSelf: "center" }} />
                    </View>
                    <View>
                        <Text style={{ textAlign: "center", color: '#1d3660', fontSize: verticalScale(14), fontFamily: FONTS.bold }}>Choose your preferred language</Text>
                        <Text style={{ marginBottom: 50, textAlign: "center", color: '#1d3660', fontSize: verticalScale(14), fontFamily: FONTS.text_arabic }}>يرجى اختيار لغتك المفضلة</Text>
                    </View>
                    <CustomLanguageSelector select={select} setSelected={setSelected} />
                    <TouchableOpacity
                        onPress={getStarted}
                        style={{ backgroundColor: '#4597cf', width: scale(150), height: vs(45), borderRadius: 50, alignSelf: 'center', marginBottom: -50, marginTop: 50, alignItems: "center", justifyContent: 'center' }}>
                        <Text style={{ fontFamily: FONTS.bold, color: 'white', fontSize: vs(16) }}>Start Now</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default GetStarted;

const styles = ScaledSheet.create({
    container: {
        backgroundColor: '#4597cf',
        flex: 1,
    },
    body: {
        marginTop: '38@vs',
        backgroundColor: '#FFFFFF',
        flex: 1,
        borderRadius: 40,
        overflow: 'hidden'
    },
    indicator: {
        marginTop: 10,
        width: '60@s',
        height: '3.5@vs',
        backgroundColor: '#d2d1d2',
        borderRadius: 5,
        alignSelf: "center"
    }
})