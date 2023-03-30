<script lang=ts>
  export let optionNames: string[] = [];
  export let optionImages: string[] = [];
  export let selected = "";
  export let headerImage = "";
  export let headerText = "";

  let isOpen = false;

  function toggleDropdown() {
    isOpen = !isOpen;
  }

  function selectOption(option: string) {
    selected = option;
    headerText = "";
    toggleDropdown();
  }
</script>

<div class="dropdown-container">
  <div class="dropdown-header" on:click={toggleDropdown} style="background-image: url({headerImage})">
    <div class="dropdown-selected">{selected || headerText}</div>
    <span class="dropdown-icon">{isOpen ? "▲" : "▼"}</span>
  </div>
  {#if isOpen}
    <ul class="dropdown-list">
      {#each optionNames as option, i}
        <li class="dropdown-item" on:click={() => selectOption(option)}>
          {#if optionImages[i]}
            <img class="dropdown-item-image" src={optionImages[i]} alt="option image" />
          {/if}
          <span class="dropdown-item-text">{option}</span>
        </li>
      {/each}
    </ul>
  {/if}
</div>

<style>
  .dropdown-container {
    position: relative;
    width: 200px;
  }

  .dropdown-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border: 1px solid #ccc;
    cursor: pointer;
    background-size: cover;
    background-position: center;
    color: #fff;
    font-weight: bold;
    position: relative;
  }

  .dropdown-selected {
    position: relative;
  }

  .dropdown-icon {
    font-size: 10px;
    margin-left: 10px;
  }

  .dropdown-list {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 10;
    padding: 0;
    margin: 0;
    list-style: none;
    background-color: #fff;
    border: 1px solid #ccc;
  }

  .dropdown-item {
    padding: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  .dropdown-item-image {
    height: 20px;
    margin-right: 10px;
  }

  .dropdown-item-text {
    margin-right: 10px;
  }

  .dropdown-item:hover {
    background-color: #f0f0f0;
  }
</style>
