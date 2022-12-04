import React, { useContext, useState } from 'react';
import {  Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Modal from 'react-bootstrap/Modal';
import "./Style.css"
import { useNavigate } from 'react-router-dom';
import profilekecil from "../components/Dummy/profilekecil.png"
import { Dropdown } from 'react-bootstrap';
import { UserContext } from './context/userContext';
import { useCart } from "react-use-cart";
import user from "./Dummy/user.png"



function NavbarComp() {
  const { totalItems } = useCart();
const [dataUser, setLogin] = useContext(UserContext)
console.log(dataUser, "APA ITU");

  const navigate = useNavigate ();
  
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const [showregister, setShowregister] = useState(false);
  
    const handleCloseregister = () => setShowregister(false);
    const handleShowregister = () => setShowregister(true);
  

  const[form, setForm] = useState({
    email:"",
  })
  const handleOnChange =(e) =>{
    setForm({
      ...form,
      [e.target.name] : e.target.value
    })
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    
    if(form.email === "admin@mail.com"){
      setLogin({
        type: "LOGIN_ADMIN"
      })
      handleClose()
      navigate('/Profile-Partners')
  } else if (form.email === "user@mail.com"){
    setLogin({
      type: "LOGIN_USER"
    })
    handleClose()
  }
  else {
    alert("Masukan Email yang benar")
  }
}

const LogoutAdmin = (e) => {
  e.preventDefault()
  setLogin({
    type:"LOGOUT_ADMIN"
  })
 navigate('/')
}

const LogoutUser = (e) => {
  e.preventDefault()
  setLogin ({
    type: "LOGOUT_USER"
  })
  navigate('/')
}


  return (
    <div>
    <Navbar expand="lg" className='colornav'>
      <Container>
        <Navbar.Brand onClick={()=> navigate('/')}><h3>Meteor Book's</h3></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            {dataUser.isLogin ?  
            <div className='d-flex'>
            <Dropdown>
              <Dropdown.Toggle variant="transparent" id="dropdown-basic" >
                <img style={{width:'40px'}}  src={profilekecil} alt="profile"  className=''/>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey="1"><button variant="transparent" className='text-decoration-none text-dark logout' onClick={()=> navigate('/profiles')}>List Buku</button></Dropdown.Item>
              <Dropdown.Divider />
                <Dropdown.Item eventKey="3"><button variant="transparent" className='text-decoration-none fw-bold text-dark logout' onClick={LogoutUser}>Log Out</button></Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            </div> : dataUser.isLoginAdmin ?
            <Dropdown>
              <Dropdown.Toggle variant="transparent" id="dropdown-basic" >
                <img style={{width:'40px'}}  src={user} alt="profile"  className=''/>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey="2"><button variant="transparent" className='text-decoration-none text-dark logout' onClick={()=> navigate('/add-products')}>Add Books</button></Dropdown.Item>
              <Dropdown.Divider />
                <Dropdown.Item eventKey="3"><button variant="transparent" className='text-decoration-none fw-bold text-dark logout' onClick={LogoutAdmin}>Log Out</button></Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            : <div className='d-flex'>
              <Button className='bg-button me-1 d-flex align-items-center justify-content-center fw-bolder'onClick={handleShowregister}>Register</Button>
              <Button className='bg-button  d-flex align-items-center justify-content-center fw-bolder'  onClick={handleShow}>Log In</Button>
            </div> }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Modal show={show} onHide={handleClose} className=' d-flex flex-column justify-content-center align-items-center'>
        <Modal.Body>
        <form>
          <div className='modalbody'>
          <h2>Login</h2>
          </div>
          <div class=" modalinput mx-auto">
            <label for="exampleInputEmail1" class="form-label"></label>
            <input name="email" type="email" class="form-control modalinputt" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email' value={form.email} onChange={handleOnChange}/>
          </div>
          <div class=" modalinput mx-auto mb-4">
            <label for="exampleInputPassword1" class="form-label"></label>
            <input type="password" class="form-control modalinputt" id="exampleInputPassword1" placeholder='Password' />
          </div>
          <div className='d-flex justify-content-center '>
            <Button variant="primary" className="login m-4" onClick={
              handleOnSubmit
            } >Log In</Button>
          </div>
          <div className='d-flex justify-content-center '>
            <p>Don't have an account ? Klik {" "} <strong className='cursor' onClick={() =>{handleClose () ; handleShowregister()}}>Here</strong></p>
          </div>
        </form>
        </Modal.Body>
      </Modal>
      <Modal show={ showregister } onHide={handleCloseregister} className=' d-flex flex-column justify-content-center align-items-center'>
        <Modal.Body>
        <form>
          <div className='modalbody mt-3'>
          <h2 className=''>Register</h2>
          </div>
          <div class=" modalinput mx-auto">
            <label for="exampleInputEmail1" class="form-label"></label>
            <input type="email" class="form-control modalinputt" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email'/>
          </div>
          <div class=" modalinput mx-auto">
            <label for="exampleInputEmail1" class="form-label"></label>
            <input type="password" class="form-control modalinputt" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Password'/>
          </div>
          <div class=" modalinput mx-auto">
            <label for="exampleInputEmail1" class="form-label"></label>
            <input type="text" class="form-control modalinputt" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Full Name'/>
          </div>
          <div class=" modalinput mx-auto">
            <label for="exampleInputEmail1" class="form-label"></label>
            <input type="text" class="form-control modalinputt" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Gender'/>
          </div>
          <div class=" modalinput mx-auto mb-4">
            <label for="exampleInputEmail1" class="form-label"></label>
            <input type="number" class="form-control modalinputt" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Phone Number'/>
          </div>
          <div class=" modalinput mx-auto mb-2">
          <select class="form-select modalinputt" aria-label="Default select example">
            <option selected hidden>As Who ?</option>
            <option value="1">User</option>
            <option value="2">Admin</option>
          </select>
          </div>
          <div className='d-flex justify-content-center '>
          <Button variant="primary" onClick={handleCloseregister} className="login m-4">Register</Button>
          </div>
          <div className='d-flex justify-content-center '>
            <p>Already have an account ? Klik <strong className='cursor' onClick={() =>{handleShow () ; handleCloseregister()}}>Here</strong></p>
          </div>
        </form>
        </Modal.Body>
      </Modal>
      
    </div>
    
  );
}


export default NavbarComp;

