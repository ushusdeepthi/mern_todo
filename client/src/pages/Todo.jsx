import React from 'react'
import { Container, AppBar, Typography,Grow, Grid} from '@material-ui/core'
import ItemList from '../components/ItemList'
import ItemForm from '../components/ItemForm'


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
                    <ItemList />
                  </Grid>
                  <Grid item xs={4}>
                    <ItemForm />
                  </Grid>
                </Grid>
              </Container>
            </Grow>
          </Container>
  )
}