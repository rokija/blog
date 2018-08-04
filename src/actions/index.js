import { todosRef } from "../../config/firebase";
import { GET_POSTS } from "../constants";

export const addPost = post => async dispatch => {
  todosRef.push().set(post);
};

export const removePost = post => async dispatch => {
  todosRef.child(post).remove();
};

export const getPosts = () => async dispatch => {
  todosRef.on("value", snapshot => {
    dispatch({
      type: GET_POSTS,
      payload: snapshot.val()
    });
  });
};
