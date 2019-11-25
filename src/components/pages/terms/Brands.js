import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { getDataBrands } from '../../../actions'

class Brands extends React.Component {
  componentDidMount() {
    this.props.getData()
  }

  render() {
    const { data, loading, handleChange } = this.props
    const { brand_slug } = this.props.match.params

    return (
      <div className="terms-col">
        <div className="terms-col-title">
          Бренды
            {
              loading ?
                <svg className="spinner" viewBox="0 0 50 50">
                  <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
                </svg> : ''
            }
        </div>
        <div className="terms-col-current">
          {
            brand_slug !== ':brand_slug' ?
            `Значение: ${brand_slug}` :
            'Пока что ничего не выбрано из брендов'
          }
        </div>
        <select
          className="terms-col-select"
          onChange={ (e) => handleChange(e, 'brands' ) }
          value={brand_slug !== ':brand_slug' ? brand_slug : "disabled-value"}
        >
          <option
            value="disabled-value"
          >
            Выберите бренд
          </option>
          {
            data &&
              data.map( (item, key) => (
                <option
                  key={key}
                  value={ item.slug }
                  className="terms-col-option"
                >
                  { item.label}
                </option>
              )
            )
          }
        </select>
      </div>
    )
  }
}

// REDUX
const MapStateToProps = ( state ) => ({
  data: state.terms.brand.data,
  loading: state.terms.brand.loading
})

const MapDispatchToProps = ( dispatch ) => ({
  getData: () => {
    dispatch( getDataBrands() )
  }
})

export default withRouter(connect(MapStateToProps, MapDispatchToProps)(Brands))