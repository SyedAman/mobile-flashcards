import uuid from 'react-native-uuid';

import * as actionTypes from './actionTypes';

export const createDeck = ({name, id}) => ({
  type: actionTypes.CREATE_DECK,
  id,
  name,
  cardsById: [],
});

export const addCardToDeck = ({deckId, question, answer}) => ({
  type: actionTypes.ADD_CARD_TO_DECK,
  id: uuid.v1(),
  deckId,
  question,
  answer,
});
