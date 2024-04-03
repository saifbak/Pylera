import React from 'react';
import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS, FONTS, ICONS } from '../../../shared/utils/theme';
import { scale, vs } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AppStackParams } from '../../../navigation/appScreens';
import { useTranslation } from 'react-i18next';

const Home = () => {
    const navigation = useNavigation<StackNavigationProp<AppStackParams>>();
    const { t, } = useTranslation();
    return (
        <View style={{ flex: 1, backgroundColor: COLORS.primary }}>
            <StatusBar barStyle={"light-content"} backgroundColor={COLORS.primary} />
            <View style={{ flex: 1, backgroundColor: COLORS.primary, flexDirection: 'row', justifyContent: "space-between", }}>
                <View style={{ justifyContent: "flex-start", }}>
                    <View style={{ backgroundColor: COLORS.white, width: scale(160), height: vs(50), borderTopRightRadius: 50, borderBottomRightRadius: 50, paddingLeft: scale(22), marginTop: 30 }}>
                        <Image source={ICONS.logo} style={{ width: scale(110), height: vs(50), resizeMode: "contain" }} />
                    </View>
                    <View style={{ width: scale(180), paddingLeft: 25, marginTop: -5 }}>
                        <Text style={{ color: COLORS.white, fontSize: vs(40), fontFamily: FONTS.normal }}>{t("hello")}</Text>
                        {/* <Text style={{ color: COLORS.white, fontSize: vs(14), fontFamily: FONTS.semibold, textAlign: "left", marginTop: -15 }}>{`I'm Eradicate Assistant,\nhere to remind you of\nyour medicine on time\nand share more\ninformation about\nyour infection and\ntreatment`}</Text> */}
                        <Text style={{ color: COLORS.white, fontSize: vs(14), fontFamily: FONTS.semibold, textAlign: "right", marginTop: -15 }}>{t('home-para')}</Text>
                    </View>
                </View>
                <View style={{ justifyContent: "space-between", }}>
                    <View style={{ width: scale(160), height: vs(50), paddingRight: scale(22), marginTop: 30, alignItems: "flex-end", justifyContent: "center" }}>
                        <Image source={ICONS.bell} style={{ width: scale(50), height: vs(25), resizeMode: "contain", marginRight: -15 }} />
                    </View>
                    <Image source={ICONS.doctor} style={{ width: scale(160), height: vs(250), resizeMode: "contain", marginTop: -20, marginLeft: -25 }} />
                </View>
            </View>
            <View style={{ flex: 1.1, backgroundColor: COLORS.white, borderRadius: 35, padding: 15, justifyContent: 'space-between', alignItems: "center" }}>
                <View style={{ width: '75%', flexDirection: "row", alignItems: "center", justifyContent: "space-evenly" }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Discover')} activeOpacity={0.7} style={{ backgroundColor: COLORS.yellow, width: scale(110), height: vs(130), borderRadius: scale(22) }}>
                        <View style={{ flex: 1, alignItems: "flex-start", justifyContent: "space-evenly", padding: 15 }}>
                            <View>
                                <Image source={ICONS.h_discover} style={{ width: scale(50), height: vs(50), resizeMode: "contain" }} />
                            </View>
                            <View style={{ flexDirection: "column", justifyContent: "space-evenly", width: scale(90) }}>
                                <Text style={{ color: COLORS.secondary, fontSize: vs(10), fontFamily: FONTS.normal, marginBottom: -12, marginTop: 10 }}>{t("discover")}</Text>
                                <Text style={{ color: COLORS.secondary, fontSize: vs(15), fontFamily: FONTS.bold }}>{t('h-pylori')}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Medication')} activeOpacity={0.7} style={{ backgroundColor: COLORS.acrylic, width: scale(110), height: vs(130), borderRadius: scale(22) }}>
                        <View style={{ flex: 1, alignItems: "flex-start", justifyContent: "space-evenly", padding: 15 }}>
                            <View>
                                <Image source={ICONS.h_medication} style={{ width: scale(50), height: vs(50), resizeMode: "contain" }} />
                            </View>
                            <View style={{ flexDirection: "column", justifyContent: "space-evenly", width: scale(90) }}>
                                <Text style={{ color: COLORS.secondary, fontSize: vs(15), fontFamily: FONTS.bold, marginBottom: -12, marginTop: 10 }}>{t('medication')}</Text>
                                <Text style={{ color: COLORS.secondary, fontSize: vs(10), fontFamily: FONTS.normal, }}>{t("guide")}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ width: '75%', flexDirection: "row", alignItems: "center", justifyContent: "space-evenly" }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Treatment')} activeOpacity={0.7} style={{ backgroundColor: COLORS.peach, width: scale(110), height: vs(130), borderRadius: scale(22) }}>
                        <View style={{ flex: 1, alignItems: "flex-start", justifyContent: "space-evenly", padding: 15 }}>
                            <View>
                                <Image source={ICONS.h_treatment} style={{ width: scale(50), height: vs(50), resizeMode: "contain" }} />
                            </View>
                            <View style={{ flexDirection: "column", justifyContent: "space-evenly", width: scale(90) }}>
                                <Text style={{ color: COLORS.secondary, fontSize: vs(15), fontFamily: FONTS.bold, marginBottom: -12, marginTop: 10 }}>{t("treatment")}</Text>
                                <Text style={{ color: COLORS.secondary, fontSize: vs(10), fontFamily: FONTS.normal, }}>{t('plan')}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('DoseScreens')} activeOpacity={0.7} style={{ backgroundColor: COLORS.metalic_grey, width: scale(110), height: vs(130), borderRadius: scale(22) }}>
                        <View style={{ flex: 1, alignItems: "flex-start", justifyContent: "space-evenly", padding: 15 }}>
                            <View>
                                <Image source={ICONS.h_dose} style={{ width: scale(50), height: vs(50), resizeMode: "contain" }} />
                            </View>
                            <View style={{ flexDirection: "column", justifyContent: "space-evenly", width: scale(90) }}>
                                <Text style={{ color: COLORS.secondary, fontSize: vs(15), fontFamily: FONTS.bold, marginBottom: -12, marginTop: 10 }}>{t("dose")}</Text>
                                <Text style={{ color: COLORS.secondary, fontSize: vs(10), fontFamily: FONTS.normal, }}>{t('tracking')}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <Text style={{ color: COLORS.secondary, fontFamily: FONTS.semibold, fontSize: vs(11) }}>{t("disclaimer-n-references")}</Text>
            </View>
        </View>
    )
};

export default Home;

const styles = StyleSheet.create({

})