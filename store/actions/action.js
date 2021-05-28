import axios from "axios";

export const getBlogs = () => {
    return(dispatch)=>{
        return axios.get("http://www.colr.org/json/color/random").then((response)=>{
            dispatch(console.log(response.data));
        })
    }
}