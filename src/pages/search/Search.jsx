import React from 'react';
import ProductCard from '../../components/ProductCard';
import useFetch from '../../hooks/useFetch';
import { useSearchParams } from 'react-router-dom';

function Search() {
    const [searchparams] = useSearchParams();
    const query = searchparams.get('q');
    
    const url =  `http://localhost:3000/tarifler?q=${query}` 
    const {data: tarifler , isloading , error} = useFetch(url);


  return (
    <div className="row mt-3 ">
        <h2>Aranan Kelime "{query}"</h2>
        <hr />
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

export default Search