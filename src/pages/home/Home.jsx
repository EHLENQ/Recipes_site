import React from 'react'
import ProductCard from '../../components/ProductCard';
import useFetch from '../../hooks/useFetch';



function Home() {
 const url =  "http://localhost:3000/tarifler"  
 const {data: tarifler , isloading , error} = useFetch(url);


  return (
    <div className="row mt-3 ">
        {isloading && <div className='alert alert-warning'>Yükleniyor...</div>}
        {error && <div className='alert alert-danger'>{error}</div>}
        {
            tarifler && tarifler.map(tarif =>(
                <ProductCard key={tarif.id} tarif={tarif}/>
            ))
            
        }
    </div>
  )
}

export default Home