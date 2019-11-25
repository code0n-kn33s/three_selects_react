import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'

import Terms from './pages/terms/'

import '../assets/styles/main.sass'

const App = () => (
  <>
    <Link to="/terms/s-:service_slug/b-:brand_slug/st-:style_slug">
      <button>
        /terms/s-:service_slug/b-:brand_slug/st-:style_slug
      </button>
    </Link>
    <Switch>
      <Route exact path="/terms/s-:service_slug/b-:brand_slug/st-:style_slug" component={Terms}/>
    </Switch>
  </>
)

export default App
