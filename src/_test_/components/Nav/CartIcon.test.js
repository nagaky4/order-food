import React from "react";
import { mount } from "../../../../src/enzyme";
import { createStore } from "redux";
import { Provider } from "react-redux";

import { CartIcon } from "../../../components/Nav/CartIcon";

const store = createStore(() => ({}));

const setUp = (props = {}) => {
  return mount(
    <Provider store={store}>
      <CartIcon {...props} />
    </Provider>
  );
};

describe("description", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setUp();
  });

  it("should render correctly", () => {
    wrapper = setUp().children();
    expect(wrapper.find(".cart-icon")).toBeTruthy();
    expect(wrapper.find(".cart-icon")).toHaveLength(1);
  });

  it("should render correctly when no lisBooked props ", () => {
    wrapper = setUp({}).children();
    expect(wrapper.find(".num-cart").text()).toEqual(`0`);
  });

  it("should render listBooked corresponding ", () => {
    let listItem = ["1", "2", "3"];
    wrapper = setUp({ listBooked: listItem, openModal: jest.fn() }).children();
    expect(wrapper.find(".num-cart").text()).toEqual(`${listItem.length}`);
  });

  it('should open modal when click icon', () => {
    wrapper = setUp({ listBooked: null, openModal: jest.fn() }).children();

    // const onClick = jest.spyOn(wrapper.instance(),'onOpenModal');

    wrapper.find('.cart-icon').simulate('click')
    expect(wrapper.props().openModal).toHaveBeenCalled()
  });

});
