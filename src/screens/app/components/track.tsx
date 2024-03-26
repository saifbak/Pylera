import React from 'react';
import { View, Text, Pressable, Image, TouchableOpacity } from 'react-native';
import { COLORS, FONTS, ICONS, } from '../../../shared/utils/theme';
import { ScaledSheet, scale, vs } from 'react-native-size-matters';
import * as Progress from 'react-native-progress';
import CheckBox from '@react-native-community/checkbox';

const Dose: React.FC<{ navigation: any }> = ({ navigation }) => {

    return (
        <View style={{ flex: 1, backgroundColor: COLORS.primary }}>
            <View style={{ flex: 1, borderRadius: 30, marginTop: 40 }}>
                <View style={{ flex: .6, paddingHorizontal: 20, alignItems: "center", justifyContent: "center" }}>
                    <Image source={ICONS.finish} style={{ right: scale(-55), width: scale(250), height: vs(200), resizeMode: "contain", marginTop: -60 }} />
                </View>
                <View style={{ flex: 1.5, backgroundColor: COLORS.white, borderRadius: 30, padding: 20, }}>
                    <Pressable onPress={() => navigation.goBack()} style={{ alignSelf: "flex-end", }}><Text style={{ fontFamily: FONTS.bold, color: COLORS.primary, fontSize: vs(12) }}>Back</Text></Pressable>
                    <View style={{ marginVertical: 0 }}>
                        <Text style={{ fontFamily: FONTS.bold, color: COLORS.secondary, fontSize: vs(13), textAlign: "justify", marginTop: -8 }}>Doses in time</Text>
                        <Text style={{ fontFamily: FONTS.bold, color: COLORS.primary, fontSize: vs(13), textAlign: "justify", marginTop: -8 }}>30/40 time</Text>
                        <Progress.Bar unfilledColor="white" progress={0.4} borderWidth={1} width={350} borderRadius={4} height={9} borderColor={String(COLORS.acrylic)} color={String(COLORS.primary)} />
                    </View>
                    <View style={{ marginVertical: 5 }}>
                        <Text style={{ fontFamily: FONTS.bold, color: COLORS.secondary, fontSize: vs(13), textAlign: "justify", marginTop: -8 }}>Missing in time</Text>
                        <Text style={{ fontFamily: FONTS.bold, color: "#de8545", fontSize: vs(13), textAlign: "justify", marginTop: -8 }}>30/40 time</Text>
                        <Progress.Bar unfilledColor="white" progress={0.4} borderWidth={1} width={350} borderRadius={4} height={9} borderColor={String(COLORS.acrylic)} color={"#de8545"} />
                    </View>
                    <View style={{ backgroundColor: '#efefef', flex: 1, borderRadius: 40, marginTop: 20, justifyContent: "center", paddingLeft: 15 }}>
                        <View style={{ marginVertical: 5 }}>
                            <Text style={{ fontFamily: FONTS.bold, color: COLORS.secondary, fontSize: vs(13), textAlign: "justify", marginTop: -8 }}>Doses in time</Text>
                            <Text style={{ fontFamily: FONTS.bold, color: COLORS.primary, fontSize: vs(13), textAlign: "justify", marginTop: -8 }}>30/40 time</Text>
                            <Progress.Bar unfilledColor="white" progress={0.4} borderWidth={1} width={320} borderRadius={4} height={9} borderColor={String(COLORS.acrylic)} color={String(COLORS.secondary)} />
                        </View>
                        <View style={{ marginVertical: 5 }}>
                            <Text style={{ fontFamily: FONTS.bold, color: COLORS.secondary, fontSize: vs(13), textAlign: "justify", marginTop: -8 }}>Doses in time</Text>
                            <Text style={{ fontFamily: FONTS.bold, color: COLORS.primary, fontSize: vs(13), textAlign: "justify", marginTop: -8 }}>30/40 time</Text>
                            <Progress.Bar unfilledColor="white" progress={0.4} borderWidth={1} width={320} borderRadius={4} height={9} borderColor={String(COLORS.acrylic)} color={String(COLORS.secondary)} />
                        </View>
                        <View style={{ marginVertical: 5 }}>
                            <Text style={{ fontFamily: FONTS.bold, color: COLORS.secondary, fontSize: vs(13), textAlign: "justify", marginTop: -8 }}>Doses in time</Text>
                            <Text style={{ fontFamily: FONTS.bold, color: COLORS.primary, fontSize: vs(13), textAlign: "justify", marginTop: -8 }}>30/40 time</Text>
                            <Progress.Bar unfilledColor="white" progress={0.4} borderWidth={1} width={320} borderRadius={4} height={9} borderColor={String(COLORS.acrylic)} color={String(COLORS.secondary)} />
                        </View>
                        <View style={{ marginVertical: 5 }}>
                            <Text style={{ fontFamily: FONTS.bold, color: COLORS.secondary, fontSize: vs(13), textAlign: "justify", marginTop: -8 }}>Doses in time</Text>
                            <Text style={{ fontFamily: FONTS.bold, color: COLORS.primary, fontSize: vs(13), textAlign: "justify", marginTop: -8 }}>30/40 time</Text>
                            <Progress.Bar unfilledColor="white" progress={0.4} borderWidth={1} width={320} borderRadius={4} height={9} borderColor={String(COLORS.acrylic)} color={String(COLORS.secondary)} />
                        </View>
                    </View>
                    {/* <Text style={{ fontFamily: FONTS.normal, color: COLORS.secondary, fontSize: vs(12.5), textAlign: "justify", marginTop: -8 }}>To set your treatment plan, please enter the following data, and the application will send you notification reminders to take your dose</Text>
                    <Text style={{ fontFamily: FONTS.bold, color: COLORS.secondary, fontSize: vs(12.5), textAlign: "justify", marginBottom: -5 }}>If you have received the first dose, please set the timing of the first dose.</Text> */}
                    {/* <Text style={styles.month}>{`${currentMonth}, ${currentYear}`}</Text>
                            <FlatList
                                contentContainerStyle={{ height: vs(55), }}
                                showsHorizontalScrollIndicator={false}
                                data={daysOfMonth}
                                keyExtractor={(_, key_index) => key_index.toString()}
                                renderItem={({ item, index }) => {
                                    return (
                                        <TouchableOpacity
                                            onPress={() => setSelectDate(item?.date)}
                                            style={[styles.dateView, { backgroundColor: item?.date === selectDate ? COLORS.primary : COLORS.white }]}
                                        >
                                            <Text style={[styles.day, { color: item?.date === selectDate ? COLORS.white : COLORS.borderColor }]}>{item?.day.slice(0, 3)}</Text>
                                            <Text style={[styles.date, { color: item?.date === selectDate ? COLORS.white : COLORS.borderColor }]}>{item?.date}</Text>
                                        </TouchableOpacity>
                                    )
                                }}
                                horizontal
                            />
                            <FlatList
                                style={{ marginTop: vs(-80), flex: 1, }}
                                showsHorizontalScrollIndicator={false}
                                data={clockArray}
                                keyExtractor={(_, key_index) => key_index.toString()}
                                renderItem={({ item, index }) => {
                                    return (
                                        <TouchableOpacity
                                            onPress={() => setSelectTime(item?.formattedTime)}
                                            style={[styles.hoursView, { backgroundColor: item?.formattedTime === selectTime ? COLORS.secondary : COLORS.white }]}
                                        >
                                            <Text style={[styles.hours, { color: item?.formattedTime === selectTime ? COLORS.white : COLORS.borderColor }]}>{item?.formattedTime}</Text>
                                        </TouchableOpacity>
                                    )
                                }}
                                horizontal
                            /> */}
                    {/* <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        bottom: vs(50)
                    }}>
                        <CheckBox
                            disabled={false}
                            // value={toggleCheckBox2}
                            // onValueChange={(newValue) => setToggleCheckBox2(newValue)}
                            onCheckColor={String(COLORS.primary)}
                            onFillColor={String(COLORS.primary)}
                            onTintColor={String(COLORS.primary)}
                            tintColors={{
                                true: COLORS.primary
                            }}
                        />
                        <Text style={{ fontFamily: FONTS.normal, color: COLORS.secondary, fontSize: vs(12), }}>I haven't administrated any dose.</Text>
                    </View> */}
                </View>
            </View>
        </View >
        // </View >
    );
};


const styles = ScaledSheet.create({
    block: {
        flexDirection: "row",
        paddingHorizontal: '20@s',
        width: '100%',
        height: '70@vs',
        borderRadius: '16@s',
        alignItems: "center",
        marginVertical: '5@vs',
        justifyContent: "space-between"
    },
    secondaryblock: {
        flexDirection: "row",
        paddingHorizontal: '10@s',
        width: '100%',
        height: '48@vs',
        borderRadius: '14@s',
        alignItems: "center",
        marginVertical: '5@vs',
        backgroundColor: COLORS.acrylic
    },

})

export default Dose;
