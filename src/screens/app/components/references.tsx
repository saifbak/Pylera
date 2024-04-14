import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { ScaledSheet } from 'react-native-size-matters'
import { COLORS, ICONS } from '../../../shared/utils/theme'

type referenceProps = {
    navigation: any
}

const References: FC<referenceProps> = ({ navigation }) => {
    const handleGoBack = () => {
        navigation.goBack();
    }
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Pressable onPress={handleGoBack}>
                    <Image source={ICONS.cross} style={styles.iconStyle} />
                </Pressable>
                <Text>references</Text>
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