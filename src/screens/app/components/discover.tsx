// screens/DetailsScreen.tsx
import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import { COLORS, FONTS, ICONS } from '../../../shared/utils/theme';
import { scale, vs } from 'react-native-size-matters';

const detailsContent = [
    'Detail 1',
    'Detail 2',
    'Detail 3',
    'Detail 4',
    'Detail 5',
    // Add more details if needed
];

const Discover: React.FC<{ navigation: any }> = ({ navigation }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        if (currentIndex < detailsContent.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            navigation.navigate('Home');
            setCurrentIndex(0);
        }
    };

    const handleGoBack = () => {
        setCurrentIndex(0);
        navigation.navigate('Home');
    };

    return (
        <View style={{ flex: 1, backgroundColor: COLORS.primary }}>
            <View style={{ flex: 1, borderRadius: 30, marginTop: 40 }}>

                <Swiper
                    loop={false}
                    index={currentIndex}
                    showsPagination={true}
                    onIndexChanged={(index) => setCurrentIndex(index)}
                    pagingEnabled
                    paginationStyle={{ bottom: 75 }}
                >
                    {detailsContent.map((detail, index) => (
                        <View key={index} style={{ flex: 1, }}>
                            {index === 0 ?
                                <View style={{ flex: 1, backgroundColor: COLORS.white, borderRadius: 30, padding: 20, }}>
                                    <Image source={ICONS.infection} style={{ width: scale(250), height: vs(170), resizeMode: "contain", alignSelf: "center" }} />
                                    <View style={{ flexDirection: "row" }}>
                                        <Text style={{ fontFamily: FONTS.h1, color: COLORS.appgreen, fontSize: vs(22) }}>Infection</Text>
                                        <Text style={{
                                            fontFamily: FONTS.h1, color: COLORS.appgreen,
                                            fontSize: vs(13),
                                            lineHeight: 40,
                                            textAlignVertical: 'top',
                                        }}>1,2
                                        </Text>
                                    </View>
                                    <Text style={{ fontFamily: FONTS.bold, color: COLORS.secondary, fontSize: vs(13.5), textAlign: "justify", marginBottom: 10 }}>H. pylori infections are thought to spread from one person's mouth to another for example, a person does not wash his or her hands thoroughly after using the bathroom.</Text>
                                    <Text style={{ fontFamily: FONTS.normal, color: COLORS.secondary, fontSize: vs(12.5), textAlign: "justify", marginBottom: 10 }}><Text style={{ color: COLORS.appgreen }}>•</Text> They may also be transferred from feces to the mouth, sharing the same cup or sharing same inhaler amongst siblings.</Text>
                                    <Text style={{ fontFamily: FONTS.normal, color: COLORS.secondary, fontSize: vs(12.5), textAlign: "justify", marginBottom: 10 }}><Text style={{ color: COLORS.appgreen }}>•</Text> AAlso, it is possible to be infected by H. pylori that is present in contaminated water or food.</Text>
                                    <Text style={{ fontFamily: FONTS.normal, color: COLORS.secondary, fontSize: vs(12.5), textAlign: "justify" }}><Text style={{ color: COLORS.appgreen }}>•</Text> Your risk for the infection is associated with your environment and living conditions.</Text>
                                </View>
                                : index === 1 ?
                                    <View style={{ flex: 1, backgroundColor: COLORS.white, borderRadius: 30, padding: 20, }}>
                                        <Image source={ICONS.symptoms} style={{ width: scale(250), height: vs(170), resizeMode: "contain", alignSelf: "center" }} />
                                        <View style={{ flexDirection: "row" }}>
                                            <Text style={{ fontFamily: FONTS.h1, color: COLORS.appgreen, fontSize: vs(22) }}>Symptoms</Text>
                                            <Text style={{
                                                fontFamily: FONTS.h1, color: COLORS.appgreen,
                                                fontSize: vs(13), // Adjust the font size for superscript
                                                lineHeight: 40, // Adjust the line height for superscript
                                                textAlignVertical: 'top',
                                            }}>3
                                            </Text>
                                        </View>
                                        <Text style={{ fontFamily: FONTS.bold, color: COLORS.secondary, fontSize: vs(13.5), textAlign: "justify", marginBottom: 10 }}>Although H. pylori infection can be asymptomatic,symptoms include:</Text>
                                        <Text style={{ fontFamily: FONTS.normal, color: COLORS.secondary, fontSize: vs(12.5), textAlign: "justify", }}><Text style={{ color: COLORS.appgreen }}>•</Text> Bloating</Text>
                                        <Text style={{ fontFamily: FONTS.normal, color: COLORS.secondary, fontSize: vs(12.5), textAlign: "justify", }}><Text style={{ color: COLORS.appgreen }}>•</Text> Abdominal pain</Text>
                                        <Text style={{ fontFamily: FONTS.normal, color: COLORS.secondary, fontSize: vs(12.5), textAlign: "justify", }}><Text style={{ color: COLORS.appgreen }}>•</Text> Lack of appetite</Text>
                                        <Text style={{ fontFamily: FONTS.normal, color: COLORS.secondary, fontSize: vs(12.5), textAlign: "justify", }}><Text style={{ color: COLORS.appgreen }}>•</Text> Heartburn</Text>
                                        <Text style={{ fontFamily: FONTS.normal, color: COLORS.secondary, fontSize: vs(12.5), textAlign: "justify", }}><Text style={{ color: COLORS.appgreen }}>•</Text> Indigestion</Text>
                                        <Text style={{ fontFamily: FONTS.normal, color: COLORS.secondary, fontSize: vs(12.5), textAlign: "justify", }}><Text style={{ color: COLORS.appgreen }}>•</Text> Nausea</Text>
                                        <Text style={{ fontFamily: FONTS.normal, color: COLORS.secondary, fontSize: vs(12.5), textAlign: "justify", }}><Text style={{ color: COLORS.appgreen }}>•</Text> Bleeding</Text>
                                    </View>
                                    : index === 2 ?
                                        <View style={{ flex: 1, backgroundColor: COLORS.white, borderRadius: 30, padding: 20, }}>
                                            <Image source={ICONS.cause} style={{ width: scale(280), height: vs(200), resizeMode: "contain", alignSelf: "center" }} />
                                            <View style={{ flexDirection: "row" }}>
                                                <Text style={{ fontFamily: FONTS.h1, color: COLORS.appgreen, fontSize: vs(22) }}>{`Causing Peptic\nUlcer Disease`}</Text><Text style={{ fontFamily: FONTS.h1, color: COLORS.appgreen, fontSize: vs(13), textAlignVertical: 'top', top: 40, left: -13 }}>4-7</Text>
                                            </View>
                                            <Text style={{ fontFamily: FONTS.bold, color: COLORS.secondary, fontSize: vs(13.5), textAlign: "justify", }}>Infection</Text>
                                            <Text style={{ fontFamily: FONTS.normal, color: COLORS.secondary, fontSize: vs(12.5), textAlign: "justify", }}>H. pylori colonizes the lower part of the stomach.</Text>
                                            <Text style={{ fontFamily: FONTS.bold, color: COLORS.secondary, fontSize: vs(13.5), textAlign: "justify", }}>Inflammation</Text>
                                            <Text style={{ fontFamily: FONTS.normal, color: COLORS.secondary, fontSize: vs(12.5), textAlign: "justify", }}>H. pylori causes inflammation of the gastric mucosa. This could often occur without any symptoms.</Text>
                                            <Text style={{ fontFamily: FONTS.bold, color: COLORS.secondary, fontSize: vs(13.5), textAlign: "justify", }}>Ulceration</Text>
                                            <Text style={{ fontFamily: FONTS.normal, color: COLORS.secondary, fontSize: vs(12.5), textAlign: "justify", }}>Gastric inflammation may lead to duodenal or gastric ulcers. It may also lead to bleeding or perforation, which are severe peptic ulcer-related complications.</Text>
                                        </View>
                                        : index === 3 ?
                                            <View style={{ flex: 1, backgroundColor: COLORS.white, borderRadius: 30, padding: 30, }}>
                                                <Image source={ICONS.dodont} style={{ width: scale(90), height: vs(60), resizeMode: "contain", alignSelf: "flex-start" }} />
                                                <View style={{ flexDirection: "row" }}>
                                                    <Text style={{ fontFamily: FONTS.h1, color: COLORS.appgreen, fontSize: vs(20) }}>Do's and Don'ts</Text>
                                                    <Text style={{ fontFamily: FONTS.h1, color: COLORS.appgreen, fontSize: vs(12), lineHeight: 40, textAlignVertical: 'top', }}>8-15</Text>
                                                </View>
                                                <Text style={{ fontFamily: FONTS.bold, color: COLORS.secondary, fontSize: vs(11.5), textAlign: "justify", marginBottom: -20, marginTop: -5 }}>When dealing with H. pylori complications, dietary adjustments are often advised to assist in treatment and facilitate the healing process.</Text>
                                                <Image source={ICONS.do} style={{ width: scale(75), height: vs(75), resizeMode: "contain", alignSelf: "flex-start" }} />
                                                <View style={{ flexWrap: "wrap", flexDirection: "row", marginTop: vs(-15) }}>
                                                    <View style={{ alignItems: "center", marginRight: 15 }}>
                                                        <Image source={ICONS.cranberry} style={{ width: scale(40), height: vs(40), resizeMode: "contain", }} />
                                                        <Text style={{ fontFamily: FONTS.bold, color: COLORS.secondary, fontSize: vs(8.5), textAlign: "justify", }}>Cranberry</Text>
                                                    </View>
                                                    <View style={{ alignItems: "center", marginRight: 15 }}>
                                                        <Image source={ICONS.broccoli} style={{ width: scale(40), height: vs(40), resizeMode: "contain", }} />
                                                        <Text style={{ fontFamily: FONTS.bold, color: COLORS.secondary, fontSize: vs(8.5), textAlign: "justify", }}>Broccoli</Text>
                                                    </View>
                                                    <View style={{ alignItems: "center", marginRight: 15 }}>
                                                        <Image source={ICONS.beans} style={{ width: scale(40), height: vs(40), resizeMode: "contain", }} />
                                                        <Text style={{ fontFamily: FONTS.bold, color: COLORS.secondary, fontSize: vs(8.5), textAlign: "justify", }}>Beans</Text>
                                                    </View>
                                                    <View style={{ alignItems: "center", marginRight: 15 }}>
                                                        <Image source={ICONS.green_banana} style={{ width: scale(40), height: vs(40), resizeMode: "contain", }} />
                                                        <Text style={{ fontFamily: FONTS.bold, color: COLORS.secondary, fontSize: vs(8.5), textAlign: "justify", }}>Green Banana</Text>
                                                    </View>
                                                    <View style={{ alignItems: "center", marginRight: 15 }}>
                                                        <Image source={ICONS.aloevera} style={{ width: scale(40), height: vs(40), resizeMode: "contain", }} />
                                                        <Text style={{ fontFamily: FONTS.bold, color: COLORS.secondary, fontSize: vs(8.5), textAlign: "justify", }}>Aloe Vera</Text>
                                                    </View>
                                                    <View style={{ alignItems: "center", marginRight: 15, marginTop: 5 }}>
                                                        <Image source={ICONS.gabbage} style={{ width: scale(40), height: vs(40), resizeMode: "contain", }} />
                                                        <Text style={{ fontFamily: FONTS.bold, color: COLORS.secondary, fontSize: vs(8.5), textAlign: "justify", }}>Gabbage</Text>
                                                    </View>
                                                    <View style={{ alignItems: "center", marginRight: 15, marginTop: 5 }}>
                                                        <Image source={ICONS.oregano} style={{ width: scale(40), height: vs(40), resizeMode: "contain", }} />
                                                        <Text style={{ fontFamily: FONTS.bold, color: COLORS.secondary, fontSize: vs(8.5), textAlign: "justify", }}>Oregano</Text>
                                                    </View>
                                                </View>
                                                <Image source={ICONS.dont} style={{ width: scale(75), height: vs(75), resizeMode: "contain", alignSelf: "flex-start", marginTop: -20 }} />
                                                <View style={{ flexWrap: "wrap", flexDirection: "row", marginTop: vs(-18) }}>
                                                    <View style={{ alignItems: "center", marginRight: 15 }}>
                                                        <Image source={ICONS.pickles} style={{ width: scale(40), height: vs(40), resizeMode: "contain", }} />
                                                        <Text style={{ fontFamily: FONTS.bold, color: COLORS.secondary, fontSize: vs(8.5), textAlign: "justify", }}>Pickles</Text>
                                                    </View>
                                                    <View style={{ alignItems: "center", marginRight: 15 }}>
                                                        <Image source={ICONS.spices} style={{ width: scale(40), height: vs(40), resizeMode: "contain", }} />
                                                        <Text style={{ fontFamily: FONTS.bold, color: COLORS.secondary, fontSize: vs(8.5), textAlign: "justify", }}>Cranberry</Text>
                                                    </View>
                                                    <View style={{ alignItems: "center", marginRight: 15 }}>
                                                        <Image source={ICONS.tea} style={{ width: scale(40), height: vs(40), resizeMode: "contain", }} />
                                                        <Text style={{ fontFamily: FONTS.bold, color: COLORS.secondary, fontSize: vs(8.5), textAlign: "justify", }}>Cranberry</Text>
                                                    </View>
                                                    <View style={{ alignItems: "center", marginRight: 15 }}>
                                                        <Image source={ICONS.chocolate} style={{ width: scale(40), height: vs(40), resizeMode: "contain", }} />
                                                        <Text style={{ fontFamily: FONTS.bold, color: COLORS.secondary, fontSize: vs(8.5), textAlign: "justify", }}>Cranberry</Text>
                                                    </View>
                                                    <View style={{ alignItems: "center", marginRight: 15 }}>
                                                        <Image source={ICONS.citrus} style={{ width: scale(40), height: vs(40), resizeMode: "contain", }} />
                                                        <Text style={{ fontFamily: FONTS.bold, color: COLORS.secondary, fontSize: vs(8.5), textAlign: "justify", }}>Cranberry</Text>
                                                    </View>
                                                    <View style={{ alignItems: "center", marginRight: 15, marginTop: 5 }}>
                                                        <Image source={ICONS.fries} style={{ width: scale(40), height: vs(40), resizeMode: "contain", }} />
                                                        <Text style={{ fontFamily: FONTS.bold, color: COLORS.secondary, fontSize: vs(8.5), textAlign: "justify", }}>Cranberry</Text>
                                                    </View>
                                                    <View style={{ alignItems: "center", marginRight: 15, marginTop: 5 }}>
                                                        <Image source={ICONS.softdrink} style={{ width: scale(40), height: vs(40), resizeMode: "contain", }} />
                                                        <Text style={{ fontFamily: FONTS.bold, color: COLORS.secondary, fontSize: vs(8.5), textAlign: "justify", }}>Cranberry</Text>
                                                    </View>
                                                    <View style={{ alignItems: "center", marginRight: 15, marginTop: 5 }}>
                                                        <Image source={ICONS.tomatoes} style={{ width: scale(40), height: vs(40), resizeMode: "contain", }} />
                                                        <Text style={{ fontFamily: FONTS.bold, color: COLORS.secondary, fontSize: vs(8.5), textAlign: "justify", }}>Cranberry</Text>
                                                    </View>
                                                    <View style={{ alignItems: "center", marginRight: 15, marginTop: 5 }}>
                                                        <Image source={ICONS.redmeat} style={{ width: scale(40), height: vs(40), resizeMode: "contain", }} />
                                                        <Text style={{ fontFamily: FONTS.bold, color: COLORS.secondary, fontSize: vs(8.5), textAlign: "justify", }}>Cranberry</Text>
                                                    </View>
                                                </View>
                                            </View>

                                            : index === 4 ?
                                                <View style={{ flex: 1, backgroundColor: COLORS.white, borderRadius: 30, padding: 20, }}>
                                                    <Image source={ICONS.facts} style={{ width: scale(280), height: vs(200), resizeMode: "contain", alignSelf: "center" }} />
                                                    <View style={{ flexDirection: "row", marginTop: -20, marginBottom: 20 }}>
                                                        <Text style={{ fontFamily: FONTS.h1, color: COLORS.appgreen, fontSize: vs(22), }}>H. Pylori Facts</Text>
                                                        <Text style={{
                                                            fontFamily: FONTS.h1, color: COLORS.appgreen,
                                                            fontSize: vs(13), // Adjust the font size for superscript
                                                            lineHeight: 40, // Adjust the line height for superscript
                                                            textAlignVertical: 'top',
                                                        }}>16-19
                                                        </Text>
                                                    </View>
                                                    <View style={{ flex: .7, flexDirection: "row", justifyContent: "space-between" }}>
                                                        <View style={{ width: scale(103), height: vs(100), backgroundColor: COLORS.secondary, padding: 5, alignItems: "flex-start", justifyContent: "center", borderRadius: 12, }}>
                                                            <Text style={{ fontFamily: FONTS.bold, color: COLORS.white, fontSize: vs(12), textAlign: "left", }}>Did you know?</Text>
                                                            <Text style={{ fontFamily: FONTS.normal, color: COLORS.white, fontSize: vs(10), textAlign: "left", }}>It is the most common chronic bacterial infection in humans.</Text>
                                                        </View>
                                                        <View style={{ width: scale(103), height: vs(100), backgroundColor: COLORS.primary, padding: 5, alignItems: "flex-start", justifyContent: "center", borderRadius: 12, }}>
                                                            <Text style={{ fontFamily: FONTS.bold, color: COLORS.white, fontSize: vs(12), textAlign: "left", }}>Did you know?</Text>
                                                            <Text style={{ fontFamily: FONTS.normal, color: COLORS.white, fontSize: vs(10), textAlign: "left", }}>H. pylori is the leading known risk factor for peptic and gastric ulcers.</Text>
                                                        </View>
                                                        <View style={{ width: scale(103), height: vs(100), backgroundColor: COLORS.secondary, padding: 5, alignItems: "flex-start", justifyContent: "center", borderRadius: 12, }}>
                                                            <Text style={{ fontFamily: FONTS.bold, color: COLORS.white, fontSize: vs(12), textAlign: "left", }}>Did you know?</Text>
                                                            <Text style={{ fontFamily: FONTS.normal, color: COLORS.white, fontSize: vs(8.524), textAlign: "left", }}>H. pylori has been classified as type I (definite) cause of gastric cancer since 1994.</Text>
                                                        </View>
                                                    </View>
                                                    <View style={{ flex: 1.3, flexDirection: "row", justifyContent: "space-between" }}>
                                                        <View style={{ width: scale(103), height: vs(100), backgroundColor: COLORS.primary, padding: 5, alignItems: "flex-start", justifyContent: "center", borderRadius: 12, }}>
                                                            <Text style={{ fontFamily: FONTS.bold, color: COLORS.white, fontSize: vs(12), textAlign: "left", }}>Did you know?</Text>
                                                            <Text style={{ fontFamily: FONTS.normal, color: COLORS.white, fontSize: vs(10), textAlign: "left", }}>It is the most common chronic bacterial infection in humans.</Text>
                                                        </View>
                                                        <View style={{ width: scale(209), height: vs(100), backgroundColor: COLORS.secondary, padding: 5, alignItems: "flex-start", justifyContent: "center", borderRadius: 12, }}>
                                                            <Text style={{ fontFamily: FONTS.bold, color: COLORS.white, fontSize: vs(12), textAlign: "left", }}>Did you know?</Text>
                                                            <Text style={{ fontFamily: FONTS.normal, color: COLORS.white, fontSize: vs(10), textAlign: "left", }}>Infection appears to be approximately two to three times higher in blacks and Hispanics compared to the white population.</Text>
                                                        </View>
                                                        {/* <View style={{ width: scale(100), height: vs(100), backgroundColor: COLORS.secondary, padding: 3, alignItems: "flex-start", justifyContent: "center" }}>
                                                            <Text style={{ fontFamily: FONTS.bold, color: COLORS.white, fontSize: vs(12), textAlign: "left", }}>Did you know?</Text>
                                                            <Text style={{ fontFamily: FONTS.normal, color: COLORS.white, fontSize: vs(10), textAlign: "left", }}>It is the most common chronic bacterial infection in humans.</Text>
                                                        </View> */}
                                                    </View>
                                                </View>
                                                : null
                            }
                        </View>
                    ))}
                </Swiper>
                <View style={{ width: scale(120), position: "absolute", bottom: 10, alignSelf: "center", alignItems: "center" }}>
                    <TouchableOpacity style={{ backgroundColor: COLORS.primary, width: scale(100), height: vs(25), borderRadius: 50, alignItems: "center", justifyContent: "center", marginVertical: 5 }} onPress={handleNext}  >
                        <Text style={{ color: COLORS.white, fontSize: vs(13), fontFamily: FONTS.bold }}>{currentIndex === detailsContent.length - 1 ? 'Go Back' : 'Next'} </Text>
                    </TouchableOpacity>
                    <Text style={{ color: COLORS.secondary, fontFamily: FONTS.semibold, fontSize: vs(10), textAlign: 'center' }}>Disclaimer & References</Text>
                </View>
                {/* <Button  title={currentIndex === detailsContent.length - 1 ? 'Go Back' : 'Next'} onPress={handleNext} /> */}
                {/* {currentIndex > 0 && <Button title="Go Back" onPress={handleGoBack} />} */}
            </View >
        </View >
    );
};

