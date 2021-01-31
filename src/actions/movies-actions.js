import { getAllList } from '../api/moviesServices';

export const MOVIES_REQUESTED = 'MOVIES_REQUESTED';
export const MOVIES_RECEIVED = 'MOVIES_RECEIVED';

export const loadMovies = () => async (dispatch) => {
  dispatch({
    type: MOVIES_REQUESTED,
  });

  const response = await getAllList();
  dispatch({
    type: MOVIES_RECEIVED,
    payload: response,
  });
};
