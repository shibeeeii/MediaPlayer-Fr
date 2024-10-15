import { faFacebook, faInstagram, faLinkedin, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faVideo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='container-fluid'>
      <div className="row">
        <div className="col-md-4 px-md-5">
        <h4 className='text-warning'><FontAwesomeIcon icon={faVideo} className='me-2' />{' '}
        Media Player</h4>
        <p style={{textAlign:'justify'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem deleniti repellendus sequi rerum repellat doloremque sapiente itaque, ex voluptate repudiandae fugit corporis est labore. Repudiandae voluptatibus aliquid repellat explicabo fugit.</p>
        </div>
        <div className="col-md-2 justify-content-center">
          <div>
            <h4>Links</h4>
            <Link to={'/'}><p className='mt-4'>Landing page</p></Link>
            <Link to={'/home'}><p>Home page</p></Link>
            <Link to={'/'}><p>Watch History</p></Link>
          </div>
        </div>
        <div className="col-md-2 justify-content-center">
        <div>
            <h4>Guides</h4>
            <p className='mt-4'>React</p>
            <p>React Bootstrap</p>
            <p>Bootswatch</p>
          </div>
        </div>
        <div className="col-md-4 px-md-5">
          <h4>Contact Us</h4>
<div className='d-md-flex mt-4'>
            <input type="text" placeholder='Email id' className='form-control' />
            <button className='btn btn-warning ms-3'>Subscribe</button>
</div>
          <div className="d-flex justify-content-between mt-4">
        <FontAwesomeIcon icon={faInstagram} className='fa-2x' />
        <FontAwesomeIcon icon={faTwitter} className='fa-2x' />
        <FontAwesomeIcon icon={faFacebook} className='fa-2x' />
        <FontAwesomeIcon icon={faLinkedin} className='fa-2x' />
        <FontAwesomeIcon icon={faWhatsapp} className='fa-2x' />
        </div>
        </div>
      </div>
    </div>
  )
}

export default Footer