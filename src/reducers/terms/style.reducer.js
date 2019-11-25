import {
  STYLE_REQUEST,
  STYLE_RESPONSE,
  STYLE_ERROR
} from '../../constants'

const initialState = {
  data: null,
  // data: [
  //   {
  //     slug: 's1-slug1',
  //     label: 's1-label1'
  //   },
  //   {
  //     slug: 's2-slug2',
  //     label: 's2-label2'
  //   },
  //   {
  //     slug: 's3-slug3',
  //     label: 's3-label3'
  //   }
  // ],
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