import React from 'react'
import { Card, Grid } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const People = ({ data }) => {
  return (
    <>
      <h1> People </h1>
      <hr />
      <br />
      <Grid columns={5}>
        {data.map((people, i) => {
          return (
            <Grid.Column key={i}>
              <Link to='/people/:id'>
                <Card>
                  <Card.Content>
                    <Card.Header>{people.name}</Card.Header>
                    <Card.Description>
                      <strong> Height: </strong>
                      <p> {people.height} </p>
                      <strong> Mass: </strong>
                      <p> {people.mass} </p>
                      <strong> Hair Color: </strong>
                      <p> {people.hair_color} </p>
                    </Card.Description>
                  </Card.Content>
                </Card>
              </Link>
            </Grid.Column>
          )
        })}
      </Grid>
    </>
  )
}

export default People