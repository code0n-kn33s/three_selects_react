import React from 'react'
import { connect } from 'react-redux'

import { getDataBrands } from '../../../actions'

class Brands extends React.Component {
  state = {
    currentValue: null
  }

  componentDidMount() {
    this.props.getData()
  }

  handleChange = ( e ) => {
    const value = e.target.value

    this.setState({
      currentValue: value
    })
  }

  render() {
    const { data, loading } = this.props
    const { currentValue } = this.state

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
            currentValue ?
            `Значение: ${currentValue}` :
            'Пока что ничего не выбрано из брендов'
          }
        </div>
        <select
          className="terms-col-select"
          onChange={ this.handleChange }
          defaultValue="disabled-value"
        >
          <option
            disabled
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
    );
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

export default connect(MapStateToProps, MapDispatchToProps)(Brands)