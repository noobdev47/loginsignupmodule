import React, { Component } from 'react';
import { Grid, Button, Header, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class EntryDashboard extends Component {
    render() {
        return (
            <Grid className='entryDash' textAlign='center' verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' color='teal' textAlign='center'>
                        Entry Authorization Module
                    </Header>
                    <Button as={Link} to='/login' inverted size='huge' color='grey'>Get Started <Icon name='right arrow' inverted/></Button>
                </Grid.Column>
            </Grid>
        );
    }
}

export default EntryDashboard;