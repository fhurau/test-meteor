import React from 'react'
import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';



const AddProduct = () => {
  const navigate = useNavigate ();

  return (
    <div>
        <Container className='w-75 margintop'>
            <h2 className=''>Add Books</h2>
            <form action="">
                <div className='d-flex mt-5 mb-3'>
                    <input type="text" className='w-75 me-3 labeladd' placeholder='   Title' />
                    <input type="text" className='w-25 labeladd' placeholder='  Attach File'/>
                </div>
                <div className='d-flex justify-content-end mt-3'>
                    <button className='w-25 fw-bold text-light rounded tombolsave' onClick={()=> navigate('/income-transactions')}>Save</button>
                </div>
            </form>
        </Container>
    </div>
  )
}

export default AddProduct