import React, { useState, useEffect } from "react";

const Flight = ({ flight }) => {
  const [flightInfo, setFlightInfo] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(flight.url);
      const data = await response.json();
      setFlightInfo(data);
    };
    fetchData();
  }, [flight]);
  console.log(flightInfo);
  return (
    <div style={{ display: "flex", margin: "8px" }}>
      {flightInfo && (
        <img src={flightInfo.sprites.back_default} alt={pokemon.alt} />
      )}
      <h2>{fligth.name}</h2>
    </div>
  );
};
export default Flight;