export default Discover;

// DetailScreen.tsx

// import React, { useState } from 'react';
// import { View, Button, Text } from 'react-native';
// import Swiper from 'react-native-swiper';
// import { useNavigation } from '@react-navigation/native';
// import { AppStackParams } from '../../../navigation/appScreens';
// import { StackNavigationProp } from '@react-navigation/stack';

// const DetailScreen: React.FC = () => {
//     const [currentIndex, setCurrentIndex] = useState<number>(0);
//     const navigation = useNavigation<StackNavigationProp<AppStackParams>>();

//     const handleNext = () => {
//         if (currentIndex < 3) {
//             setCurrentIndex((prevIndex) => prevIndex + 1);
//         } else {
//             navigation.navigate("Home");
//             setCurrentIndex(0);
//         }
//     };

//     const handleGoBack = () => {
//         if (currentIndex > 0) {
//             setCurrentIndex((prevIndex) => prevIndex - 1);
//         } else {
//             navigation.goBack();
//         }
//     };

//     return (
//         <View>
//             <Swiper
//                 loop={false}
//                 index={currentIndex}
//                 onIndexChanged={(index) => setCurrentIndex(index)}
//             >
//                 {detailsContent.map((detail, index) => (
//                     <View key={index} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//                         <Text>{detail}</Text>
//                     </View>
//                 ))}
//             </Swiper>

//             <Button title={currentIndex < 3 ? 'Next' : 'Go Back'} onPress={handleNext} />
//             {currentIndex > 0 && <Button title="Go Back" onPress={handleGoBack} />}
//         </View>
//     );
// };

// export default DetailScreen;

