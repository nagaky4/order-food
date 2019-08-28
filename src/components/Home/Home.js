import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isRedirect: false
        }
    }
    
    onRedirect = () => {
        this.setState({
            isRedirect: true
        })
    }

    render() {

        if (this.state.isRedirect === true) return <Redirect to='/menu' />
        else
            return (
                <div>
                    <div className="jumbotron">
                        <h1 className="display-3">Chào mừng bạn đến với quán ăn miền trung</h1>

                        <hr className="my-2" />
                        <img src="https://blog.maybanhang.net/hs-fs/hubfs/Mai%20Linh/Nh%C3%A0%20h%C3%A0ng%20-%20qu%C3%A1n%20%C4%83n/thiet%20ke%20quan%20an%20binh%20dan%203.jpg?width=1024&name=thiet%20ke%20quan%20an%20binh%20dan%203.jpg" className="img-fluid" alt="" />
                        <p>Nơi thỏa niễm mong ước với những người đam mê ẩm thực</p>
                        <p className="lead">
                            <button type="button" onClick={this.onRedirect} className="btn btn-primary">Xem danh sách món ăn</button>
                        </p>
                    </div>
                </div>
            )
    }
}

export default Home;
