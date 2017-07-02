import * as React from 'react';
import { Control, Form } from 'react-redux-form';

export interface TimestampSubmission {
    date: string;
    time: string;
}


export class MyForm extends React.Component {
    handleSubmit(val: TimestampSubmission) {
        console.log(val);
    }

    render() {
        return (
            <Form model="timestamp" onSubmit={(val) => this.handleSubmit(val)}>
                <div>
                    <label>Date</label>
                    <Control.text model=".date" />
                </div>
                <div>
                    <label>Time</label>
                    <Control.text model=".time" />
                </div>
                    <button>Submit!</button>
            </Form>
        );
    }
}
