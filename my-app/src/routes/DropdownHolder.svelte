<script lang=ts>
  import Dropdown from './Dropdown.svelte';

  const options = [
    { value: 'apple', image: 'https://via.placeholder.com/20' },
    { value: 'banana', image: 'https://via.placeholder.com/20' },
    { value: 'orange', image: 'https://via.placeholder.com/20' },
  ]; //These are the factions

  let selectedOption = '';

  function handleOptionSelected(option: any) {
    selectedOption = option;
  }
</script>

<Dropdown
  optionNames = {options.map(o => o.value)}
  optionImages={options.map(o => o.image)}
  headerImage="https://via.placeholder.com/200"
  headerText="Fruit Selector"
  selected={selectedOption}
/>