import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { COLORS, FONTS, ICONS } from '../../../shared/utils/theme'
import { scale, verticalScale, vs } from 'react-native-size-matters'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Swiper from 'react-native-swiper'
import { AuthContext } from '../../../config/context'

const Onboarding = ({ navigation }: any) => {

    const { onboard } = useContext(AuthContext);

    const detailsContent = [
        'Detail 1',
        'Detail 2',
        'Detail 3',
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        if (currentIndex < detailsContent.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            onboard()
        }
    };

    const handleGoBack = () => {
        setCurrentIndex(0);
        navigation.navigate('Home');
    };
    return (
        <View style={styles.container}>
            <StatusBar barStyle={"light-content"} backgroundColor={'#4597cf'} />
            <View style={{ flex: 1, marginTop: 30, }}>

                <Swiper
                    loop={false}
                    index={currentIndex}
                    showsPagination={true}
                    onIndexChanged={(index) => setCurrentIndex(index)}
                    pagingEnabled
                    paginationStyle={{ bottom: vs(600) }}
                    activeDotStyle={{ width: scale(40), height: vs(6) }}
                    activeDotColor={String(COLORS.gray)}
                    dotColor={String(COLORS.gray)}

                >
                    {detailsContent.map((detail, index) => (
                        <View key={index} style={{ flex: 1, }}>
                            {index === 0 ?
                                <View style={{ flex: 1, backgroundColor: COLORS.white, borderRadius: 30, padding: 20, }}>
                                    <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "space-between", }}>
                                        <View style={{ width: 70 }} />
                                        <TouchableOpacity style={{ width: 50 }} onPress={() => onboard()}>
                                            <Text style={{ color: '#4597cf', fontSize: verticalScale(15), fontFamily: FONTS.medium }}>Skip</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ justifyContent: "space-around", height: vs(100) }}>
                                        <View>
                                            <Text style={{ textAlign: "center", color: '#1d3660', fontSize: verticalScale(25), fontFamily: FONTS.semibold, marginBottom: -10, marginTop: -10 }}>All pills on time</Text>
                                            <Text style={{ textAlign: "center", color: '#1d3660', fontSize: verticalScale(13), fontFamily: FONTS.normal, marginBottom: 0 }}>Customized notifications are delivered at any time based on your preferences.</Text>
                                        </View>

                                    </View>
                                    <View style={{ justifyContent: "center", alignSelf: "center", }}>
                                        <Image source={ICONS.ob1} style={{ width: scale(500), height: vs(420), resizeMode: "contain", alignSelf: "center" }} />
                                    </View>
                                </View>
                                : index === 1 ?
                                    <View style={{ flex: 1, backgroundColor: COLORS.white, borderRadius: 30, padding: 20, }}>
                                        <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "space-between", }}>
                                            <View style={{ width: 70 }} />
                                            <TouchableOpacity style={{ width: 50 }} onPress={() => onboard()}>
                                                <Text style={{ color: '#4597cf', fontSize: verticalScale(15), fontFamily: FONTS.medium }}>Skip</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{ justifyContent: "space-around", height: vs(100), alignItems: "center" }}>
                                            <View>
                                                <Text style={{ textAlign: "center", color: '#1d3660', fontSize: verticalScale(25), fontFamily: FONTS.semibold, marginBottom: -10, marginTop: -10 }}>Simple & convenient</Text>
                                                <Text style={{ textAlign: "center", color: '#1d3660', fontSize: verticalScale(13), fontFamily: FONTS.normal, marginBottom: 0, width: scale(260) }}>The ability to creat long intake courses User-friendly application to help achieving best treatment outcomes.</Text>
                                            </View>
                                        </View>
                                        <View style={{ justifyContent: "center", alignSelf: "center", }}>
                                            <Image source={ICONS.ob2} style={{ width: scale(500), height: vs(420), resizeMode: "contain", alignSelf: "center" }} />
                                        </View>
                                    </View>
                                    : index === 2 ?
                                        <View style={{ flex: 1, backgroundColor: COLORS.white, borderRadius: 30, padding: 20, }}>
                                            <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "space-between", }}>
                                                <View style={{ width: 70 }} />
                                                {/* <View style={styles.indicator} /> */}
                                                <TouchableOpacity style={{ width: 50 }} onPress={() => onboard()}>
                                                    <Text style={{ color: '#4597cf', fontSize: verticalScale(15), fontFamily: FONTS.medium }}>Skip</Text>
                                                </TouchableOpacity>
                                            </View>
                                            <View style={{ justifyContent: "space-around", height: vs(100) }}>
                                                <View>
                                                    <Text style={{ textAlign: "center", color: '#1d3660', fontSize: verticalScale(23), fontFamily: FONTS.semibold, marginBottom: -10, marginTop: -10 }}>Education Tool</Text>
                                                    <Text style={{ textAlign: "center", color: '#1d3660', fontSize: verticalScale(13), fontFamily: FONTS.normal, marginBottom: 0 }}>Helps learning about H. pylori.</Text>
                                                </View>
                                            </View>
                                            <View style={{ justifyContent: "center", alignSelf: "center", }}>
                                                <Image source={ICONS.ob3} style={{ width: scale(500), height: vs(420), resizeMode: "contain", alignSelf: "center" }} />
                                            </View>
                                        </View>
                                        : null
                            }
                        </View>
                    ))}
                </Swiper>
                <TouchableOpacity
                    onPress={handleNext}
                    style={{ position: "absolute", bottom: 15, alignSelf: "center", flexDirection: 'row', alignItems: "center", justifyContent: "center", padding: 5 }}>
                    <View style={{ width: 70 }} />
                    <View style={{ width: 100, height: vs(25), borderRadius: 50, backgroundColor: "#4597cf", alignItems: "center", justifyContent: "center" }}>
                        <Text style={{ color: "#ffffff", fontSize: vs(14), }}>{currentIndex === detailsContent.length - 1 ? "Let's Start" : 'Next'}</Text>
                    </View>
                    <View style={{ width: 70 }}>
                        <Image source={ICONS.arrow} style={{ width: 30, height: 30, resizeMode: "contain" }} />
                    </View>
                </TouchableOpacity>
            </View >
        </View >
    )
}



export default Onboarding;

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