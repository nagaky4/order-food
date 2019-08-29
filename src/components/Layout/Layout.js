import React, { Component } from 'react'

import { BrowserRouter as Router } from 'react-router-dom';


import Nav from '../Nav/Nav';
import BillModal from '../UI/Modal/BillModal';




class Layout extends Component {
    render() {
        return (
            <>
                <Router>
                    <Nav />
                    <BillModal />
                </Router>
            </>
        )
    }
}

export default Layout
