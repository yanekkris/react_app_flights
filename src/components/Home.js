import React, { useState, useEffect } from 'react';
import Flight from './Flight';
import Departure from '../plane.png';
import Arrival from '../flight.svg';

import { DateTime } from 'luxon';
import SearchBar from "./SearchBar";

const url = 'https://api.skypicker.com/flights'

<<<<<<< HEAD
function Home() {
    const [searchValue, setSearchValue] = useState([]);

    const [flights, setFlights] = useState([]);


    async function fetchData(url) {
        const response = await fetch(url)
=======
function Home () {
    const [searchValue, setSearchValue] = useState("PRG");

    const [flights, setFlights] = useState([]);


    const handleSearchClick = (e) => {
        console.log()
    }
    
    const handleChangeFrom = (e) => {
        const changeFrom = e.target.value
        console.log(typeof changeFrom);
    }

    const handleChangeTo = (e) => {
        const changeTo = e.target.value
    }
    
    async function fetchData (url) {
        const response = await fetch(url + '?fly_from=' + changeFrom + '&fly_to=' + changeTo + '&date_from=27/06/2020&date_to=30/06/2020&partner=picky&limit=5')
>>>>>>> e79b30d0537e679d3468008685b3313a1fb33eb9
        const data = await response.json()
        if (data) {
            setFlights(data.data);
        } else {
            return null;
          }
    }



    useEffect(() => {
        fetchData(url);

    }, [])



    return (
        <div>
<<<<<<< HEAD
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
=======
            <h1>Welcome</h1>


            <SearchBar
            searchValue={searchValue}
            handleSearchClick={handleSearchClick}
            handleChangeFrom={handleChangeFrom}
            handleChangeTo={handleChangeTo}
            />

>>>>>>> e79b30d0537e679d3468008685b3313a1fb33eb9

            </div>
<<<<<<< HEAD
=======
          ))
        ) : (
          <h1> Add search results here.</h1>
        )}

            
>>>>>>> e79b30d0537e679d3468008685b3313a1fb33eb9
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
