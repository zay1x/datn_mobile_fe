/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable quotes */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable prettier/prettier */
/**
 * @format
 */

import React from 'react';
import { AppRegistry, LogBox } from 'react-native';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from "./src/redux/reducers";
import App from './src/components/App/App.jsx';
import { name as appName } from './app.json';
import { Provider as ReduxProvider } from 'react-redux';
import { Provider as AntProvider } from "@ant-design/react-native";
import enUS from '@ant-design/react-native/lib/locale-provider/en_US';
import Loading from "./src/components/Loading";

LogBox.ignoreAllLogs();

const render = () => {
    let store = createStore(rootReducer, {}, applyMiddleware(thunk));

    return <ReduxProvider store={store}>
        <AntProvider locale={enUS}>
            <Loading>
                <App />
            </Loading>
        </AntProvider>
    </ReduxProvider>;
}

AppRegistry.registerComponent(appName, () => render);
