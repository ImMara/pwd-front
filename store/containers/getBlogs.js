import {connect} from 'react-redux';
import {getBlogs} from "../actions/action";
import {GET_BLOG} from "../types/types";

const mapStateToProps = (state) => {
    return {
        todos: getBlogs(state.blog, GET_BLOG),
    }
}