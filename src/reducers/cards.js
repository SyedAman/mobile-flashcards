import initialState from './initialState';
import * as actionTypes from '../actions/actionTypes';

export default function cards(previousState = initialState.cards, action) {
	switch (action.type) {
		case actionTypes.ADD_QUESTION_TO_CARD:
			console.log(action);
			return previousState;
		case actionTypes.ADD_ANSWER_TO_CARD:
			console.log(action);
			return previousState;
		default:
			return previousState;
	}
}
