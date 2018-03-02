import initialState from './initialState';

import * as actionTypes from '../actions/actionTypes';

function decks(previousState = initialState.decks, action) {
	switch (action.type) {
		case actionTypes.CREATE_DECK:
			let { id, name, cardsById } = action;
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
		default:
			return previousState;
	}
}

export default decks;
