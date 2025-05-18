import { useEffect, useState} from 'react'
import Axios from 'axios';
import Map from './components/Map.js'
import './App.css';

function App() {

  // Setting up the initital state variables
  const [ipDetails, setIpDetails] = useState([])
  const [lat, setLat] = useState(22.5726)
  const [lon, setLon] = useState(88.3832)

  // Fetching the API once the component is mounted
  useEffect(() => {
    Axios.get('http://ip-api.com/json/').then((res) => {
      setIpDetails(res.data)
      setLat(res.data.lat)
      setLon(res.data.lon)
    })
  }, [])

  return (
    <>
      <h1 className="heading">IP Address Finder</h1>
      <div className="App">
        <div className="left">
          <h4>What is my IPv4 address?</h4>
          <h1 id="ip">{ipDetails.query}</h1>
          <h4>Approximate location: </h4>

          <p>{ipDetails.city}, {ipDetails.regionName}, {ipDetails.country}</p>

          <h4>Internet Service Provider (ISP):</h4>

          <p>{ipDetails.org}</p>
        </div>
        <Map lat={lat} lon={lon} />
      </div>
      
    </>
  )
}

export default App;
