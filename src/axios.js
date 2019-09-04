import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://order-food-react.firebaseio.com'
})
export default instance;