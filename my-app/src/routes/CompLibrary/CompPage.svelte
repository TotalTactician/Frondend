<script lang=ts>
    export let title: String;
    export let Implimentation: String;
</script>

<h2>{title}</h2>
<h3>Options</h3>
<p>none</p>
<h3>example</h3>
<div  id="CompSlot">
    <slot></slot>
</div>
<h3>Implimentation</h3>
<p>{Implimentation}</p>


<style>
    #CompSlot {
        border: 2px solid gray;
    }
</style>