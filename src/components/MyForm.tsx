import * as React from 'react';
import { Control, Fieldset, Form } from 'react-redux-form';

export interface Timestamp {
    date: string;
    time: string;
}

export interface FormSubmission {
    data: {
        timestamp: Timestamp
    }

}

class DatetimeControl extends React.Component {
    render() {
        return (
            <Fieldset model=".timestamp">
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
                <DatetimeControl />
                <button>Submit!</button>
            </Form>
        );
    }
}
