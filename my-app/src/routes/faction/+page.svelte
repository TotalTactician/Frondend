<script>
    import Dropdown from "../Dropdown.svelte";
    import DropdownHolder from "../DropdownHolder.svelte";
</script>


<h1>These are all the factions!</h1>
<a href="/units/greenskins">Greenskins</a>
<a href="/units/empire">Empire</a>
<DropdownHolder
factionNames = {["John", "James"]}
factionIcons = {["https://via.placeholder.com/200","https://via.placeholder.com/200"]}
raceName = "Others"
/>
<DropdownHolder/>
