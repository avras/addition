import * as atypes from './actionTypes';

export const additionProblemInitialize = () => ({
  type: atypes.ADDITION_PROBLEM_INITIALIZE,
});

export const additionProblemCheckAnswer = (answer) => ({
  type: atypes.ADDITION_PROBLEM_CHECK_ANSWER,
  answer,
});