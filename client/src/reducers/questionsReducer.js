const initalState = {
  productId: 0,
  displayList: [],
  data: [],
  count: 2,
  load: false,
  qFontSize: 20,
  aFontSize: 20,
  subFontSize: 16
};

const questionsReducer = (state = initalState, action) => {
  switch (action.type) {
    case 'FETCH_QUESTIONS_SUCCESS':
      return { ...state, data: action.payload, displayList: action.payload };
    case 'FETCH_QUESTIONS_ERROR':
      return { ...state, error: action.error };
    case 'DISPLAY_QUESTIONS':
      return { ...state, displayList: action.payload };
    case 'SET_PRODUCT_ID':
      return { ...state, productId: action.payload };
    default:
      return state;
  }
};

export default questionsReducer;
