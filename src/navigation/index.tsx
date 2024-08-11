import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Splash from '../screens/boarding/components/splash'
import AppScreens from './appScreens'
import OnBoardScreens from './onboardScreens'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { AuthContext } from '../config/context'
import GetStarted from '../screens/boarding/components/getStarted'

export default () => {
    const [busy, setBusy] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
    const [onboarding, setOnboarding] = useState<string>('');

    useEffect(() => {
        setBusy(true)
        setTimeout(() => {
            setBusy(false);
        }, 2000)

    }, []);


    const authContext = useMemo(() => {
        return {
            onboard: () => {
                setOnboarding('true');
                AsyncStorage.setItem('@onboarding', 'asdf');
            },
            getStarted: () => {
                setSelectedLanguage('true');
                AsyncStorage.setItem('@selectedLanguage', 'asdf');
            },
        };
    }, []);

    useEffect(() => {

        // AsyncStorage.clear();

        AsyncStorage.multiGet(['@onboarding', '@selectedLanguage']).then((values) => {
            const onboardingValue = values[0][1];
            const selectedLanguageValue = values[1][1];
            setOnboarding(onboardingValue || '');
            setSelectedLanguage(selectedLanguageValue);
            setTimeout(() => {
                setIsLoading(false);
            }, 3000);
        });

    }, []);

    if (isLoading) {
        return <Splash />;
    };

    return (
        <AuthContext.Provider value={authContext}>
            <NavigationContainer>
                {
                    !selectedLanguage ?
                        <GetStarted /> :
                        onboarding === '' ?
                            <OnBoardScreens />
                            : <AppScreens />
                }
            </NavigationContainer>
        </AuthContext.Provider>
    )
}

const styles = StyleSheet.create({})