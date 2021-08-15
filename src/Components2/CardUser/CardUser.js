import React, { useState, useEffect } from "react";

const CardUser = () => {
  const [card, setcard] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    fetch(`http://localhost:4500/form/${user.email}`)
      .then((response) => response.json())
      .then((data) => setcard(data));
  }, []);

  return (
    <div>
     <ol>
      {card.map((card) => (
       
          <li>{card.companyname}</li>
       
      ))}
       </ol>
    </div>
  );
};

export default CardUser;
