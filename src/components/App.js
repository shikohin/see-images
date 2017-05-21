import 'bootstrap/dist/css/bootstrap.css';
import '../custom-styles.scss';

import React, { Component } from 'react';
import Search from './Search/Search';

import { Container, Row } from 'reactstrap';

class App extends Component
{
    render() {
        return (
            <Container>
                <Row>
                    <Search/>
                </Row>
            </Container>
        )
    }
}

export default App;