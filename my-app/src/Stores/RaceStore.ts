import { writable } from 'svelte/store';

interface Race {
    raceName: string;
    raceIcon: string;
    factionNames: string[];
    factionIcons: string[];
}

let race: Race = {raceName: "Dawi-Zharr", raceIcon: "https://via.placeholder.com/200", factionIcons: ["https://via.placeholder.com/20","https://via.placeholder.com/20"], factionNames: ["Metal Crushers","Drill masters"]}
export let races: Race[] = [];
races.push(race)
race = {raceName: "Dawi", raceIcon: "https://via.placeholder.com/200", factionIcons: ["https://via.placeholder.com/20","https://via.placeholder.com/20"], factionNames: ["Ironbrow","Zhuffbar"]}
races.push(race)