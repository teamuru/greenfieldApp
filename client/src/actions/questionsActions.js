import Axios from 'axios';
import API_URL from '../lib/API_URL';

const fetchQuestionsSuccess = questions => ({
  type: 'FETCH_QUESTIONS_SUCCESS',
  payload: questions
});

const fetchQuestionsError = error => ({
  type: 'FETCH_QUESTIONS_ERROR',
  error
});
const fetchQuestions = (prodId) => {
  const url = `${API_URL}/qa/${prodId}`;
  return dispatch => Axios.get(url)
      .then((data) => {
        dispatch(fetchQuestionsSuccess(data));
      })
      .catch((err) => {
        dispatch(fetchQuestionsError(err));
      });
};

export default fetchQuestions;
