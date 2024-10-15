import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <>
    <Container className='d-flex justify-content-center align-items-center py-5 px-4'>
      <Row className='mt-5 d-flex justify-content-center align-items-center'>
        <Col md={6}>
        <h3 className='mt-md-5'>Welcome to <span className='text-warning'>Media Player</span></h3>
        <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae accusantium perferendis, illo fugit accusamus quod quam deleniti magnam tempora minus dolorum, tenetur cumque dignissimos iste. Vero nostrum quis omnis aspernatur.</p>
        <Link to={'/home'}> <button className='btn btn-warning mt-5'>Get Started</button></Link>
        </Col>
        <Col md={1}></Col>
        <Col md={5} className='d-flex justify-content-center mt-5 mt-md-0'> 
        <img src="./media/4.gif" alt="no image" className='w-75 d-flex justify-content-center align-items-center' />
        
        </Col>
        
      </Row>
    </Container>


    <Container>
      <Row>
        <h2 className='text-primary d-flex justify-content-center align-items-center'>Features</h2>
        <Col md={4} className='mt-4 d-flex justify-content-center align-items-center p-3'>
        <Card style={{ width: '80%', height:'500px'}}>
      <Card.Img variant="top" src="./media/1.gif" className='w-100' height={'300px'} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card></Col>

        <Col md={4} className='mt-4 d-flex justify-content-center align-items-center p-3'>
        <Card style={{ width: '80%', height:'500px'}}>
      <Card.Img variant="top" src="./media/music-beat.gif" className='w-100' height={'300px'} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card></Col>
        <Col md={4} className='mt-4 d-flex justify-content-center align-items-center p-3'>
        <Card style={{ width: '80%', height:'500px' }}>
      <Card.Img variant="top" src="./media/3.gif" className='w-100' height={'300px'} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card></Col>
      </Row>
    </Container>

    <div className="container">
      <div className="row p-md-5 p-3 d-flex align-items-center justify-content-center">
        <div className="col-md-10 border border-secondary border-2 rounded p-4">
          <div className="row">
            <div className="col-md-6">
              <h4 className='text-warning'>Simple Fast And Powerfull</h4>
              <p className='mt-2 text-align-justify'><span className='fs-4'>Lorem ipsum dolor</span> sit amet consectetur, adipisicing elit. Alias itaque incidunt id dolore necessitatibus atque expedita distinctio </p>
              <p className='mt-2 text-align-justify'><span className='fs-4'>Lorem ipsum dolor</span> sit amet consectetur, adipisicing elit. Alias itaque incidunt id dolore necessitatibus atque expedita distinctio </p>
              <p className='mt-2 text-align-justify'><span className='fs-4'>Lorem ipsum dolor</span> sit amet consectetur, adipisicing elit. Alias itaque incidunt id dolore necessitatibus atque expedita distinctio </p>
            </div>
            <div className="col-md-6">
            <iframe width="100%" height="414" src="https://www.youtube.com/embed/e1BHIY9p2WU" title="Eyy Banane - Video  | Vaazha | Vipin Das | Anand Menen | Electronic Kili |Siju Sunny |Joemon Jyothir" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Landing