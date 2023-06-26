import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../context/ThemeContext'

function ProductCard( { tarif } ) {

  const {btncolor} = useContext(ThemeContext);

  return (
    <div className=" col-3 mb-3 m-1 border">
        <img src={`img/${tarif.resim}`} className="card-img-top" alt={tarif.baslik}/>
        <div className="card-body p-3 ">
            <h5 className="card-title">{tarif.baslik}</h5>
            <p className="card-text">{tarif.aciklama}</p>
            <Link to={`/Details/${tarif.id}`} className={`btn btn-outline-${btncolor}`}>Tarifi İncele</Link>
        </div>
    </div>
  )
}

export default ProductCard