<script lang="ts">
	import RedThing from "../(app)/RedThing.svelte";
	import CompPage from "./CompPage.svelte";

	const implementation: String = "<RedThing/>";
</script>

<CompPage title="Red thing" Implimentation={implementation}><RedThing/></CompPage>