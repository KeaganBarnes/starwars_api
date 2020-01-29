import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import People from './components/People'
import Person from './components/Person'
import Planets from './components/Planets'
import { Container, Dimmer, Loader } from 'semantic-ui-react'

const App = () => {
  const [people, setPeople] = useState([])
  const [planets, setPlanets] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchPeople() {
      let res = await fetch('https://swapi.co/api/people/?formatjson')
      let data = await res.json()
      setPeople(data.results)
      setLoading(false)
    }

    async function fetchPlanets() {
      let res = await fetch('https://swapi.co/api/planets/?formatjson')
      let data = await res.json()
      setPlanets(data.results)
      setLoading(false)
    }

    fetchPeople()
    fetchPlanets()
  }, [])

  // console.log('people', people)
  // console.log('planets', planets)

  return (
    <div style={background}>
      <Router>
        <Navbar />
        <Container>
          {loading ? (
            <Dimmer active inverted>
              <Loader inverted> Loading... </Loader>
            </Dimmer>
          ) : (

              <Switch>
                <Route exact path='/'>
                  <Home data={people} />
                </Route>
                <Route exact path='/people'>
                  <People data={people} />
                </Route>
                <Route exact path='/people/:id/' >
                  <Person data={people.name} />
                </Route>
                <Route exact path='/planets'>
                  <Planets data={planets} />
                </Route>
              </Switch>
            )}
        </Container>
      </Router>
    </div>
  );
}

const background = {
  backgroundImage: 'url(https://wallpapercave.com/wp/14wJuLo.png)',
  height: '100vh',
  color: 'white'
  }

export default App;
