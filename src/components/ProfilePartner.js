import React from 'react'
import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';



const Profile = () => {
  const navigate = useNavigate ();

  return (
    <div className='margintop'>
        <Container className='w-75 mx-auto'>
        <div className='d-flex w-100'>
            <div className='w-50'>
                <h1 className='fontgede'>Ini Menu Admin</h1>
        </div>
        </div>
        </Container>
    </div>
  )
}

export default Profile