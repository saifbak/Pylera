import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import moment from 'moment';
import { COLORS, FONTS } from '../../utils/theme';
import { scale, verticalScale } from 'react-native-size-matters';

interface CountdownProps {
    savedTime: string;
}

const Countdown: React.FC<CountdownProps> = ({ savedTime }) => {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(true);

    useEffect(() => {
        if (isActive) {
            const timeDifference = calculateTimeDifference(savedTime);

            if (timeDifference.asSeconds() <= 0) {
                setIsActive(false);
                return;
            }

            const intervalId = setInterval(() => {
                const newTimeDifference = calculateTimeDifference(savedTime);
                setHours(newTimeDifference.hours());
                setMinutes(newTimeDifference.minutes());
                setSeconds(newTimeDifference.seconds());

                if (newTimeDifference.asSeconds() <= 0) {
                    setIsActive(false);
                }
            }, 1000);

            return () => clearInterval(intervalId);
        }
    }, [isActive, savedTime]);

    // console.log('calculate time', calculateTimeDifference(savedTime));

    useEffect(() => {
        if (savedTime) {
            setIsActive(true);
        }
    }, [savedTime]);

    const getTime = () => {
        if (hours > 0 || minutes > 0 || seconds > 0) {
            return (
                <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "center", flex: 1, }}>
                    <Text style={{ fontFamily: FONTS.bold, color: COLORS.white, fontSize: verticalScale(28) }}>{hours.toString().padStart(2, '0')}</Text>
                    <View style={{ marginHorizontal: scale(8), flexDirection: "column", }} >
                        <View style={{ width: 7, height: 7, backgroundColor: COLORS.primary, borderRadius: 50, marginBottom: scale(2) }} />
                        <View style={{ width: 7, height: 7, backgroundColor: COLORS.primary, borderRadius: 50 }} />
                    </View>
                    <Text style={{ fontFamily: FONTS.bold, color: COLORS.white, fontSize: verticalScale(28) }}>{minutes.toString().padStart(2, '0')}</Text>
                    <View style={{ marginHorizontal: scale(8), flexDirection: "column" }} >
                        <View style={{ width: 7, height: 7, backgroundColor: COLORS.primary, borderRadius: 50, marginBottom: scale(2) }} />
                        <View style={{ width: 7, height: 7, backgroundColor: COLORS.primary, borderRadius: 50 }} />
                    </View>
                    <Text style={{ fontFamily: FONTS.bold, color: COLORS.white, fontSize: verticalScale(28) }}>{seconds.toString().padStart(2, '0')}</Text>
                </View>
            )

            // `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        } else {
            return (
                <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "center", flex: 1, }}>
                    <Text style={{ fontFamily: FONTS.bold, color: COLORS.white, fontSize: verticalScale(28) }}>{'00'}</Text>
                    <View style={{ marginHorizontal: scale(8), flexDirection: "column", }} >
                        <View style={{ width: 7, height: 7, backgroundColor: COLORS.primary, borderRadius: 50, marginBottom: scale(2) }} />
                        <View style={{ width: 7, height: 7, backgroundColor: COLORS.primary, borderRadius: 50 }} />
                    </View>
                    <Text style={{ fontFamily: FONTS.bold, color: COLORS.white, fontSize: verticalScale(28) }}>{'00'}</Text>
                    <View style={{ marginHorizontal: scale(8), flexDirection: "column" }} >
                        <View style={{ width: 7, height: 7, backgroundColor: COLORS.primary, borderRadius: 50, marginBottom: scale(2) }} />
                        <View style={{ width: 7, height: 7, backgroundColor: COLORS.primary, borderRadius: 50 }} />
                    </View>
                    <Text style={{ fontFamily: FONTS.bold, color: COLORS.white, fontSize: verticalScale(28) }}>{'00'}</Text>
                </View>
            );
        }
    }

    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
            <Text style={{ fontFamily: FONTS.bold, color: COLORS.white, fontSize: verticalScale(28) }}>{getTime()}</Text>
        </View>
    );
};

const calculateTimeDifference = (savedTime: string): moment.Duration => {
    const saved = moment(savedTime, 'h:mm A');
    const now = moment();
    const duration = moment.duration(saved.diff(now));
    return duration;
};

export default Countdown;