import React from 'react'
import { useRef } from 'react';
import { useState } from 'react'
import useFetch from '../../hooks/useFetch';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

function Create() {
  const [baslik,setBaslik] = useState('');
  const [aciklama,setAciklama] = useState('');
  const [hazirlanisi,setHazirlanisi] = useState('');
  const [malzemeler,setMalzemeler] = useState([]);
  const [malzeme,setMalzeme] = useState('');
  const [resim,setResim] = useState('');
  const [url,setUrl] = useState('');
  const malzemeInput = useRef(null);
  const navigate = useNavigate();

  const { postData, data } = useFetch("http://localhost:3000/tarifler", "POST");

  const {btncolor} = useContext(ThemeContext);

  useEffect(() => {
    if(data){
      navigate('/');

    }
  },[data, navigate ])

  const handleSubmit = (e) => {
    e.preventDefault();
    postData({baslik , aciklama , hazirlanisi , malzemeler , resim , url});
  }

  const handleMalzeme = (e) => {
    const item = malzeme.trim();

    setMalzemeler(previtems => [...previtems , item]);
    setMalzeme('');
  
    malzemeInput.current.focus();
    malzemeInput.current.value='';
  }

  return (
    <div className=' container mt-3'>
        <div className="card-body">
            <h2>Yeni Tarif Ekle:</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="baslik" className='form-label'>Başlık</label>
                    <input onChange={(e) => setBaslik(e.target.value)} type="text" name="baslik" id="baslik" className='form-control'/>
                </div>
                <div className="mb-3">
                    <label htmlFor="aciklama" className='form-label'>Açıklama</label>
                    <input onChange={(e) => setAciklama(e.target.value)} type="text" name="aciklama" id="aciklama" className='form-control'/>
                </div>
                <div className="mb-3">
                  <label htmlFor="malzemeler"> Malzemeler <ul> {malzemeler.map((item,index) => <li key={index}><small>{item}</small></li>)}</ul></label>
                  <div className="input-group">
                    <input ref={malzemeInput} onChange={(e) => setMalzeme(e.target.value)} className='form-control' type="text" name="malzeme" id="malzeme" />
                    <button onClick={handleMalzeme} className='btn btn-secondary' type="button">+</button>
                  </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="hazirlanisi" className='form-label'>Hazırlanısı</label>
                    <textarea onChange={(e) => setHazirlanisi(e.target.value)} type="text" name="hazirlanisi" id="hazirlanisi" className='form-control'/>
                </div>
                <div className="mb-3">
                    <label htmlFor="resim" className='form-label'>Resim</label>
                    <input onChange={(e) => setResim(e.target.value)} type="text" name="resim" id="resim" className='form-control'/>
                </div>
                <div className="mb-3">
                    <label htmlFor="url" className='form-label'>Url</label>
                    <input onChange={(e) => setUrl(e.target.value)} type="text" name="url" id="url" className='form-control'/>
                </div>
                <button className={`btn btn-${btncolor}`} type="submit">Ekle</button>
            </form>
        </div>

    </div>
  )
}

export default Create