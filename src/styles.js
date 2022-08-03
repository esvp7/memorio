import { makeStyles } from '@material-ui/core/styles';

const font =  "'Cherry Swash', cursive";

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 30px',
    marginLeft: '50px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    background: 'linear-gradient(to right, rgb(245, 255, 255), rgb(255, 117, 218));'
  },
  heading: {
    color: '#612283',
    fontFamily: font,
    fontSize: 50,
    marginLeft: '15px',
    paddingTop: '15px',
    paddingBottom: '8px',
  },
  image: {
    marginLeft: '3rem',
  },
  [theme.breakpoints.down('sm')] : {
    mainContainer: {
      flexDirection: 'column-reverse',
     },
  }
}));