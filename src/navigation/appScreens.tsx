import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/app/components/home';
import Onboarding from '../screens/boarding/components/onboarding';
import GetStarted from '../screens/boarding/components/getStarted';
import Splash from '../screens/boarding/components/splash';
import BottomTabs from './bottomTab';

export type AppStackParams = {
    App: undefined;
    Home: undefined;
    Discover: undefined;
    Treatment: undefined;
    Medication: undefined;
    DoseScreens: undefined;
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

const AppStackScreens = createStackNavigator<AppStackParams>();

const AppScreens = () => {
    return (
        <AppStackScreens.Navigator
            screenOptions={horizontalAnimation}
        >
            <AppStackScreens.Screen name="App" component={BottomTabs} />
        </AppStackScreens.Navigator>
    )
}

export default AppScreens;

const styles = StyleSheet.create({})