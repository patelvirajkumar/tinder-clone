import axios from 'axios'


const instance = axios.create({
    baseURL : 'https://tinder-07backend.herokuapp.com'
})

export default instance