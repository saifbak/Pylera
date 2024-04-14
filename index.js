/**
 * @format
 */
import React from 'react';
import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';

import i18n from './src/shared/utils/i18next';

import { I18nextProvider } from 'react-i18next';

const Root = () => (
  <I18nextProvider i18n={i18n}>
    <App />
  </I18nextProvider>
);


AppRegistry.registerComponent(appName, () => Root);
