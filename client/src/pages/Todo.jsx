import React from 'react'
import { Container,AppBar,Typography,Toolbar,CssBaseline,Grow,Grid} from '@material-ui/core'
import EventNoteIcon from '@material-ui/icons/EventNote';
import useStyles from '../styles/styles'
import ItemList from '../components/ItemList'
import ItemForm from '../components/ItemForm'


export default function App() {
      const classes = useStyles()
  return (
    <>
    <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <EventNoteIcon className= {classes.icon} fontSize="large"/>
                    <Typography variant="h6">Plan IT</Typography>
                </Toolbar>
            </AppBar>
          <Container maxWidth="lg">
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
          </>
  )
}