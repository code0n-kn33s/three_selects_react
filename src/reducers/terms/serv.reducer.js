import {
  SERV_REQUEST,
  SERV_RESPONSE,
  SERV_ERROR
} from '../../constants'

const initialState = {
  data: null,
  loading: false,
  error: null
};

const serv = ( state = initialState, action) => {
  switch( action.type ){
    case SERV_REQUEST:
      return {
        ...state,
        loading: true
      }

    case SERV_RESPONSE:
      return {
        ...state,
        loading: false,
        data: action.payload
      }

    case SERV_ERROR:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
}

export default serv