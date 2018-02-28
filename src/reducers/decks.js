import initialState from './initialState';

import * as actionTypes from '../actions/actionTypes';

function decks(previousState = initialState.decks, action) {
	switch (action.type) {
		case actionTypes.CREATE_DECK:
			console.log(action);
			return previousState;
		default:
			return previousState;
	}
}

export default decks;
