import { Button, Image, ImageProps, ImageSourcePropType, ScaledSize, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native'
import React from 'react';
import ReactNativeModal from 'react-native-modal';
import { NavigationState, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ScaledSheet, vs } from 'react-native-size-matters';
import { COLORS, FONTS } from '../../utils/theme';


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

    return (
        <View>
            <ReactNativeModal style={styles.container} isVisible={isVisible} onBackdropPress={() => setVisible(false)}>
                <View style={styles.wrapper} >
                    {title && <Text style={styles.title}>{title}</Text>}
                    {text &&
                        <View style={styles.textView}>
                            <Text style={styles.text}>{text}</Text>
                        </View>
                    }
                    <TouchableOpacity
                        style={{ alignSelf: "flex-end" }}
                        onPress={onPress}>
                        <Text style={{ color: COLORS.secondary, fontSize: vs(12), fontFamily: FONTS.bold }}>{'OK'} </Text>
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
        alignItems: "flex-start",
        justifyContent: "space-between",
    },
    title: {
        textAlign: 'center',
        fontFamily: FONTS.semibold,
        fontSize: '15@s',
        color: COLORS.danger
    },
    textView: {
        marginVertical: '8@vs',
    },
    text: {
        fontFamily: FONTS.medium,
        fontSize: '12@s',
        color: COLORS.secondary,
        textAlign: 'left',
    },
})