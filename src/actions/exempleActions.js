import { EXEMPLE_UPDATE_VIEW } from './types';

export const exemple_update_view = (newView) => dispatch => {
      dispatch({
        type: EXEMPLE_UPDATE_VIEW,
        payload: newView,
      })
};
