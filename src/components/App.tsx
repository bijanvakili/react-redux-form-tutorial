import * as React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { combineForms } from 'react-redux-form';

import { MyForm, FormSubmission } from './MyForm';


const initialData: FormSubmission = {
    data: {
        timestamp: {
            date: '',
            time: ''
        }
    }
};

interface Window { [key: string]: any }
const hasDevTools = (w: Window) =>
    w['__REDUX_DEVTOOLS_EXTENSION__'] && w['__REDUX_DEVTOOLS_EXTENSION__']();


const store = createStore(
    combineForms(initialData),
    hasDevTools(window)
);


export interface AppProps {
    compiler: string;
    framework: string;
}


export class App extends React.Component<AppProps, undefined> {
    render() {
        return (
            <Provider store={ store }>
                <MyForm />
            </Provider>
        );
    }
}
