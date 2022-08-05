import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

const font =  "'Cherry Swash', cursive";

export default makeStyles((theme) => ({
    appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 40px',
    background: 'linear-gradient(to right, rgb(245, 255, 255), rgb(255, 117, 218));',
  },
  heading: {
    color: '#612283',
    fontFamily: font,
    fontWeight: 'bold',
    fontSize: 50,
    marginLeft: '15px',
    marginRight: '12rem',
    paddingTop: '15px',
    paddingBottom: '8px',
    [theme.breakpoints.down('sm')]: {
      fontSize: 30,
    },
  },
  image: {
    [theme.breakpoints.down('sm')]: {
      marginLeft: '-20px',
      width: '10%',
      height: '10%',
    },
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'flex-start',
      width: '50px',
      marginLeft: '-100px',
    },
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      width: '10%',
      height: '10%',
      marginLeft: '-60px',
    },
  },
  logout: {
    marginLeft: '20px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '20px',
    },
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));