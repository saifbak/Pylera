import { Button, Image, ImageProps, ImageSourcePropType, ScaledSize, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native'
import React from 'react';
import ReactNativeModal from 'react-native-modal';
import { NavigationState, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ScaledSheet, vs } from 'react-native-size-matters';
import { COLORS, FONTS } from '../../utils/theme';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';


type AlertModalProps = {
    title?: string;
    isVisible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
    text?: string;
    onPress?: () => void;
}


const AlertModal: React.FC<AlertModalProps> = ({
    title,
    isVisible,
    setVisible,
    text,
    onPress,
}: AlertModalProps) => {

    const { t } = useTranslation()

    return (
        <View>
            <ReactNativeModal style={styles.container} isVisible={isVisible} onBackdropPress={() => setVisible(false)}>
                <View style={[styles.wrapper, { alignItems: i18next.language === 'ar' ? 'flex-end' : "flex-start", }]} >
                    {title && <Text style={[styles.title, {
                        textAlign: i18next.language === 'ar' ? 'right' : 'center',
                        fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.semibold,
                    }]}>{title}</Text>}
                    {text &&
                        <View style={styles.textView}>
                            <Text style={[styles.text, {
                                fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.medium,
                                textAlign: i18next.language === 'ar' ? 'right' : 'left',
                            }]}>{text}</Text>
                        </View>
                    }
                    <TouchableOpacity
                        style={{ alignSelf: i18next.language === 'ar' ? 'flex-start' : "flex-end" }}
                        onPress={onPress}>
                        <Text style={{ color: COLORS.primary, fontSize: vs(12), fontFamily: i18next.language === 'ar' ? FONTS.text_arabic : FONTS.bold }}>{t('ok')} </Text>
                    </TouchableOpacity>
                </View>
            </ReactNativeModal>
        </View >
    )
}

export default AlertModal;

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    wrapper: {
        backgroundColor: COLORS.white,
        width: '280@s',
        borderRadius: '30@s',
        padding: '15@s',

        justifyContent: "space-between",
    },
    title: {

        fontSize: '15@s',
        color: COLORS.danger
    },
    textView: {
        marginVertical: '8@vs',
    },
    text: {

        color: COLORS.secondary,
        fontSize: '12@s',
    },
})