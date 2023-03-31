import { races } from "../../Stores/RaceStore"

const getRaces = async () => {
    var response = await fetch('apiplace');
    var result = await response.json();
    
    races.push(result.raceName, result.raceIcon, result.factionNames, result.factionIcons)
}



