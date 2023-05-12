<script>
    import Dropdown from "../Dropdown.svelte";
    import DropdownHolder from "../DropdownHolder.svelte";
    import { races } from "../../Stores/RaceStore";
</script>


<h1>These are all the factions!</h1>
<div class = dropdown-list>
  
  {#each races as race}
  <div class=drowdown>
    <DropdownHolder 
    raceName = {race.raceName}
    raceIcon = {race.raceIcon}
    factionNames = {race.factionNames}
    factionIcons = {race.factionIcons}
    />
  </div>
  {/each}
</div>

<style>
  .dropdown-list {
    display: flex;
    flex-wrap: wrap;
    max-width: 3000px;
  }
</style>

