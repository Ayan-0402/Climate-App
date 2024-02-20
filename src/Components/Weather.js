import React, { useEffect, useState } from 'react'
import '../App.css'
import { BiSearch } from "react-icons/bi";


const Weather = () => {
const [data, setData] = useState('')
const [input, setInput] = useState('')
const [icon, setIcon] = useState('')
const [description, setDescription] = useState('')

useEffect(() => {
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${input}&APPID=bad21f6255826f410eaecf26c0e89ddf`)
  .then((res) => res.json() )
  .then((json) => {
    setData(json);
    setIcon(data?.weather[0]?.icon);
    setDescription(data?.weather[0]?.main)
  })
  .catch((error)=>{
        console.error('Error Fetching Data: ', error);
      });
}, [input, data.weather])

const handleChange =(e)=>{
  setInput(e.target.value)

}

const tempFormatChanger = (num) =>{
    let temp = num / 10;
    return temp.toFixed(1)
}

const date = () =>{
    let date = new Date().toDateString()
    return date
}

  return (
    <div className='main h-[90vh] w-[150vh] text-white m-20 ml-48' >
      <div className='overlay  h-[90vh] w-[150vh]'>
        <div className='m-20 '>
          <div className='h-[6vh] w-[60vh] ml-36 mb-3 bg-white rounded-xl p-1 flex items-center justify-between'>
            <input className='h-[5vh] w-[55vh] border-none p-1 m-1 text-black text-sm' type='text' placeholder='Enter Any City' value={input} onChange={(e)=>{handleChange(e)}}/>
            <BiSearch className='rounded-full border-2 border-black m-2 text-2xl bg-black h-[5vh] text-white w-[5vh] p-1' />
          </div>
          <div className='flex justify-between my-10'>
            <div className=''>
              <span className='text-5xl font-mono font-bold h-[8vh]  '>{data.name}</span> <br></br>
            
              <span> { date() } </span> <br></br>
              {/* <soam> {CurrentTime()}  </soam> */}
              <span>
                  <img className='h-[16vh]' alt='' src={`https://openweathermap.org/img/wn/${icon}@2x.png`} />

              </span>
              <span className='text-2xl px-5 h-[5vh]'> {description} </span>
            </div>
            <div className='flex'> 
              <div>
                 <span className='text-8xl  '> {tempFormatChanger(data?.main?.temp)}  </span> 
              </div>
              <div>
                  <span className='text-2xl'>°C</span>
              </div>
            </div>
          </div>
        <div className='flex justify-evenly border-t-2 py-5'> 
        <div className='flex flex-col pr-5 border-r-2  items-center'>
              <span> Humidity  </span>
              <span> {data?.main?.humidity} °C </span>
          </div>
          <div className='flex flex-col pr-5 border-r-2 items-center'>
              <span> Latitude  </span>
              <span> {data?.coord?.lat.toFixed(2)} </span>
          </div>
          <div className='flex flex-col pr-5 border-r-2  items-center'>
            <span> Longitude </span>
            <span> {data?.coord?.lon.toFixed(2)} </span>
          </div>
          <div className='flex flex-col pr-5 border-r-2 items-center'>
            <span> Wind  </span>
            <span> {data?.wind?.speed} km/h </span>
          </div>
          <div className='flex flex-col pr-5 border-r-2 items-center'>
            <span> Max Temp  </span>
            <span> {tempFormatChanger(data?.main?.temp_max)} </span>
          </div>
          <div className='flex flex-col items-center'>
            <span> Min Temp </span>
            <span> {tempFormatChanger(data?.main?.temp_min)} </span>
          </div>
        </div>
         
        </div>
      </div>

    </div>
  )
}

export default Weather