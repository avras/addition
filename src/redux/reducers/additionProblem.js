import {
  ADDITION_PROBLEM_INITIALIZE,
  ADDITION_PROBLEM_CHECK_ANSWER,
} from '../actionTypes';

const initialState = {
  firstNum: 0,
  secondNum: 0,
  answerResponse: '',
  showAnswerResponse: false,
  showNewExerciseButton: false,
  problemSolved: false,
};

const minNum = 100;
const maxNum = 1000;

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

const additionProblem = (state = initialState, action) => {
  switch (action.type) {
    case ADDITION_PROBLEM_INITIALIZE: {
      const firstNum = getRandomInt(minNum, maxNum);
      const secondNum = getRandomInt(minNum, maxNum);
      return {
        ...initialState,
        firstNum,
        secondNum,
      };
    }
    case ADDITION_PROBLEM_CHECK_ANSWER: {
      const { answer } = action;
      
      if (parseInt(answer) === state.firstNum + state.secondNum) {
        return {
          ...state,
          answerResponse: 'Yay! ' + answer + ' is the correct answer.',
          showAnswerResponse: true,
          showNewExerciseButton: true,
          problemSolved: true,
        }
      }
      else {
        return {
          ...state,
          answerResponse: 'No. ' + answer + ' is not the right answer.',
          showAnswerResponse: true,
          showNewExerciseButton: false,
        }
      }
    }
    default: {
      return state;
    }
  }
};

export default additionProblem;