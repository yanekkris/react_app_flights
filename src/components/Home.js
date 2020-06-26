import React, { useState, useEffect } from 'react';
import Flight from './Flight';

const url = 'https://api.skypicker.com/flights?fly_from=CZ&fly_to=VLC&date_from=08/08/2020&date_to=08/09/2020&partner=picky&limit=5'

function Home () {
    const [searchValue, setSearchValue] = useState([]);

    const [flights, setFlights] = useState([]);
    

    async function fetchData (url) {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        if (data) {
            setFlights(data.data);
          } else {
            return null;
          }

        // console.log(data.data[0].cityFrom, data.data[0].cityTo, data.data[0].price, data.data[0].dTime, data.data[0].fly_duration)
        // return data
    }

    useEffect(() => {
        fetchData(url);

    }, [])

    return (
        <div>
            <h1>Welcome</h1>
            <button>Button!</button>
            {flights.map((flight, index) => (
                <Flight key={index} 
                flight={cityFrom} 

                />, 
                console.log(flight)
            ))}
            
        </div>
    )
}

export default Home;