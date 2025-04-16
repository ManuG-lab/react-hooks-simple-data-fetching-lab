// create your App component here
import React, { useState, useEffect } from "react";

function App() {
  const [dog, setDog] = useState(null);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        setDog(data.message);
      });
  }, []);
  

  if (!dog) return <p>Loading...</p>;

  return (
    <div>
    <img src={dog} alt="A Random Dog" />;
</div> 
  )
}  

export default App;