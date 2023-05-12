<script lang="ts">
	import BlueThing from "../(app)/BlueThing.svelte";
	import CompPage from "./CompPage.svelte";

	const implementation: String = "<BlueThing/>";
</script>

<CompPage title="Blue thing" Implimentation={implementation}><BlueThing/></CompPage>