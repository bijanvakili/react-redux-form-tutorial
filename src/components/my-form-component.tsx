import * as React from 'react';
import { Control, Form } from 'react-redux-form';

interface Submission {
    name: string;
}


class MyForm extends React.Component {
    handleSubmit(val: Submission) {
        // Do anything you want with the form value
        console.log(val);
    }

    render() {
        return (
            <Form model="user" onSubmit={(val) => this.handleSubmit(val)}>
                <label>Your name?</label>
                <Control.text model=".name" />
                <button>Submit!</button>
            </Form>
        );
    }
}

// No need to connect()!
export default MyForm;
