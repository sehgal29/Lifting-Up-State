import React from 'react'
import Demo from './Demo'
const App = () => {
  function func(data) {
    alert(data)
  }
  return (
    <div>
      <Demo name={func}/>
    </div>
  )
}

export default App
