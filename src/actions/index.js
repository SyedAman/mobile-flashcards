import uniqid from 'uniqid';

import * as actionTypes from './actionTypes';

export const createDeck = name => ({
	type: actionTypes.CREATE_DECK,
	id: uniqid(),
	name,
	cardsById: [],
});
