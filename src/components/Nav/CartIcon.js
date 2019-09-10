import React, { Component } from "react";
import Radium from "radium";
import { connect } from "react-redux";
import compose from "recompose/compose";

import ComposeGetListBooked from "../HOC/getListBooked";
import * as actions from "../../actions/index";

class CartIcon extends Component {
  onOpenModal = () => {
    this.props.openModal();
  };
  render() {
    var styleIcon = {
      transition: "0.4s",
      cursor: "pointer",
      ":hover": {
        color: "#8152f3",
        transform: "scale(1.3)"
      }
    };
    let differItem;
    if (this.props.listBooked) {
      differItem = this.props.listBooked.length
        ? this.props.listBooked.length
        : 0;
    }

    return (
      <div style={styleIcon} className="cart-icon" onClick={this.onOpenModal}>
        <span className="fa fa-cart-plus"></span>
        <span className="num-cart">{differItem}</span>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    openModal: () => {
      dispatch(actions._openModal());
    }
  };
};

export default compose(
  ComposeGetListBooked,
  connect(
    null,
    mapDispatchToProps
  ),
  Radium
)(CartIcon);
