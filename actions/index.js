import axios from 'axios';

const BASE_URL = 'http://api.energydrink.eraertsalan.be/api'

export const getBlogs = () => {
    return axios
        .get(`${BASE_URL}/blogs`)
        .then((res) =>{return res.data.blogs})
        .catch((err) => console.error(err))
}

export const getPost = (id) =>{
    return axios
        .get(`${BASE_URL}/blogs/${id}`)
        .then((res) => {return res.data.blog})
        .catch((err) => console.error(err))
}