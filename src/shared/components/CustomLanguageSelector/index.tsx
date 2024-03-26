import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { Dispatch, FC, SetStateAction } from 'react'
import { ScaledSheet, scale, vs } from 'react-native-size-matters'
import { FONTS, ICONS } from '../../utils/theme'

type CustomLanguageSelectorProps = {
    select: string;
    setSelected: Dispatch<SetStateAction<string>>;
}

const CustomLanguageSelector: FC<CustomLanguageSelectorProps> = ({
    select, setSelected
}: CustomLanguageSelectorProps) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={select === 'english' ? { flexDirection: 'row', justifyContent: "space-between", alignItems: "center", paddingHorizontal: 30, backgroundColor: "#c2e1f1", height: vs(70), borderTopColor: '#4597cf', borderBottomColor: '#4597cf', borderTopWidth: 2, borderBottomWidth: 2 } : { flexDirection: 'row', justifyContent: "space-between", alignItems: "center", paddingHorizontal: 30, height: vs(70), }}
                onPress={() => {
                    setSelected('english')
                }}
            >
                <Text style={{ color: '#1d3660', fontSize: vs(15), fontWeight: 'bold' }}>English</Text>
                {select === 'english' && <View style={{ borderRadius: 100, width: scale(20), height: vs(20), borderColor: '#1a9dd8', borderWidth: 1.5, alignItems: "center", justifyContent: 'center', }}>
                    <Image source={ICONS.check_mark} style={{ width: scale(20), height: vs(20), resizeMode: 'contain', left: 3, bottom: 2 }} />
                </View>}
            </TouchableOpacity>
            <TouchableOpacity style={select === 'arabic' ? { flexDirection: 'row', justifyContent: "space-between", alignItems: "center", paddingHorizontal: 30, backgroundColor: "#c2e1f1", height: vs(70), borderTopColor: '#4597cf', borderBottomColor: '#4597cf', borderTopWidth: 2, borderBottomWidth: 2 } : { flexDirection: 'row', justifyContent: "space-between", alignItems: "center", paddingHorizontal: 30, height: vs(70) }}
                onPress={() => {
                    setSelected('arabic')
                }}
            >
                <Text style={{ color: '#1d3660', fontSize: vs(15), fontFamily: FONTS.text_arabic }}>العــــربية</Text>
                {select === 'arabic' && <View style={{ borderRadius: 100, width: scale(20), height: vs(20), borderColor: '#1a9dd8', borderWidth: 1.5, alignItems: "center", justifyContent: 'center' }}>
                    <Image source={ICONS.check_mark} style={{ width: scale(20), height: vs(20), resizeMode: 'contain', left: 3, bottom: 2 }} />
                </View>}
            </TouchableOpacity>

        </View>
    )
}

export default CustomLanguageSelector

const styles = ScaledSheet.create({
    container: {
        height: '140@vs',
        width: '100%',
        backgroundColor: "#f3f7fb",
    },
})