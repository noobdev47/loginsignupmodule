import React, { Component, Fragment } from 'react';
import { Container } from 'semantic-ui-react';
import EntryDashboard from '../../features/startDashboard/EntryDashboard';
import loginform from '../../features/forms/loginform';
import { Route } from 'react-router-dom';
import signupform from '../../features/forms/signupform';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Route exact path='/' component={EntryDashboard} />
        <Route path='/(.+)' render={() => (
          <Fragment>
            <Container className='entrydash'>
              <Route exact path='/' component={EntryDashboard} />
              <Route path='/login' component={loginform} />
              <Route path='/signup' component={signupform} />
            </Container>
          </Fragment>
        )} />
      </Fragment>

    );
  }
}

export default App;
