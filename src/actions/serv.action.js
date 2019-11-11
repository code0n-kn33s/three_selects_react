import {
  SERV_REQUEST,
  SERV_RESPONSE,
  SERV_ERROR
} from '../constants'

import axios from 'axios'

export const getDataServ = () => ( dispatch) => {
  dispatch( { type: SERV_REQUEST } )

  axios('https://beta.autobooking.com/api/test/v1/search/terms')
    .then( res => {
      dispatch({
          type: SERV_RESPONSE,
          payload: res.data.data
        })
      }
    )
    .catch( error => dispatch({ type: SERV_ERROR, error }))
}