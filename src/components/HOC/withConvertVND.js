
import React, { Component } from 'react'

const withConvertVND = (Wrapper) => {

    return class extends Component {
        convertVND = (price) => {
            price = price.toString();
            if (price && price.toString().length > 0) {
                var arr = [];
                var co = 0;
                for (let i = price.length - 1; i >= 0; i--) {
                    var m = "";
                    if (co === 3) {
                        arr.push('.')
                        co = 1
                    } else co++;
                    m = price[i];
                    arr.push(m);
                }
                arr.reverse();
                let cost = ""
                for (var j of arr) {
                    cost += j;
                }
                return cost;
            }
        }

        render() {
            return (
                <Wrapper {...this.props} convertVND={this.convertVND} />
            )
        }
    }
}

export default withConvertVND
