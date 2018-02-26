import initialState from "./initialState";

import actionTypes from "../actions/actionTypes";

function decks(state = initialState.decks, action) {
  switch (action.type) {
    case actionTypes.CREATE_DECK:
      return initialState;
  }
}

export default decks;
