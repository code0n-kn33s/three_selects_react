import { combineReducers } from 'redux'

import brand from './brand.reducer'
import serv from './serv.reducer'
import style from './style.reducer'
import search from './search.reducer'

const terms = combineReducers({
    brand,
    serv,
    style,
    search,
})

export default terms