import {
  SEARCH_REQUEST,
  SEARCH_RESPONSE,
  SEARCH_ERROR
} from '../../constants'

const initialState = {
  data: null,
  loading: false,
  error: null
};

const search = ( state = initialState, action) => {
  switch( action.type ){
    case SEARCH_REQUEST:
      return {
        ...state,
        loading: true
      }

    case SEARCH_RESPONSE:
      return {
        ...state,
        loading: false,
        data: action.payload
      }

    case SEARCH_ERROR:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
}

export default search