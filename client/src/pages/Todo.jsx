import React,{useContext} from 'react'
import { AppBar, Container,CssBaseline,Grid,Grow, Toolbar, Typography} from '@material-ui/core'
import EventNoteIcon from '@material-ui/icons/EventNote';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import useStyles from '../styles/styles'
import ItemList from '../components/ItemList'
import ItemForm from '../components/ItemForm'
import { UserContext } from '../contexts/UserContext'


export default function App() {
      const classes = useStyles()
      const {user}=useContext(UserContext)
  return (
    <>
    <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <EventNoteIcon className= {classes.icon} fontSize="large"/>
                    <Typography variant="h6">Plan IT</Typography>

                    {user && 
                      <>
                        <Typography variant="h6">{user.name}</Typography>
                        <ExitToAppIcon />
                      </>  
                      }

                </Toolbar>
            </AppBar>
          <Container maxWidth="lg">
            <Grow in>
              <Container>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={8}>
                    <ItemList />
                  </Grid>
                  <Grid item xs={12}md={4}>
                    <ItemForm />
                  </Grid>
                </Grid>
              </Container>
            </Grow>
          </Container>
          </>
  )
}