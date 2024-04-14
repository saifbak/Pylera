import 'react-native-gesture-handler';
import { View, Text, I18nManager } from 'react-native'
import React, { useEffect } from 'react'

import AppContent from './navigation'
import i18next from '../src/shared/utils/i18next'
const App = () => {
    // useEffect(() => {
    //     console.log('languages in app.tsx', i18next.language)
    //     if (i18next.language === 'ar') {

    //         // Force right-to-left alignment for Arabic language
    //         I18nManager.forceRTL(true);
    //     } else {
    //         // Disable right-to-left alignment for other languages
    //         I18nManager.allowRTL(false);
    //         I18nManager.forceRTL(false);
    //     }
    // }, []);
    return (
        <AppContent />
    )
}

export default App