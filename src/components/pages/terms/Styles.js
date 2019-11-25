import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { getDataStyles } from '../../../actions'

class Styles extends React.Component {
  componentDidMount() {
    this.props.getData()
  }

  render() {
    const { data, loading, handleChange } = this.props
    const { style_slug } = this.props.match.params

    return (
      <div className="terms-col">
        <div className="terms-col-title">
          Стили
            {
              loading ?
                <svg className="spinner" viewBox="0 0 50 50">
                  <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
                </svg> : ''
            }
        </div>
        <div className="terms-col-current">
          {
            style_slug !== ':style_slug' ?
            `Значение: ${style_slug}` :
            'Пока что ничего не выбрано из стилей'
          }
        </div>
        <select
          className="terms-col-select"
          onChange={ (e) => handleChange(e, 'styles' ) }
          value={ style_slug !== ':style_slug' ? style_slug : "disabled-value" }
        >
          <option
            value="disabled-value"
          >
            Выберите стиль
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
  data: state.terms.style.data,
  loading: state.terms.style.loading
})

const MapDispatchToProps = ( dispatch ) => ({
  getData: () => {
    dispatch( getDataStyles() )
  }
})

export default withRouter(connect(MapStateToProps, MapDispatchToProps)(Styles))