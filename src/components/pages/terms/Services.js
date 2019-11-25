import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { getDataServ } from '../../../actions'

class Serv extends React.Component {
  componentDidMount() {
    this.props.getData()
  }

  render() {
    const { data, loading, handleChange } = this.props
    const { service_slug } = this.props.match.params

    return (
      <div className="terms-col">
        <div className="terms-col-title">
          Услуги
            {
              loading ?
                <svg className="spinner" viewBox="0 0 50 50">
                  <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
                </svg> : ''
            }
        </div>
        <div className="terms-col-current">
          {
            service_slug !== ':service_slug' ?
            `Значение: ${service_slug}` :
            'Пока что ничего не выбрано из услуг'
          }
        </div>
        <select
          className="terms-col-select"
          onChange={ (e) => handleChange(e, 'services' ) }
          value={service_slug !== ':service_slug' ? service_slug : 'default'}
        >
          <option
            value='default'
          >
            Выберите услугу
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
  data: state.terms.serv.data,
  loading: state.terms.serv.loading
})

const MapDispatchToProps = ( dispatch ) => ({
  getData: () => {
    dispatch( getDataServ() )
  }
})

export default withRouter(connect(MapStateToProps, MapDispatchToProps)(Serv))