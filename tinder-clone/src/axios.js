import axios from 'axios'
import sxios from 'axios'

const instance = axios.create({
    baseURL : 'https://tinder-07backend.herokuapp.com'
})

export default instance