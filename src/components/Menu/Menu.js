import React, { Component } from 'react'

import classes from './Menu.module.css';

import data from '../DB/dataFake'
import Book from '../Booked/Book';
import OneItem from './OneItem';


class Menu extends Component {


    loadData = () => {
        return data.map(value => {
            return <OneItem value={value} key={value.id} />
        })
    }


    render() {
        return (
            <div className="row mt-5" >
                <div className={"col-8 " + classes.MenuContainer}  >
                    <div className="row">
                        {this.loadData()}
                    </div>
                </div>
                <div className="col-4"  >
                    <Book />
                </div>
            </div >
        )
    }
}

export default Menu
