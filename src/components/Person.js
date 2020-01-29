import React from 'react'
import axios from 'axios'

const Person = ({data}) => {
    
  const { name, height, mass, hair_color, homeplanet } = {data}

  return (
    <>
      <h1> Name: {name} </h1>
      <hr />
      <h3> Height: {height} </h3>
      <h3> Mass: {mass} </h3>
      <h3> Hair Color: {hair_color} </h3>
      <h3> Home Planet: {homeplanet} </h3>
    </>
  )
}

export default Person