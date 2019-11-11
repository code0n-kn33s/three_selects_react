import React from 'react'

import Serv from './Serv'
import Brands from './Brands'
import Styles from './Styles'

const Terms = () => {
  return (
    <div className="terms-wrap">
      <h1>Выберите значения:</h1>
      <div className="terms">
        <Serv/>
        <Brands/>
        <Styles/>
      </div>
    </div>
  );
}


export default Terms