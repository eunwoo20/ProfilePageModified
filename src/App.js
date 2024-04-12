import React from 'react';
import ProfilePage from './Components/ProfilePage';
import PhotoCollage from './Component/PhotoCollage';
import Post from './Component-4/Post';
import AdPage from './AdComponent/AdPage';
import {MDBContainer,MDBCard,MDBRow,MDBCol,MDBCardBody} from 'mdb-react-ui-kit';
import { Container, Grid, Card, CardMedia, Typography } from '@material-ui/core';

import SliderPage from './Component-3/SliderPage';
import './App.css'
 

function App() {                                                                 //<ReactPhotoCollage {...PhotoCollage} />
  return (
    <div className="main-container">
      <div className="row">
        <div className="col-md-3">
          <ProfilePage />
        </div>
        <div className="col-md-6 px-5 post-container">
          <SliderPage/>
          <Post />
        </div>
        <div className="col-md-3">
           <AdPage /> 
        </div>
      </div>
    </div>
  );
}

export default App;
