import React from 'react';
import { ReactPhotoCollage } from "react-photo-collage";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,

} from 'mdb-react-ui-kit';
import PhotoCollage from '../Component/PhotoCollage';
import Post from '../Component-4/Post';
import Video from '../Component-4/Video';

export default function ProfilePage() {
  return (
    
      // <MDBContainer className="py-5">

      //   <MDBRow>
      //     <MDBCol lg="4">
      //       <MDBCard className="mb-4">
      //         <MDBCardBody className="text-center">
      //           <MDBCardImage
      //             src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
      //             alt="avatar"
      //             className="rounded-circle"
      //             style={{ width: 'auto' }}
      //             fluid />
      //           <p className="text-muted mb-1">Full Stack Developer</p>
      //           <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
      //           <div className="d-flex justify-content-center mb-2">
      //             <MDBBtn>Follow</MDBBtn>
      //             <MDBBtn outline className="ms-1">Message</MDBBtn>
      //           </div>
      //         </MDBCardBody>
      //       </MDBCard>
      //     </MDBCol>
      //   </MDBRow>
      // </MDBContainer>
      <div className="profile-container">
        <div className="text-center shadow-4 m-4 py-4 w-100">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
            className="rounded-circle mb-3"
            alt="Hollywood Sign on The Hill"
            width={80}
          />
          <p className="text-muted mb-1">Full Stack Developer</p>
          <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
          <div className="d-flex justify-content-center mb-4">
              <MDBBtn>Follow</MDBBtn>
              <MDBBtn outline className="ms-1">Message</MDBBtn>
          </div>
        </div>
        <div className="m-4 text-center w-100">
          <ReactPhotoCollage {...PhotoCollage} />
        </div>
        <div className="text-center shadow-4 m-4 py-4 w-100">
          <Video />
        </div>
      </div>
  );
}