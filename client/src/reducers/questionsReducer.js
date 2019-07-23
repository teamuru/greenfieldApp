const initalState = {
  displayList: [],
  data: []
};
const questionsReducer = (state = initalState, action) => {
  switch (action.type) {
    case "FETCH_QUESTIONS_SUCCESS":
      return { ...state, data: action.payload, displayList: action.payload };
    case "FETCH_QUESTIONS_ERROR":
      return { ...state, error: action.error };
    case "DISPLAY_QUESTIONS":
      return { ...state, displayList: action.payload };
    default:
      return state;
  }
};

export default questionsReducer;
