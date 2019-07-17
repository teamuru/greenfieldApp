const questionsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_QUESTIONS_SUCCESS':
      return { ...state, questions: action.payload };
    case 'FETCH_QUESTIONS_ERROR':
      return { ...state, questions: action.error };
    default:
      return state;
  }
};

export default questionsReducer;
