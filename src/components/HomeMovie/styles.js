import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    color: '#ffffff',
    backgroundImage: ({ homePoster }) => (homePoster ? `url(https://image.tmdb.org/t/p/original/${homePoster.backdrop_path})` : 'none'),
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top',
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    justifyContent: 'center',
    padding: '0 15vw',
    background: 'rgba(0,0,0,0.4)',
    backgroundBlendMode: 'darken',
  },

  info: {
    display: 'flex',
    flexWrap: 'wrap',

    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },

  actions: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },

  header: {
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'space-between',
  },

  duration: {
    display: 'flex',
    alignItems: 'center',
    lineHeight: '19px',
    padding: '4px 6px',
    borderRadius: '8px',
    background: '#FF056C',
    marginRight: '12px',
    marginBottom: '10px',
  },

  title: {
    fontSize: '70px',
    textTransform: 'uppercase',
    lineHeight: '56px',

    [theme.breakpoints.down('sm')]: {
      fontSize: '60px',
    },
  },

  footer: {
    display: 'flex',

    [theme.breakpoints.down('sm')]: {
      width: '90%',
      justifyContent: 'flex-start',
    },
  },

  director: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '12px',
    marginBottom: '10px',
  },

  directorName: {
    marginLeft: '5px',
  },

  description: {
    lineHeight: 2,
  },

  footerAction: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '20px',
  },

  clasification: {
    border: '1px white solid',
    borderRadius: '20px',
    padding: '7px 12px',
    textAlign: 'center',
  },

  separator: {
    fontSize: '8px',
    marginRight: '1%',
    marginLeft: '1%',
  },

  genres: {
    display: 'flex',
    alignItems: 'center',
  },
}));

export default useStyles;
