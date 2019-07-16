import Redux from "redux";

var questionsReducer = (state = null, action) => {
  switch (action.type) {
    case "CHANGE_QUESTIONS":
      return action.ToDo || null;
    default: 
      return state;
  }
};

export default questionsReducer;

