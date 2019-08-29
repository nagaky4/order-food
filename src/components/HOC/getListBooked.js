import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

const getListBooked = (Wrraped) => {


    return class extends Component {

        render() {
            return <Wrraped listBooked={this.props.listBooked} {...this.props} />
        }
    }

}

const mapStateToProps = (state) => {
    return {
        listBooked: state.listBooked
    }
}


const ComposeGetListBooked = compose(connect(mapStateToProps, null), getListBooked);

export default ComposeGetListBooked;