
import React, { useContext, useState, useEffect } from "react"
import {
  BrowserRouter as
  Link,
  // Router,
  Route
} from "react-router-dom"

import { Container, Navbar, Nav, NavDropdown, Row, Col } from 'react-bootstrap';
import { faCloudDownloadAlt } from "@fortawesome/free-solid-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.css'
import trackingCall from "../utils/trackingCall"
// import LayoutConatainer from "../components/LayoutContainer"
// import { artistsPageContext,
//     titleNameContext
//     } from "./LayoutContainer"
import { set } from "react-ga";
// import { set } from "react-ga";


const Header = (
  {titleName, cover, coverArt, alt, appContext}
  ) => {
    const [context, setContext] = appContext

    function handleClick (title, artistsPage) {
        console.log('handleClick,', title, artistsPage)
        alert('handleClick', title, artistsPage)
        setContext({title: title, artistPage: artistsPage})
        console.log('setContext', context)
    }

    // const {title, setTitle} = useContext(titleNameContext)
    let title = context.title
    handleClick("Away", true)

    console.log ('header', title)
    console.log ('alt', alt)

    console.log ('context', context, setContext )
    console.log ('context passed', appContext)
  return (

  // <Router>
  <header >
  {/* <titleNameContext.Provider value = {{title, setTitle}}> */}
   <div className='header-container container-fluid' id='title'>
    <Container fluid >
      <Navbar  bg="transparent" variant="dark" expand="lg">
        <Navbar.Brand className="nav-brand" >Larsxn</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"  />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav as="ul" className="ml-auto">
            <Nav.Item as="li" >
              <a href="/#title" onClick={() => {trackingCall('Home')}}
              className='nav-link' >Home</a>
            </Nav.Item>

            <NavDropdown title="Artists" id="basic-nav-dropdown">
            <NavDropdown.Item as="li" className='nav-item dropdown-item'>
                <a href = "/Layout" className='nav-item dropdown-item'
                  onClick={() => {
                    alert(title)
                    // upTitle("Lie")
                    alert(title)
                    trackingCall('Lie. Artists')}}
                  >Lie.' - Single</a>
              </NavDropdown.Item>

              <NavDropdown.Item as="li" className='nav-item dropdown-item'>

                <a href = "/Layout" className='nav-item dropdown-item'
                  onClick={(e) => {
                    alert(title)
                    setContext({title: "Away", artistsPage: true})
                    alert('post call', title)
                    alert('context', context)
                    trackingCall('Away Artists')}}
                  >'Away' - EP</a>
              </NavDropdown.Item>

            </NavDropdown>
            <Nav.Item as="li" className='nav-link'>
              <a href="/#channels" onClick={() => {trackingCall('Channels')}}
                  className='nav-link'>Stream</a>
            </Nav.Item>
            <Nav.Item as="li" className='nav-link'>
              <a href="/#demos" onClick={() => {trackingCall('Demos')}}
              className='nav-link'
              props={{titleName: titleName}}>Sample</a>
            </Nav.Item>
            <Nav.Link className='nav-link' onClick={() => {trackingCall('Contact')}}
            href="mailto:info@larsxn.com?subject=Hey Larsxn!">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Row className="title-name-container">
        <Col>
          <h1 className="big-heading">{cover}</h1>
          {/* <--Bootstrap button classes with Fontawesome icons-->
          <!-- event, category, action, label, value -->  */}
          <div>
          <a href="/#channels">
            <button type="button" onClick={() => {trackingCall('Channels')}}
              className="btn btn-dark btn-lg buy-btn">
            <FontAwesomeIcon icon={faCloudDownloadAlt}/> Stream</button>
          </a>
          <a href="/#demos">
          <button type="button" onClick={() => {trackingCall('Demos')}}
             className="btn btn-outline-light btn-lg buy-btn">
            <FontAwesomeIcon icon={faDownload}/> Sample</button>
            </a>
            </div>
        </Col>
        <Col id="cover-art">
        <img id="cover" src={coverArt}  alt={alt}/>
        </Col>
      </Row>
      </Container>
      </div>
      {/* </titleNameContext.Provider> */}
  </header>
  // {/* <Route path ="/" component={Layout} /> */}
)}

export default Header