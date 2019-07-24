import Axios from "axios";
import API_URL from "../lib/API_URL";

export const fetchQuestionsSuccess = questions => ({
  type: "FETCH_QUESTIONS_SUCCESS",
  payload: questions
});

export const fetchQuestionsError = error => ({
  type: "FETCH_QUESTIONS_ERROR",
  error
});

export const displayQuestions = questions => ({
  type: "DISPLAY_QUESTIONS",
  payload: questions
});

export const fetchQuestions = prodId => {
  const url = `${API_URL}/qa/${prodId}`;
  return dispatch =>
    Axios.get(url)
      .then(({ data }) => {
        dispatch(fetchQuestionsSuccess(data.results));
      })
      .catch(err => {
        dispatch(fetchQuestionsError(err));
      });
};

export const postAddAnswer = (answer, name, email, photos, id) => {
  const url = `${API_URL}/qa/${id}/answers`;

  Axios.post(url, {
    body: answer,
    name,
    email,
    photos
  })
    .then(() => {
      console.log("Success to post AddAnswer");
    })
    .catch(() => {
      console.log("Fail to post AddAnswer");
    });
};

export const putHelpful = id => {
  const url = `${API_URL}/qa/question/${id}/helpful`;
  Axios.put(url, { question_id: id })
    .then(() => {
      console.log("success pull helpful");
    })
    .catch(() => {
      console.log("fail pull helpful");
    });
};

export const putHelpfulAnswer = id => {
  const url = `${API_URL}/qa/answer/${id}/helpful`;
  Axios.put(url, { question_id: id })
    .then(() => {
      console.log("success pull helpful");
    })
    .catch(() => {
      console.log("fail pull helpful");
    });
};

export const ReportAnswer = id => {
  const url = `${API_URL}/qa/answer/${id}/report`;
  Axios.put(url, { answer_id: id })
    .then(() => {
      console.log("success pull helpful");
    })
    .catch(() => {
      console.log("fail pull helpful");
    });
};

export const postQuestion = (id, question, name, email) => {
  const url = `${API_URL}/qa/${id}`;

  Axios.post(url, {
    product_id: id,
    body: question,
    name,
    email
  })
    .then(() => {
      console.log("success pull helpful");
    })
    .catch(() => {
      console.log("fail pull helpful");
    });
};
