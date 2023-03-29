<script lang="ts">
	import BlueThing from "./BlueThing.svelte";
	import GreenThing from "./GreenThing.svelte";
	import RedThing from "./RedThing.svelte";

	const options = [
		{ color: 'red',   component: RedThing},
		{ color: 'green', component: GreenThing},
		{ color: 'blue',  component: BlueThing},
	]

    let selected = options[0];
</script>

<h1>Welcome to SvelteKit</h1>
<div>
    <select bind:value={selected}>
        {#each options as option}
            <option value={option}>{option.color}</option>
        {/each}
    </select>
    
    
</div>
<div>
    <svelte:component this={selected.component}/>
</div>