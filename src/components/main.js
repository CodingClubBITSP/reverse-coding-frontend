import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from './Header';
import PlaceToVisit from './PlaceToVisit';
import video from '../vid.mp4'
import img from './wallpaperflare.com_wallpaper (1).jpg'
import './main.css'

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: img,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundColor: 'black'
  },
}));

export default function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className="vid">
      <video className='videoTag' autoPlay loop muted>
      <source src={video} type='video/mp4' />
      </video>
      </div>
      <CssBaseline />
      <Header />
      <PlaceToVisit />
    </div>
  );
}
