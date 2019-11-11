import {
  STYLE_REQUEST,
  STYLE_RESPONSE,
  STYLE_ERROR
} from '../../constants'

const initialState = {
  data: null,
  loading: false,
  error: null
};

const style = ( state = initialState, action) => {
  switch( action.type ){
    case STYLE_REQUEST:
      return {
        ...state,
        loading: true
      }

    case STYLE_RESPONSE:
      return {
        ...state,
        loading: false,
        data: action.payload
      }

    case STYLE_ERROR:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
}

export default style