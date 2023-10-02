import React from 'react'

// porps come from the parent. We can destructure and use it as well. {title}
const Header = (props) => {
  return (
    <header>
        <h1>
            {props.title}
        </h1>
    </header>
  )
}

// default props
Header.defaultProps = {
  title: "Default Title"
}

export default Header