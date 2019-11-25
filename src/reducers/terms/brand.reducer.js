import {
  BRAND_REQUEST,
  BRAND_RESPONSE,
  BRAND_ERROR
} from '../../constants'

const initialState = {
  data: null,
  // data: [
  //   {
  //     slug: 'b1-slug1',
  //     label: 'b1-label1'
  //   },
  //   {
  //     slug: 'b2-slug2',
  //     label: 'b2-label2'
  //   },
  //   {
  //     slug: 'b3-slug3',
  //     label: 'b3-label3'
  //   }
  // ],
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