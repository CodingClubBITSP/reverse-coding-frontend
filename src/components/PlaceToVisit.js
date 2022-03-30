import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from './ImageCard';
import places from '../static/places';
import useWindowPosition from '../hook/useWindowPosition';
import {Link} from "react-router-dom"
import './PlaceToVisit.css'




const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },

  // screens:{
  //   height:'300px'
  // }

}));
export default function () {
  const classes = useStyles();
  const checked = useWindowPosition('header');
  return (
    <div className={classes.root} id="place-to-visit" style={{marginTop:"4rem"}}>
      <Link to={'/linux'}> <ImageCard className='screens' place={places[2]} checked={checked} /></Link>    
      <Link to={'/macos'}><ImageCard className='screens' place={places[1]} checked={checked} /></Link>
      <Link to={'/windows'}><ImageCard className='screens' place={places[0]} checked={checked} /></Link>
    </div>
  );
}
