import React, { useEffect, useState } from 'react'

export default function App() {

    const [weatherData, setWeatherData] = useState('');
    const [location, setLocation] = useState('')
    const [formSubmitted, setFormSubmitted] = useState(false)

    useEffect(()=>{
        if(!location) return
        ;(async function(){
            const response = await fetch(`https://api.weatherapi.com/v1/current.json?q=${location}&key=adcb7789b8e2484b8ce71006262709`)
            console.log(response)
            const data = await response.json();
            console.log(data)
            setWeatherData(data)
        })()
    },[formSubmitted])

    // if(!weatherData){
    //     return <>Loading...</>
    // }

  return (
    <div>
        <input type="text"  value={location} onChange={(e)=> setLocation(e.target.value)}/>
        <button onClick={()=> setFormSubmitted(true)}>Submit </button>

        {formSubmitted && <>
            <h1>Weather Information</h1>
            {weatherData ? weatherData.location.name : <>Loading....</>}

        </>}
    </div>
  )
}
