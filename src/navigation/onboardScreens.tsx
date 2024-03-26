import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/app/components/home';
import Onboarding from '../screens/boarding/components/onboarding';
import GetStarted from '../screens/boarding/components/getStarted';
import Splash from '../screens/boarding/components/splash';
import BottomTabs from './bottomTab';

export type AppStackParams = {
    Home: undefined;
    Discover: undefined;
    Treatment: undefined;
    Medication: undefined;
    Dose: undefined;
}

const horizontalAnimation = {
    headerShown: false,
    cardStyleInterpolator: ({ current, layouts }: any) => {
        return {
            cardStyle: {
                transform: [
                    {
                        translateX: current.progress.interpolate({
                            inputRange: [0, 1],
                            outputRange: [layouts.screen.width, 0],
                        }),
                    },
                ],
            },
        };
    },
};

const OnboardStackScreens = createStackNavigator<AppStackParams>();

const onboardScreens = () => {
    return (
        <OnboardStackScreens.Navigator
            screenOptions={horizontalAnimation}
        >
            <OnboardStackScreens.Screen name="Home" component={Onboarding} />
        </OnboardStackScreens.Navigator>
    )
}

export default onboardScreens;

const styles = StyleSheet.create({})