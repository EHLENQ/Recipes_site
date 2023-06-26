import { useState , useEffect } from 'react';


const useFetch = (url , method="GET") => {
  const [data,setData] = useState(null);
  const [error,setError] = useState(null);
  const [isloading,setIsloading] = useState(false);
  const [options,setOptions] = useState(null);


  const postData = (data) => {
    setOptions({
      method:"POST",
      headers:{"content-type":"application/json"},
      body: JSON.stringify(data)
    })
  }


  useEffect(() => {
    setIsloading(true);
    const fetchData = async (options) => {
    
      try {
        const res = await fetch(url , {...options});
        if(!res.ok){
          throw Error(res.statusText); 
        }
        const data = await res.json();
        setIsloading(false);
        setData(data);
      } 
      catch (error) {
        setIsloading(false);
        console.log(error);
        setError(error.message);
      }

    }
    
    if(method === "GET"){
      fetchData();
    }
    if(method === "POST" && options)
    {
      
      fetchData(options);
    }
    
    
   },[url,options,method])


  return {
    data , isloading ,error , postData
  }

}

export default useFetch