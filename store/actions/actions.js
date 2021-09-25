import axiosApi from '../../axiosApi';

export const CONTACTS_REQUEST = 'CONTACTS_REQUEST';
export const CONTACTS_SUCCESS = 'CONTACTS_SUCCESS';
export const CONTACTS_FAILURE = 'CONTACTS_FAILURE';

export const FETCH_CONTACTS_REQUEST = 'FETCH_CONTACTS_REQUEST';
export const FETCH_CONTACTS_SUCCESS = 'FETCH_CONTACTS_SUCCESS';
export const FETCH_CONTACTS_FAILURE = 'FETCH_CONTACTS_FAILURE';

export const contactsRequest = () => ({type: CONTACTS_REQUEST});
export const contactsSuccess = () => ({type: CONTACTS_SUCCESS});
export const contactsFailure = error => ({type: CONTACTS_FAILURE, payload: error});

export const fetchContactsRequest = () => ({type: FETCH_CONTACTS_REQUEST});
export const fetchContactsSuccess = contact => ({type: FETCH_CONTACTS_SUCCESS, payload: contact});
export const fetchContactsFailure = error => ({type: FETCH_CONTACTS_FAILURE, payload: error});


export const fetchContacts = () => {
    return async dispatch => {
      try {
        dispatch(fetchContactsRequest());
        const response = await axiosApi.get('contacts.json');
        
        const contacts = Object.keys(response.data).map(id => ({
            ...response.data[id],
            id
        }));
        
        dispatch(fetchContactsSuccess(contacts));
      } catch (e) {
        dispatch(fetchContactsFailure(e));
      }
    };
  }