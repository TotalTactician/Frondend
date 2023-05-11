import { writable } from 'svelte/store';

interface Race {
    raceName: string;
    raceIcon: string;
    factionNames: string[];
    factionIcons: string[];
}

export let races= writable<Race[]>([]);

const getRaces = async () => {
    try {
        var response = await fetch('http://127.0.0.1:3500/GetAll');
        var result = await response.json();
    }
    catch {
        return races
    }
    
    result.Races.forEach( (newRace: { name: string; icon: string; factions: [];}) => {

        let factions: [] = newRace.factions;
        let factionNames: string[] = [];
        let factionIcons: string[] = [];
    
        factions.forEach((faction: { name: string; icon: string; }) => {
            factionNames.push(faction.name);
            factionIcons.push(faction.icon);
        });

        races.update(races => {
            races.push({raceName: newRace.name, raceIcon: newRace.icon, factionNames: factionNames, factionIcons: factionIcons})
            return races;
        })
    })
    
}

getRaces();