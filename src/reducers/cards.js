import initialState from './initialState';
import * as actionTypes from '../actions/actionTypes';

export default function cards(previousState = initialState.cards, action) {
  switch (action.type) {
    case actionTypes.ADD_CARD_TO_DECK: {
      const {id, question, answer, deckId} = action;

      return {
        ...previousState,
        byId: {
          ...previousState.byId,
          [id]: {
            id,
            deckId,
            question,
            answer,
          },
        },
      };
    }
    case actionTypes.ADD_QUESTION_TO_CARD:
      return previousState;
    case actionTypes.ADD_ANSWER_TO_CARD:
      return previousState;
    default:
      return previousState;
  }
}
