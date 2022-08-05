import { makeStyles } from '@material-ui/core/styles';

const font =  "'Poppins', sans-serif";

export default makeStyles((theme) => ({
  media: {
    borderRadius: '25px',
    objectFit: 'cover',
    width: '100%',
    maxHeight: '600px',
  },
  card: {
    display: 'flex',
    zIndex: 8,
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      flexDirection: 'column',
    },
  },
  section: {
    borderRadius: '20px',
    margin: '25px',
  },
  imageSection: {
    borderRadius: '25px',
  },
  recommendedPosts: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: '20px',
    padding: '2.5rem',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  loadingPaper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px',
    borderRadius: '15px',
    height: '20vh',
  },
  commentsOuterContainer: {
    marginTop: '5.5rem',
  },
  commentsInnerContainer: {
    height: '140px',
    overflowY: 'auto',
    marginRight: '5px',
  },
  font: {
    fontFamily: font,
  },
  postStats: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: 0,
  },
  postTags: {
    fontFamily: font,
    fontSize: '0.8rem',
    fontWeight: 'light',
  },
  postDate: {
    fontFamily: font,
  },
  postCreator: {
    fontFamily: font,
    fontWeight: 'bold',
    marginLeft: 0,
  },
  postLikes: {
    display: 'flex',
    fontFamily: font,
    marginTop: '1rem',
    background: 'linear-gradient(to right, rgb(199, 255, 247), rgb(255, 117, 205));',
    padding: '10px',
    borderRadius: '20px',
  },
  background: { 
    padding: '25px',
    borderRadius: '20px',
    background: 'linear-gradient(to right, rgb(199, 255, 247), rgb(255, 117, 205));',
  },
  recommendedImage: {
    borderRadius: '20px',
    padding: '5px',
  },
  wrapperSection: {
    width: '11rem',
    display: 'flex',
    justifyContent: 'flex-start',
  },
  bySearch: {
    fontFamily: font,
    fontSize: '1.2rem',
    fontWeight: 'light',
    padding: '9px',
    borderRadius: '30px',
    background: 'linear-gradient(to right, rgb(199, 255, 247), rgb(255, 117, 205));'
  },
}));