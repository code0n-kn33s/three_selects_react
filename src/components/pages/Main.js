import React from 'react'
import { Link } from 'react-router-dom'

const Main = () => (
  <Link to="/terms/s-:service_slug/b-:brand_slug/st-:style_slug">
    <button>
      Перейти в приложение
    </button>
  </Link>
);

export default Main