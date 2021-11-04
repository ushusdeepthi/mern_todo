import React,{useContext} from 'react'
import {useHistory} from 'react-router-dom'
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
      const history = useHistory()
      const logout= ()=>{
        localStorage.removeItem("user");
        history.push('/login')
      }
  return (
    <>
    <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <EventNoteIcon className= {classes.icon} fontSize="large"/>
                    <Typography variant="h6">Plan IT</Typography>

                    {user && 
                      <>
                        <Typography className={classes.utilityName} variant="h6">Hi {user.name}</Typography>
                        <ExitToAppIcon className={classes.utilityLogout} onClick={logout}/>
                        
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