import uuid from 'react-native-uuid';

import * as actionTypes from './actionTypes';

export const createDeck = name => ({
  type: actionTypes.CREATE_DECK,
  id: uuid.v1(),
  name,
  cardsById: [],
});

export const addCardToDeck = ({parentId, question, answer}) => ({
  type: actionTypes.CREATE_DECK,
  id: uuid.v1(),
  parentId,
  question,
  answer,
});
