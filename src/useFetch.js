import {useState,useEffect} from 'react'

const useFetch = (url) => {
    const [data,setData]=useState(null);
    const [isPending,setIsPending]=useState(true)
    const [error,setError]=useState(null)

    // Can't use async inside this function
    useEffect(()=>{
        const abortCont= new AbortController();

        setTimeout(()=>{
            fetch(url, { signal: abortCont.signal })
                .then(res=>{
                    if(!res.ok){
                        throw Error('could not fetch the data for that resource')
                    }
                    return res.json(); // Parses the json into a javascript object
                })
                .then((data)=>{
                    setData(data);
                    setIsPending(false);
                    setError(null)
                })
                .catch((err)=>{
                    if (err.name==='AbortError'){
                        console.log('fetch aborted')
                    } else{
                        setIsPending(false);
                        setError(err.message)
                    }                    
                })
        },1000);

        return() => abortCont.abort();
    },[url]); // Passing url in the square brackets causes the function to update whenever the url changes

    return{data,isPending,error}
}
 
export default useFetch;