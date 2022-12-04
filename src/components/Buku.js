import React from 'react'
import { useNavigate } from 'react-router-dom';
import { cards } from './Dummy/Card'




export const Buku = () => {
  const navigate = useNavigate ();

  return (
    <div className='w-75 mx-auto gap-5 mt-5 mb-5'>
        <div className='d-flex justify-content-center'>
            <h2>Book's</h2>
        </div>
        <div>
        <div className='d-flex justify-content-between flex-wrap mx-auto mt-5'>

          {cards.map((item) => {
            return(
            <div class="card cursor" style={{width: "18rem"}} onClick={() => navigate("/detail-menu")}>
            <img class="card-img-top" src={item.image} alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title d-flex justify-content-start" >{item.nama}</h5>
              <p class="card-text d-flex justify-content-start">{item.desc}</p>
              <button className='w-100 bg-button'>Pinjam Buku</button>
            </div>
          </div>
            ) 
        })} 
        </div>
        </div>
    </div>
  )
}

