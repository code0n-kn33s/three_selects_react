import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import Terms from './pages/terms'

import '../assets/styles/main.sass'

const App = () => (
  <>
    {/* "/s-:{service_slug}/b-{brand_slug}/st-{style_slug}" */}
    <Route path="/terms" component={Terms}/>
    <Redirect to="/terms" />
  </>
)

export default App
