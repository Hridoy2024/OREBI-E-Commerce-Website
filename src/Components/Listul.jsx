import React from 'react'

const Listul = ({children, className}) => {
  return (
    <ul className={className}>{children}</ul>
  )
}

export default Listul