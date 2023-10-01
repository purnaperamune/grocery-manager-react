import React from 'react'

const Footer = ({items}) => {
    const year = new Date();
  return (
    <div>
        <p>{`Total Items: ${items.length}`}</p>
        <p>Copyright &copy; {year.getFullYear()}</p>
    </div>
    
  )
}

export default Footer