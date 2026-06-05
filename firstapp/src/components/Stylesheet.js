import React, { useState } from 'react'
import '../MyStyle.css'

function Stylesheets(props) {
  let className = props.primary ? 'primary' : ''
  let [secondary, setSecondary] = useState('secondary')


  const removeSecondary = () => {
    setSecondary('remove')
    console.log('Remove div')
  }
  
  const showSecondary = () => {
    setSecondary('secondary')
    console.log('Show secondary div')
  }

  return (
    <div className={`${className} font-xl`}>
      Stylesheets
      
      <br></br>
      < button onClick={removeSecondary}>Remove Secondary</button>
      < button onClick={showSecondary}>Show secondary div</button>
      
      <div className={`${secondary}`} >Secondary Text</div>
    </div>
  )
}

export default Stylesheets