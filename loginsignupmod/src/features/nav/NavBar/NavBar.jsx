import React, { Component } from 'react';
import { Menu, Container } from 'semantic-ui-react';

class NavBar extends Component {
    render() {
        return (
            <Menu className='navbar' inverted fixed="top">
                <Container>
                    <Menu.Item header>
                        Entry Authorization Mod
                    </Menu.Item>
                </Container>
            </Menu>
        );
    }
}

export default NavBar;