import React from 'react'

const Demo = (props) => {
    const data = "Lifting Up State Called!!"
  return (
    <div>
      <h1>Lifting Up State!!</h1>
      <button onClick={() => props.name(data)}>Click Me</button>
    </div>
  )
}

export default Demo
