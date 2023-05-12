import { races } from "../../Stores/RaceStore"
// const getRaces = async () => {
//     var response = await fetch('http://localhost:3500/GetAll');
//     var result = await response.json();

//     result.Races.forEach( (newRace: { name: string; icon: string; factions: [];}) => {

//         let factions: [] = newRace.factions;
//         let factionNames: string[] = [];
//         let factionIcons: string[] = [];
    
//         factions.forEach((faction: { name: string; icon: string; }) => {
//             factionNames.push(faction.name);
//             factionIcons.push(faction.icon);
//         });

//         races.update(races => {
//             races.push({raceName: newRace.name, raceIcon: newRace.icon, factionNames: factionNames, factionIcons: factionIcons})
//             return races;
//         })
//     })
// }