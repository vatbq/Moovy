import { MOVIES_REQUESTED, MOVIES_RECEIVED } from '../actions/movies-actions';
import {
  LISTS, PENDING, FULFILLED, EMPTY,
} from '../lib/constants';

export const initialState = {
  lists: LISTS.reduce((hash, elem) => (
    { ...hash, [elem.key]: { value: [], errors: [], status: EMPTY } }), {}),
  generalStatus: EMPTY,
};

const reducePayload = (payload) => LISTS.reduce((hash, elem, index) => ({
  ...hash,
  [elem.key]: {
    status: payload[index].status,
    ...(payload[index].status === FULFILLED
      ? { value: payload[index].value } : { errors: payload[index].error }),
  },
}), {});

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case MOVIES_REQUESTED:
      return { ...state, generalStatus: PENDING };
    case MOVIES_RECEIVED:
      return { ...state, lists: reducePayload(payload), generalStatus: FULFILLED };
    default:
      return state;
  }
};
