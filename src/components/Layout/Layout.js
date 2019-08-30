import React, { Component } from 'react'

import { BrowserRouter as Router } from 'react-router-dom';


import Nav from '../Nav/Nav';
import BillModal from '../UI/Modal/BillModal';
import Aux from '../HOC/Auxiliary';




class Layout extends Component {
    render() {
        return (
            <Aux>
                <Router>
                    <Nav />
                    <BillModal />
                </Router>
            </Aux>
        )
    }
}

export default Layout
