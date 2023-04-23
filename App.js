import logo from './logo.svg';
import './App.css';
import React from 'react';
import HexInfo from './HexInfo';


function App() {
  const [colores, setColores] = React.useState()
  const [scheme, setScheme] = React.useState("triad")
  const [colorDiv, setColorDiv] = React.useState()
  const [hex, setHex] = React.useState([])
  const [start, setStart] = React.useState(false)
  

  function getColor() {
    setStart(prev => !prev)
    fetch(`https://www.thecolorapi.com/scheme?hex=${colores}&mode=${scheme}`)
      .then(res => res.json())
      .then(data => {
        setColorDiv(data.image.bare);
        console.log(data.colors[0].hex.value);
        setHex([data.colors[0].hex.value, data.colors[1].hex.value, data.colors[2].hex.value, data.colors[3].hex.value, data.colors[4].hex.value, ])
      })
  }

  function colorPicked(e){
   
    return(
      setColores(e.target.value.slice(1))
      
    )
    console.log(e.target.value)
  }

  function schemePicked(e){
    return(
      setScheme(e.target.value)
    )
    console.log(e.target.value)
  }

  const hexMapped = hex.map(h => {
    return <p id='hexP'>{h}</p>
  })

  return (
  <main>
    <div className="header">
      <input type="color" onChange={colorPicked} id="inputColor"></input>
      <select onChange={schemePicked} id="schemeSelector" >
            <option value="monochrome">Monochrome</option>
            <option value="monochrome-dark">Monochrome-dark</option>
            <option value="monochrome-light">Monochrome-light</option>
            <option value="analogic">Analogic</option>
            <option value="complement">Complement</option>
            <option value="analogic-complement">Analogic-complement</option>
            <option value="triad">Triad</option>
        </select>
      <button onClick={getColor}>Get color scheme</button>
    </div>
    <div>
      {start && <img id="colorImg" src={colorDiv}/>}
    </div>
    <div id="hexDiv">
      {hexMapped}
    </div>
  </main>
  );
}

export default App;
