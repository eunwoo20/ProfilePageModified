import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {MDBContainer,MDBCard,MDBRow,MDBCol,MDBCardImage, MDBCardTitle, MDBCardText,MDBCardBody} from 'mdb-react-ui-kit';

const Post = ({ username, imageUrl, likes, caption }) => {
  return (
    // <MDBContainer className="py-5 w-100 bg-primary">
    //     <MDBRow>
    //       <MDBCard>
    
    //         {/* <MDBCardImage className="w-100" src={'https://media.istockphoto.com/id/1311084127/photo/positive-young-lady-wearing-headphones-look-at-camera-hold-cellular.jpg?s=1024x1024&w=is&k=20&c=JUws4aXdK2hQKws2PgYPY1q9vdqxsOm2DAIoCtPsvzk='} alt="Instagram post" position="top"/> */}
    //         <img src='https://mdbootstrap.com/img/new/slides/041.webp' className='img-fluid shadow-4' alt='...' />
    //           <MDBCardBody>
    //             <MDBCardTitle>{username}</MDBCardTitle>
    //             <MDBCardText>{caption}</MDBCardText>
    //             <MDBCardText>{likes} likes</MDBCardText>
    //           </MDBCardBody>

    //       </MDBCard>
    //     </MDBRow>
    // </MDBContainer>

    <div className="container mt-5">
      <div className="row">
          <div className="row pb-3 pt-1 border-bottom">
              <div className="d-flex align-items-center mb-2">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  className="rounded-circle"
                  alt="Hollywood Sign on The Hill"
                  width={30}
                />
                <span>Sanjana</span>
              </div>
              <img src='https://mdbootstrap.com/img/new/slides/041.webp' className='img-fluid' alt='...' />
              <p className="m-0">sanjana sanjeev patil</p>
          </div>
          <div className="row pb-3 pt-1 border-bottom">
              <div className="d-flex align-items-center mb-2">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  className="rounded-circle"
                  alt="Hollywood Sign on The Hill"
                  width={30}
                />
                <span>Sakshi</span>
              </div>
              <img src='https://mdbootstrap.com/img/new/slides/041.webp' className='img-fluid' alt='...' />
              <p className="m-0">Sakshi Sandeep Kadam</p>
          </div>
          <div className="row pb-3 pt-1 border-bottom">
              <div className="d-flex align-items-center mb-2">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  className="rounded-circle"
                  alt="Hollywood Sign on The Hill"
                  width={30}
                />
                <span>Utkarsha</span>
              </div>
              <img src='https://mdbootstrap.com/img/new/slides/041.webp' className='img-fluid' alt='...' />
              <p className="m-0">Utkarsha Mukund Jadhav</p>
          </div>
      </div>
    </div>
  );
}
 export default Post;