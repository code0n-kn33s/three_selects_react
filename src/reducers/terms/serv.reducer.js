import {
  SERV_REQUEST,
  SERV_RESPONSE,
  SERV_ERROR
} from '../../constants'

const initialState = {
  data: null,
  // data: [
  //   {
  //     slug: 'sv1-slug1',
  //     label: 'sv1-label1'
  //   },
  //   {
  //     slug: 'sv2-slug2',
  //     label: 'sv2-label2'
  //   },
  //   {
  //     slug: 'sv3-slug3',
  //     label: 'sv3-label3'
  //   }
  // ],
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