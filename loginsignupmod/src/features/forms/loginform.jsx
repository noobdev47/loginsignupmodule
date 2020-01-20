import React, { Component } from 'react';
import { Grid, Header, Form, Segment, Button, Message } from 'semantic-ui-react';
import { NavLink, Link } from 'react-router-dom';

class loginform extends Component {
    render() {
        return (
            <Grid className='form1' textAlign='center' verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='teal' textAlign='center'>
                    Log-in to your Account
                </Header>
                <Form size='large'>
                    <Segment raised>
                        <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail Address'/>
                        <Form.Input fluid icon='lock' iconPosition='left' placeholder='Password' type='password'/>
                        <Button color='teal' fluid size='large' content='Login'/>
                    </Segment>
                </Form>
                <Message>
                    Can't Login?<Link as={NavLink} to='/signup'> Signup</Link>
                </Message>
                </Grid.Column>
            </Grid>
        );
    }
}

export default loginform;