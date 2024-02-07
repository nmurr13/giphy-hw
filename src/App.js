import React, {useState} from "react";
import GifDisplay from "./components/GifDisplay";
import Button from './components/Button'
import "./App.css";

function App() {

const apiKey= "VPBOMNS6ylwJI70EaKpkgmHL4TRluXYf";
const [gif, setGif] = useState(null);

const getGif = async () => {
  const response = await fetch (
    `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
  );
  const data = await response.json();
  setGif(data);
}

  return (
    <div className="App">
      <h1> GIPHY:</h1>
      <GifDisplay gif= { gif }/>
      <Button onClick= { getGif } />
    </div>
  );
}

export default App;