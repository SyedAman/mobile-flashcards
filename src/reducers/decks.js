import initialState from './initialState';

import * as actionTypes from '../actions/actionTypes';

function decks(previousState = initialState.decks, action) {
  switch (action.type) {
    case actionTypes.CREATE_DECK: {
      const {id, name, cardsById} = action;
      return {
        ...previousState,
        byId: {
          ...previousState.byId,
          [id]: {
            id,
            name,
            cardsById,
          },
        },
      };
    }
    case actionTypes.ADD_CARD_TO_DECK: {
      const {id, parentId, question, answer} = action;

      return {
        ...previousState,
        byId: {
          ...previousState.byId,
          [parentId]: {
            ...previousState.byId[parentId],
            cardsById: [...previousState.byId[parentId].cardsById, id],
          },
        },
      };
    }
    default:
      return previousState;
  }
}

export default decks;
