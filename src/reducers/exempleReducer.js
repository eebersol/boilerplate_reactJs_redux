import { EXEMPLE_UPDATE_VIEW } from '../actions/types';

const initialState = {
  view: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case EXEMPLE_UPDATE_VIEW:
      return {
        ...state,
        view: action.payload
      }
    default:
      return state;
  }
}