import { combineReducers } from 'redux'

import brand from './brand.reducer'
import serv from './serv.reducer'
import style from './style.reducer'

const terms = combineReducers({
    brand,
    serv,
    style,
})

export default terms