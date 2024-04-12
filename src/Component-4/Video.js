import * as React from 'react';

const Video = ({ username, imageUrl, likes, caption }) => {
  return (

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
      </div>
    </div>
  );
}
 export default Video;