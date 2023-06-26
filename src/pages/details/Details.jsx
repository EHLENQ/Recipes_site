import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

function Details() {
    const { id } = useParams();
    const url = `http://localhost:3000/tarifler/${id}`;

    const {data: tarif , isloading , error } = useFetch(url);
    const {btncolor} = useContext(ThemeContext);

  return (
    <div className='row mt-4'>
        {isloading && <div className='alert alert-warning'>Yükleniyor...</div>}
        {error && <div className='alert alert-danger'>{error}</div>}
        {
            tarif && (
                <>
                   
                    <div className="col-4 ">
                        <img src={"../img/" + tarif.resim} className="img-fluid rounded" alt={tarif.baslik}/>
                    </div>
                    <div className="col-8">
                        <h5>{tarif.baslik}</h5>
                        <p>{tarif.aciklama}</p>
                        <p>Malzemeler:</p>
                        <ul>
                            {
                                tarif.malzemeler.map((malzeme,index) => (
                                    <li key={index}>
                                        {malzeme}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="col-12">
                        <hr />
                        <p>{tarif.hazirlanisi}</p>
                        <a href={tarif.url} className={`btn btn-outline-${btncolor}`}>İncele</a>
                    </div>
                </>
            )
        }
    </div>
  )
}

export default Details