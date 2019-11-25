import React from 'react'
import { connect } from 'react-redux'

import Services from './Services'
import Brands from './Brands'
import Styles from './Styles'

import { dataSearch } from '../../../actions'

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
      this.finalRequest()
    })
    .then(() => {
      this.redirect()
    })
  }

  finalRequest = () => {
    const { services, brands, styles } = this.state
    if (
      this.state.services !== ':service_slug' &&
      this.state.brands !== ':brand_slug' &&
      this.state.styles !== ':style_slug'
    ) {
      return this.props.getDataSearch({ services, brands, styles })
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
    const { data, loading } = this.props

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
        {
          data && (
            !loading ? (
            <div className="terms-order">
              <h2>Поздравляю! Вы сделали заказ :</h2>
              <ul>
                <li><b>Название услуги - </b>{data.service.label}</li>
                <li><b>Марка - </b>{data.brand.label}</li>
                <li><b>Стиль - </b>{data.style.label}</li>
              </ul>
            </div>
            ) : (
              <div>
                <svg className="spinner" viewBox="0 0 50 50">
                  <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
                </svg>
              </div>
            ))
        }
      </div>
    )
  }
}

// REDUX
const MapStateToProps = ( state ) => ({
  data: state.terms.search.data,
  loading: state.terms.search.loading
})

const MapDispatchToProps = ( dispatch ) => ({
  getDataSearch: (data) => {
    dispatch( dataSearch(data) )
  }
})

export default connect(MapStateToProps, MapDispatchToProps)(Terms)