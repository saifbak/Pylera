/**
 * @format
 */
import React from 'react';
import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';

import i18n from './src/shared/utils/i18next';

import { I18nextProvider } from 'react-i18next';

import PushNotification from 'react-native-push-notification';

// PushNotification.configure({
//   onRegister: function (token) {
//     console.log('TOKEN:', token);
//   },

//   onNotification: function (notification) {
//     console.log('NOTIFICATION:', notification);

//     notification.finish(PushNotificationIOS.FetchResult.NoData);
//   },

//   onPermissionRequest: function (status) {
//     console.log('PERMISSION:', status);
//   },

//   requestPermissions: true,
// });

const Root = () => (
  <I18nextProvider i18n={i18n}>
    <App />
  </I18nextProvider>
);


AppRegistry.registerComponent(appName, () => Root);
