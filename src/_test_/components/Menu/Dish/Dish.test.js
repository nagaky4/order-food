import React from 'react';
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Dish } from '../../../../components/Menu/Dish/Dish';

configure({ adapter: new Adapter() });


const setUp = (props = {}) => {
    return shallow(
        <Router>
            <Dish {...props} />
        </Router>
    )
}

describe('Component <Dish />', () => {
    let wrapper;
    describe('Have props', () => {

        beforeEach(() => {
            const props = {
                value: {
                    id: "1",
                    name: 'Bánh xèo',
                    price: '50000',
                    images: 'https://beptueu.vn/hinhanh/tintuc/top-15-hinh-anh-mon-an-ngon-viet-nam-khien-ban-khong-the-roi-mat-2.jpg',
                    detail: 'Thuộc top 40 món ngon nhất Việt Nam do CNN bình chọn. Bánh xèo là món ngon bạn khó cưỡng lại được.'
                },
                convertVND: () => {

                }
            }
            wrapper = setUp(props)
        });


        it('should be render without error', () => {
            expect(wrapper.length).toBe(1);
        });

        // it('snapshot renders', () => {
        //     const component = renderer.create(wrapper);
        //     let tree = component.toJSON();
        //     expect(tree).toMatchSnapshot();
        // });

        it('should recive props is object', () => {

            expect(wrapper.find('Dish').props().value).toEqual({
                id: "1",
                name: 'Bánh xèo',
                price: '50000',
                images: 'https://beptueu.vn/hinhanh/tintuc/top-15-hinh-anh-mon-an-ngon-viet-nam-khien-ban-khong-the-roi-mat-2.jpg',
                detail: 'Thuộc top 40 món ngon nhất Việt Nam do CNN bình chọn. Bánh xèo là món ngon bạn khó cưỡng lại được.'
            })



        })

        it('should render without error',()=>{
             expect(wrapper.dive().dive().dive().find('.col-sm-4')).toHaveLength(1);
        })

    })
    describe('Not props', () => {

        beforeEach(() => {
            wrapper = setUp();
        });

        it('should not render', () => {
            expect(wrapper.find('div.col-4')).toHaveLength(0)
        });
    })

})