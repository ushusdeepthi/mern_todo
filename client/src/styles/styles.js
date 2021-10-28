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
  buttonSize:{
    width:'30%',
    margin:'1rem'
  },
 
card:{
  height:'100%',
  display:'flex',
  flexDirection:'column'
},
cardContent:{
  flexGrow:'1'
},
modal: {
    position: 'absolute',
    top:'50%',
    left:'50%',
    width: 400,
    height:'auto',
    maxHeight:'85vh',
    overflow: 'auto',
    transform: 'translate(-50%, -50%)',
    zIndex:1300,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  blur:{
    backgroundColor:'gray',
  },
  date:{
    fontWeight:'500',
    marginTop:'2rem'
  }
})) 

export default useStyles;