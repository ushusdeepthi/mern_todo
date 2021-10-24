import {makeStyles} from '@material-ui/core/styles'
import Image from '../assets/images/background.jpg'

const useStyles = makeStyles((theme)=>({
 icon:{
    marginRight:'1rem'
  },
  button:{
      marginRight:'1rem'
  },
  buttonSignup:{
      backgroundColor: theme.palette.background.paper,
  },
  container:{
        minHeight:'95vh',
         backgroundImage: `url(${Image})`,
         backgroundSize:'cover',
         backgroundRepeat:'no-repeat',
         opacity:0.5
      
  },

  heroText:{
    [theme.breakpoints.down('md')]: {
      width: '100%'
    },
    [theme.breakpoints.up('md')]: {
      width: '40%'
    },
    position: 'absolute',
    top: '40%',
    left: '5%',
    textAlign: 'center',
      
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
})) 

export default useStyles;