import {
  FETCH_CONTACTS_REQUEST,
  FETCH_CONTACTS_SUCCESS,
  FETCH_CONTACTS_FAILURE,
} from '../actions/actions';

const initialState = {
  contact: [],
  loading: false,
  fetchLoading: false,
  error: null,
  fetchError: null,
};

const reducer = ( state = initialState, action) => {
  switch (action.type) {
    case FETCH_CONTACTS_REQUEST:
      return { ...state, fetchLoading: true, fetchError: null };
    case FETCH_CONTACTS_SUCCESS:
      return { ...state, contact: action.payload, fetchLoading: false };
    case FETCH_CONTACTS_FAILURE:
      return { ...state, fetchLoading: false, fetchError: action.payload };
    default:
      return state;
  }
};

export default reducer;