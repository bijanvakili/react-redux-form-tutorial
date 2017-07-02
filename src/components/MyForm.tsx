import * as React from 'react';
import { Control, Fieldset, Form } from 'react-redux-form';

export interface Timestamp {
    date: string;
    time: string;
}

export const defaultTimestamp: Timestamp = {
    date: '',
    time: ''
};

export interface FormSubmission {
    data: {
        timestampBirth: Timestamp,
        timestampGraduation: Timestamp
    }
}

export interface DatetimeControlProps {
    label: string;
    model: string;
}

class DatetimeControl extends React.Component<DatetimeControlProps, undefined> {
    render() {
        return (
            <Fieldset model={this.props.model}>
                <label>{this.props.label}</label>
                <div>
                    <label>Date</label>
                    <Control.text model=".date" />
                </div>
                <div>
                    <label>Time</label>
                    <Control.text model=".time" />
                </div>
            </Fieldset>
        );
    }
}


export class MyForm extends React.Component {
    handleSubmit(val: FormSubmission) {
        console.log(val);
    }

    render() {
        return (
            <Form model="data" onSubmit={(val) => this.handleSubmit(val)}>

                <DatetimeControl model=".timestampBirth" label="Birth timestamp"/>
                <DatetimeControl model=".timestampGraduation" label="Graduation timestamp"/>

                <button>Submit!</button>
            </Form>
        );
    }
}
