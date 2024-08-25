import { useEffect, useState } from "react";


function useCurrencyInfo(currency){
    const [data,setData]=useState({});
    
    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/5fb1bba4695cd2f4cffe1c0f/latest/${currency}`)
        .then((res) => res.json())
        .then((res) => setData(res.conversion_rates));

    },[currency])
    // console.log(data);
    
    return data;
}


export default useCurrencyInfo;
