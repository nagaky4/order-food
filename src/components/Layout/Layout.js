import React, { Component } from 'react'



import BillModal from '../UI/Modal/BillModal';
import Aux from '../HOC/Auxiliary';
import Nav from '../Nav/Nav';




class Layout extends Component {
    render() {
        return (
            <Aux>
                <Nav />
                <BillModal />
            </Aux>
        )
    }
}

export default Layout
