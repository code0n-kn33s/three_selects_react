import {
  BRAND_REQUEST,
  BRAND_RESPONSE,
  BRAND_ERROR
} from '../constants'

import axios from 'axios'

export const getDataBrands = () => ( dispatch) => {
  dispatch( { type: BRAND_REQUEST } )

  axios('https://beta.autobooking.com/api/test/v1/search/brands_terms')
    .then( res => {
      dispatch({
          type: BRAND_RESPONSE,
          payload: res.data.data
        })
      }
    )
    .catch( error => dispatch({ type: BRAND_ERROR, error }))
}