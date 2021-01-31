import React, { useState, useEffect } from 'react';

import MovieCreationOutlinedIcon from '@material-ui/icons/MovieCreationOutlined';
import VolumeUpRoundedIcon from '@material-ui/icons/VolumeUpRounded';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

import { getHomePoster } from '../../api/moviesServices';
import Stars from '../Stars';
import useStyles from './styles';

import WatchTrailerButton from '../WatchTrailerButton';
import Loading from '../Loading';
import WatchLaterButton from '../WatchLaterButton';

const HomeMovie = () => {
  const [homePoster, setHomePoster] = useState(null);
  const classes = useStyles({ homePoster });

  useEffect(() => {
    const fetchHomePoster = async () => {
      const posterData = await getHomePoster();
      setHomePoster(posterData);
    };

    fetchHomePoster();
  }, []);

  if (!homePoster) {
    return <Loading />;
  }

  return (
    <div className={classes.root}>
      <div className={classes.genres}>
        {`${homePoster.release_date.split('-')[0]}`}
        <div className={classes.separator}>
          {' '}
          <FiberManualRecordIcon fontSize="inherit" />
        </div>
        {`${homePoster.genres.map((gen) => gen.name).join(', ')}`}
      </div>
      <div className={classes.header}>
        <h1 className={classes.title}>{homePoster.original_title}</h1>
        <span className={classes.clasification}>PG 13</span>
      </div>
      <div className={classes.info}>
        <div className={classes.duration}>
          {`${parseInt(homePoster.runtime / 60)}:${homePoster.runtime % 60} hs`}
        </div>
        <div className={classes.director}>
          <MovieCreationOutlinedIcon />
          <span className={classes.directorName}>{homePoster.production_companies.map((dir) => dir.name).join(', ')}</span>
        </div>
        <Stars vote_average={homePoster.vote_average} />
      </div>
      <p className={classes.description}>{homePoster.overview}</p>
      <div className={classes.actions}>
        <div className={classes.footer}>
          <div className={classes.footerAction}>
            <WatchLaterButton movie={homePoster} />
          </div>
          <div className={classes.footerAction}>
            <WatchTrailerButton movieId={homePoster.id} />
          </div>
        </div>
        <VolumeUpRoundedIcon />
      </div>
    </div>
  );
};

export default HomeMovie;
