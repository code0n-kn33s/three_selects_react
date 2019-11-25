import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Main from './pages/Main'
import Terms from './pages/terms/'

import '../assets/styles/main.sass'

const App = () => (
  <>
    <Switch>
      <Route exact path="/" component={Main}/>
      <Route exact path="/terms/s-:service_slug/b-:brand_slug/st-:style_slug" component={Terms}/>
    </Switch>
  </>
)

export default App
