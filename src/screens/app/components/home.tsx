import React from 'react';
import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS, FONTS, ICONS } from '../../../shared/utils/theme';
import { scale, vs } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AppStackParams } from '../../../navigation/appScreens';

const Home = () => {
    const navigation = useNavigation<StackNavigationProp<AppStackParams>>()
    return (
        <View style={{ flex: 1, backgroundColor: COLORS.primary }}>
            <StatusBar barStyle={"light-content"} backgroundColor={COLORS.primary} />
            <View style={{ flex: 1, backgroundColor: COLORS.primary, flexDirection: 'row', justifyContent: "space-between", }}>
                <View style={{ justifyContent: "flex-start", }}>
                    <View style={{ backgroundColor: COLORS.white, width: scale(160), height: vs(50), borderTopRightRadius: 50, borderBottomRightRadius: 50, paddingLeft: scale(22), marginTop: 30 }}>
                        <Image source={ICONS.logo} style={{ width: scale(110), height: vs(50), resizeMode: "contain" }} />
                    </View>
                    <View style={{ width: scale(180), paddingLeft: 25, marginTop: -5 }}>
                        <Text style={{ color: COLORS.white, fontSize: vs(40), fontFamily: FONTS.normal }}>Hello!</Text>
                        <Text style={{ color: COLORS.white, fontSize: vs(14), fontFamily: FONTS.semibold, textAlign: "left", marginTop: -15 }}>{`I'm Eradicate Assistant,\nhere to remind you of\nyour medicine on time\nand share more\ninformation about\nyour infection and\ntreatment`}</Text>
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
                            <View style={{ flexDirection: "column", justifyContent: "space-evenly", width: 120 }}>
                                <Text style={{ color: COLORS.secondary, fontSize: vs(10), fontFamily: FONTS.normal, marginBottom: -12, marginTop: 10 }}>Discover</Text>
                                <Text style={{ color: COLORS.secondary, fontSize: vs(15), fontFamily: FONTS.bold }}>H. pylori</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Medication')} activeOpacity={0.7} style={{ backgroundColor: COLORS.acrylic, width: scale(110), height: vs(130), borderRadius: scale(22) }}>
                        <View style={{ flex: 1, alignItems: "flex-start", justifyContent: "space-evenly", padding: 15 }}>
                            <View>
                                <Image source={ICONS.h_medication} style={{ width: scale(50), height: vs(50), resizeMode: "contain" }} />
                            </View>
                            <View style={{ flexDirection: "column", justifyContent: "space-evenly", width: 120 }}>
                                <Text style={{ color: COLORS.secondary, fontSize: vs(15), fontFamily: FONTS.bold, marginBottom: -12, marginTop: 10 }}>Medication</Text>
                                <Text style={{ color: COLORS.secondary, fontSize: vs(10), fontFamily: FONTS.normal, }}>Guide</Text>
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
                            <View style={{ flexDirection: "column", justifyContent: "space-evenly", width: 120 }}>
                                <Text style={{ color: COLORS.secondary, fontSize: vs(15), fontFamily: FONTS.bold, marginBottom: -12, marginTop: 10 }}>Treatment</Text>
                                <Text style={{ color: COLORS.secondary, fontSize: vs(10), fontFamily: FONTS.normal, }}>Plan</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('DoseScreens')} activeOpacity={0.7} style={{ backgroundColor: COLORS.metalic_grey, width: scale(110), height: vs(130), borderRadius: scale(22) }}>
                        <View style={{ flex: 1, alignItems: "flex-start", justifyContent: "space-evenly", padding: 15 }}>
                            <View>
                                <Image source={ICONS.h_dose} style={{ width: scale(50), height: vs(50), resizeMode: "contain" }} />
                            </View>
                            <View style={{ flexDirection: "column", justifyContent: "space-evenly", width: 120 }}>
                                <Text style={{ color: COLORS.secondary, fontSize: vs(15), fontFamily: FONTS.bold, marginBottom: -12, marginTop: 10 }}>Dose</Text>
                                <Text style={{ color: COLORS.secondary, fontSize: vs(10), fontFamily: FONTS.normal, }}>Tracking</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <Text style={{ color: COLORS.secondary, fontFamily: FONTS.semibold, fontSize: vs(11) }}>Disclaimer & References</Text>
            </View>
        </View>
    )
};

export default Home;

const styles = StyleSheet.create({

})