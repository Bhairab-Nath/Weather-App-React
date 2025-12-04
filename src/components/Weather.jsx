import search_icon from '../assets/search.png'
import clear_icon from '../assets/clear.png'
import cloud_icon from '../assets/cloud.png'
import drizzle_icon from '../assets/drizzle.png'
import humidity_icon from '../assets/humidity.png'
import rain_icon from '../assets/rain.png'
import snow_icon from '../assets/snow.png'
import wind_icon from '../assets/wind.png'


const Weather = () => {
    return (
        <div className="h-[500px] w-[400px] p-6 my-[60px] bg-linear-to-l from-fuchsia-500 to-purple-600 rounded-md shadow-md ">
            <div className='flex items-center justify-center'>

                <input type="text" placeholder="Search..." className="border-2 border-white bg-white rounded-full px-4 py-2  mr-2 outline-none" />
                <img src={search_icon} alt="search-icon" className="h-8 rounded-full bg-white p-2 cursor-pointer " />

            </div>
            <div className="flex flex-col items-center mt-4 text-white">
                <img src={clear_icon} alt="" className='w-[150px] ' />
                <p className='text-[50px] mt-6 leading-none '>17C</p>
                <p className='text-[40px] '>Kathmandu</p>
            </div>

            <div className='flex gap-2 justify-between mt-10 text-white 
            text-[16px]'>
                <div className='flex items-center gap-4'>
                    <img src={humidity_icon} alt="" className='h-[30px]' />
                    <div>
                        <p>91 %</p>
                        <span>Humidity</span>
                    </div>
                </div>

                <div className='flex items-center gap-4'>
                    <img src={wind_icon} alt=""  className='h-[30px]'/>
                    <div>
                        <p>3.6 Km/h</p>
                        <span>Wind Speed</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Weather
