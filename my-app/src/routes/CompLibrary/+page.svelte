<script lang="ts">
	import BlueThingPage from "./BlueThingPage.svelte";
	import RedThingPage from "./RedThingPage.svelte";

	const options = [
		{ color: 'blue',  component: BlueThingPage},
		{ color: 'red',  component: RedThingPage},
	]

    let selected = options[0];
</script>
<h1>Component Library</h1>
<div class="row">
	<div id="CompList">
		<h2>Componet List</h2>
		<ul>
			{#each options as option}
			<li on:click={(event) => selected = option} >{option.color}</li>
			{/each}
		</ul> 
	</div>
	<div id="CompPage">
		<svelte:component this={selected.component}/>
	</div>
</div>
<style>
	* {
  		box-sizing: border-box;
	}	

	#CompList {
		border: 2px solid red;
		float: left;
		width: 20%;
		min-width: fit-content;
		padding: 10px;
	}

	#CompList h2{
		text-align: center;
		color: white;
		background-color: darkred;
	}

	#CompPage {
		border: 2px solid red;
		float: left;
		width: 80%;
		min-width: fit-content;
		padding: 10px;
	}

	#CompList li{
		font-size: x-large;
	}

	.row:after {
		content: "";
		display: table;
		clear: both;
	}	
</style>