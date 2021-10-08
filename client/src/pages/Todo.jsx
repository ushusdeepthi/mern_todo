import React from 'react'
import { Container, AppBar, Typography,Grow, Grid} from '@material-ui/core'


export default function App() {
  return (
          <Container maxWidth="lg">
            <AppBar position="static">
                <Typography variant="h2" align="center">TODO APP</Typography>
            </AppBar>
            <Grow in>
              <Container>
                <Grid container spacing={2}>
                  <Grid item xs={8}>
                    <h1>Here  goes the item List</h1>
                  </Grid>
                  <Grid item xs={4}>
                    <h1>Here  goes the item List</h1>
                  </Grid>
                </Grid>
              </Container>
            </Grow>
          </Container>
  )
}