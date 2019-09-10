import React, { Component } from 'react'

import Book from '../Booked/Book';
import Dish from './Dish/Dish';
import classes from './Menu.module.css';

import Controller from '../../Controlller/Controller';
import Spiner from '../UI/spinner/Spiner';


class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listFood: [],
            currentPage: 1,
            foodsPerPage: 3,
            loading: false,
            err: null
        }
        this._isMounted = false;
    }

    loadData = async () => {
        this.setState({
            loading: true
        })
        try {
            var foods = await Controller.getFoods();
            let indexOfFoods = ''
            if (foods) {
                for (var i in foods.data) {
                    indexOfFoods = i
                }
                const data = foods.data[indexOfFoods];
                if (data) {
                    this._isMounted = true && this.setState({
                        listFood: data,
                        loading: false
                    })
                }
            }
        } catch (error) {

            this.setState({
                loading: false,
                err: error
            })
        }
    }

    renderFood = (currentFoods) => {
        return currentFoods.map(value => {
            return <Dish value={value} key={value.id} />
        })
    }

    componentDidMount() {
        this._isMounted = true && this.loadData();
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    onHandleChangePage = (prev, choose, next, first, numOfPage) => {
        if (prev) {
            let page = this.state.currentPage - 1;
            if (page !== first)
                this.setState({
                    currentPage: page
                })
        }
        if (next) {
            let page = this.state.currentPage + 1;
            if (page !== numOfPage + 1)
                this.setState({
                    currentPage: page
                })
        }
        if (choose) {
            this.setState({
                currentPage: choose
            })
        }

    }
    renderPageItem = (numOfPage, first, last) => {
        let listNum = [];
        for (let i = 0; i < numOfPage; i++) {
            let oneItem = (
                <li className="page-item" key={i + 1}>
                    <button
                        className={this.state.currentPage === (i + 1) ? classes.PageActive + " page-link" : " page-link"}
                        onClick={() => this.onHandleChangePage(false, i + 1, false, first, last)} >{i + 1}</button>
                </li >
            )
            listNum.push(oneItem);
        }
        return listNum.map(value => value);
    }

    render() {
        const { listFood, currentPage, foodsPerPage } = this.state;
        const indexOfLastPage = currentPage * foodsPerPage;
        const indexOfFirstPage = indexOfLastPage - foodsPerPage;
        const currentFoods = listFood.slice(indexOfFirstPage, indexOfLastPage);
        const numOfPage = Math.ceil(listFood.length / foodsPerPage);

        let sumary = (
            <div className="row" >
                <div className={"col-sm-8 "}  >
                    <div className="row">
                        {this.renderFood(currentFoods)}
                    </div>
                </div>
                <div className="col-sm-4"  >
                    <Book />
                </div>

                {/* pagination */}
                <nav aria-label="Page navigation example" className="mt-4" style={{ margin: 'auto' }}>
                    <ul className="pagination">
                        <li className="page-item">
                            <button
                                className="page-link"
                                aria-label="Previous"
                                onClick={() => this.onHandleChangePage(true, null, false, indexOfFirstPage, numOfPage)}>
                                <span aria-hidden="true">&laquo;</span>
                            </button>
                        </li>

                        {this.renderPageItem(numOfPage, indexOfFirstPage, numOfPage)}

                        <li className="page-item">
                            <button
                                className="page-link"
                                aria-label="Next"
                                onClick={() => this.onHandleChangePage(false, null, true, indexOfFirstPage, numOfPage)}>
                                <span aria-hidden="true">&raquo;</span>
                            </button>
                        </li>
                    </ul>
                </nav>
            </div >
        )
        if (this.state.loading) {
            sumary = <Spiner />;
        }
        if (!this.state.loading && this.state.err) {
            sumary = <h1>Somthing is Wrong !</h1>
        }

        return sumary;
    }
}

export default Menu
