import React from 'react'
import { shallow, mount } from '../../../../enzyme';
import { createStore } from "redux";
import { Provider } from "react-redux";

import { ChooseDish } from '../../../../components/Menu/Dish/ChooseDish';

const store = createStore(() => ({}));

const setUp = (props = {}) => {
    return mount(
        <Provider store={store}>
            <ChooseDish {...props} />
        </Provider>
    )
}

describe('<ChooseDish /> component ', () => {

    let wrapper;
    beforeEach(() => {
        let defaultProps = {
            match: {
                params: {
                    id: '1'
                }
            }
        }
        wrapper = setUp(defaultProps);
    });

    it('should render without error', () => {
        
        expect(wrapper.find('DetailDish')).toHaveLength(1);
    });

})