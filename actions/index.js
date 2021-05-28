import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com'

export const getBlogs = () => {

    return axios
        .get(`${BASE_URL}/todos`)
        .then((res) =>{return res.data})
        .catch((err) => console.error(err))
}