<script lang=ts>
    export let title: String;
    export let Implimentation: String;
</script>

<h2>{title}</h2>
<div id="Info">
    <h3>Options</h3>
    <p>none</p>
    <h3>example</h3>
    <div  id="CompSlot">
        <slot></slot>
    </div>
    <h3>Implimentation</h3>
    <p>{Implimentation}</p>
</div>

<style>
    #CompSlot {
        border: 2px solid gray;
    }

    #Info {
        height: calc(100% - 50px);
        min-height: fit-content;
        overflow-y: auto;
    }
</style>