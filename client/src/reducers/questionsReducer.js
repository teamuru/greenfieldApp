const initalState = {
  productId: 0,
  displayList: [],
  data: [],
  // quHelpful: 0,
  // anHelpful: 0,
  // questionId: 0,
  count: 2,
  load: false,
  qFontSize: 20,
  aFontSize: 20,
  subFontSize: 16
  // highLight: ""
};

const questionsReducer = (state = initalState, action) => {
  switch (action.type) {
    case 'FETCH_QUESTIONS_SUCCESS':
      return { ...state, data: action.payload, displayList: action.payload };
    case 'FETCH_QUESTIONS_ERROR':
      return { ...state, error: action.error };
    case 'DISPLAY_QUESTIONS':
      return { ...state, displayList: action.payload };
    // case 'INCREASE_QUESTION_HELPFULNESS':
    //   return { ...state, quHelpful: action.payload };
    // case 'INCREASE_ANSWER_HELPFULNESS':
    //   return { ...state, anHelpful: action.payload };
    case 'SET_PRODUCT_ID':
      return { ...state, productId: action.payload };
    default:
      return state;
  }
};

export default questionsReducer;
