import axios from 'axios';

const BASE_URL = 'https://api.energydrink.eraertsalan.be/api'

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

export const getEvents = () => {
    return axios
        .get(`${BASE_URL}/events`)
        .then((res)=>{return res.data.events})
        .catch((err) => console.error(err))
}

export const getEvent = (id) => {
    return axios
        .get(`${BASE_URL}/event/${id}`)
        .then((res) => {return res.data.event})
        .catch(err => console.error(err))
}