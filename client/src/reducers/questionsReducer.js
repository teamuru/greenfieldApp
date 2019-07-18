const questionsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_QUESTIONS_SUCCESS':
      return { ...state, data: action.payload };
    case 'FETCH_QUESTIONS_ERROR':
      return { ...state, error: action.error };
    default:
      return state;
  }
};

export default questionsReducer;
