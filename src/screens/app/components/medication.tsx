// screens/DetailsScreen.tsx
import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, Image, Pressable } from 'react-native';
import Swiper from 'react-native-swiper';
import { COLORS, FONTS, ICONS } from '../../../shared/utils/theme';
import { ScaledSheet, scale, vs } from 'react-native-size-matters';
import CheckBox from '@react-native-community/checkbox';
const detailsContent = [
    'Detail 1',
    'Detail 2',
    'Detail 3',
    'Detail 4',
    'Detail 5',
    'Detail 6',
];

const Medication: React.FC<{ navigation: any }> = ({ navigation }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [toggleCheckBox, setToggleCheckBox] = useState<boolean>(false)
    const [proceed, setProceed] = useState<boolean>(false)
    const handleNext = () => {
        if (currentIndex < detailsContent.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            navigation.navigate('Home');
            setCurrentIndex(0);
            setProceed(false)
            setToggleCheckBox(false)

        }
    };

    const handleGoBack = () => {
        setCurrentIndex(0);
        navigation.navigate('Home');
    };

    return (
        <View style={{ flex: 1, backgroundColor: COLORS.primary }}>
            <View style={{ flex: 1, borderRadius: 30, marginTop: 40 }}>
                {proceed === false ?
                    <>
                        <View style={{ flex: 1, backgroundColor: COLORS.white, borderRadius: 30, paddingHorizontal: 30, }}>
                            <Pressable onPress={() => navigation.goBack()} style={{ alignSelf: "flex-end", marginTop: 15 }}><Text style={{ fontFamily: FONTS.semibold, color: COLORS.primary, fontSize: vs(13) }}>Back</Text></Pressable>
                            <Image source={ICONS.caution} style={{ width: scale(180), height: vs(100), resizeMode: "contain", alignSelf: "center", }} />
                            <View style={{ flexDirection: "row", marginTop: 5 }}>
                                <Text style={{ fontFamily: FONTS.h1, color: COLORS.secondary, fontSize: vs(13) }}>This is a Medicament</Text>
                                <Text style={{
                                    fontFamily: FONTS.h1, color: COLORS.secondary,
                                    fontSize: vs(8),
                                    lineHeight: 20,
                                    textAlignVertical: 'top',
                                    marginLeft: 1
                                }}>20
                                </Text>
                            </View>
                            <Text style={{ fontFamily: FONTS.normal, color: COLORS.secondary, fontSize: vs(11), textAlign: "justify" }}><Text style={{ color: COLORS.secondary }}>• </Text>Medication is a product that affects your health, and its consumption contrary to instructions is dangerous for you.</Text>
                            <Text style={{ fontFamily: FONTS.normal, color: COLORS.secondary, fontSize: vs(11), textAlign: "justify" }}><Text style={{ color: COLORS.secondary }}>• </Text>Strictly follow the doctor's prescription, the method of use, and the instructions of the pharmacist who sold the medication.</Text>
                            <Text style={{ fontFamily: FONTS.normal, color: COLORS.secondary, fontSize: vs(11), textAlign: "justify" }}><Text style={{ color: COLORS.secondary }}>• </Text>The doctor and the pharmacist are experts in medicines, their benefits, and risks.</Text>
                            <Text style={{ fontFamily: FONTS.normal, color: COLORS.secondary, fontSize: vs(11), textAlign: "justify" }}><Text style={{ color: COLORS.secondary }}>• </Text>Do not interrupt the treatment period prescribed for you.</Text>
                            <Text style={{ fontFamily: FONTS.normal, color: COLORS.secondary, fontSize: vs(11), textAlign: "justify" }}><Text style={{ color: COLORS.secondary }}>• </Text>Do not repeat the same prescription without consulting your doctor.</Text>
                            <Text style={{ fontFamily: FONTS.normal, color: COLORS.secondary, fontSize: vs(11), textAlign: "justify" }}><Text style={{ color: COLORS.secondary }}>• </Text>Keep all medications out of reach of children.</Text>
                            <Text style={{ fontFamily: FONTS.normal, color: COLORS.secondary, fontSize: vs(11), textAlign: "justify" }}><Text style={{ color: COLORS.secondary }}>• </Text>In the event of an adverse event occurring from any of NewBridge Pharmaceuticals Licensed products, kindly report them to the NewBridge Safety Mailbox</Text>
                            <Text style={{ fontFamily: FONTS.normal, color: COLORS.primary, fontSize: vs(12), textAlign: "justify" }}>safety@nbpharma.com</Text>
                            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 20 }}>
                                <CheckBox
                                    disabled={false}
                                    value={toggleCheckBox}
                                    onValueChange={(newValue) => setToggleCheckBox(newValue)}
                                    onCheckColor={String(COLORS.primary)}
                                    onFillColor={String(COLORS.primary)}
                                    onTintColor={String(COLORS.primary)}
                                    tintColors={{
                                        true: COLORS.primary
                                    }}
                                />
                                <Text style={{ fontFamily: FONTS.normal, color: COLORS.secondary, fontSize: vs(12), }}>I have clearly read and understood the above</Text>
                            </View>
                        </View>
                        <View style={{ width: scale(120), position: "absolute", bottom: 30, alignSelf: "center", alignItems: "center" }}>
                            <TouchableOpacity
                                disabled={!toggleCheckBox}
                                style={{ backgroundColor: toggleCheckBox === true ? COLORS.primary : COLORS.gray, width: scale(180), height: vs(25), borderRadius: 50, alignItems: "center", justifyContent: "center", marginVertical: 5 }} onPress={() => setProceed(true)}  >
                                <Text style={{ color: COLORS.white, fontSize: vs(11), fontFamily: FONTS.bold }}>{'PROCEED TO VIEW CONTENT'} </Text>
                            </TouchableOpacity>
                        </View>
                    </>
                    :
                    <><Swiper
                        scrollEnabled={false}
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
                                        <Image source={ICONS.indication} style={{ width: scale(250), height: vs(170), resizeMode: "contain", alignSelf: "center" }} />
                                        <View style={{ flexDirection: "column" }}>
                                            <View style={{ flexDirection: "row" }}>
                                                <Text style={{ fontFamily: FONTS.h1, color: COLORS.primary, fontSize: vs(22) }}>PYLERA</Text>
                                                <Text style={{
                                                    fontFamily: FONTS.h1, color: COLORS.primary,
                                                    fontSize: vs(17),
                                                    lineHeight: 40,
                                                    textAlignVertical: 'top',
                                                }}>®
                                                </Text>
                                            </View>
                                            <View style={{ flexDirection: "row", marginTop: -20 }}>
                                                <Text style={{ fontFamily: FONTS.h1, color: COLORS.primary, fontSize: vs(22) }}>Indication & Usage</Text>
                                                <Text style={{
                                                    fontFamily: FONTS.h1, color: COLORS.primary,
                                                    fontSize: vs(13),
                                                    lineHeight: 40,
                                                    textAlignVertical: 'top',
                                                }}>20
                                                </Text>
                                            </View>
                                        </View>
                                        <Text style={{ fontFamily: FONTS.normal, color: COLORS.secondary, fontSize: vs(12.5), textAlign: "justify", }}>PYLERA® is a combination of metronidazole, a nitroimidazole antimicrobial, tetracycline,- a tetracycline class antimicrobial and bismuth subcitrate potassium, indicated for use, in combination with omeprazole, for the treatment of patients with Helicobacter pylori infection and duodenal ulcer disease (active or history of within the past 5 years) to eradicate H. pylori.</Text>
                                        <Text style={{ fontFamily: FONTS.normal, color: COLORS.secondary, fontSize: vs(12.5), textAlign: "justify", }}>To reduce the development of drug-resistant bacteria and maintain the effectiveness of PYLERA® and other antibacterial drugs, PYLERA® should be used only to treat or prevent infections that are proven or strongly suspected to be caused by bacteria.</Text>
                                    </View>
                                    : index === 1 ?
                                        <View style={{ flex: 1, backgroundColor: COLORS.white, borderRadius: 30, padding: 20, }}>

                                            <View style={{ flexDirection: "row" }}>
                                                <View style={{ flexDirection: "row" }}>
                                                    <Text style={{ fontFamily: FONTS.h1, color: COLORS.primary, fontSize: vs(22) }}>PYLERA</Text>
                                                    <Text style={{
                                                        fontFamily: FONTS.h1, color: COLORS.primary,
                                                        fontSize: vs(17),
                                                        lineHeight: 40,
                                                        textAlignVertical: 'top',
                                                    }}>®
                                                    </Text>
                                                </View>
                                                <View style={{ flexDirection: "row", }}>
                                                    <Text style={{ fontFamily: FONTS.h1, color: COLORS.primary, fontSize: vs(22) }}>Dose Education</Text>
                                                    <Text style={{
                                                        fontFamily: FONTS.h1, color: COLORS.primary,
                                                        fontSize: vs(13),
                                                        lineHeight: 40,
                                                        textAlignVertical: 'top',
                                                    }}>20
                                                    </Text>
                                                </View>
                                            </View>
                                            <Text style={{ fontFamily: FONTS.normal, color: COLORS.secondary, fontSize: vs(12.5), textAlign: "justify", marginTop: -8 }}>Administer three PYLERA® capsules 4 times a day (after meals and at bedtime) for 10 days. Administer PYLERA® with omeprazole 20 mg twice daily (after the morning and evening meals).</Text>
                                            <Text style={{ fontFamily: FONTS.bold, color: COLORS.secondary, fontSize: vs(13), textAlign: "justify", marginTop: 5 }}>Daily Dosing Schedule for PYLERA®</Text>
                                            <View style={styles.table}>
                                                <View style={styles.row}>
                                                    <Text style={[styles.cell, { backgroundColor: COLORS.primary, padding: 10, color: COLORS.white }]}>Time of dose</Text>
                                                    <Text style={[styles.cell, { backgroundColor: COLORS.white }]}>Time of dose Number of capsules of PLYERA®</Text>
                                                    <Text style={[styles.cell, { backgroundColor: COLORS.primary, padding: 5, color: COLORS.white }]}>Number of capsules of OMEPRAZOLE® 20 mg</Text>
                                                </View>
                                                <View style={[styles.row, { borderBottomWidth: .8, borderBottomColor: COLORS.primary }]}>
                                                    <Text style={styles.cell}>After morning meal</Text>
                                                    <Text style={styles.cell}>3</Text>
                                                    <Text style={styles.cell}>1</Text>
                                                </View>
                                                <View style={[styles.row, { borderBottomWidth: .8, borderBottomColor: COLORS.primary }]}>
                                                    <Text style={styles.cell}>After lunch</Text>
                                                    <Text style={styles.cell}>3</Text>
                                                    <Text style={styles.cell}>0</Text>
                                                </View>
                                                <View style={[styles.row, { borderBottomWidth: .8, borderBottomColor: COLORS.primary }]}>
                                                    <Text style={styles.cell}>After evening meal</Text>
                                                    <Text style={styles.cell}>3</Text>
                                                    <Text style={styles.cell}>1</Text>
                                                </View>
                                                <View style={[styles.row, { borderBottomWidth: .8, borderBottomColor: COLORS.primary }]}>
                                                    <Text style={styles.cell}>At bedtime</Text>
                                                    <Text style={styles.cell}>3</Text>
                                                    <Text style={styles.cell}>0</Text>
                                                </View>
                                            </View>
                                            <Text style={{ fontFamily: FONTS.normal, color: COLORS.secondary, fontSize: vs(12.5), textAlign: "justify", marginTop: 5 }}>Patients are instructed to swallow the PYLERA® capsules whole with a full glass of water (8 ounces). Ingestion of adequate amounts of fluid, particularly with the bedtime dose, is recommended to reduce the risk of esophageal irritation and ulceration by tetracycline hydrochloride.</Text>
                                            <Text style={{ fontFamily: FONTS.bold, color: COLORS.secondary, fontSize: vs(13), textAlign: "justify", marginTop: 5 }}>Daily Dosing Schedule for PYLERA®</Text>
                                            <Text style={{ fontFamily: FONTS.normal, color: COLORS.secondary, fontSize: vs(12.5), textAlign: "justify", marginTop: -5 }}>If a dose is missed, patients should continue the normal dosing schedule until medication is gone. Patients should not take double doses. If more than 4 doses are missed, the prescriber should be contacted.</Text>
                                        </View>
                                        : index === 2 ?
                                            <View style={{ flex: 1, backgroundColor: COLORS.white, borderRadius: 30, padding: 20, }}>
                                                <Image source={ICONS.events} style={{ width: scale(250), height: vs(190), resizeMode: "contain", alignSelf: "center" }} />
                                                <View style={{ flexDirection: "column" }}>
                                                    <View style={{ flexDirection: "row" }}>
                                                        <Text style={{ fontFamily: FONTS.h1, color: COLORS.primary, fontSize: vs(22) }}>PYLERA</Text>
                                                        <Text style={{
                                                            fontFamily: FONTS.h1, color: COLORS.primary,
                                                            fontSize: vs(17),
                                                            lineHeight: 40,
                                                            textAlignVertical: 'top',
                                                        }}>®
                                                        </Text>
                                                    </View>
                                                    <View style={{ flexDirection: "row", marginTop: -20 }}>
                                                        <Text style={{ fontFamily: FONTS.h1, color: COLORS.primary, fontSize: vs(22) }}>Adverse Events</Text>
                                                        <Text style={{
                                                            fontFamily: FONTS.h1, color: COLORS.primary,
                                                            fontSize: vs(13),
                                                            lineHeight: 40,
                                                            textAlignVertical: 'top',
                                                        }}>20
                                                        </Text>
                                                    </View>
                                                </View>
                                                <Text style={{ fontFamily: FONTS.normal, color: COLORS.secondary, fontSize: vs(12.5), textAlign: "justify", }}>Most frequently reported adverse reactions (≥5%):</Text>
                                                <Text style={{ fontFamily: FONTS.normal, color: COLORS.secondary, fontSize: vs(12.5), textAlign: "justify", }}><Text style={{ color: COLORS.appgreen }}>•</Text> abnormal feces</Text>
                                                <Text style={{ fontFamily: FONTS.normal, color: COLORS.secondary, fontSize: vs(12.5), textAlign: "justify", }}><Text style={{ color: COLORS.appgreen }}>•</Text> diarrhea</Text>
                                                <Text style={{ fontFamily: FONTS.normal, color: COLORS.secondary, fontSize: vs(12.5), textAlign: "justify", }}><Text style={{ color: COLORS.appgreen }}>•</Text> nausea</Text>
                                                <Text style={{ fontFamily: FONTS.normal, color: COLORS.secondary, fontSize: vs(12.5), textAlign: "justify", }}><Text style={{ color: COLORS.appgreen }}>•</Text> headache</Text>
                                            </View>
                                            : index === 3 ?
                                                <View style={{ flex: 1, backgroundColor: COLORS.white, borderRadius: 30, padding: 20, }}>
                                                    <Image source={ICONS.information} style={{ width: scale(160), height: vs(110), resizeMode: "contain", alignSelf: "center" }} />
                                                    <View style={{ flexDirection: "column" }}>
                                                        <View style={{ flexDirection: "row" }}>
                                                            <Text style={{ fontFamily: FONTS.h1, color: COLORS.primary, fontSize: vs(22) }}>PYLERA</Text>
                                                            <Text style={{
                                                                fontFamily: FONTS.h1, color: COLORS.primary,
                                                                fontSize: vs(17),
                                                                lineHeight: 40,
                                                                textAlignVertical: 'top',
                                                            }}>®
                                                            </Text>
                                                            <Text style={{ fontFamily: FONTS.h1, color: COLORS.primary, fontSize: vs(22) }}>Patient</Text>

                                                        </View>
                                                        <View style={{ flexDirection: "row", marginTop: -20 }}>
                                                            <Text style={{ fontFamily: FONTS.h1, color: COLORS.primary, fontSize: vs(22) }}>Counseling Information</Text>
                                                            <Text style={{
                                                                fontFamily: FONTS.h1, color: COLORS.primary,
                                                                fontSize: vs(13),
                                                                lineHeight: 40,
                                                                textAlignVertical: 'top',
                                                            }}>20
                                                            </Text>
                                                        </View>
                                                    </View>
                                                    <Text style={{ fontFamily: FONTS.bold, color: COLORS.secondary, fontSize: vs(13), textAlign: "justify", marginTop: -5 }}>Lactation:</Text>
                                                    <Text style={{ fontFamily: FONTS.normal, color: COLORS.secondary, fontSize: vs(12.5), textAlign: "justify", marginTop: -10 }}>Advise the lactating women to pump and discard their milk during treatment with PYLERA and for 2 days after the therapy ends.</Text>
                                                    <Text style={{ fontFamily: FONTS.bold, color: COLORS.secondary, fontSize: vs(13.5), textAlign: "justify", marginTop: -5 }}>Hypersensitivity:</Text>
                                                    <Text style={{ fontFamily: FONTS.normal, color: COLORS.secondary, fontSize: vs(12.5), textAlign: "justify", marginTop: -10 }}>Inform patients that PYLERA may cause allergic reactions and to discontinue PYLERA® at the first sign of urticaria, erythematous rash, flushing, and fever or other symptoms of an allergic reaction</Text>
                                                    <Text style={{ fontFamily: FONTS.bold, color: COLORS.secondary, fontSize: vs(13.5), textAlign: "justify", marginTop: -5 }}>Central nervous system effects:</Text>
                                                    <Text style={{ fontFamily: FONTS.normal, color: COLORS.secondary, fontSize: vs(12.5), textAlign: "justify", marginTop: -10 }}>Inform patients of the risk of central and peripheral nervous system effects with PYELRA® and to discontinue PYLERA® and report immediately to their health-care provider if any neurologic symptoms occur.</Text>
                                                    <Text style={{ fontFamily: FONTS.bold, color: COLORS.secondary, fontSize: vs(13.5), textAlign: "justify", marginTop: -5 }}>Photosensitivity:</Text>
                                                    <Text style={{ fontFamily: FONTS.normal, color: COLORS.secondary, fontSize: vs(12.5), textAlign: "justify", marginTop: -10 }}>Avoid exposure to sun or sun lamps while taking PYLERA®.</Text>
                                                </View>
                                                : index === 4 ?
                                                    <View style={{ flex: 1, backgroundColor: COLORS.white, borderRadius: 30, padding: 20, }}>
                                                        <Pressable onPress={() => navigation.goBack()} style={{ alignSelf: "flex-end", marginBottom: -20 }}><Text style={{ fontFamily: FONTS.semibold, color: COLORS.primary, fontSize: vs(13) }}>Skip</Text></Pressable>
                                                        <View style={{ flexDirection: "column" }}>
                                                            <View style={{ flexDirection: "row" }}>
                                                                <Text style={{ fontFamily: FONTS.h1, color: COLORS.primary, fontSize: vs(22) }}>PYLERA</Text>
                                                                <Text style={{
                                                                    fontFamily: FONTS.h1, color: COLORS.primary,
                                                                    fontSize: vs(17),
                                                                    lineHeight: 40,
                                                                    textAlignVertical: 'top',
                                                                }}>®
                                                                </Text>
                                                                <Text style={{ fontFamily: FONTS.h1, color: COLORS.primary, fontSize: vs(22) }}>Warning</Text>

                                                            </View>
                                                            <View style={{ flexDirection: "row", marginTop: -20 }}>
                                                                <Text style={{ fontFamily: FONTS.h1, color: COLORS.primary, fontSize: vs(22) }}>& Precautions</Text>
                                                                <Text style={{
                                                                    fontFamily: FONTS.h1, color: COLORS.primary,
                                                                    fontSize: vs(13),
                                                                    lineHeight: 40,
                                                                    textAlignVertical: 'top',
                                                                }}>20
                                                                </Text>
                                                            </View>
                                                        </View>
                                                        <Text style={{ fontFamily: FONTS.bold, color: COLORS.secondary, fontSize: vs(13), textAlign: "justify", marginTop: -5 }}>Darkening of the Tongue and/or Black Stool</Text>
                                                        <Text style={{ fontFamily: FONTS.normal, color: COLORS.secondary, fontSize: vs(12.5), textAlign: "justify", marginTop: -8 }}>Bismuth subcitrate potassium may cause temporary and harmless darkening of the tongue and/or black stools, generally reversible within several days after treatment is stopped.</Text>
                                                        <View style={{ flexDirection: "column" }}>
                                                            <View style={{ flexDirection: "row" }}>
                                                                <Text style={{ fontFamily: FONTS.h1, color: COLORS.primary, fontSize: vs(22) }}>PYLERA</Text>
                                                                <Text style={{
                                                                    fontFamily: FONTS.h1, color: COLORS.primary,
                                                                    fontSize: vs(17),
                                                                    lineHeight: 40,
                                                                    textAlignVertical: 'top',
                                                                }}>®
                                                                </Text>
                                                                <Text style={{ fontFamily: FONTS.h1, color: COLORS.primary, fontSize: vs(22) }}>Drug</Text>

                                                            </View>
                                                            <View style={{ flexDirection: "row", marginTop: -20 }}>
                                                                <Text style={{ fontFamily: FONTS.h1, color: COLORS.primary, fontSize: vs(22) }}>Interactions</Text>
                                                                <Text style={{
                                                                    fontFamily: FONTS.h1, color: COLORS.primary,
                                                                    fontSize: vs(13),
                                                                    lineHeight: 40,
                                                                    textAlignVertical: 'top',
                                                                }}>20
                                                                </Text>
                                                            </View>
                                                        </View>
                                                        <Text style={{ fontFamily: FONTS.normal, color: COLORS.secondary, fontSize: vs(12.5), textAlign: "justify", marginTop: -8 }}>Advise patients to report to their health-care provider the use of any other medications while taking PYLERA®. The administration of any of the following drugs with PYLERA® may result in clinically significant adverse reactions or insufficient drug efficacies:</Text>
                                                        <Text style={{ fontFamily: FONTS.normal, color: COLORS.secondary, fontSize: vs(12.5), textAlign: "justify", marginTop: -8 }}><Text style={{ color: COLORS.appgreen }}>•</Text> Methoxyflurane</Text>
                                                        <Text style={{ fontFamily: FONTS.normal, color: COLORS.secondary, fontSize: vs(12.5), textAlign: "justify", marginTop: -8 }}><Text style={{ color: COLORS.appgreen }}>•</Text> Disulfiram</Text>
                                                        <Text style={{ fontFamily: FONTS.normal, color: COLORS.secondary, fontSize: vs(12.5), textAlign: "justify", marginTop: -8 }}><Text style={{ color: COLORS.appgreen }}>•</Text> Alcohol</Text>
                                                        <Text style={{ fontFamily: FONTS.normal, color: COLORS.secondary, fontSize: vs(12.5), textAlign: "justify", marginTop: -8 }}><Text style={{ color: COLORS.appgreen }}>•</Text> Oral Contraceptives</Text>
                                                        <Text style={{ fontFamily: FONTS.normal, color: COLORS.secondary, fontSize: vs(12.5), textAlign: "justify", marginTop: -8 }}><Text style={{ color: COLORS.appgreen }}>•</Text> Anticoagulants</Text>
                                                        <Text style={{ fontFamily: FONTS.normal, color: COLORS.secondary, fontSize: vs(12.5), textAlign: "justify", marginTop: -8 }}><Text style={{ color: COLORS.appgreen }}>•</Text> Lithium</Text>
                                                        <Text style={{ fontFamily: FONTS.normal, color: COLORS.secondary, fontSize: vs(12.5), textAlign: "justify", marginTop: -8 }}><Text style={{ color: COLORS.appgreen }}>•</Text> Antacids, Multivitamins or Dairy Products</Text>
                                                        <Text style={{ fontFamily: FONTS.normal, color: COLORS.secondary, fontSize: vs(12.5), textAlign: "justify", marginTop: -8 }}><Text style={{ color: COLORS.appgreen }}>•</Text> Busuilfan</Text>
                                                        <Text style={{ fontFamily: FONTS.normal, color: COLORS.secondary, fontSize: vs(12.5), textAlign: "justify", marginTop: -8 }}><Text style={{ color: COLORS.appgreen }}>•</Text> CYP inducers and CYP inhibitors</Text>
                                                    </View>
                                                    : index === 5 ?
                                                        <View style={{ flex: 1, backgroundColor: COLORS.white, borderRadius: 30, padding: 20, }}>
                                                            <Pressable onPress={() => navigation.goBack()} style={{ alignSelf: "flex-end", marginBottom: -40 }}><Text style={{ fontFamily: FONTS.semibold, color: COLORS.primary, fontSize: vs(13) }}>Skip</Text></Pressable>

                                                            <Image source={ICONS.caution2} style={{ width: scale(170), height: vs(180), resizeMode: "contain", alignSelf: "flex-start", marginLeft: -25 }} />
                                                            <View style={{ flexDirection: "column" }}>
                                                                <View style={{ flexDirection: "row" }}>
                                                                    <Text style={{ fontFamily: FONTS.h1, color: COLORS.primary, fontSize: vs(22) }}>PYLERA</Text>
                                                                    <Text style={{
                                                                        fontFamily: FONTS.h1, color: COLORS.primary,
                                                                        fontSize: vs(17),
                                                                        lineHeight: 40,
                                                                        textAlignVertical: 'top',
                                                                    }}>®
                                                                    </Text>
                                                                </View>
                                                                <View style={{ flexDirection: "row", marginTop: -20 }}>
                                                                    <Text style={{ fontFamily: FONTS.h1, color: COLORS.primary, fontSize: vs(22) }}>Contraindications</Text>
                                                                    <Text style={{
                                                                        fontFamily: FONTS.h1, color: COLORS.primary,
                                                                        fontSize: vs(13),
                                                                        lineHeight: 40,
                                                                        textAlignVertical: 'top',
                                                                    }}>20
                                                                    </Text>
                                                                </View>
                                                            </View>
                                                            <Text style={{ fontFamily: FONTS.bold, color: COLORS.secondary, fontSize: vs(13), textAlign: "justify", marginTop: -5 }}><Text style={{ color: COLORS.primary }}>• </Text>Alcohol</Text>
                                                            <Text style={{ fontFamily: FONTS.normal, color: COLORS.secondary, fontSize: vs(12.5), textAlign: "justify", marginTop: -8 }}>Abdominal cramps, nausea, vomiting, headaches, and flushing can occur; do not consume during therapy and for at least 3 days afterwards.</Text>

                                                            <Text style={{ fontFamily: FONTS.semibold, color: COLORS.secondary, fontSize: vs(12.5), textAlign: "justify", marginTop: 10 }}><Text style={{ color: COLORS.appgreen }}>•</Text> Antacids,</Text>
                                                            <Text style={{ fontFamily: FONTS.semibold, color: COLORS.secondary, fontSize: vs(12.5), textAlign: "justify", marginTop: -8 }}><Text style={{ color: COLORS.appgreen }}>•</Text> Multivitamins,</Text>
                                                            <Text style={{ fontFamily: FONTS.semibold, color: COLORS.secondary, fontSize: vs(12.5), textAlign: "justify", marginTop: -8 }}><Text style={{ color: COLORS.appgreen }}>•</Text> Dairy Products</Text>
                                                            <Text style={{ fontFamily: FONTS.normal, color: COLORS.secondary, fontSize: vs(12.5), textAlign: "justify", }}>These products should not be consumed concomitantly with PYLERA®</Text>
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
                        </View></>
                }
            </View >
        </View >
    );
};

const styles = ScaledSheet.create({
    table: {
        borderColor: '#000',
        marginTop: '12@vs'
    },
    row: {
        flexDirection: 'row',
        alignItems: "center",
    },
    cell: {
        flex: 1,
        padding: '2@vs',
        textAlign: 'center',
        fontFamily: FONTS.bold,
        fontSize: '8@vs',
        color: COLORS.secondary,
    },
});

export default Medication;