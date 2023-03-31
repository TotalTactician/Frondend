<script>
    import Dropdown from "../Dropdown.svelte";
    import DropdownHolder from "../DropdownHolder.svelte";
    import { races } from "../../Stores/RaceStore";
</script>


<h1>These are all the factions!</h1>
<a href="/units/greenskins">Greenskins</a>
<a href="/units/empire">Empire</a>
{#each races as race}
  <DropdownHolder 
    raceName = {race.raceName}
    raceIcon = {race.raceIcon}
    factionNames = {race.factionNames}
    factionIcons = {race.factionIcons}
  />
{/each}
