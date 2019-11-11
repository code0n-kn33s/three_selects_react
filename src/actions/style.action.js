import {
  STYLE_REQUEST,
  STYLE_RESPONSE,
  STYLE_ERROR
} from '../constants'

import axios from 'axios'

export const getDataStyles = () => ( dispatch) => {
  dispatch( { type: STYLE_REQUEST } )

  axios('https://beta.autobooking.com/api/test/v1/search/styles')
    .then( res => {
      dispatch({
          type: STYLE_RESPONSE,
          payload: res.data.data
        })
      }
    )
    .catch( error => dispatch({ type: STYLE_ERROR, error }))
}