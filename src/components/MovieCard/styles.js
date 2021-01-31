import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '225px',
    borderRadius: '0px',
  },

  image: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    backgroundImage: ({ background_path }) => `url(https://image.tmdb.org/t/p/w500/${background_path})`,
    height: 125,
    backgroundSize: 'cover',
    transition: 'all .5s ease',

    '&:hover': {
      boxShadow: 'inset 0px -70 100px -21px rgba(0,0,0,0.9)',
      WebkitBoxShadow: 'inset 0px -70px 100px -21px rgba(0,0,0,0.9)',
      MozBoxShadow: 'inset 0px -70px 100px -21px rgba(0,0,0,0.9)',
    },
  },

  content: {
    display: 'flex',
    flexDirection: 'column',
    padding: '8px',
    color: '#ffffff',
    transition: 'opacity 0.9s',
  },

  genres: {
    display: 'flex',
    flexWrap: 'wrap',
    fontSize: '10px',
    alignItems: 'center',
  },

  point: {
    marginRight: '3px',
    marginLeft: '3px',
    fontSize: '4px',
  },

  title: {
    margin: '0px',
  },

  stars: {
    margin: '4px 0px',
  },

  footer: {
    display: 'flex',
    justifyContent: 'space-between',
  },

  actions: {
    display: 'flex',
    justifyContent: 'end-flex'
  }
});

export default useStyles;
