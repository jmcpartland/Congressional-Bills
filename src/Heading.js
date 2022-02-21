import React from 'react'
import Search from './Search'


function Heading({ handleSearch }) {

  return (
    <div>
        <Search handleSearch={handleSearch} />
    </div>
  )
}

export default Heading