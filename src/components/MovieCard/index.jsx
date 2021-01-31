import React, { useState, useMemo } from 'react';
import { Card, CardActionArea, CardMedia } from '@material-ui/core';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Stars from '../Stars';
import useStyles from './styles';
import WatchTrailerButton from '../WatchTrailerButton';
import WatchLaterButton from '../WatchLaterButton';
import SaveAsFavoriteButton from '../SaveAsFavoriteButton';
import { getMovieGenres } from '../../utils/MovieUtils';

const MovieCard = ({ movie, allGenres }) => {
  const classes = useStyles({ background_path: movie.backdrop_path });
  const [showingContent, setShowingContent] = useState(false);

  const genres = useMemo(() => {
    if (allGenres) {
      return getMovieGenres(allGenres, movie.genre_ids);
    }

    return [];
  }, [allGenres, movie.genre_ids]);

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia>
          <div
            data-testid={`movieId-${movie.id}`}
            className={classes.image}
            onMouseEnter={() => setShowingContent(true)}
            onMouseLeave={() => setShowingContent(false)}
          >
            <div className={classes.content} style={{ opacity: showingContent ? 1 : 0 }}>
              <h3 className={classes.title}>{movie.title ? movie.title : movie.name}</h3>
              <div className={classes.stars}><Stars vote_average={movie.vote_average} fontSize="small" /></div>
              <div className={classes.footer}>
                <div className={classes.genres}>
                  {genres.map((genre, i) => (
                    <div key={genre.id}>
                      <span>{genre.name}</span>
                      {(i !== (genres.length - 1)) && <span className={classes.point}><FiberManualRecordIcon fontSize="inherit" /></span>}
                    </div>
                  ))}
                </div>
                {
                  (!movie.media_type || movie.media_type === 'movie') &&
                  <div className={classes.actions}>
                    <WatchTrailerButton movieId={movie.id} fontSize="small" showText={false} />
                    <SaveAsFavoriteButton movie={movie} fontSize="small" showText={false} />
                    <WatchLaterButton movie={movie} fontSize="small" showText={false} />
                  </div>
                }
              </div>
            </div>
          </div>
        </CardMedia>
      </CardActionArea>
    </Card>
  );
};

export default MovieCard;
