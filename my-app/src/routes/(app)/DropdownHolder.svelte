<script lang=ts>
  import Dropdown from './Dropdown.svelte';

  interface Faction {
    name: string;
    image: string;
  }
  
  let options: Faction[] = []; //These are the factions

  export let factionNames: string[] = ["bob", "steve"]
  export let factionIcons: string[] = ["https://via.placeholder.com/20","https://via.placeholder.com/20"]
  export let raceName = "Persons"
  export let raceIcon = "https://via.placeholder.com/200"

  for (let i = 0; i<factionNames.length; i++){
    let option = {name: factionNames[i], image: factionIcons[i]}
    options.push(option);
  }
  

  let selectedOption = '';

  function handleOptionSelected(option: any) {
    selectedOption = option;
  }
</script>

<Dropdown
  optionNames = {options.map(o => o.name)}
  optionImages={options.map(o => o.image)}
  headerImage = {raceIcon}
  headerText = {raceName}
  selected={selectedOption}
/>