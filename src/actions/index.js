import uniqid from 'uniqid';

import * as actionTypes from './actionTypes';

export const createDeck = name => ({
	type: actionTypes.CREATE_DECK,
	id: uniqid(),
	name,
	cardsById: [],
});

export const addCardToDeck = ({ parentId, question, answer }) => ({
	type: actionTypes.CREATE_DECK,
	id: uniqid(),
	parentId,
	question,
	answer,
});
