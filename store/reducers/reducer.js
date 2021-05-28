import * as actions from '../actions/action';
import {GET_BLOG} from "../types/types";
import {getBlogs} from "../actions/action";

export const blog = (state = [],action) =>{
    switch(action.type){
        case GET_BLOG:
            return getBlogs()
        default:
            return state
    }
}