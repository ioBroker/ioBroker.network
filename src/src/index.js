/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from '@sentry/browser';
import * as SentryIntegrations from '@sentry/integrations';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { SnackbarProvider } from 'notistack';
import './index.css';
import theme from '@iobroker/adapter-react/Theme';
import Utils from '@iobroker/adapter-react/Components/Utils';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { version } from '../package.json';

window.adapterName = 'network';
let themeName = Utils.getThemeName();

console.log(`iobroker.${window.adapterName}@${version} using theme "${themeName}"`);

function build() {
    return ReactDOM.render(
        <MuiThemeProvider theme={theme(themeName)}>
            <SnackbarProvider>
                <App
                    common={{}}
                    onThemeChange={_theme => {
                        themeName = _theme;
                        build();
                    }}
                />
            </SnackbarProvider>
        </MuiThemeProvider>,
        document.getElementById('root'),
    );
}

build();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
