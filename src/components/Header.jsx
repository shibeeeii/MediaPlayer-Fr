import { faVideo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
     <Navbar className="bg-transparent">
        <Container>
<Link to={'/'} style={{textDecoration:'none'}}>
            <Navbar.Brand className='text-warning'>
            <FontAwesomeIcon icon={faVideo} beatFade className='me-2 mt-3 fa-lg' />{' '}
            Media Player
            </Navbar.Brand>
</Link>
        </Container>
      </Navbar>
    
    </>
  )
}

export default Header