import React, { useState } from 'react'
import { Button, Container, Form, Nav, Navbar, Row } from 'react-bootstrap'

function NavBar({filterSearch}) {

const [searchValue, setsearchValue] = useState('');

  const onSearch =(e)=>{
    e.preventDefault()

    filterSearch(searchValue)
  }
  return (  
      <Row>
       <Navbar expand="lg" className="bg-dark" variant="dark">
      <Container >
        <Navbar.Brand href="#"><img className='img-logo' src="997f441a-logo.png" alt="..."  /> </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="ابحث.."
              className="me-2"
              onChange={(e)=>setsearchValue(e.target.value)}
              value={searchValue}
            />
            <button onClick={onSearch} className='btn-search me-2'>بحث</button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Row>

  )
}

export default NavBar
