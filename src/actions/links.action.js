import {
  SET_TERMS_LINK,
  RESET_TERMS_LINK
} from '../constants'

export const getLinks = ( value, target ) => ( dispatch ) => {


  dispatch({
    type: SET_TERMS_LINK,
    target: target,
    value: value
  })
}

export const resetLinks = () => ( dispatch ) => {
  dispatch({ type: RESET_TERMS_LINK })
}