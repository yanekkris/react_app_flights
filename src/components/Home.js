import React, { useState, useEffect } from 'react';
import Flight from './Flight';
import Departure from '../plane.png';
import Arrival from '../flight.svg';

import { DateTime } from 'luxon';

const url = 'https://api.skypicker.com/flights?fly_from=CZ&fly_to=VLC&date_from=08/08/2020&date_to=08/09/2020&partner=picky&limit=5'

function Home() {
    const [searchValue, setSearchValue] = useState([]);

    const [flights, setFlights] = useState([]);


    async function fetchData(url) {
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
            <h1 className="title">FF</h1>

            <div className="container">
                {flights ? (
                    flights.map((result, index) => (
                        <div className="container__item" key={index}>
                            <h2>{result.cityFrom} - {result.cityTo}</h2>
                            <div className="info">
                                <div className="flight_time">
                                    <img src={Departure} alt="departure" />
                                    <p>{DateTime.fromMillis(result.dTime * 1000).toFormat('hh:mm')}</p>
                                </div>
                                <div className="flight_time" >
                                    <img src={Arrival} alt="departure" />
                                    <p>{DateTime.fromMillis(result.aTime * 1000).toFormat('hh:mm')}</p>
                                </div>
                            </div>
                            <p>Price: {result.price}€</p>
                        </div>
                    ))
                ) : (
                        <h1> Add search results here.</h1>
                    )}

            </div>
        </div>
    )
}

export default Home;



// const SearchResults = ({ searchResults, handleNextPageClick }) => {
//     console.log(searchResults);
//     return (
//       <div className="searchResults-container">
//         {flights.length ? (
//           searchResults.map((result, index) => (
//             <h2 key={index}>{result.title}</h2>
//           ))
//         ) : (
//           <h1> Add search results here.</h1>
//         )}
//         {/**button to update current Offset and load more data */}
//         <button onClick={handleNextPageClick}>Next Page</button>
//       </div>
//     );
//   };

//   export default SearchResults;
