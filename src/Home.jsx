import Weather from "./components/Weather"
import bg from "./assets/bg.svg"

const Home = () => {
    return (
        <div className="flex gap-4 bg-gray-100 " >
            <div className="bg-cover h-screen w-[700px]" style={{ backgroundImage: `url(${bg})` }}>
            </div>

            <Weather />
        </div>

    )
}

export default Home
