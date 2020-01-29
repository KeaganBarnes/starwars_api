import React, {useEffect} from 'react'

const Person = () => {

  let {data} = fetch('https://swapi.co/api/people/?formatjson')
  
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