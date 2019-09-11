import React from 'react'
import { shallow, mount } from '../../../../enzyme';
import { createStore } from "redux";
import { Provider } from "react-redux";

import { DetailDish } from '../../../../components/Menu/Dish/DetailDish';

const store = createStore(() => ({}));

const setUp = (props = {}) => {
    return mount(
        <Provider store={store}>
            <DetailDish {...props} />
        </Provider>
    )
}


describe('<DetailDish /> component', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = setUp();
    })

    it('should render correctly when not props', () => {
        expect(wrapper.children().find('.jumbotron')).toHaveLength(1);
    })

    it('should render correctly when have props', () => {

        let defaulProps ={
            value: {
                name: 'Bún đậu',
                price: '30000',
                images: '',
                detail: ''
            },
            children: '',
            convertVND: () => { }
        }
        wrapper = setUp(defaulProps);

        expect(wrapper.children().find('.display-3').text()).toEqual('Bún đậu');
    })

})