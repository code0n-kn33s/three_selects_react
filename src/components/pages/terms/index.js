import React from 'react'

import Services from './Services'
import Brands from './Brands'
import Styles from './Styles'

class Terms extends React.Component {
  state = {
    services: ':service_slug',
    brands: ':brand_slug',
    styles: ':style_slug'
  }

  componentDidMount () {
    const {
      service_slug,
      brand_slug,
      style_slug
    } = this.props.match.params

    this.setState({
      services: service_slug,
      brands: brand_slug,
      styles: style_slug
    })
  }

  handleChange = (e, target ) => {
    new Promise( (resolve) => {
      resolve({ 
        [target]: e.target.value 
      }) 
    })
    .then((data) => {
      this.setState(data)
    })
    .then(() => {
      this.redirect()
    })
  }

  finalRequest = (data) => {
    if ( 
      this.state.services !== ':service_slug' && 
      this.state.brands !== ':brand_slug' && 
      this.state.styles !== ':style_slug' 
    ) {
      return true
    }
  }

  redirect = () => {
    const { services, brands, styles } = this.state
    this.props.history.push(`/terms/s-${services}/b-${brands}/st-${styles}`)
  }

  reset = () => {
    this.setState ({
      services: ':service_slug',
      brands: ':brand_slug',
      styles: ':style_slug'
    })
    this.props.history.push("/terms/s-:service_slug/b-:brand_slug/st-:style_slug")
  }

  render() {
    // const { services, brands, styles } = this.state
    
    this.finalRequest() && console.log('yep')
    return (
      <div className="terms-wrap">
        <h1>Выберите значения:</h1>
        <button onClick={ this.reset }>
          Сбросить значения
        </button>
        <div className="terms">
          <Services handleChange={this.handleChange}/>
          <Brands handleChange={this.handleChange}/>
          <Styles handleChange={this.handleChange}/>
        </div>
      </div>
    )
  }
}

export default Terms