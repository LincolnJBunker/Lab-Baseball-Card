import playerData from "./playerData.js"
import { useState } from "react";

function BaseballCard(props) {
  const [showPicture, setShowPicture] = useState(true)

  const changeCard = () => {
   setShowPicture(!showPicture)
  }
  if (showPicture) {
    return (
      <div className="card" onClick={changeCard}>
        <h2>{props.name}</h2>
        <img src={props.imgUrl} alt={props.name} />
      </div>
    );
  } else {

    
    let statsDisplay = Object.entries(props.stats).map(([statName, statValue]) =>
    <p key={statName}>
      {statName}: {statValue}
    </p>
  )
  //loop through props.stats
  //for every stat, add a <p> containing the stat name and value
  //to the statsDisplay array. 
  
  return (
    <div className="card" onClick={changeCard}>
      <h2>{props.name}</h2>
      <p>Team: {props.team}</p>
      <p>Position: {props.position}</p>
      {statsDisplay}
    </div>
  )
}
}

function App() {
  const cards = playerData.map((player) => (
  <BaseballCard
    name = {player.name}
    team = {player.team}
    position = {player.position}
    stats = {player.stats}
    imgUrl = {player.imgUrl}
    cardId = {player.cardId}
  />
  ));
  return <>{cards}</>;
}

export default App;
