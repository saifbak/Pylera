import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Splash from '../screens/boarding/components/splash'
import AppScreens from './appScreens'
import OnBoardScreens from './onboardScreens'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { AuthContext } from '../config/context'

export default () => {
    const [busy, setBusy] = useState<boolean>(false);
    const [isAuth, setIsAuth] = useState<boolean>(false);


    const [isLoading, setIsLoading] = useState<boolean>(true);
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
        };
    }, []);

    useEffect(() => {
        // AsyncStorage.clear();
        AsyncStorage.getItem('@onboarding').then((value: any) => {
            setIsLoading(true);
            if (value) {
                // console.log('onboarding', value)
                setOnboarding(value);
            }
            setTimeout(() => {
                setIsLoading(false);
            }, 3000);
        });
    }, []);

    if (isLoading) {
        return <Splash />;
    }

    return (
        <AuthContext.Provider value={authContext}>
            <NavigationContainer>
                {onboarding === '' ?
                    <OnBoardScreens />
                    : <AppScreens />
                }
            </NavigationContainer>
        </AuthContext.Provider>
    )
}

const styles = StyleSheet.create({})