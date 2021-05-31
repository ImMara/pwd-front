import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com'

export const getBlogs = () => {
    return axios
        .get(`${BASE_URL}/posts`)
        .then((res) =>{return res.data})
        .catch((err) => console.error(err))
}

export const getPost = (id) =>{
    return axios
        .get(`${BASE_URL}/posts/${id}`)
        .then((res) => {return res.data})
        .catch((err) => console.error(err))
}