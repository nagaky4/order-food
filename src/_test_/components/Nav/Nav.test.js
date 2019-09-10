import React from "react";
import { shallow, mount, render } from "../../../../src/enzyme";

// import renderer from "react-test-renderer";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

import { createStore } from "redux";
import { Provider } from "react-redux";

import { Nav } from "../../../components/Nav/Nav";
import CartIcon from "../../../components/Nav/CartIcon";

const setState = jest.fn();
const useStateSpy = jest.spyOn(React, "useState");
useStateSpy.mockImplementation((init) => [init, setState]);

const store = createStore(() => ({}));

const setUp = (props = {}) => {
  const wrapper = shallow(
    <Router>
      <Provider store={store}>
        <Nav {...props} />
      </Provider>
    </Router>
  );
  const navWrapper = wrapper
    .dive()
    .dive()
    .dive()
    .dive()
    .dive();
  return navWrapper;
};

describe("Component <Nav /> ", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setUp();
  });

  it("should render without error", () => {
    expect(wrapper.find(CartIcon)).toHaveLength(1);
  });

  it("should render NavLink correctly", () => {
    expect(wrapper.find(NavLink)).toHaveLength(4);
  });

  it("<NavigationItem /> should have text Đăng nhập if not authenticated ", () => {
    expect(
      wrapper
        .find(NavLink)
        .at(3)
        .containsMatchingElement(
          <NavLink exact to="/login">
            Đăng nhập
          </NavLink>
        )
    ).toEqual(true);
  });

  it("<NavigationItem /> should have text Đăng xuất if authenticated ", () => {
    wrapper = setUp({ isAuthenicated: true });
    expect(
      wrapper
        .find(NavLink)
        .at(3)
        .containsMatchingElement(
          <NavLink exact to="/logout">
            Đăng xuất
          </NavLink>
        )
    ).toEqual(true);
  });

  
});
