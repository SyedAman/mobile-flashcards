import initialState from './initialState';

import actionTypes from '../actions/actionTypes';

function decks(previousState = initialState.decks, action) {
	switch (action.type) {
		case actionTypes.CREATE_DECK:
			console.log(action);
			return previousState;
	}
}

export default decks;
