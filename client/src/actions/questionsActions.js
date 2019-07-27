import Axios from 'axios';
import API_URL from '../lib/API_URL';

export const fetchQuestionsSuccess = questions => ({
  type: 'FETCH_QUESTIONS_SUCCESS',
  payload: questions
});

export const fetchQuestionsError = error => ({
  type: 'FETCH_QUESTIONS_ERROR',
  error
});

export const displayQuestions = questions => ({
  type: 'DISPLAY_QUESTIONS',
  payload: questions
});

export const setProductId = id => ({
  type: 'SET_PRODUCT_ID',
  payload: id
});

export const fetchQuestions = (prodId) => {
  const url = `${API_URL}/qa/${prodId}`;
  return dispatch => Axios.get(url)
      .then(({ data }) => {
        // console.log("success fetchQuestions ", prodId);
        dispatch(fetchQuestionsSuccess(data.results));
      })
      .catch((err) => {
        dispatch(fetchQuestionsError(err));
      });
};

export const postAddAnswer = (answer, name, email, photos, id) => {
  const url = `${API_URL}/qa/${id}/answers`;
  // console.log("post answer photos ", photos);
  Axios.post(url, {
    body: answer,
    name,
    email,
    photos
  })
    .then(() => {
      console.log('Success to post AddAnswer ', name);
    })
    .catch(() => {
      console.log('Fail to post AddAnswer');
    });
};

export const putHelpful = (id) => {
  const url = `${API_URL}/qa/question/${id}/helpful`;
  Axios.put(url, { question_id: id })
    .then(() => {
      console.log('success put helpful', id);
    })
    .catch(() => {
      console.log('fail put helpful');
    });
};

export const putHelpfulAnswer = (id) => {
  const url = `${API_URL}/qa/answer/${id}/helpful`;
  Axios.put(url, { question_id: id })
    .then(() => {
      console.log('success pull helpful');
    })
    .catch(() => {
      console.log('fail pull helpful');
    });
};

// report question
// export const ReportQuestion = id => {
//   const url = `${API_URL}/qa/question/${id}/report`;
//   Axios.put(url, { answer_id: id })
//     .then(() => {
//       console.log("success put report Question ", id);
//     })
//     .catch(() => {
//       console.log("fail put report Question");
//     });
// };

export const ReportAnswer = (id) => {
  const url = `${API_URL}/qa/answer/${id}/report`;
  Axios.put(url, { answer_id: id })
    .then(() => {
      console.log('success put report answer ');
    })
    .catch(() => {
      console.log('fail put report answer ');
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
      console.log('success post question name', name);
    })
    .catch(() => {
      console.log('fail post question');
    });
};
