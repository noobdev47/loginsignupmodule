import React, { Component } from 'react';
import { Grid, Header, Form, Segment, Button } from 'semantic-ui-react';

class signupform extends Component {
    render() {
        return (
            <Grid className='form1' textAlign='center' verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='teal' textAlign='center'>
                    Create new Account
                </Header>
                <Form size='large'>
                    <Segment raised>
                        <Form.Input fluid icon='mail' iconPosition='left' placeholder='E-mail Address'/>
                        <Form.Input fluid icon='user' iconPosition='left' placeholder='Username'/>

                        <Form.Input fluid icon='lock' iconPosition='left' placeholder='Password' type='password'/>
                        <Form.Input fluid icon='lock' iconPosition='left' placeholder='Confirm Password' type='password'/>

                        <Button color='teal' fluid size='large' content='Signup'/>
                    </Segment>
                </Form>
                </Grid.Column>
            </Grid>
        );
    }
}

export default signupform;