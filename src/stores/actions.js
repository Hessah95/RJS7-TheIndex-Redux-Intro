const ADD_AUTHOR = "ADD_AUTHOR";
const DELETE_AUTHOR = "DELETE_AUTHOR";

export const addAuthor = () => {
  return {
    type: ADD_AUTHOR
  };
};

export const deleteAuthor = () => {
  return {
    type: DELETE_AUTHOR
  };
};
