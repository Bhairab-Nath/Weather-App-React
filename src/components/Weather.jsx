import search_icon from '../assets/search.png'
import clear_icon from '../assets/clear.png'
import cloud_icon from '../assets/cloud.png'
import drizzle_icon from '../assets/drizzle.png'
import humidity_icon from '../assets/humidity.png'
import rain_icon from '../assets/rain.png'
import snow_icon from '../assets/snow.png'
import wind_icon from '../assets/wind.png'
import { useEffect, useRef, useState } from 'react'


const Weather = () => {

    const inputRef = useRef()
    const [weatherData, setWeatherData] = useState(false)

    const icons = {
        "01d": clear_icon,
        "01n": clear_icon,
        "02d": cloud_icon,
        "02n": cloud_icon,
        "03d": cloud_icon,
        "03n": cloud_icon,
        "04d": drizzle_icon,
        "04n": drizzle_icon,
        "09d": rain_icon,
        "09n": rain_icon,
        "10d": rain_icon,
        "10n": rain_icon,
        "13d": snow_icon,
        "13n": snow_icon

    }

    const search = async (city) => {
        if (city === "") {
            alert("Provide city name!")
            return
        }
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_API_KEY}&units=metric`

            const response = await fetch(url)
            const data = await response.json()

            if(!response.ok){
                alert(data?.message)
                return
            }

            const icon = icons[data.weather[0].icon] || clear_icon
            setWeatherData({
                humidity: data.main.humidity,
                windSpeed: data.wind.speed,
                temperature: Math.floor(data.main.temp),
                location: data.name,
                icon: icon
            })

        } catch (error) {
            alert('Error Fetching Weather Data!')
        }
    }

    useEffect(() => {
        search("Kathmandu")
    }, [])

    return (
        <div className="h-[500px] w-[400px] p-6 my-[60px] bg-linear-to-l from-fuchsia-500 to-purple-600 rounded-md shadow-md ">
            <div className='flex items-center justify-center'>

                <input ref={inputRef} type="text" placeholder="Search..." className="border-2 border-white bg-white rounded-full px-4 py-2  mr-2 outline-none" />
                <img src={search_icon} alt="search-icon" className="h-8 rounded-full bg-white p-2 cursor-pointer " onClick={() => search(inputRef.current.value)} />

            </div>
            {weatherData ? <>
                <div className="flex flex-col items-center mt-4 text-white">
                    <img src={weatherData.icon} alt="" className='w-[150px] ' />
                    <p className='text-[50px] mt-6 leading-none '>{weatherData.temperature}°C</p>
                    <p className='text-[40px] '>{weatherData.location}</p>
                </div>

                <div className='flex gap-2 justify-between mt-10 text-white 
            text-[16px]'>
                    <div className='flex items-center gap-4'>
                        <img src={humidity_icon} alt="" className='h-[30px]' />
                        <div>
                            <p>{weatherData.humidity} %</p>
                            <span>Humidity</span>
                        </div>
                    </div>

                    <div className='flex items-center gap-4'>
                        <img src={wind_icon} alt="" className='h-[30px]' />
                        <div>
                            <p>{weatherData.windSpeed} meter/sec</p>
                            <span>Wind Speed</span>
                        </div>
                    </div>
                </div>
            </> : <> </>}

        </div>
    )
}

export default Weather
