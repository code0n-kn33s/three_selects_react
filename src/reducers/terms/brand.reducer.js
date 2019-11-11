import {
  BRAND_REQUEST,
  BRAND_RESPONSE,
  BRAND_ERROR
} from '../../constants'

const initialState = {
  data: null,
  loading: false,
  error: null
};

const brand = ( state = initialState, action) => {
  switch( action.type ){
    case BRAND_REQUEST:
      return {
        ...state,
        loading: true
      }

    case BRAND_RESPONSE:
      return {
        ...state,
        loading: false,
        data: action.payload
      }

    case BRAND_ERROR:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
}

export default brand