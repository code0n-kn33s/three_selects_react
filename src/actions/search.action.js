import {
  SEARCH_REQUEST,
  SEARCH_RESPONSE,
  SEARCH_ERROR
} from '../constants'

import axios from 'axios'

export const dataSearch = ({ services, brands, styles }) => ( dispatch) => {
  dispatch( { type: SEARCH_REQUEST } )

  axios(`https://beta.autobooking.com/api/test/v1/search/parse_link?service_slug=${services}&brand_slug=${brands}&style_slug=${styles}`)
    .then( res => {
      dispatch({
          type: SEARCH_RESPONSE,
          payload: res.data
        })
      }
    )
    .catch( error => dispatch({ type: SEARCH_ERROR, error }))
}