<script lang=ts>
    export let title: String;
    export let Implimentation: String;
</script>

<h2>{title}</h2>
<hr>
<div id="Info">
    <h3>Options</h3>
    <hr>
    <p>none</p>
    <h3>example</h3>
    <hr>
    <div  id="CompSlot">
        <slot></slot>
    </div>
    <h3>Implimentation</h3>
    <hr>
    <pre>
        <code>{Implimentation}</code>
    </pre>
</div>

<style>
    #CompSlot {
        border: 2px dotted gray;
    }

    #Info {
        height: calc(100% - 50px);
        min-height: fit-content;
        overflow-y: auto;
    }

    h2 {
        padding: 2px 10px;
    }

    code {
        background-color: #424242;
        color: white;
        font-size: large;
        border: 1px solid #999;
        display: block;
        padding: 20px;
    }
</style>